import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('Dashboard shell', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('redirects the dashboard app root to tasks', async () => {
    await router.navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();

    expect(router.url).toBe('/dashboard/tasks');
    expect(pageText()).toContain('Tasks / Projects');
  });

  it('renders navigation for every approved dashboard area', () => {
    const root = fixture.nativeElement as HTMLElement;
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-testid="dashboard-nav"] a')).map(
      (link) => ({ label: link.textContent?.trim(), href: link.getAttribute('href') }),
    );

    expect(links).toEqual([
      { label: 'Tasks / Projects', href: '/dashboard/tasks' },
      { label: 'Learning', href: '/dashboard/learning' },
      { label: 'Feedback / Review', href: '/dashboard/feedback' },
      { label: 'Profile / Proof', href: '/dashboard/proof' },
      { label: 'Settings', href: '/dashboard/settings' },
    ]);
  });

  it.each([
    ['/dashboard/tasks', 'Tasks / Projects', 'No active dashboard tasks yet.'],
    ['/dashboard/learning', 'Learning', 'No learning modules are available in this shell.'],
    ['/dashboard/feedback', 'Feedback / Review', 'No feedback requests or reviews are active in this shell.'],
    ['/dashboard/proof', 'Profile / Proof', 'No private proof cards exist in this shell.'],
    ['/dashboard/settings', 'Settings', 'No account or notification settings are connected in this shell.'],
  ])('renders the mock no-data state for %s', async (path, heading, emptyState) => {
    await router.navigateByUrl(path);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(pageText()).toContain(heading);
    expect(pageText()).toContain(emptyState);
    expect(pageText()).toContain('Shell preview only');
  });

  it('renders a mock task detail route without implying live data', async () => {
    await router.navigateByUrl('/dashboard/tasks/mock-brief-001');
    await fixture.whenStable();
    fixture.detectChanges();

    const text = pageText();

    expect(text).toContain('Task detail');
    expect(text).toContain('mock-brief-001');
    expect(text).toContain('Sample task detail placeholder');
    expect(text).toContain('No submission, review, payment, or proof record is created here.');
  });

  function pageText() {
    return (fixture.nativeElement as HTMLElement).textContent ?? '';
  }
});
