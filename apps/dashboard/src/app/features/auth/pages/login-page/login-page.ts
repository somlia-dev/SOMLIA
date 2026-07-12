import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { APP_ENV } from '../../../../core/config/app-env.token';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  template: `
    <section class="auth-page" aria-labelledby="auth-login-title">
      <p class="auth-page__eyebrow">Dashboard Access</p>
      <h1 id="auth-login-title">Sign in to SOMLIA</h1>
      <p class="auth-page__summary">
        The dashboard now starts from a dedicated authentication page. Live Supabase auth is still blocked pending
        the approved session, redirect, RLS, and privacy rollout.
      </p>

      <div class="auth-page__grid">
        <div class="auth-page__panel">
          <h2>Planned auth boundary</h2>
          <ul>
            <li>Supabase Auth for identity and session tokens</li>
            <li>Custom backend for privileged dashboard operations</li>
            <li>Google Cloud integration reserved for later verification flows</li>
          </ul>
          <p class="auth-page__status">
            Auth feature flag: <strong>{{ authEnabled ? 'enabled' : 'disabled' }}</strong>
          </p>
        </div>

        <div class="auth-page__panel auth-page__panel--accent">
          <h2>Current access mode</h2>
          @if (authEnabled) {
            <p class="auth-page__panel-copy">
              Dashboard routes are protected. Users must complete the future auth flow before entering the app shell.
            </p>
            <div class="auth-page__actions">
              <button type="button" class="auth-page__button" disabled aria-disabled="true">
                Supabase sign-in coming soon
              </button>
              <button type="button" class="auth-page__button auth-page__button--secondary" disabled aria-disabled="true">
                Google sign-in planned
              </button>
            </div>
          } @else {
            <p class="auth-page__panel-copy">
              Live auth is not enabled in this environment yet. You can continue into the shell preview to validate
              layout, routes, and feature placeholders.
            </p>
            <div class="auth-page__actions">
              <a class="auth-page__button" routerLink="/dashboard/tasks">Continue to shell preview</a>
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
  protected readonly authEnabled = this.env.auth.enabled;
}
