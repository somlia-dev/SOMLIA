import { computed, inject, Injectable, signal } from '@angular/core';
import type { Session } from '@supabase/supabase-js';

import { APP_ENV } from '../../config/app-env.token';
import type { AuthSession } from '../models/auth-session.model';
import { DashboardAccessService } from './dashboard-access.service';
import { SupabaseBrowserClientService } from './supabase-browser-client.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly env = inject(APP_ENV);
  private readonly supabaseBrowser = inject(SupabaseBrowserClientService);
  private readonly dashboardAccess = inject(DashboardAccessService);
  private readonly sessionState = signal<AuthSession | null>(null);
  private readonly accessApprovedState = signal<boolean | null>(null);
  private readonly readyState = signal(false);
  private initPromise: Promise<void> | null = null;

  readonly session = this.sessionState.asReadonly();
  readonly isAuthenticated = computed(() => this.sessionState() !== null);
  readonly isAccessApproved = computed(() => this.accessApprovedState() === true);
  readonly isSupabaseConfigured = computed(() => this.supabaseBrowser.isConfigured());
  readonly isReady = computed(() => this.readyState());
  readonly userEmail = computed(() => this.sessionState()?.user.email ?? null);
  readonly dashboardRole = computed(() => (this.isAccessApproved() ? 'Contributor' : null));

  initialize(): Promise<void> {
    this.initPromise ??= this.bootstrapSession();
    return this.initPromise;
  }

  whenReady(): Promise<void> {
    return this.initialize();
  }

  getPostLoginPath(): string {
    try {
      return new URL(this.env.auth.redirectUrl).pathname;
    } catch {
      return '/dashboard/tasks';
    }
  }

  async signInWithEmail(_email: string): Promise<void> {
    if (!this.supabaseBrowser.isConfigured()) {
      throw new Error('Supabase publishable key is not configured for the dashboard environment.');
    }

    throw new Error('Email sign-in is not wired yet. Use Google sign-in for the current pilot.');
  }

  async signInWithGoogle(): Promise<void> {
    const client = this.supabaseBrowser.getClient();
    if (!client) {
      throw new Error('Supabase publishable key is not configured for the dashboard environment.');
    }

    const { error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: this.env.auth.callbackUrl,
      },
    });

    if (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    const client = this.supabaseBrowser.getClient();
    if (client) {
      await client.auth.signOut();
    }

    this.sessionState.set(null);
    this.accessApprovedState.set(null);
  }

  async ensureDashboardAccess(): Promise<boolean> {
    if (!this.dashboardAccess.isEnabled()) {
      this.accessApprovedState.set(true);
      return true;
    }

    if (!this.isAuthenticated()) {
      this.accessApprovedState.set(null);
      return false;
    }

    const session = this.sessionState();
    if (!session) {
      this.accessApprovedState.set(null);
      return false;
    }

    if (this.accessApprovedState() === true) {
      return true;
    }

    const result = await this.dashboardAccess.checkAccess(session.accessToken);
    this.accessApprovedState.set(result.allowed);

    if (!result.allowed) {
      await this.signOut();
      return false;
    }

    return true;
  }

  async waitForSessionFromRedirect(timeoutMs = 8000): Promise<boolean> {
    await this.initialize();

    if (this.isAuthenticated()) {
      return true;
    }

    const client = this.supabaseBrowser.getClient();
    if (!client) {
      return false;
    }

    return new Promise((resolve) => {
      let settled = false;

      const finish = (value: boolean) => {
        if (settled) {
          return;
        }

        settled = true;
        clearTimeout(timer);
        subscription.unsubscribe();
        resolve(value);
      };

      const timer = setTimeout(async () => {
        const { data } = await client.auth.getSession();
        this.applySession(data.session);
        finish(this.isAuthenticated());
      }, timeoutMs);

      const {
        data: { subscription },
      } = client.auth.onAuthStateChange((_event, session) => {
        this.applySession(session);
        if (session) {
          finish(true);
        }
      });
    });
  }

  async completeOAuthCallback(): Promise<{ ok: boolean; error?: string }> {
    await this.initialize();

    if (this.isAuthenticated()) {
      this.clearOAuthParamsFromUrl();
      return { ok: true };
    }

    const client = this.supabaseBrowser.getClient();
    if (!client) {
      return { ok: false, error: 'Supabase publishable key is not configured for the dashboard environment.' };
    }

    const currentUrl = new URL(window.location.href);
    const oauthError = this.readOAuthCallbackError(currentUrl);
    if (oauthError) {
      return { ok: false, error: oauthError };
    }

    const code = currentUrl.searchParams.get('code');
    if (code) {
      const { data, error } = await client.auth.exchangeCodeForSession(code);
      if (error) {
        console.error('OAuth code exchange failed', error);
        return { ok: false, error: error.message };
      }

      this.applySession(data.session);
      this.clearOAuthParamsFromUrl();
      return { ok: true };
    }

    if (window.location.hash.includes('access_token=')) {
      const { data, error } = await client.auth.getSession();
      if (error) {
        console.error('OAuth hash session restore failed', error);
        return { ok: false, error: error.message };
      }

      this.applySession(data.session);
      if (this.isAuthenticated()) {
        this.clearOAuthParamsFromUrl();
        return { ok: true };
      }
    }

    const hasSession = await this.waitForSessionFromRedirect(3000);
    if (hasSession) {
      this.clearOAuthParamsFromUrl();
      return { ok: true };
    }

    return {
      ok: false,
      error:
        'Session was not restored after Google sign-in. Confirm Supabase Redirect URLs include the dashboard callback URL.',
    };
  }

  private readOAuthCallbackError(currentUrl: URL): string | null {
    const queryError =
      currentUrl.searchParams.get('error_description') ?? currentUrl.searchParams.get('error');
    if (queryError) {
      return decodeURIComponent(queryError.replace(/\+/g, ' '));
    }

    const hash = currentUrl.hash.startsWith('#') ? currentUrl.hash.slice(1) : currentUrl.hash;
    if (!hash) {
      return null;
    }

    const hashParams = new URLSearchParams(hash);
    const hashError = hashParams.get('error_description') ?? hashParams.get('error');
    if (!hashError) {
      return null;
    }

    return decodeURIComponent(hashError.replace(/\+/g, ' '));
  }

  private clearOAuthParamsFromUrl(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const currentUrl = new URL(window.location.href);
    if (!currentUrl.search && !currentUrl.hash.includes('access_token=')) {
      return;
    }

    window.history.replaceState(window.history.state, '', currentUrl.pathname);
  }

  private async bootstrapSession(): Promise<void> {
    const client = this.supabaseBrowser.getClient();

    if (!client) {
      this.readyState.set(true);
      return;
    }

    const { data, error } = await client.auth.getSession();
    if (error) {
      console.error('Failed to restore Supabase session', error);
    }

    this.applySession(data.session);

    client.auth.onAuthStateChange((_event, session) => {
      this.applySession(session);
    });

    this.readyState.set(true);
  }

  private applySession(session: Session | null): void {
    if (!session?.user) {
      this.sessionState.set(null);
      this.accessApprovedState.set(null);
      return;
    }

    this.accessApprovedState.set(null);
    this.sessionState.set({
      user: {
        id: session.user.id,
        email: session.user.email ?? '',
      },
      accessToken: session.access_token,
    });
  }
}
