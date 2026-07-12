import { Component } from '@angular/core';

import { FeaturePageShellComponent } from '../../../../shared/ui/feature-page-shell/feature-page-shell';
import { TASKS_PAGE_CONTENT } from '../../data/tasks-page-content';

@Component({
  selector: 'app-tasks-page',
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
export class TasksPage {
  protected readonly content = TASKS_PAGE_CONTENT;
}
