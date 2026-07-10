import { InjectionToken, Provider } from '@angular/core';

import { environment } from '../../../environments/environment';

import type { AppEnvironment } from './app-environment.model';

export const APP_ENV = new InjectionToken<AppEnvironment>('APP_ENV');

export function provideAppEnv(): Provider {
  return {
    provide: APP_ENV,
    useValue: environment,
  };
}
