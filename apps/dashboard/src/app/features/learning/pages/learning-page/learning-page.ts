import { Component } from '@angular/core';

import { FeaturePageShellComponent } from '../../../../shared/ui/feature-page-shell/feature-page-shell';
import { LEARNING_PAGE_CONTENT } from '../../data/learning-page-content';

@Component({
  selector: 'app-learning-page',
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
export class LearningPage {
  protected readonly content = LEARNING_PAGE_CONTENT;
}
