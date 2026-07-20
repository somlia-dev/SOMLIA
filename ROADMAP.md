# SOMLIA Roadmap

Source of truth: `PROJECT_BIBLE.md` and `AGENTS.md`.

This roadmap is execution-focused. It does not change SOMLIA's strategy: SOMLIA remains a proof-of-progress / proof-of-work network where users learn practical skills, apply them through real projects, build proof profiles, and later unlock company briefs or paid opportunities after demonstrated capability.

## Current Sprint

Goal: stabilize the authenticated Dashboard MVP foundation and prepare the first private product-data implementation without restarting marketing validation.

- Verify SOM-65 production activation separately from its merge: apply/confirm `dashboard_invites`, deploy `dashboard-access-gate`, enable the Vercel gate flag, provision approved pilot emails, and test invited plus non-invited accounts.
- Confirm the dashboard privacy notice and account-data lifecycle work required before expanding beyond Supabase Auth identity.
- Define the Contributor/Admin/Support access matrix and RLS tests for the first private dashboard tables.
- Choose the first real Dashboard MVP implementation slice and create a dedicated owner-routed Linear issue.
- Keep the landing waitlist and Loops flow operational as maintenance, not as an active marketing-validation sprint.
- Run `npm run test:all` and `npm run build:all` before dashboard handoff.

## Next Sprint

Goal: move from authenticated shell to one safe, private, end-to-end MVP workflow.

- Define the first practical skill track.
- Design the first project/challenge format around a brief, submission, review rubric, revision loop, and Project Proof (SOM-21; conceptually unblocked).
- Define a seeded/manual pilot-data plan before collecting real contributor proof data.
- Implement only the accepted first slice after its schema, RLS, privacy, state-transition, and verification requirements are approved.
- Keep new marketing and user-validation execution deferred until the MVP can be demonstrated meaningfully.

## Backlog

- Add role-specific landing sections or separate waitlist paths for learners, companies, and partners.
- Add a dedicated `/companies` page.
- Add sample proof profile detail view.
- Add sample paid assignment flow.
- Add conversion analytics for CTA clicks and waitlist roles.
- Add dashboard profile/account records after privacy and RLS gates are accepted.
- Add live proof profiles.
- Add project submission and review workflow.
- Add reviewer reputation and feedback quality signals.
- Add company brief intake and validation.
- Add admin dashboard or waitlist export workflow.
- Add payment flow once paid assignments begin.
- Add terms of service, payment terms, community guidelines, and reviewer conduct policy.
- Add data deletion/export processes.
- Add abuse reporting and moderation workflow.
- Add AI feedback support, AI review summaries, AI proof profile summaries, AI matching, and AI quality checks.
- Replace dashboard placeholder surfaces with approved private-data workflows one dedicated issue at a time.
- Add external community links as the first dashboard community bridge if needed; defer native community chat and voice.

## Completed

