import { Routes } from '@angular/router';

import { guestGuard } from '../../core/auth/guards/guest.guard';
import { AuthCallbackPage } from './pages/callback-page/auth-callback-page';
import { LoginPage } from './pages/login-page/login-page';

export const AUTH_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [guestGuard],
  },
  {
    path: 'callback',
    component: AuthCallbackPage,
  },
];
