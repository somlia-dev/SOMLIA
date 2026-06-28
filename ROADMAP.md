# SOMLIA Roadmap

Source of truth: `PROJECT_BIBLE.md` and `AGENTS.md`.

This roadmap is execution-focused. It does not change SOMLIA's strategy: SOMLIA remains a proof-of-progress / proof-of-work network where users learn practical skills, apply them through real projects, build proof profiles, and later unlock company briefs or paid opportunities after demonstrated capability.

## Current Sprint

Goal: validate the current landing, waitlist, privacy, Supabase, and Loops foundation end to end before expanding the product surface.

- Submit at least one live waitlist signup per role: `Learner`, `Company`, and `Investor / Partner`.
- Verify Supabase stores each signup in `public."Whitelist"`.
- Verify the Supabase Database Webhook calls `loops-waitlist`.
- Verify Loops receives role-specific events and routes contacts correctly.
- Review segmented waitlist responses weekly.
- Track Loops replies manually.
- Improve landing copy from real learner/company/investor responses.
- Add basic production monitoring for Supabase inserts and Edge Function failures.
- Run `npm test` and `npm run build` before handoff.

## Next Sprint

Goal: turn waitlist learning into a sharper first validation wedge.

- Identify the strongest first learner segment.
- Identify first company task categories.
- Define the first practical skill track.
- Create a sample proof profile schema from multiple Project Proofs and provenance-backed signals (SOM-20; conceptually unblocked).
- Design the first project/challenge format around a brief, submission, review rubric, revision loop, and Project Proof (SOM-21; conceptually unblocked).
- Add a stronger visual example of a real company brief to the website.
- Add Open Graph and social preview assets for launch sharing.
- Use completed Dashboard MVP foundation planning to scope accepted implementation issues while preserving the React/Vite landing site as the public marketing and waitlist surface.

## Backlog

- Add role-specific landing sections or separate waitlist paths for learners, companies, and partners.
- Add a dedicated `/companies` page.
- Add sample proof profile detail view.
- Add sample paid assignment flow.
- Add conversion analytics for CTA clicks and waitlist roles.
- Add user accounts.
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
- Scaffold the separate Angular dashboard app after Product and Engineering approve architecture, repo/deployment shape, authentication approach, and MVP acceptance criteria.
- Add Dashboard MVP surfaces for Tasks/Projects, Learning, Feedback/Review, Profile/Proof, and Settings.
- Add external community links as the first dashboard community bridge if needed; defer native community chat and voice.

## Completed

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
- Node.js version policy is pinned for Dashboard MVP architecture (SOM-57): local development and CI use Node.js `24.18.0`, `package.json` accepts Node `>=24.15.0 <25`, GitHub Actions reads `.nvmrc`, and the future Angular dashboard target is Angular `22.0.x` while the React/Vite landing app remains unchanged.
- Dashboard MVP technical architecture and repo/deployment plan are approved (SOM-53): evolve the repo into a small npm-workspace monorepo when dashboard scaffolding begins, keep the React/Vite landing app at repo root for `somlia.com`, add Angular at `apps/dashboard`, keep root `supabase/` as the backend boundary, and deploy dashboard through a separate Vercel project on `app.somlia.com`.
- Dashboard MVP auth, roles, RLS, and privacy/security requirements are defined (SOM-54): access starts as a waitlist-approved invite-only beta using Supabase Auth as the accepted provider assumption; the only external MVP role is Contributor; Reviewer, Admin, and Support are internal/privileged roles; dashboard data is private by default and separate from `public."Whitelist"`; implementation beyond a mock/no-data shell remains blocked until accepted auth/session/RLS/privacy/admin-audit, SOM-55 implementation gates, and SOM-56 feedback/review implementation gates exist.
- Dashboard MVP conceptual data model around Project Proof is defined (SOM-55): Contributor -> Task/Project/Challenge/Brief source -> Project Proof -> Submission/Version/Revision -> Deliverables/Evidence placeholders -> Feedback/Review placeholders -> private Proof Card -> private Profile / Proof history. Project Proof remains the central private evidence unit; proof cards are private read models, Profile / Proof is a private aggregation view, and real schema/RLS/storage implementation remains deferred.
- Dashboard MVP Feedback / Review workflow is defined (SOM-56): feedback starts as assigned/request-based structured feedback tied to a specific submitted Project Proof version, ordinary feedback remains separate from formal review, internal Reviewer/Admin feedback is the default formal-review path, assigned Contributor peer feedback is non-formal by default, and company reviewer participation plus `Company-confirmed` outcomes are deferred except controlled future pilots with approval.
- Dashboard MVP planning foundation SOM-52/SOM-53/SOM-54/SOM-55/SOM-56/SOM-57 is complete as planning input; no real dashboard implementation is authorized beyond separately accepted shell/mock or implementation issues.

## Blockers

- Supabase DB webhook and Edge Function secrets must be confirmed in production.
- Loops workflow setup needs verification against the real operational configuration.
- First learner segment still needs validation against the AI/no-code builder wedge and secondary career/proof-of-progress audiences.
- First skill track is not chosen.
- First company task category is not chosen.
- Project Proof implementation requires Security decisions on upload/link safety, PII/secrets detection, version integrity, reviewer identity and anti-collusion controls, and plagiarism/fake-review moderation.
- Project Proof implementation requires Legal/privacy decisions on IP/license rights, publication/attribution consent, retention/deletion/unpublish/export behavior, company-brief/submission/feedback terms, and minors/cross-border rules.
- Dashboard auth implementation still needs accepted session policy, auth method, redirect allowlist, account recovery flow, rate limits, revoke-all-sessions behavior, and RLS access matrices/tests before real auth launch.
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
- Preserve the core positioning: Learn -> Apply -> Earn and Build proof of progress.
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