- SOM-70 simplified and modernized the public landing page into the approved seven-part flow, self-hosted the official Mozilla Text v1.00 variable WOFF2 with OFL/provenance/integrity verification, restored the SOMLIA Blue opposite-direction transform-only hero waves with reduced-motion support, and preserved the waitlist, company CTA, routes, metadata, and current-stage opportunity guardrails. PR #14 was merged and the matching Vercel Production deployment was verified.
- SOMLIA brand is active; legacy LERN/LERNI assets remain but are not the active brand.
- Landing page exists with proof-of-progress positioning.
- Routes exist for `/`, `/roadmap`, and `/privacy-policy`.
- Vercel rewrites support direct route visits, including trailing-slash variants.
- Waitlist form collects name, email, role, and optional message.
- Supabase waitlist table is `public."Whitelist"`.
- RLS allows anonymous inserts only; public reads are not enabled.
- Duplicate email handling exists through the database unique constraint and friendly UI error.
- Supabase waitlist helper normalizes submissions.
- Loops Edge Function forwards waitlist insert events server-side.
- Vercel Analytics loads lazily after initial load.
- Tests cover routing, waitlist form behavior, Supabase insert normalization, duplicate handling, and missing config.
- Privacy policy is embedded in `src/App.tsx` and names Supabase, Loops, and Vercel Analytics.
- Project Bible exists and contains consolidated decisions, open questions, and decision log.
- Linear projects, labels, and operating workflow are established for SOMLIA cross-chat operations, with Operations/Admin owning routing, blockers, handoffs, and status hygiene.
- Vercel Production and Preview env vars are configured for `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_SUPABASE_WAITLIST_TABLE`.
- Company-facing `Share a company task` CTA reuses the existing waitlist, preselects `Company`, focuses the optional message textarea, shows company-specific guidance and early-pilot success copy, and preserves the existing submit and privacy contracts.
- Route-aware metadata covers `/`, roadmap variants, and privacy-policy variants with route-specific titles, descriptions, canonicals, and robots behavior; unknown paths retain global defaults, global Open Graph/Twitter tags remain unchanged, and the client-side SPA limitation is accepted.
- Product defined `Project Proof` as the first proof artifact: one structured, private-by-default evidence record for one contributor's attempt, with all revisions, provenance-labeled outcomes, descriptive credibility states, and no implied implementation, automatic opportunity unlock, verification, marketplace, or payment behavior.
- Product defined Dashboard MVP scope and information architecture (SOM-52): a separate Angular learner/contributor workspace centered on Tasks / Projects, with Learning, Feedback / Review, Profile / Proof, and Settings connected to practical work, feedback, revisions, and Project Proof history.
- Node.js version policy is pinned for Dashboard MVP architecture (SOM-57): local development and CI use Node.js `24.18.0`, `package.json` accepts Node `>=24.15.0 <25`, GitHub Actions reads `.nvmrc`, and the Angular dashboard uses Angular `22.0.x` while the React/Vite landing app remains unchanged.
- Dashboard MVP technical architecture and repo/deployment plan are approved (SOM-53): the repo is an npm-workspace monorepo, the React/Vite landing app stays at repo root for `somlia.com`, Angular lives at `apps/dashboard`, root `supabase/` is the backend boundary, and a separate Vercel project serves `app.somlia.com`.
- Dashboard MVP auth, roles, RLS, and privacy/security requirements are defined (SOM-54): access starts as a waitlist-approved invite-only beta using Supabase Auth as the accepted provider assumption; the only external MVP role is Contributor; Reviewer, Admin, and Support are internal/privileged roles; dashboard data is private by default and separate from `public."Whitelist"`; implementation beyond a mock/no-data shell remains blocked until accepted auth/session/RLS/privacy/admin-audit, SOM-55 implementation gates, and SOM-56 feedback/review implementation gates exist.
- Dashboard MVP conceptual data model around Project Proof is defined (SOM-55): Contributor -> Task/Project/Challenge/Brief source -> Project Proof -> Submission/Version/Revision -> Deliverables/Evidence placeholders -> Feedback/Review placeholders -> private Proof Card -> private Profile / Proof history. Project Proof remains the central private evidence unit; proof cards are private read models, Profile / Proof is a private aggregation view, and real schema/RLS/storage implementation remains deferred.
- Dashboard MVP Feedback / Review workflow is defined (SOM-56): feedback starts as assigned/request-based structured feedback tied to a specific submitted Project Proof version, ordinary feedback remains separate from formal review, internal Reviewer/Admin feedback is the default formal-review path, assigned Contributor peer feedback is non-formal by default, and company reviewer participation plus `Company-confirmed` outcomes are deferred except controlled future pilots with approval.
- Dashboard MVP planning foundation SOM-52/SOM-53/SOM-54/SOM-55/SOM-56/SOM-57 is complete as planning input; no real dashboard implementation is authorized beyond separately accepted shell/mock or implementation issues.
- Angular dashboard shell and route skeleton are implemented under `apps/dashboard` (SOM-58), with a separate dashboard Vercel project on `app.somlia.com` verified by SOM-60.
- Dashboard branding uses the SOMLIA logo, palette, typography direction, and responsive shell treatment (SOM-61).
- Dashboard visual design uses consistent 6-8px surface geometry, restrained SOMLIA Blue/Green/Gold gradients, improved hierarchy and focus states, and short transform/opacity motion with reduced-motion support (SOM-68).
- Angular dashboard code is organized into `core`, `features`, and `shared`, with generated public environment configuration and root npm-workspace scripts (SOM-62).
- Dashboard auth architecture assigns Supabase Auth to identity/session handling, Angular to public browser auth flow, and server/Edge Functions to privileged checks (SOM-63).
- Google OAuth, explicit PKCE callback exchange, session restore, route guards, and sign-out were implemented and verified on `app.somlia.com` (SOM-64).
- Invite-only gate code is merged using `public.dashboard_invites` and `dashboard-access-gate`, separate from `public."Whitelist"` (SOM-65); production activation still requires the explicit verification checklist below.
- Tracked `node_modules` content was removed from git history going forward; dependencies remain lockfile-managed and locally installed.
- New marketing and user-validation execution was deferred until the Dashboard MVP is built; completed research and campaign/community assets remain retained for later use.

