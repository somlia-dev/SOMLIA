import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { APP_ENV } from '../../../../core/config/app-env.token';
import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  template: `
    <section class="auth-page" aria-labelledby="auth-login-title">
      <p class="auth-page__eyebrow">Dashboard Access</p>
      <h1 id="auth-login-title">Sign in to SOMLIA</h1>
      <p class="auth-page__summary">
        Use your approved Google account to enter the dashboard. Supabase handles identity and session tokens for this
        pilot.
      </p>

      @if (errorMessage()) {
        <div class="auth-page__error" role="alert">{{ errorMessage() }}</div>
      }

      <div class="auth-page__grid">
        <div class="auth-page__panel">
          <h2>Sign in</h2>
          @if (canUseGoogle()) {
            <p class="auth-page__panel-copy">
              Google redirects through Supabase first, then returns to this dashboard at
              <strong>{{ callbackUrl }}</strong>.
            </p>
            <div class="auth-page__actions">
              <button
                type="button"
                class="auth-page__button"
                [disabled]="isSubmitting()"
                (click)="signInWithGoogle()"
              >
                {{ isSubmitting() ? 'Redirecting to Google...' : 'Continue with Google' }}
              </button>
            </div>
          } @else {
            <p class="auth-page__panel-copy">
              Google sign-in is unavailable because the dashboard Supabase publishable key is not configured in this
              environment.
            </p>
          }
        </div>

        <div class="auth-page__panel auth-page__panel--accent">
          <h2>Current access mode</h2>
          @if (authEnabled) {
            <p class="auth-page__panel-copy">
              Dashboard routes are protected. You must complete Google sign-in before entering the app shell.
            </p>
          } @else {
            <p class="auth-page__panel-copy">
              Auth is disabled in this environment. You can continue into the shell preview to validate layout and
              routes only.
            </p>
            <div class="auth-page__actions">
              <a class="auth-page__button auth-page__button--secondary" routerLink="/dashboard/tasks">
                Continue to shell preview
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private readonly env = inject(APP_ENV);
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);

  protected readonly authEnabled = this.env.auth.enabled;
  protected readonly callbackUrl = this.env.auth.callbackUrl;
  protected readonly isSubmitting = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  constructor() {
    const error = this.route.snapshot.queryParamMap.get('error');
    if (error === 'sign_in_failed') {
      this.errorMessage.set('Google sign-in did not complete. Check Supabase redirect URLs and try again.');
    }
  }

  protected canUseGoogle(): boolean {
    return this.env.google.enabled && this.auth.isSupabaseConfigured();
  }

  protected async signInWithGoogle(): Promise<void> {
    this.errorMessage.set(null);
    this.isSubmitting.set(true);

    try {
      await this.auth.signInWithGoogle();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Google sign-in failed.';
      this.errorMessage.set(message);
      this.isSubmitting.set(false);
    }
  }
}
