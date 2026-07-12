import type { AppEnvironment } from '../app/core/config/app-environment.model';

export const environment: AppEnvironment = {
  production: false,
  appName: 'SOMLIA Dashboard',
  appUrl: 'http://localhost:4200',
  apiBaseUrl: 'http://localhost:3000/api',
  supabase: {
    url: 'https://qufrbaxgiknacfsjfqoy.supabase.co',
    publishableKey: '',
  },
  auth: {
    enabled: false,
    redirectUrl: 'http://localhost:4200/dashboard/tasks',
  },
  google: {
    enabled: false,
  },
  enableDebugTools: true,
};
