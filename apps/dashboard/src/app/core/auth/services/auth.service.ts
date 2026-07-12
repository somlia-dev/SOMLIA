import { computed, inject, Injectable, signal } from '@angular/core';
import type { Session } from '@supabase/supabase-js';

import { APP_ENV } from '../../config/app-env.token';
import type { AuthSession } from '../models/auth-session.model';
import { SupabaseBrowserClientService } from './supabase-browser-client.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly env = inject(APP_ENV);
  private readonly supabaseBrowser = inject(SupabaseBrowserClientService);
  private readonly sessionState = signal<AuthSession | null>(null);
  private readonly readyState = signal(false);
  private initPromise: Promise<void> | null = null;

  readonly session = this.sessionState.asReadonly();
  readonly isAuthenticated = computed(() => this.sessionState() !== null);
  readonly isSupabaseConfigured = computed(() => this.supabaseBrowser.isConfigured());
  readonly isReady = computed(() => this.readyState());
  readonly userEmail = computed(() => this.sessionState()?.user.email ?? null);

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
      return;
    }

    this.sessionState.set({
      user: {
        id: session.user.id,
        email: session.user.email ?? '',
      },
      accessToken: session.access_token,
    });
  }
}
