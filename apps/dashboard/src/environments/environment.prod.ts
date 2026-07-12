import type { AppEnvironment } from '../app/core/config/app-environment.model';

export const environment: AppEnvironment = {
  production: true,
  appName: 'SOMLIA Dashboard',
  appUrl: 'https://app.somlia.com',
  apiBaseUrl: 'https://api.somlia.com',
  supabase: {
    url: 'https://qufrbaxgiknacfsjfqoy.supabase.co',
    publishableKey: '',
  },
  auth: {
    enabled: false,
    redirectUrl: 'https://app.somlia.com/dashboard/tasks',
  },
  google: {
    enabled: false,
  },
  enableDebugTools: false,
};
