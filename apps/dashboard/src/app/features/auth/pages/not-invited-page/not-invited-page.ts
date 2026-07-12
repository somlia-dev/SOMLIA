import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-invited-page',
  imports: [RouterLink],
  template: `
    <section class="auth-page" aria-labelledby="auth-not-invited-title">
      <p class="auth-page__eyebrow">Dashboard Access</p>
      <h1 id="auth-not-invited-title">Invite required</h1>
      <p class="auth-page__summary">
        Your Google sign-in succeeded, but this account is not on the approved SOMLIA dashboard invite list yet.
        Waitlist signup does not automatically grant dashboard access.
      </p>

      <div class="auth-page__grid">
        <div class="auth-page__panel">
          <h2>What happens next</h2>
          <p class="auth-page__panel-copy">
            SOMLIA dashboard beta remains invite-only. If you were approved for the early cohort, ask the founder to
            add your email to the dashboard invite list.
          </p>
          <div class="auth-page__actions">
            <a class="auth-page__button auth-page__button--secondary" routerLink="/auth/login">Back to sign in</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: '../login-page/login-page.scss',
})
export class NotInvitedPage {}