- Keep the primary message: Build proof of progress.
- Use waitlist responses to learn which audience converts best.
- Run a 14-day founder-led proof-of-progress validation sprint focused on learner-side demand, with lightweight company discovery in parallel.
- Target AI/no-code builders as the first validation sprint learner audience.
- Keep "Build proof that you can ship useful AI/no-code work, not just learn tools" as the AI/no-code wedge promise while broadening the sprint story to learning, practice, community feedback, proof profiles, and opportunity after proof.
- Use a sprint content mix of roughly 60% AI/no-code builder posts, 25% broader career/proof-of-progress posts, and 15% company/operator posts.
- Use LinkedIn as the primary channel for the first validation sprint, with optional adapted reposts to X.
- Keep messaging against passive courses, weak resumes, generic job boards, and certificates without evidence.
- Keep company story practical: real briefs, verified contributors, completed work, outcomes.
- Use qualified earning/opportunity wording in sprint content: earning is part of the SOMLIA journey and SOMLIA is being built to connect trusted proof with company/partner opportunities after proof; avoid implying paid opportunities, marketplace access, or payment functionality are live today.
- Use LinkedIn and founder-led updates as early storytelling channels.

### Next Tasks

- Define the first 14-day validation sprint audience.
- Draft founder-led launch posts.
- Build the first validation sprint around layered audiences: primary AI/no-code builders, secondary career changers and early-career builders, and company-side startup operators/founders with small useful tasks.
- Build the first validation sprint content calendar around four pillars: Proof Beats Certificates, Show The Work, AI/No-Code Needs Trust, and From Practice To Opportunity.
- Balance the sprint content calendar against the approved 60/25/15 content ratio.
- Run 3 founder-led LinkedIn/X posts per week during the 14-day validation sprint.
- Use the Product-approved proof-reply response flow for LinkedIn/X replies: public acknowledgement, short DM, waitlist link, and one validation question about the skill they want to prove.
- Create learner discovery questions.
- Create company discovery questions.
- Hold 10 direct AI/no-code learner conversations.
- Hold 5 direct company/operator discovery conversations.
- Track which posts and conversations produce high-signal waitlist signups.
- Track sprint signups, replies, conversations, and repeated language.
- Track every proof reply as a validation signal, including platform, post, name/handle, learner or company type, skill they want to prove, company task mentioned, waitlist join, useful quote, and follow-up needed.
- Review sprint learning weekly and use it to refine positioning.
- Ask learners which skills they want to prove.
- Ask companies which small tasks they would outsource to emerging talent.
- Track Loops replies manually.
- Write founder-led waitlist updates from Stepan.
- Create proof-profile mock examples.
- Create comparison content: certificate vs proof profile, job board vs demonstrated capability, resume claims vs completed project evidence.
- Launch a small 7-day proof challenge for early learners.

### Later Tasks

- Run a "Show the work" campaign with before/after proof profiles.
- Publish a "From project to proof" content series.
- Write a founder essay on the gap between learning platforms and job platforms.
- Recruit 5-10 companies for small useful briefs.
- Add social proof once pilots exist.
- Add role-specific landing sections.
- Add waitlist referral campaign.

### Dependencies

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
- Treat SOM-52/SOM-53/SOM-54/SOM-55/SOM-56/SOM-57 as completed planning foundation, not implementation authorization.
- Keep MVP navigation focused on Tasks / Projects, Learning, Feedback / Review, Profile / Proof, and Settings.
- Center the default dashboard experience on Tasks / Projects because practical work creates the evidence loop for Learning, Feedback / Review, and Profile / Proof.
- Defer native community chat and voice; external community links are acceptable first.
- Avoid live paid opportunities, live company marketplace access, payment/payout/billing/escrow, active paid company briefs, guaranteed earning, verified contributor status or standalone `Verified` badges, numeric scores/reputation, public proof profiles by default, native community chat/voice, and company dashboard/account flows unless later approved.

### Next Tasks

- Use the approved Node.js `24.18.0` / Angular `22.0.x` version policy when planning dashboard scaffold and CI (SOM-57).
- Create the dashboard auth implementation plan from SOM-54, including invite-only cohort access, Supabase Auth method, session/recovery/redirect policy, and RLS access matrix/tests.
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
- Define acceptance criteria for each MVP dashboard area before scaffolding code.
- Map which existing Project Proof, company brief, waitlist, and future profile decisions constrain dashboard data models.
- Decide whether external community links are needed in MVP and where they belong.

### Later Tasks

- Scaffold the Angular dashboard app at `apps/dashboard` only after a dedicated implementation issue is created and accepted.
- Build dashboard navigation, layout shell, and settings foundation.
- Add Tasks / Projects, Learning, Feedback / Review, and Profile / Proof MVP flows.
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

- Which exact Supabase Auth method should MVP use: invite link, email OTP, magic link, or a combination?
- What session lifetime, recovery, resend limits, suspicious-login handling, and revoke-all-sessions policy should Dashboard MVP use?
- What RLS test strategy and backend CI gates are required before authenticated dashboard data launches?
- Which MVP dashboard area should be built first?
- What data is real, mocked, or manually operated in the first dashboard version?
- How should dashboard proof views connect to private-by-default Project Proof and future public proof profiles?
- What is the minimum Settings scope for account, privacy, notifications, and community links?
- What exact reviewer conduct, conflict-of-interest, and peer eligibility policy should govern MVP feedback?
- What review notification and lifecycle email behavior belongs in the dashboard backend rather than `loops-waitlist`?
