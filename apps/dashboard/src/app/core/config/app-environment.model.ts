export interface AppEnvironment {
  production: boolean;
  appName: string;
  appUrl: string;
  apiBaseUrl: string;
  supabase: {
    url: string;
    publishableKey: string;
  };
  auth: {
    enabled: boolean;
    redirectUrl: string;
    callbackUrl: string;
  };
  google: {
    enabled: boolean;
  };
  enableDebugTools: boolean;
}
