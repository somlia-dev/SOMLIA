import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-auth-callback-page',
  template: `
    <section class="auth-callback" aria-live="polite">
      <p class="auth-callback__eyebrow">Authentication</p>
      <h1>Completing sign-in</h1>
      <p>Please wait while SOMLIA finishes your Google sign-in.</p>
    </section>
  `,
  styles: `
    .auth-callback {
      max-width: 720px;
      margin: 0 auto;
      padding: 48px 24px;
      color: #111827;
    }

    .auth-callback__eyebrow {
      margin: 0 0 12px;
      color: #2563eb;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.13em;
      text-transform: uppercase;
    }

    .auth-callback h1,
    .auth-callback p {
      margin: 0;
    }

    .auth-callback h1 {
      margin-bottom: 12px;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.05;
    }

    .auth-callback p {
      color: #475569;
      line-height: 1.6;
    }
  `,
})
export class AuthCallbackPage implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  async ngOnInit(): Promise<void> {
    const hasSession = await this.auth.waitForSessionFromRedirect();

    if (hasSession) {
      await this.router.navigateByUrl(this.auth.getPostLoginPath());
      return;
    }

    await this.router.navigate(['/auth/login'], {
      queryParams: { error: 'sign_in_failed' },
    });
  }
}