## Blockers

- Supabase DB webhook and Edge Function secrets must be confirmed in production.
- Loops workflow setup needs verification against the real operational configuration.
- First learner segment validation is intentionally deferred until the Dashboard MVP can be demonstrated.
- First skill track is not chosen.
- First company task category is not chosen.
- Project Proof implementation requires Security decisions on upload/link safety, PII/secrets detection, version integrity, reviewer identity and anti-collusion controls, and plagiarism/fake-review moderation.
- Project Proof implementation requires Legal/privacy decisions on IP/license rights, publication/attribution consent, retention/deletion/unpublish/export behavior, company-brief/submission/feedback terms, and minors/cross-border rules.
- Google OAuth is implemented, but broader auth launch still needs accepted session lifetime, recovery, rate-limit, revoke-all-sessions, and elevated-role controls.
- SOM-65 production activation remains unconfirmed in this audit: confirm SQL application, approved cohort rows, Edge Function deployment, Vercel gate flag, and invited/non-invited production behavior.
- Dashboard private data needs staging Supabase or equivalent isolated Preview/local environment; Preview deployments must not write private/authenticated data into Production.
- Dashboard account/profile/proof/feedback tables must remain separate from `public."Whitelist"`; waitlist rows may inform invitation eligibility only through server-side/admin-controlled logic and must not silently become accounts.
- Dashboard admin/support/reviewer access needs least-privilege role/access matrix, MFA/2FA for elevated users, individual accounts, and auditability before launch.
- Dashboard privacy lifecycle needs updated privacy policy/notice-at-collection plus deletion, export, unpublish, retention, anonymization, legal hold, and support ownership decisions before real dashboard data collection.
- Dashboard storage/upload/evidence work remains blocked until upload/link safety, scanning, PII/secrets detection, and Legal/Privacy requirements are defined.
- Project Proof implementation needs a per-entity access matrix and RLS test plan before schema work.
- Project Proof implementation needs a state machine and transition authority plan for current-version pointers, submission/resubmission lineage, protected provenance states, and server-side/constrained state changes.
- Project Proof legal/privacy lifecycle remains blocked on IP/license, confidentiality attestation, publication consent, deletion/export/retention/legal hold, takedown/reporting, minors, cross-border users, company confirmation authority, AI/plagiarism disclosure, and marketplace/payment deferral decisions.
- Dashboard backend work needs migration/type/RLS CI planning under root `supabase/` authority before real Project Proof schema implementation.
- Dashboard pilot work needs a seeded/manual pilot data plan before any real contributor proof data is collected.
- Feedback/review implementation needs a role-specific RLS access matrix and test plan covering Contributor owner, assigned peer reviewer, internal Reviewer, Admin, Support, public, and deferred company reviewer.
- Feedback/review implementation needs a state machine and server-side transition authority for assignments, withdrawal, `Changes requested`, revision/resubmission, formal review completion, `Reviewed`, and future `Company-confirmed`.
- Formal review needs rubric versioning and outcome semantics for brief fit, deliverable quality, process evidence, revision response, claim safety, and data safety.
- Dashboard review workflows need audit log schema and retention requirements for assignments, eligibility changes, feedback submissions/edits, formal review completion, Project Proof lifecycle changes, revision responses, moderation actions, admin/support access, and future company reviewer access.
- Admin/support escalation and redaction policy is required before privileged review/support tooling.
- Peer feedback eligibility, reviewer conduct, conflict-of-interest policy, and anti-collusion controls are required before contributor peer feedback writes.
- Feedback/privacy notice and data lifecycle updates are required before real feedback or review data collection.
- Future company reviewer pilot policy requires Product/Security/Legal approval before company reviewer access, company authority, attribution, consent, or `Company-confirmed` behavior.
- Dashboard review notifications and lifecycle email boundaries must be defined separately from `loops-waitlist`.
- Storage/evidence safety and Legal/Privacy requirements remain required before files, links, uploads, or evidence context are exposed to reviewers.
- Dashboard MVP scaffolding must use the pinned Node.js policy, keep Angular dependencies isolated to `apps/dashboard`, keep landing at repo root, and keep dashboard Vercel/env configuration separate from the landing project.
- Dashboard MVP must avoid live marketplace, payments, active paid opportunities, live verification, and numeric overall score until Product, Security, and Legal approve those capabilities.
- Privacy policy should be reviewed with counsel before public scale.
- Paid opportunities require legal, payment, contractor classification, dispute, and marketplace terms review before launch.

