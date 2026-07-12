import { Routes } from '@angular/router';

import { authGuard } from './core/auth/guards/auth.guard';
import { DashboardShellComponent } from './core/layout/dashboard-shell/dashboard-shell';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { FEEDBACK_ROUTES } from './features/feedback/feedback.routes';
import { LEARNING_ROUTES } from './features/learning/learning.routes';
import { PROOF_ROUTES } from './features/proof/proof.routes';
import { SETTINGS_ROUTES } from './features/settings/settings.routes';
import { TASKS_ROUTES } from './features/tasks/tasks.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  {
    path: 'dashboard',
    component: DashboardShellComponent,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tasks' },
      { path: 'tasks', children: TASKS_ROUTES },
      { path: 'learning', children: LEARNING_ROUTES },
      { path: 'feedback', children: FEEDBACK_ROUTES },
      { path: 'proof', children: PROOF_ROUTES },
      { path: 'settings', children: SETTINGS_ROUTES },
    ],
  },
  { path: '**', redirectTo: 'auth/login' },
];
