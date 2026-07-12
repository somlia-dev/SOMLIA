import { computed, inject, Injectable, signal } from '@angular/core';

import type { AuthSession } from '../models/auth-session.model';
import { SupabaseBrowserClientService } from './supabase-browser-client.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly supabaseBrowser = inject(SupabaseBrowserClientService);
  private readonly sessionState = signal<AuthSession | null>(null);

  readonly session = this.sessionState.asReadonly();
  readonly isAuthenticated = computed(() => this.sessionState() !== null);
  readonly isSupabaseConfigured = computed(() => this.supabaseBrowser.isConfigured());

  async signInWithEmail(_email: string): Promise<void> {
    if (!this.supabaseBrowser.isConfigured()) {
      throw new Error('Supabase publishable key is not configured for the dashboard environment.');
    }

    throw new Error('Dashboard auth is not connected yet. Supabase Auth wiring is pending architecture approval.');
  }

  async signInWithGoogle(): Promise<void> {
    throw new Error('Google sign-in is not connected yet.');
  }

  async signOut(): Promise<void> {
    const client = this.supabaseBrowser.getClient();
    if (client) {
      await client.auth.signOut();
    }

    this.sessionState.set(null);
  }
}