## Workstreams

## 1. Product

### Current Priorities

- Keep the product wedge focused on waitlist validation.
- Preserve the shipped landing narrative: Learn -> Build -> Improve -> Earn and Build proof of progress, with earning and paid tasks explicitly future-qualified until those capabilities are live and approved.
- Keep the site learner-first but not learner-only, roughly 70% learner progress and 30% company/opportunity narrative.
- Treat the first 14-day sprint as a proof-of-progress validation sprint, not only a proof-of-shipped-work campaign.
- Keep AI/no-code builders as the primary first audience wedge while testing secondary learner signal from career changers and early-career builders.
- Validate which audience segment has the strongest signal.
- Define the first practical track and use the approved Project Proof definition as the evidence-model source of truth.

### Next Tasks

- Review segmented waitlist responses weekly.
- Identify the strongest first learner segment.
- Validate whether AI/no-code builders are the strongest first learner segment.
- Identify first company task categories.
- Define the first practical skill track.
- Define the condensed proof card display for one Project Proof while SOM-20 develops the proof-profile schema.
- Draft the first project/challenge format for SOM-21 using the approved Project Proof lifecycle and evidence requirements; this work is conceptually unblocked.
- Use the approved company brief definition when drafting the first company/project challenge: a tightly scoped real-world project prompt with context, objective, constraints, deliverables, evaluation criteria, deadline/effort size, simulated/unpaid/paid status, and resulting proof.
- Define future opportunity-readiness criteria without adding automatic unlocks, standalone `Verified` labels, or numeric credibility/reputation scores to MVP.
- Decide whether first company briefs are simulated, unpaid pilots, or paid from day one.

### Later Tasks

- Build proof profile MVP fields: completed projects, feedback received, reviews given, milestones earned, opportunity readiness.
- Add project submission and revision history.
- Add milestones and competence signals.
- Revisit contributor verification only after provenance, review, Security, and Legal requirements are defined.
- Add company brief validation and matching.
- Add payment flow and platform fee model.
- Add AI-assisted feedback, review summaries, proof summaries, matching, and quality checks.

