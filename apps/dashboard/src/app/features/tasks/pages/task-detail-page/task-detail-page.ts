import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail-page',
  template: `
    <section class="dashboard-page" aria-labelledby="task-detail-title">
      <p class="dashboard-page__eyebrow">Tasks / Projects</p>
      <div class="dashboard-page__heading-row">
        <h1 id="task-detail-title">Task detail</h1>
        <span>Shell preview only</span>
      </div>
      <p class="dashboard-page__summary">
        Sample task detail placeholder for <strong>{{ taskId }}</strong>.
      </p>

      <div class="dashboard-empty-state">
        <h2>Sample task detail placeholder</h2>
        <p>
          No submission, review, payment, or proof record is created here. This route only confirms the approved
          dashboard path shape for future implementation work.
        </p>
      </div>
    </section>
  `,
  styleUrl: './task-detail-page.scss',
})
export class TaskDetailPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly taskId = this.route.snapshot.paramMap.get('taskId') ?? 'sample-task';
}
