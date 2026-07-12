import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { APP_ENV } from '../../config/app-env.token';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const env = inject(APP_ENV);
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!env.auth.enabled) {
    return true;
  }

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};