### Dependencies

- First learner segment.
- First company task category.
- Review rubric.
- Company brief validation rules.
- Project Proof implementation safety, rights, consent, and data-lifecycle rules.
- Legal and payment review before paid opportunities.

### Open Questions

- Who is the first target user: students, career changers, young professionals, freelancers, startup operators, AI upskillers, or another group?
- What is the first practical skill track?
- What evidence thresholds support `Demonstrated`, `Reviewed`, and `Company-confirmed` states in the MVP?
- Who reviews early work: peers, experts, AI, companies, or a mix?
- What level of proof should unlock company briefs?
- Should learners earn immediately or only after verified status?
- Should proof profiles be private, shareable, fully public, or company-visible by permission?

## 2. Frontend

### Current Priorities

- Keep the current Vite + React + TypeScript SPA stable.
- Preserve simple pathname-based routing in `src/App.tsx`.
- Keep the SOMLIA visual direction restrained, professional, concrete, and product/editorial.
- Keep animations subtle and compatible with `prefers-reduced-motion`.
- Verify desktop and mobile views for visual changes.

### Next Tasks

- Add a stronger visual example of a real company brief.
- Add Open Graph and social preview assets.
- Add conversion analytics for CTA clicks and waitlist roles.
- Consider moving content/data arrays out of `src/App.tsx` if the page keeps growing.

### Later Tasks

- Add a dedicated `/companies` page.
- Add separate waitlist paths for learners, companies, and partners.
- Add sample proof profile detail view.
- Add sample paid assignment flow.
- Add a lightweight router if route count increases.
- Add E2E tests for direct routes and waitlist submission.

### Dependencies

- New routes require updates in both `src/App.tsx` and `vercel.json`.
- Visual changes require browser checks at desktop and mobile widths.
- Company page depends on clearer company brief positioning and CTA.
- Proof profile views depend on product schema decisions.

### Open Questions

- When should routing move to React Router or another proper router?
- Should privacy policy content move out of `src/App.tsx` into structured content files?
- Should route-specific metadata be handled through a framework like Next.js if SEO needs increase?
- What proof profile data should be visible in public frontend views?

## 3. Backend

### Current Priorities

- Keep the waitlist insert path stable.
- Preserve the `public."Whitelist"` table contract.
- Keep public client access limited to anonymous inserts.
- Keep Loops and webhook secrets server-side in Supabase Edge Function secrets.
- Confirm the webhook and Edge Function work in production.

### Next Tasks

- Validate live waitlist submissions for all three roles.
- Confirm Supabase RLS policy is applied.
- Confirm the Supabase Database Webhook is configured for `public."Whitelist"` inserts.
- Confirm `LOOPS_API_KEY`, `WAITLIST_WEBHOOK_SECRET`, and `LOOPS_WAITLIST_EVENT_NAME` are set in Supabase secrets.
- Verify Edge Function logs for successful and ignored payloads.
- Confirm Loops receives expected event payloads and idempotency keys.

### Later Tasks

- Add Edge Function tests or a local validation script.
- Add error logging or observability for failed waitlist submissions.
- Decide whether the Loops webhook needs retries or dead-letter logging.
- Add Supabase reads only behind authenticated/admin surfaces.
- Add user accounts through Supabase Auth if proof profiles become authenticated records.
- Add admin dashboard backing tables and access policies.
- Add payment-related backend only after legal/payment decisions.

### Dependencies

- Supabase project configuration.
- Vercel public env vars.
- Supabase Edge Function secrets.
- Loops workflow configuration.
- Admin/read access model.
- Proof profile schema.

### Open Questions

