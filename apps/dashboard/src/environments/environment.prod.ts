import type { AppEnvironment } from '../app/core/config/app-environment.model';
import { generatedDashboardEnv } from './environment.generated';

export const environment: AppEnvironment = {
  production: true,
  appName: 'SOMLIA Dashboard',
  appUrl: 'https://app.somlia.com',
  apiBaseUrl: 'https://api.somlia.com',
  supabase: {
    url: generatedDashboardEnv.supabase.url,
    publishableKey: generatedDashboardEnv.supabase.publishableKey,
  },
  auth: {
    enabled: generatedDashboardEnv.auth.enabled,
    redirectUrl: generatedDashboardEnv.auth.redirectUrl,
    callbackUrl: generatedDashboardEnv.auth.callbackUrl,
  },
  google: {
    enabled: generatedDashboardEnv.google.enabled,
  },
  enableDebugTools: false,
};
