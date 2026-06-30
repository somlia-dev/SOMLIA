import { Routes } from '@angular/router';

import { DashboardPlaceholderPage, TaskDetailPage } from './dashboard-pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/tasks' },
  {
    path: 'dashboard',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tasks' },
      { path: 'tasks', component: DashboardPlaceholderPage, data: { page: 'tasks' } },
      { path: 'tasks/:taskId', component: TaskDetailPage },
      { path: 'learning', component: DashboardPlaceholderPage, data: { page: 'learning' } },
      { path: 'feedback', component: DashboardPlaceholderPage, data: { page: 'feedback' } },
      { path: 'proof', component: DashboardPlaceholderPage, data: { page: 'proof' } },
      { path: 'settings', component: DashboardPlaceholderPage, data: { page: 'settings' } },
    ],
  },
];