- Should `public."Whitelist"` remain the long-term table name, or become `waitlist_signups` before production hardening?
- Should Supabase reads/admin dashboards be added later?
- Should waitlist records include source/referral tracking?
- Should proof profiles become authenticated user records in Supabase Auth?
- Should Edge Function deployments be managed manually or through CI?

## 4. Marketing

### Current Priorities

- Pause new campaigns, founder posting schedules, direct outreach, and user-validation execution until the Dashboard MVP can be demonstrated meaningfully.
- Preserve completed positioning, campaign drafts, Reddit community assets, research, and validation frameworks for later reuse.
- Do not reactivate canceled marketing/validation tickets without a new founder decision and current Product review.
- Keep public copy within existing current-stage guardrails while the landing waitlist remains available.

### Next Tasks

- None while the pause is active.
- When the MVP reaches a founder-approved demonstration milestone, review the retained assets and create a fresh validation plan from current product behavior rather than reopening old tickets unchanged.

### Later Tasks

- Run a "Show the work" campaign with before/after proof profiles.
- Publish a "From project to proof" content series.
- Write a founder essay on the gap between learning platforms and job platforms.
- Recruit 5-10 companies for small useful briefs.
- Add social proof once pilots exist.
- Add role-specific landing sections.
- Add waitlist referral campaign.

### Dependencies

- Founder-approved MVP demonstration milestone and validation restart decision.
- First learner segment.
- First practical track.
- First proof card example.
- Company brief examples.
- Loops role-specific follow-up.
- Trust signals from pilots, advisors, user numbers, company logos, or completed projects.

### Open Questions

- Which launch wedge is strongest: learners or companies?
- What company segment is easiest to sell to first?
- What proof or traction is needed before pitching companies?
- Should the brand emphasize "proof of progress" or "proof of work" more heavily?
- Should SOMLIA emphasize AI-native learning more strongly above the fold?
- How often should founder updates be sent?

## 5. Security

### Current Priorities

- Preserve the waitlist security contract.
- Keep Supabase service role keys out of frontend code and `VITE_` env vars.
- Preserve RLS with anonymous insert only.
- Preserve Edge Function secret-header authentication.
- Avoid committing real secrets.

### Next Tasks

- Confirm `.env.local` has valid public Supabase values only.
- Confirm production Supabase RLS policy.
- Confirm no anonymous read/update/delete policies exist for `public."Whitelist"`.
- Confirm Edge Function rejects missing or incorrect `x-waitlist-webhook-secret`.
- Confirm Loops API key exists only as a Supabase Edge Function secret.
- Harden waitlist against abuse/spam before larger launch.

### Later Tasks

- Add abuse reporting and moderation workflow for community features.
- Add reviewer conduct policy.
- Add data deletion/export process.
- Add consent and email preference management.
- Add payment, tax, contractor classification, and marketplace terms review before paid opportunities.
- Add admin access controls before building dashboards.

### Dependencies

- Supabase RLS configuration.
- Edge Function secret configuration.
- Privacy policy updates for new processors/data categories.
- Legal review before accounts, community, marketplace, or payments.
- Admin authentication model.

### Open Questions

- How will SOMLIA prevent fake proof or shallow feedback?
- How will abuse prevention work for waitlist and later task submissions?
- What marketplace trust and safety rules are needed?
- What legal and payment requirements apply before paid opportunities launch?
- What countries or regions should the first version support?

## 6. Operations / Admin

### Current Priorities

- Validate production deployment and waitlist operations.
- Track segmented waitlist responses and Loops replies.
- Keep operational setup documented.
- Keep Project Bible and roadmap in sync with actual decisions.
- Use Linear as the cross-chat source of truth for actionable tasks, handoffs, blockers, and implementation status.
- Use Codex thread messaging for docs-maintenance report-backs to Operations/Admin when requested.
- Avoid metadata churn and real-secret commits.

### Next Tasks

