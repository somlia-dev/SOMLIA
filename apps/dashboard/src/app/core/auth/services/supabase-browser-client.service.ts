import { inject, Injectable } from '@angular/core';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { APP_ENV } from '../../config/app-env.token';

@Injectable({ providedIn: 'root' })
export class SupabaseBrowserClientService {
  private readonly env = inject(APP_ENV);
  private client: SupabaseClient | null = null;

  getClient(): SupabaseClient | null {
    const { url, publishableKey } = this.env.supabase;

    if (!url || !publishableKey) {
      return null;
    }

    this.client ??= createClient(url, publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
        flowType: 'pkce',
      },
    });

    return this.client;
  }

  isConfigured(): boolean {
    return Boolean(this.env.supabase.url && this.env.supabase.publishableKey);
  }
}
