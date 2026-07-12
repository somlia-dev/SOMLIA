import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { APP_ENV } from '../../config/app-env.token';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = async () => {
  const env = inject(APP_ENV);
  const auth = inject(AuthService);
  const router = inject(Router);

  await auth.whenReady();

  if (!env.auth.enabled || !auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree([auth.getPostLoginPath()]);
};
