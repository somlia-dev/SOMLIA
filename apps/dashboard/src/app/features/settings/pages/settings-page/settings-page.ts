import { Component } from '@angular/core';

import { FeaturePageShellComponent } from '../../../../shared/ui/feature-page-shell/feature-page-shell';
import { SETTINGS_PAGE_CONTENT } from '../../data/settings-page-content';

@Component({
  selector: 'app-settings-page',
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
export class SettingsPage {
  protected readonly content = SETTINGS_PAGE_CONTENT;
}
