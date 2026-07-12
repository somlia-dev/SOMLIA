import { Routes } from '@angular/router';

import { FeedbackPage } from './pages/feedback-page/feedback-page';

export const FEEDBACK_ROUTES: Routes = [{ path: '', pathMatch: 'full', component: FeedbackPage }];
