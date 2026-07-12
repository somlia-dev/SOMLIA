import { Component } from '@angular/core';

import { FeaturePageShellComponent } from '../../../../shared/ui/feature-page-shell/feature-page-shell';
import { PROOF_PAGE_CONTENT } from '../../data/proof-page-content';

@Component({
  selector: 'app-proof-page',
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
export class ProofPage {
  protected readonly content = PROOF_PAGE_CONTENT;
}
