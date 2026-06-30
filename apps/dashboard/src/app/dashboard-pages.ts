import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type DashboardPage = {
  eyebrow: string;
  heading: string;
  summary: string;
  emptyState: string;
  checkpoints: string[];
};

const pages: Record<string, DashboardPage> = {
  tasks: {
    eyebrow: 'Tasks / Projects',
    heading: 'Tasks / Projects',
    summary: 'A future workspace for practical tasks, project progress, and revision context.',
    emptyState: 'No active dashboard tasks yet.',
    checkpoints: ['Mock shell only', 'No task records', 'No submissions or proof records'],
  },
  learning: {
    eyebrow: 'Learning',
    heading: 'Learning',
    summary: 'A future workspace for learning modules connected to practical work.',
    emptyState: 'No learning modules are available in this shell.',
    checkpoints: ['Mock shell only', 'No module progress', 'No certificates or credentials'],
  },
  feedback: {
    eyebrow: 'Feedback / Review',
    heading: 'Feedback / Review',
    summary: 'A future workspace for assigned feedback requests and structured review context.',
    emptyState: 'No feedback requests or reviews are active in this shell.',
    checkpoints: ['Mock shell only', 'No review assignments', 'No review-derived state changes'],
  },
  proof: {
    eyebrow: 'Profile / Proof',
    heading: 'Profile / Proof',
    summary: 'A future private workspace for proof cards and Project Proof history.',
    emptyState: 'No private proof cards exist in this shell.',
    checkpoints: ['Mock shell only', 'No public profile', 'No Verified label or numeric score'],
  },
  settings: {
    eyebrow: 'Settings',
    heading: 'Settings',
    summary: 'A future workspace for basic account, privacy, notification, and support settings.',
    emptyState: 'No account or notification settings are connected in this shell.',
    checkpoints: ['Mock shell only', 'No authentication', 'No dashboard environment secrets'],
  },
};

@Component({
  selector: 'app-dashboard-placeholder-page',
  template: `
    <section class="dashboard-page" aria-labelledby="dashboard-page-title">
      <p class="dashboard-page__eyebrow">{{ page.eyebrow }}</p>
      <div class="dashboard-page__heading-row">
        <h1 id="dashboard-page-title">{{ page.heading }}</h1>
        <span>Shell preview only</span>
      </div>
      <p class="dashboard-page__summary">{{ page.summary }}</p>

      <div class="dashboard-empty-state">
        <h2>{{ page.emptyState }}</h2>
        <p>
          This Angular dashboard route is a static, no-data placeholder. It does not connect to authentication,
          Supabase dashboard tables, private Project Proof data, feedback workflows, marketplace flows, or payments.
        </p>
      </div>

      <ul class="dashboard-checkpoints" aria-label="Current shell boundaries">
        @for (checkpoint of page.checkpoints; track checkpoint) {
          <li>{{ checkpoint }}</li>
        }
      </ul>
    </section>
  `,
  styleUrl: './dashboard-pages.scss',
})
export class DashboardPlaceholderPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly page = pages[this.route.snapshot.data['page'] as string] ?? pages['tasks'];
}

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
  styleUrl: './dashboard-pages.scss',
})
export class TaskDetailPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly taskId = this.route.snapshot.paramMap.get('taskId') ?? 'sample-task';
}
