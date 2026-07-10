export type FeaturePageContent = {
  eyebrow: string;
  heading: string;
  summary: string;
  emptyState: string;
  checkpoints: string[];
};

export const SHELL_BOUNDARY_COPY =
  'This Angular dashboard route is a static, no-data placeholder. It does not connect to authentication, Supabase dashboard tables, private Project Proof data, feedback workflows, marketplace flows, or payments.';
