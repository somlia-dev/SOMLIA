import { Routes } from '@angular/router';

import { LearningPage } from './pages/learning-page/learning-page';

export const LEARNING_ROUTES: Routes = [{ path: '', pathMatch: 'full', component: LearningPage }];
