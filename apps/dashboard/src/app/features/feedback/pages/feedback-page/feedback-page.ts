import { Component } from '@angular/core';

import { FeaturePageShellComponent } from '../../../../shared/ui/feature-page-shell/feature-page-shell';
import { FEEDBACK_PAGE_CONTENT } from '../../data/feedback-page-content';

@Component({
  selector: 'app-feedback-page',
  imports: [FeaturePageShellComponent],
  template: `
    <app-feature-page-shell
      [eyebrow]="content.eyebrow"
      [heading]="content.heading"
      [summary]="content.summary"
      [emptyState]="content.emptyState"
      [checkpoints]="content.checkpoints"
    />
  `,
})
export class FeedbackPage {
  protected readonly content = FEEDBACK_PAGE_CONTENT;
}
