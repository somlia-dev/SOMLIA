import { Routes } from '@angular/router';

import { guestGuard } from '../../core/auth/guards/guest.guard';
import { LoginPage } from './pages/login-page/login-page';

export const AUTH_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [guestGuard],
  },
];