- Confirm Vercel Production and Preview env vars.
- Confirm Supabase DB webhook configuration.
- Confirm Edge Function logs show success for role-specific test signups.
- Confirm Loops workflows match the real setup, whether three workflows or one branched workflow.
- Review waitlist responses weekly.
- Add basic admin/export workflow for waitlist entries.
- Decide who owns support email responses and privacy requests.

### Later Tasks

- Add admin dashboard for reviewing waitlist and submissions.
- Add admin tools for users, companies, proof quality, and project operations.
- Add deployment environment documentation for Vercel and Supabase.
- Add CI for `npm test` and `npm run build`.
- Improve email deliverability and unsubscribe process.
- Add monitoring for webhook failures.

### Dependencies

- Access to Vercel project settings.
- Access to Supabase project settings and logs.
- Access to Loops workflows and audience/events.
- Support/privacy request owner.
- Admin authentication and authorization model.

### Open Questions

- Who monitors waitlist submissions and follows up with priority leads?
- Who owns support email responses at `support@somlia.com`?
- Who owns privacy and deletion requests?
- Who manages Loops workflows and segmentation?
- What is the escalation path if Supabase inserts work but Loops emails fail?
- What should happen to existing waitlist users once the first MVP is ready?

## 7. Dashboard MVP

### Current Priorities

- Treat the dashboard as a separate Angular product surface.
- Treat Dashboard MVP as a learner/contributor workspace, not a company dashboard, public profile product, marketplace, or payment surface.
- Preserve the current React/Vite landing and waitlist site as the public marketing surface.
- Preserve the approved SOM-53 architecture: root landing app for `somlia.com`, Angular dashboard at `apps/dashboard`, root `supabase/` as backend boundary, and separate dashboard Vercel project on `app.somlia.com`.
- Treat SOM-52 through SOM-57 as completed planning foundation and SOM-58/SOM-60/SOM-61/SOM-62/SOM-63/SOM-64/SOM-65 as the implemented shell, deployment, brand, structure, and auth foundation.
- Preserve the implemented Google OAuth callback/session flow and the invite-gate boundary separate from `public."Whitelist"`.
- Treat merged invite-gate code and production activation as separate states until the external configuration checklist is verified.
- Keep MVP navigation focused on Tasks / Projects, Learning, Feedback / Review, Profile / Proof, and Settings.
- Center the default dashboard experience on Tasks / Projects because practical work creates the evidence loop for Learning, Feedback / Review, and Profile / Proof.
- Defer native community chat and voice; external community links are acceptable first.
- Avoid live paid opportunities, live company marketplace access, payment/payout/billing/escrow, active paid company briefs, guaranteed earning, verified contributor status or standalone `Verified` badges, numeric scores/reputation, public proof profiles by default, native community chat/voice, and company dashboard/account flows unless later approved.

### Next Tasks

