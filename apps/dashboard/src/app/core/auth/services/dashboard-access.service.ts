import { inject, Injectable } from '@angular/core';

import { APP_ENV } from '../../config/app-env.token';
import { AuthService } from './auth.service';

export interface DashboardAccessResult {
  allowed: boolean;
  role: string | null;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class DashboardAccessService {
  private readonly env = inject(APP_ENV);
  private readonly auth = inject(AuthService);

  isEnabled(): boolean {
    return this.env.auth.enabled && this.env.auth.inviteGateEnabled;
  }

  async checkCurrentUserAccess(): Promise<DashboardAccessResult> {
    if (!this.isEnabled()) {
      return { allowed: true, role: 'Contributor' };
    }

    const session = this.auth.session();
    if (!session) {
      return { allowed: false, role: null, message: 'No active session.' };
    }

    const response = await fetch(`${this.env.supabase.url}/functions/v1/dashboard-access-gate`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        apikey: this.env.supabase.publishableKey,
      },
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;
      return {
        allowed: false,
        role: null,
        message: payload?.message ?? 'Dashboard access check failed.',
      };
    }

    const payload = (await response.json()) as {
      allowed?: boolean;
      role?: string | null;
      message?: string;
    };

    return {
      allowed: Boolean(payload.allowed),
      role: payload.role ?? null,
      message: payload.message,
    };
  }
}
