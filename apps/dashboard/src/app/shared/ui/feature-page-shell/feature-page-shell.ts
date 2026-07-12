import { Component, input } from '@angular/core';

import { SHELL_BOUNDARY_COPY } from '../../types/feature-page.model';

@Component({
  selector: 'app-feature-page-shell',
  template: `
    <section class="dashboard-page" aria-labelledby="dashboard-page-title">
      <p class="dashboard-page__eyebrow">{{ eyebrow() }}</p>
      <div class="dashboard-page__heading-row">
        <h1 id="dashboard-page-title">{{ heading() }}</h1>
        <span>Shell preview only</span>
      </div>
      <p class="dashboard-page__summary">{{ summary() }}</p>

      <div class="dashboard-empty-state">
        <h2>{{ emptyState() }}</h2>
        <p>{{ boundaryCopy() }}</p>
      </div>

      <ul class="dashboard-checkpoints" aria-label="Current shell boundaries">
        @for (checkpoint of checkpoints(); track checkpoint) {
          <li>{{ checkpoint }}</li>
        }
      </ul>
    </section>
  `,
  styleUrl: './feature-page-shell.scss',
})
export class FeaturePageShellComponent {
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly summary = input.required<string>();
  readonly emptyState = input.required<string>();
  readonly checkpoints = input.required<string[]>();
  readonly boundaryCopy = input(SHELL_BOUNDARY_COPY);
}