- Verify SOM-65 production activation end to end: SQL, approved cohort data, Edge Function deployment, Vercel gate flag, invited access, and denied access.
- Define remaining auth operational policy: session lifetime, recovery, rate limits, revoke-all-sessions, elevated-role MFA, and account deactivation.
- Create Supabase environment setup plan for local/Preview/staging isolation before authenticated dashboard data.
- Define dashboard role/access matrix for Contributor, Reviewer, Admin, and Support with least-necessary access and audit requirements.
- Draft dashboard privacy lifecycle plan: notice-at-collection, deletion/export/unpublish/retention/anonymization/legal hold, and support ownership.
- Define Project Proof access matrix and RLS test plan for each Project Proof-related entity.
- Define Project Proof state machine and transition authority for submission, resubmission, current-version pointers, protected provenance, and moderation states.
- Define storage/evidence safety requirements before uploads, evidence links, or file handling.
- Define Project Proof legal/privacy lifecycle requirements: IP/license, confidentiality attestation, publication consent, deletion/export/retention/legal hold, takedown/reporting, minors, cross-border users, company confirmation authority, and AI/plagiarism disclosure.
- Define Dashboard backend migration, generated type, RLS CI, and deployment plan under root `supabase/` authority.
- Define seeded/manual pilot data plan for dashboard proof demos before collecting real contributor proof data.
- Define Feedback / Review RLS access matrix and test plan for Contributor owner, assigned peer reviewer, internal Reviewer, Admin, Support, public, and deferred company reviewer.
- Define Feedback / Review state machine and server-side transition authority for assignments, withdrawal, changes requested, revision/resubmission, formal review completion, `Reviewed`, and future `Company-confirmed`.
- Define formal review rubric versioning and outcome semantics for brief fit, deliverable quality, process evidence, revision response, claim safety, and data safety.
- Define audit log schema and retention requirements for dashboard review workflows.
- Define admin/support escalation and redaction policy for review/support contexts.
- Define peer feedback eligibility, reviewer conduct, conflict-of-interest policy, and anti-collusion controls.
- Define feedback/privacy notice and data lifecycle updates before collecting real review data.
- Define future company reviewer pilot policy only after Product/Security/Legal approval.
- Define dashboard review notification and lifecycle email boundary separate from `loops-waitlist`.
- Define backend CI/deployment expectations for dashboard auth/RLS tests and Edge Function/server-side authorization checks.
- Define acceptance criteria for the first real MVP dashboard area before replacing its placeholder UI.
- Map which existing Project Proof, company brief, waitlist, and future profile decisions constrain dashboard data models.
- Decide whether external community links are needed in MVP and where they belong.

### Later Tasks

- Replace the Tasks / Projects, Learning, Feedback / Review, Profile / Proof, and Settings placeholders with approved MVP flows one issue at a time.
- Connect dashboard data to authenticated backend surfaces after backend, privacy, and security contracts are defined.
- Revisit native community, marketplace, payments, live verification, and scoring only after Product/Security/Legal approval.

### Dependencies

- Approved dashboard architecture and repo/deployment shape: small npm-workspace monorepo, root landing, Angular at `apps/dashboard`, root `supabase/`, and separate dashboard Vercel project.
- SOM-54 authentication and authorization requirements.
- Accepted auth implementation plan, RLS access matrix/tests, staging/Preview Supabase isolation, privacy lifecycle plan, and admin/support audit controls.
- SOM-55 conceptual Project Proof data model.
- Accepted Project Proof access matrix, RLS tests, state machine, transition authority, evidence/storage safety requirements, legal/privacy lifecycle, backend migration/type/RLS CI plan, and seeded/manual pilot data plan before real schema/storage implementation.
- SOM-56 Feedback / Review MVP workflow.
- Accepted Feedback / Review RLS/access matrix, server-side transition authority, rubric versioning, audit retention, moderation/reporting model, reviewer conduct/conflict policy, peer eligibility/anti-collusion controls, privacy lifecycle, notification boundary, and Legal blockers before real feedback implementation.
- Backend storage and API decisions for dashboard data.
- Privacy policy updates before collecting new dashboard account, activity, review, proof, or community data.
- Security and Legal review before verification, payments, marketplace, or score-like claims.

### Open Questions

- Should email OTP or magic link be added after the implemented Google OAuth pilot, and under what recovery/session policy?
- What session lifetime, recovery, resend limits, suspicious-login handling, and revoke-all-sessions policy should Dashboard MVP use?
- What RLS test strategy and backend CI gates are required before authenticated dashboard data launches?
- Which MVP dashboard area should be built first?
- What data is real, mocked, or manually operated in the first dashboard version?
- How should dashboard proof views connect to private-by-default Project Proof and future public proof profiles?
- What is the minimum Settings scope for account, privacy, notifications, and community links?
- What exact reviewer conduct, conflict-of-interest, and peer eligibility policy should govern MVP feedback?
- What review notification and lifecycle email behavior belongs in the dashboard backend rather than `loops-waitlist`?
