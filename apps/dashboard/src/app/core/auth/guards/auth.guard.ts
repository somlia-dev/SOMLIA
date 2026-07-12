import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { APP_ENV } from '../../config/app-env.token';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async () => {
  const env = inject(APP_ENV);
  const auth = inject(AuthService);
  const router = inject(Router);

  await auth.whenReady();

  if (!env.auth.enabled) {
    return true;
  }

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/auth/login']);
  }

  const allowed = await auth.ensureDashboardAccess();
  if (!allowed) {
    return router.createUrlTree(['/auth/not-invited']);
  }

  return true;
};
