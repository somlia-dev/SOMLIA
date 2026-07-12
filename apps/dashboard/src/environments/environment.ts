import type { AppEnvironment } from '../app/core/config/app-environment.model';
import { generatedDashboardEnv } from './environment.generated';

export const environment: AppEnvironment = {
  production: false,
  appName: 'SOMLIA Dashboard',
  appUrl: 'http://localhost:4200',
  apiBaseUrl: 'http://localhost:3000/api',
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
  enableDebugTools: true,
};
