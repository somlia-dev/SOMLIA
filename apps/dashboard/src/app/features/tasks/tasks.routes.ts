import { Routes } from '@angular/router';

import { TaskDetailPage } from './pages/task-detail-page/task-detail-page';
import { TasksPage } from './pages/tasks-page/tasks-page';

export const TASKS_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: TasksPage },
  { path: ':taskId', component: TaskDetailPage },
];
