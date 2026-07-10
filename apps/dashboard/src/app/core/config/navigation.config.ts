export type DashboardNavItem = {
  label: string;
  path: string;
};

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  { label: 'Tasks / Projects', path: '/dashboard/tasks' },
  { label: 'Learning', path: '/dashboard/learning' },
  { label: 'Feedback / Review', path: '/dashboard/feedback' },
  { label: 'Profile / Proof', path: '/dashboard/proof' },
  { label: 'Settings', path: '/dashboard/settings' },
];
