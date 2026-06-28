# SOMLIA Project Bible

This is the durable product and technical context for the SOMLIA landing and waitlist site. `AGENTS.md` remains the operating guide for agents; this file captures the project memory, positioning, decisions, roadmap, and unresolved questions.

## Vision

SOMLIA helps ambitious people move from learning to demonstrated capability.

The core product idea is:

```text
Learn -> Apply -> Earn
```

SOMLIA is not positioned as a course platform, certificate marketplace, resume tool, generic job board, or freelance marketplace. It is a proof-of-progress and proof-of-work network where users build evidence of skill through practical projects, feedback, revision, competence signals, and eventually real paid opportunities from companies.

SOMLIA is infrastructure for measurable personal progress: every meaningful learner action should create visible evidence, including completed projects, feedback, revisions, milestones, competence signals, and eventually paid or company-backed outcomes.

The fuller product journey is:

```text
Learn -> Apply -> Review -> Improve -> Prove -> Earn
```

The public website is currently an early-access landing and waitlist experience. Its job is to explain the proof-of-progress concept, attract high-signal waitlist signups, and support future validation of learning tracks, community review, company briefs, and paid opportunities.

## Product Positioning

Primary tagline:

```text
Build proof of progress.
```

Supporting line:

```text
Learn practical skills, apply them through real projects, and create proof companies can trust.
```

SOMLIA should be positioned against passive courses, resume-based hiring, generic job boards, and certificates without evidence. The product promise is that users do not just claim capability; they generate credible proof through work, review, and outcomes.

The early product wedge is waitlist validation before account, marketplace, or paid brief flows are built. Companies are future demand-side users who submit practical briefs, not traditional job postings, and discover ability before hiring. Opportunities should come after demonstrated capability. `Project Proof` is the canonical first evidence artifact; a proof card is its condensed display, and a future proof profile aggregates multiple Project Proofs and provenance-backed signals. Paid opportunities are part of the roadmap, not something the current site should imply is already live.

Strong framing:

```text
SOMLIA helps ambitious people build proof of progress through practical projects, feedback, and verified outcomes.
```

Strategic positioning:

```text
A new way to discover talent through demonstrated capability.
```

The opportunity payoff should become concrete:

```text
Company brief -> Verified contributors -> Completed work -> Payment issued -> New proof added
```

Qualified earning and opportunity wording is allowed for the first validation sprint. Marketing may explicitly say that earning is part of the SOMLIA journey and that SOMLIA is being built to connect trusted proof with company and partner opportunities on or through the platform after proof. Marketing must not imply that paid opportunities, marketplace access, or payment functionality are live today.

Approved core wording:

```text
In SOMLIA, earning is part of the journey: learn, apply, improve through feedback, build trusted proof, then use that proof to access company and partner opportunities on the platform.
```

Current-stage qualifiers:

- SOMLIA is being built so people can learn, prove capability, and access company/partner opportunities to earn after proof.
- We're starting with early access and proof-of-progress validation, then building toward company briefs and paid opportunities.
- Earning comes after proof: company brief -> verified contributor -> completed work -> payment issued -> new proof added.

Approved phrases include:

- Earning is part of the journey.
- Opportunity after proof.
- Company and partner opportunities.
- Access opportunities to earn after proof.
- Being built to connect trusted proof with real opportunities.
- Future company briefs and paid opportunities.
- On/through the SOMLIA platform, only when paired with "being built," "future," "toward," or "after proof" context.

Avoid current-sprint wording that implies live earning, live marketplace access, or guaranteed paid work, including "You can earn in SOMLIA" as a standalone current claim, "Earn money today," "Paid opportunities are available now," "Get paid now," "Guaranteed earnings," "Guaranteed paid work," "No companies needed," or "Skip jobs entirely."

Legal/Security does not need to block this qualified current-sprint wording. Legal/Security should be consulted before direct live earning claims, advertising active paid briefs, payment flow launch, or marketplace/payment terms publication.

The website should remain learner-first, but not learner-only. A useful narrative balance is roughly 70% learner progress and 30% company/opportunity story so SOMLIA feels like a future talent network, not only an education startup.

For the first validation sprint, the primary learner wedge is AI/no-code builders. Secondary learner audiences include career changers and early-career builders. Company-side discovery should focus on startup operators and founders with small useful tasks.

## First Validation Sprint Framing

The first 14-day sprint should be framed internally as a proof-of-progress validation sprint. AI/no-code builders remain the primary first audience wedge, but the message should broaden beyond proof of shipped work alone into the fuller proof-of-progress story: learning, practice, community feedback, proof profiles, and opportunity after proof.

Suggested sprint content ratio:

- 60% AI/no-code builder posts.
- 25% broader career and proof-of-progress posts.
- 15% company/operator posts.

Layered audience:

- Primary learner audience: AI/no-code builders.
- Secondary learner audiences: career changers and early-career builders.
- Company-side discovery audience: startup operators and founders with small useful tasks.

## Company Brief Definition

A company brief is a real-world project prompt from a company, scoped tightly enough for emerging talent to solve and concrete enough to become proof of skill.

In SOMLIA, a company brief means a small, practical work challenge submitted by a company, describing a real business problem or task that a learner or contributor can solve to prove capability. It is not a general company description or about-us summary.

A company brief should include:

- Company context.
- Business problem.
- Task objective.
- Constraints.
- Expected deliverables.
- Evaluation criteria.
- Deadline or effort size.
- Whether the brief is simulated, unpaid, or paid.
- What proof gets added if the work is completed well.

## Project Proof Definition

`Project Proof` is the canonical name for the first proof artifact. One Project Proof represents one contributor's attempt at one project, challenge, or company brief, including all versions and revisions for that attempt.

A proof card is a condensed display of one Project Proof. A future proof profile aggregates multiple Project Proofs and provenance-backed signals. Project Proof is private by default; public or shareable display requires contributor consent.

Required Project Proof content:

- Brief or project context.
- Contributor role and goal.
- Deliverables.
- Tools and skills used.
- Process evidence.
- Outcome provenance.
- Reflection.
- Effort.
- Rights and data-safety attestation.

Feedback, revision, reviewer, and company fields are conditional on the attempt and its review context.

MVP credibility vocabulary is descriptive and provenance-based:

- `Demonstrated`.
- `Not yet reviewed`.
- `Reviewed`.
- `Company-confirmed`.

Standalone `Verified` labels and numeric credibility or reputation scores are deferred.

Project Proof lifecycle:

```text
Draft -> Submitted -> Changes requested -> Revised/resubmitted -> Completed (not reviewed) or Reviewed -> Archived
```

Outcome claims must distinguish observed, synthetic/sample measured, estimated, contributor self-reported, reviewer-confirmed, and company-confirmed outcomes.

This product definition does not imply implementation. It defines no automatic opportunity unlock, earning guarantee, live proof profile, verification feature, marketplace access, or payment behavior.

Security and Legal implementation questions remain unresolved:

- Upload and link safety.
- PII and secrets detection.
- Version integrity.
- Reviewer identity and anti-collusion controls.
- Plagiarism and fake-review moderation.
- IP and license rights.
- Publication and attribution consent.
- Retention, deletion, unpublish, and export behavior.
- Company-brief, submission, and feedback terms.
- Minors and cross-border rules.

## Current Product Surface

The current app is a Vite, React, TypeScript, and Tailwind CSS single-page landing and waitlist site deployed on Vercel.

Current routes:

- `/` - landing page.
- `/roadmap` - roadmap page.
- `/privacy-policy` - privacy policy page.

Routing is intentionally handled inside `src/App.tsx` by reading `window.location.pathname`. Direct visits to client-side routes are supported by rewrites in `vercel.json`.

Route-aware document metadata is applied client-side:

- `/` uses the global SOM-23 title and description, canonical `https://somlia.com/`, and robots `index,follow`.
- `/roadmap` and `/roadmap/` use title `SOMLIA Roadmap | From proof of progress to opportunity`, the approved roadmap description, canonical `https://somlia.com/roadmap`, and robots `index,follow`.
- `/privacy-policy` and `/privacy-policy/` use title `Privacy Policy | SOMLIA`, the approved privacy description, canonical `https://somlia.com/privacy-policy`, and robots `noindex,follow`.
- Unknown paths retain the global metadata defaults.

Global Open Graph and Twitter tags and `public/og-somlia.png` remain unchanged. The accepted Vite SPA limitation is that initial raw HTML may show global metadata before client-side JavaScript applies route-aware values; no SSR or prerendering was introduced.

The landing page currently includes:

- Fixed responsive navigation with a mobile menu.
- Hero: "Build proof of progress."
- Problem comparison: old model vs SOMLIA model.
- How it works: Learn, Apply, Earn.
- Proof system: proof profiles, feedback history, competence signals.
- Community layer: review and revision loop.
- Real opportunities: company briefs, verified contributors, outcomes.
- For Companies panel with a `Share a company task` CTA that reuses the existing waitlist.
- Waitlist form.
- FAQ.
- Footer links to the main site sections, roadmap, privacy policy, and contact/waitlist.

Current navigation:

- How it works
- Proof system
- Community
- Companies
- FAQ
- Join waitlist

Current landing page order:

1. Hero: introduces SOMLIA as proof of progress.
2. Problem: explains why learning alone is not enough.
3. How SOMLIA Works: shows Learn -> Apply -> Earn.
4. Proof System: makes credibility visible through proof profiles.
5. Community Layer: explains how review and feedback create progress.
6. Real Opportunities: shows the payoff through company briefs, verified contributors, and outcomes.
7. For Companies: explains how companies discover talent before hiring.
8. Roadmap: frames the future as a proof-of-work network.
9. Waitlist: converts early users, companies, and partners.
10. FAQ: clarifies what SOMLIA is and is not.

The waitlist form writes to Supabase. It collects name, email, role, and an optional short message. It trims name, email, and message values; lowercases email before insertion; stores empty messages as `null`; shows a friendly duplicate-email error for Supabase `23505` failures; and includes an at-collection privacy notice linking to the privacy policy.

The `Share a company task` CTA in the For Companies panel scrolls to the existing waitlist, preselects the exact `Company` role, moves accessible focus to the optional message textarea, and shows company-specific guidance: "What small task or business problem would you like contributors to solve? (Optional)" Company submissions use the approved early-pilot success copy. The interaction preserves the existing roles and submit shape and introduces no new fields, routes, forms, calendar flow, backend contract, privacy data categories, processors, analytics, marketplace, payment, or live-brief claim.

Vercel Analytics is loaded lazily from `src/main.tsx` after idle time or timeout. The waitlist submission helper is dynamically imported from `WaitlistSection`, and `@supabase/supabase-js` is dynamically imported inside `src/lib/waitlist.ts` so the initial frontend stays lighter.

Tests cover routing, waitlist form success and error states, waitlist helper normalization, empty-message handling, duplicate email errors, and missing Supabase environment configuration.

Not implemented yet:

- User accounts.
- Live proof profiles.
- Project submission and review workflow.
- Company dashboard or company marketplace.
- Payments.
- Admin dashboard or waitlist export workflow.
- Full marketplace mechanics.
- Email lifecycle automation beyond the waitlist/Loops insert event.

## Dashboard MVP Product Surface

The founder and CTO approved starting a SOMLIA MVP dashboard as a separate Angular product surface. Product defined the MVP as a learner/contributor workspace, not a company dashboard, public profile product, marketplace, or payment surface. The current React/Vite landing and waitlist site remains the public marketing and waitlist surface and should not be changed or folded into the dashboard without a separately approved architecture decision.

The default dashboard experience should center on Tasks / Projects because practical work creates the evidence loop that Learning, Feedback / Review, and Profile / Proof depend on.

Approved MVP navigation:

1. Tasks / Projects
2. Learning
3. Feedback / Review
4. Profile / Proof
5. Settings

Suggested conceptual routes:

- `/dashboard/tasks`
- `/dashboard/tasks/:taskId`
- `/dashboard/learning`
- `/dashboard/feedback`
- `/dashboard/proof`
- `/dashboard/settings`

Area responsibilities:

- Tasks / Projects: active work, history, task detail, deadlines or effort size, feedback, revision history, Project Proof connection, and source labeling such as SOMLIA challenge or simulated company brief.
- Learning: available learning, completed learning, labs, feedback where relevant, and connections to practical work and Project Proof. Certificates are deferred unless later approved as non-misleading completion evidence.
- Feedback / Review: feedback received, feedback given, feedback requests, structured review, revision response, and links to task, submission, version, and Project Proof.
- Profile / Proof: private proof cards, Project Proof history, received and given feedback, demonstrated skills backed by evidence, and allowed credibility states only.
- Settings: basic account and profile controls, privacy expectations, notification basics if supported, support/privacy contact, and optional external community links.

Community chat and voice are deferred future capabilities. External community links are acceptable as an initial bridge if the dashboard needs a community touchpoint before native community features exist.

Dashboard MVP guardrails:

- No live paid opportunities.
- No live company marketplace access.
- No payment, payout, billing, or escrow.
- No active paid company briefs.
- No guaranteed earning.
- No verified contributor status or standalone `Verified` badges.
- No numeric reputation, credibility, quality, or opportunity-readiness score.
- No public proof profiles by default.
- No native community chat or voice.
- No company dashboard or account flows.

Approved opportunity framing, if needed:

```text
SOMLIA is being built so trusted proof can later support access to company and partner opportunities after proof.
```

Deferred capabilities require later Product, Security, Legal, and Engineering approval before implementation or current-product claims.

SOM-52, SOM-53, SOM-54, SOM-55, SOM-56, and SOM-57 are complete as Dashboard MVP planning inputs. They define product surface, architecture, auth/security, Project Proof data model, Feedback / Review workflow, and version policy, but they do not authorize real dashboard implementation beyond separately approved, no-private-data shell/mock work.

The dashboard and future monorepo work should use Node.js `24.18.0` locally and in CI, with the root `package.json` allowing Node `>=24.15.0 <25`. The Angular dashboard target is Angular `22.0.x`, with Angular and its TypeScript requirements isolated to the future dashboard app/workspace at `apps/dashboard`. This Node policy also applies to the existing landing and waitlist app for test/build verification, but it does not change the landing app's React/Vite framework or waitlist behavior.

Dashboard technical architecture:

- SOMLIA should evolve this GitHub repository into a small npm-workspace monorepo when dashboard scaffolding begins.
- Keep the existing React/Vite landing and waitlist app in the repo root for the first dashboard scaffold so `somlia.com` remains stable.
- Add the Angular dashboard as a separate app at `apps/dashboard`.
- Keep `supabase/` at repo root as the authoritative backend boundary for migrations, Edge Functions, generated types, and backend deployment notes.
- Add framework-neutral shared packages only if needed, such as `packages/brand` or `packages/design-tokens`.
- Do not import React landing components, `src/App.tsx`, landing CSS, or landing-only Tailwind patterns into Angular.
- Do not move the landing app to `apps/landing` during the first dashboard scaffold; make that a later cleanup issue if needed.

Rejected SOM-53 architecture alternatives:

- A separate dashboard repository is rejected for the MVP because it increases process, docs, brand, and backend drift, unless future access-control needs require it.
- Mixing Angular into the root React/Vite app is rejected because it violates the separate product surface and creates framework, build, and routing confusion.

Dashboard routing and deployment plan:

- Production dashboard host: `app.somlia.com`.
- Dashboard app `/` should redirect to `/dashboard/tasks`.
- Internal dashboard routes remain `/dashboard/tasks`, `/dashboard/tasks/:taskId`, `/dashboard/learning`, `/dashboard/feedback`, `/dashboard/proof`, and `/dashboard/settings`.
- Dashboard SPA fallback and rewrites belong inside the dashboard app/project, not the landing `vercel.json`.
- Keep the landing Vercel project on `somlia.com` with root directory `.`.
- Create a separate dashboard Vercel project, likely `somlia-dashboard`, with root directory `apps/dashboard` when scaffold/deployment work begins.
- Enable dashboard preview deployments for dashboard PRs.
- Production dashboard deploys only from merged `main` after PR review and required checks pass.
- Dashboard env vars must be scoped to the dashboard Vercel project and separated by Preview and Production.
- Do not reuse landing waitlist env vars for dashboard without explicit approval.
- Extra previews from two Vercel projects in one repo are acceptable initially; configure ignored-build settings later if preview noise becomes an issue.

Dashboard CI and command plan after scaffold:

- Extend existing GitHub Actions rather than creating an unrelated release path.
- Split future checks into `Landing test and build` and `Dashboard test and build`.
- Use npm workspaces and a shared lockfile if the scaffold adopts npm workspaces.
- Eventually require both landing and dashboard checks before merge to `main`.
- Future root scripts after scaffold: `dev:landing`, `test:landing`, `build:landing`, `dev:dashboard`, `test:dashboard`, `build:dashboard`, and `lint:dashboard`.

Dashboard backend and environment guardrails:

- Landing env vars remain the current public waitlist contract.
- Dashboard browser env vars must be separately named, separately scoped, and public-only.
- Never expose service-role keys, Loops secrets, webhook secrets, or admin credentials to Angular or browser env.
- For a non-data dashboard shell, no new Supabase project is required.
- Before authenticated or private dashboard data exists, create a staging Supabase project or equivalent isolated Preview/local environment.
- Production dashboard may later share Production Supabase if SOM-54 and SOM-55 define RLS, auth, storage, and data boundaries cleanly.
- `public."Whitelist"` remains locked and must not be renamed or folded into dashboard account tables as part of SOM-53.

Dashboard implementation guardrails:

- A non-data or mock Angular dashboard shell can be scaffolded only after a dedicated implementation issue is created and accepted.
- No real Project Proof schema, storage, dashboard data, or evidence implementation until Project Proof access matrix, RLS tests, state machine/transition authority, storage/evidence safety requirements, and privacy/legal lifecycle requirements are accepted.
- No real Feedback / Review implementation until access matrix, RLS/server-side transition plan, moderation/reporting model, reviewer conduct/conflict policy, audit logging, retention/deletion/export handling, privacy lifecycle, and Legal blockers are accepted.
- No upload, evidence, or storage implementation until Security and Legal requirements are defined.
- No live marketplace, payments, active paid opportunities, live verification, standalone `Verified` labels, public proof profiles by default, company dashboard flows, or numeric score/reputation features.

## Dashboard Auth, Roles, RLS, And Privacy Requirements

SOM-54 defines the Dashboard MVP access, auth, roles, RLS, and privacy/security requirements. Dashboard MVP starts as a waitlist-approved invite-only beta. Accounts are created only for explicitly invited or approved early cohort users; waitlist signup does not automatically create a dashboard account. Manual founder/admin approval is acceptable for the first MVP cohort. Open self-serve signup is deferred, and anonymous Supabase Auth dashboard users are not allowed unless Product and Security explicitly approve later.

Supabase Auth is the accepted MVP auth assumption unless Product, CTO, and Security later approve another provider. The preferred MVP login direction is low-friction email-based access, such as invite link, email OTP, or magic link, pending implementation-specific Backend/Security review. OAuth or social login is optional later and is not required for MVP. Password-based login is not a Product requirement; if later chosen, it requires additional security controls. Exact auth method, session policy, redirect allowlist, and account recovery flow remain implementation blockers before real auth launch.

Approved role model:

- External MVP dashboard role: `Contributor`.
- Internal/privileged roles: `Reviewer`, `Admin`, and `Support`.
- `Reviewer` is internal or explicitly approved for MVP and can access only assigned review contexts and minimum necessary evidence.
- `Admin` is privileged for cohort access, task/review assignment, moderation, and operations.
- `Support` is limited to support, privacy, and account request handling and should not browse private proof or work by default.
- Company people in controlled review pilots are specially approved reviewer contexts, not company dashboard users.
- Deferred roles: Company, company operator, investor/partner, hiring manager, Verified Contributor, Public Reviewer, Paid Contributor, and live marketplace roles.

Dashboard data separation:

- Dashboard account, profile, proof, and feedback tables must be separate from `public."Whitelist"`.
- `public."Whitelist"` remains locked and must not be renamed, converted into dashboard accounts, or exposed to dashboard users.
- Waitlist rows may inform invitation eligibility only through server-side or admin-controlled logic.
- Account creation requires user acceptance/activation; no silent conversion of waitlist records.

Privacy and visibility defaults:

- Dashboard profile, proof, feedback, task, submission, revision, and settings data are private by default.
- Contributors see their own data.
- Reviewers see only assigned or eligible review items and minimum necessary context.
- Admin sees operationally necessary data only, with auditability.
- Support sees minimum account/support data only.
- Public sees nothing in Dashboard MVP: no public proof profiles, public Project Proof URLs, public proof cards, public feedback pages, or indexed dashboard content.
- Companies see no contributor dashboard data in MVP.
- Public/shareable proof or profile behavior remains disabled until separately approved.

Settings MVP scope may include account basics, profile basics, privacy basics with clear private-by-default status, basic notification/email preferences, support/privacy contact, and optional external community links that are clearly external.

Settings non-goals are billing, payouts, company account settings, marketplace preferences, public profile controls implying public profiles are live, native chat/voice controls, and verified badge controls.

Dashboard RLS and authorization principles:

- RLS must be enabled on every dashboard table in exposed schemas before granting `anon` or `authenticated` access.
- Do not rely on `TO authenticated` alone for private access.
- Private rows need ownership, membership, reviewer-assignment, or explicit access predicates.
- Dashboard `anon` generally has no private table access.
- Do not use user-editable `user_metadata` or `raw_user_meta_data` for authorization or RLS.
- Durable roles and capabilities live in application tables controlled by RLS and service-side/admin operations; `app_metadata` or custom claims may be cache only.
- Inserts need `WITH CHECK`; updates need both `USING` and `WITH CHECK`.
- Views must be security-invoker or kept out of exposed schemas with anon/auth access revoked.
- Avoid `SECURITY DEFINER`; if unavoidable, apply strict controls plus tests and security review.

Trusted boundary and Edge Function requirements:

- Direct Supabase client CRUD is allowed only for simple user-scoped operations with explicit RLS.
- Edge Functions or server-side checks are required for invites/access gating, role assignment, admin/support operations, task/review assignment, state transitions, Project Proof finalization/publication/provenance, feedback workflows, uploads/scanning, external integrations, and export/deletion workflows if they are not manual.
- Existing `loops-waitlist` stays separate and must not become a dashboard lifecycle function.

Environment, deployment, session, admin, and privacy blockers:

- Dashboard browser env vars must be public-only, separately named/scoped, and separated by local, Preview, and Production.
- Never expose service-role keys, Supabase secret keys, Loops API keys, `WAITLIST_WEBHOOK_SECRET`, webhook credentials, admin credentials, database URLs, or private storage signing secrets to Angular or browser env.
- Staging Supabase or equivalent isolated Preview/local environment is required before authenticated or private dashboard data.
- Preview deployments must not write private/authenticated data into Production.
- Supabase Auth redirect URLs are required for local, Preview, and `https://app.somlia.com`; no broad production wildcard redirects.
- Admin/support/reviewer elevated access requires MFA/2FA and individual accounts.
- Define sessions, recovery, reset/magic-link resend limits, suspicious-login handling, revoke-all-sessions, and deletion/deactivation session revocation before auth launch.
- Admin/support access must be least-privilege and audited.
- Privacy policy and notice-at-collection must update before dashboard account, task, proof, submission, feedback, upload, notification, support, analytics, or new-processor data collection.
- Define deletion, export, unpublish, retention, anonymization, legal hold, and support ownership before real dashboard data collection.

Project Proof, Feedback, Upload, and AI blockers:

- No real Project Proof schema/storage/dashboard implementation until critical/high access, safety, privacy, and legal requirements are accepted.
- Project Proof is private by default; sharing/publication requires explicit consent.
- Use only allowed credibility vocabulary: `Demonstrated`, `Not yet reviewed`, `Reviewed`, and `Company-confirmed`.
- No standalone `Verified` labels or numeric reputation, credibility, or opportunity-readiness score.
- No Feedback / Review implementation beyond planning until access, provenance, visibility, abuse/moderation, versioning, revision-response, audit, and privacy/legal requirements are accepted.
- Feedback requires provenance, and users cannot self-award `Reviewed` or `Company-confirmed`.
- Upload/link/evidence remains blocked until storage/evidence safety requirements exist.
- AI-assisted review/evaluation remains blocked until data-sharing, prompt-injection, PII/secrets, provider retention, appealability, transparency, and processor/privacy requirements are approved.

SOM-54 GO/NO-GO:

- GO now only for a non-authenticated, no-private-data Angular dashboard shell or mock prototype after a dedicated implementation issue is created and accepted.
- NO-GO for real auth, private dashboard tables, storage/uploads, feedback writes, Project Proof records, admin/support read tooling, production secrets/private Preview data, public proof profiles, marketplace, payments, verified labels, numeric scores, native chat/voice, and company dashboard flows.

## Dashboard Project Proof Data Model

SOM-55 defines the Dashboard MVP conceptual data model around Project Proof. It is a planning/scope decision only and does not authorize schema, storage, RLS, upload, feedback, or dashboard implementation.

Approved conceptual model:

```text
Contributor -> Task/Project/Challenge/Brief source -> Project Proof -> Submission/Version/Revision -> Deliverables/Evidence placeholders -> Feedback/Review placeholders -> private Proof Card -> private Profile / Proof history
```

Project Proof remains the central private evidence unit: one Contributor attempt at one source project, challenge, or brief, including versions and revisions for that attempt. A proof card is a condensed private display/read model of one Project Proof, not a separate proof artifact. Profile / Proof is a private aggregation view, not a public profile product.

Learning connects to proof only through practical work, output, and evidence. Learning completion alone is not proof of skill.

Feedback/Review connections are modeled only as assigned/request-based structured workflow references. SOM-56 defines the workflow, reviewer eligibility, provenance, attribution, moderation, and state-effect boundaries, but it does not authorize implementation.

Dashboard Project Proof data constraints:

- Dashboard account, profile, proof, and feedback data remains separate from `public."Whitelist"`.
- Project Proof, proof cards, submissions, versions/revisions, feedback references, learning linkage, and proof history are private by default.
- Public profiles, share links, public proof cards, public Project Proof URLs, indexed proof pages, and company-visible proof are deferred.
- Future public/shareable behavior requires explicit Contributor consent, visibility state, audit trail, unpublish behavior, and Legal/Product approval.
- Allowed credibility vocabulary remains only `Demonstrated`, `Not yet reviewed`, `Reviewed`, and `Company-confirmed`.
- No standalone `Verified`, numeric score, reputation, quality, opportunity-readiness, marketplace unlock, payment, payout, paid status, company dashboard role, or live earning field.
- `Company-confirmed` is not user-selectable and requires a later controlled company/reviewer/admin confirmation policy.

Backend planning requirements:

- Do not model Project Proof as one giant mutable record.
- Separate task/source context, assignment/enrollment, Project Proof root, immutable submitted versions/revisions, deliverables, outcome/provenance labels, evidence placeholders, feedback references, proof-card display, proof-history aggregation, and audit/moderation records.
- Submitted versions must be immutable or append-only; resubmissions create new versions with lineage.
- Current-version pointers and post-submission state transitions should be server-side/constrained, not arbitrary client writes.
- Contributors cannot change ownership, internal roles, review assignments, company-confirmed states, public visibility, or protected provenance/credibility states.
- Later schema work requires exact RLS/access matrix, RLS tests, staging/Preview isolation, generated type strategy, and root `supabase/` migration/function authority.

Security and Privacy gates:

- Conditional NO-GO for real Project Proof schema, storage, or dashboard implementation until critical/high requirements are accepted.
- GO remains acceptable only for conceptual modeling and mock/no-data UI.
- RLS/access matrix is required per Project Proof-related entity before schema work.
- Strict data minimization is required. Avoid sensitive identity/payment/government data, raw client/customer/company data, secrets, full resumes/transcripts, native chat/DM data, broad telemetry/fingerprinting, raw uploads/files, and auto-fetched external-link content unless separately approved.
- Upload/link/evidence/storage remains blocked until private storage, scanning/quarantine or manual review, PII/secrets/confidential-data controls, link safety, retention/takedown, and publication/unpublish rules are approved.
- Privacy policy/notice-at-collection and deletion/export/unpublish/archive/anonymization/retention/legal-hold behavior must be defined before real Project Proof data collection.
- Abuse/moderation fields should be planned: moderation status, report/flag references, actor IDs, reason codes, evidence notes, admin disposition, and removed/hidden/redacted/restricted states.

## Dashboard Feedback / Review Workflow

SOM-56 defines the Dashboard MVP Feedback / Review workflow as a planning/scope decision only. It does not authorize feedback schema, writes, RLS, Edge Functions, notifications, moderation tooling, reviewer tooling, or dashboard implementation.

Core workflow decision:

- Dashboard MVP Feedback / Review uses assigned/request-based structured feedback, not open commenting.
- Feedback is tied to a specific submitted Project Proof version, submission, and task context, not to a contributor's whole identity.
- Internal Reviewer/Admin feedback is the default formal-review path.
- Contributor peer feedback is allowed only through explicitly assigned or eligible requests and is non-formal by default.
- Company reviewer participation is deferred except future controlled pilots with confidentiality, attribution, consent, company authority, Legal/Product/Security approval, and admin confirmation rules.
- Contributors cannot self-award `Reviewed` or `Company-confirmed`.

Approved workflow shape:

1. Contributor submits a version for a Task / Project.
2. Project Proof moves to `Submitted`.
3. Feedback/review request is assigned by system/admin logic or manual Admin/Reviewer assignment.
4. Reviewer or assigned peer gives structured feedback on the submitted version.
5. If changes are needed, Project Proof may move to `Changes requested` through authorized workflow.
6. Contributor revises/resubmits, creating a new version and moving to `Revised/resubmitted`.
7. If no formal review is completed, final state may be `Completed (not reviewed)` with `Demonstrated` or `Not yet reviewed` semantics.
8. If an authorized Reviewer/Admin completes formal review, the specific submitted version may support `Reviewed`.

Ordinary feedback conceptually requires target Project Proof, target submission/version, author/actor reference, source type, feedback type, strengths, improvement areas, suggested next step, clarity/usefulness self-check or confidence, reviewer relationship/context, and created-at.

Formal review additionally requires formal review flag/type, rubric/checklist reference, review outcome, evidence/version reviewed, confidence level, whether it may update review state, and provenance/authority context.

First MVP rubric dimensions:

- Brief fit.
- Deliverable quality.
- Process evidence.
- Revision response.
- Claim safety.
- Data safety.

Feedback request states:

- `Not requested`.
- `Requested`.
- `Assigned`.
- `In review`.
- `Feedback received`.
- `Changes requested`.
- `Revision submitted`.
- `Closed`.
- `Withdrawn`.

Review states:

- `Not reviewed`.
- `Review requested`.
- `Review in progress`.
- `Reviewed - changes requested`.
- `Reviewed - no changes requested`.
- `Unable to review`.
- `Review withdrawn`.

Revision response states:

- `No revision requested`.
- `Revision needed`.
- `Revision in progress`.
- `Revision submitted`.
- `Revision reviewed`.
- `Revision closed`.

There is no numeric score. Rubric outcomes should stay qualitative, such as `meets`, `needs work`, `not enough evidence`, and `not applicable`.

Visibility and display constraints:

- Feedback, review state, revision responses, proof cards, and Profile / Proof summaries are private by default.
- Contributors see their own feedback received, requested changes, revision response status, and assigned feedback given.
- Reviewers see assigned submissions/versions only and minimum necessary context.
- Admin has operationally necessary access with audit.
- Support sees minimum support/privacy/account data only unless escalated and audited.
- Public, company, and external access is absent in MVP.
- Proof cards and Profile / Proof may show private summary labels such as `Feedback received`, `Changes requested`, `Revised after feedback`, `Reviewed`, `Reviewed - changes requested`, `Reviewed - no changes requested`, `Not yet reviewed`, and `Demonstrated`.
- Feedback bodies should not be duplicated into proof cards, Profile / Proof aggregation, or future public displays without explicit policy and consent.

Security and Privacy gates:

- Conditional GO for the SOM-56 Product workflow as a planning decision only.
- NO-GO for implementation until access matrix, RLS/server-side transition plan, moderation/reporting model, reviewer conduct/conflict policy, retention/deletion/export handling, privacy lifecycle, and Legal blockers are accepted.
- Abuse controls are required before feedback writes, including controls for harassment, retaliation, review bombing, fake reviews, collusion/review trading, plagiarism-claim misuse, impersonation, spam, low-quality bulk feedback, coercive feedback, recruiting/payment solicitations, unsupported company/payment claims, and confidential data leakage.
- Reviewer/Admin/Support must use individual accounts; elevated roles require MFA/2FA per SOM-54.
- Feedback fields must stay structured and minimal; do not collect sensitive identity/payment/government data, secrets, raw screenshots/files/uploads, broad social graph, unrelated personal assessments, or auto-fetched external content without separate approval.
- Moderation/reporting states should be modeled before implementation: `active`, `reported`, `hidden_pending_review`, `redacted`, `removed`, `restricted`, `reinstated`, `appealed/review_requested`, and `resolved`.

Backend planning requirements:

- Model Feedback / Review around assigned/request-based structured feedback against a specific submitted Project Proof version.
- Keep ordinary feedback separate from formal review.
- Recommended conceptual entities: `feedback_request`, `feedback_response`, `formal_review`, `review_rubric`, `rubric_response`, `revision_response`, `review_assignment`, `feedback_visibility/summary`, and `audit_event`.
- Direct RLS CRUD may later be acceptable only for tightly scoped reads/writes, such as contributor reading own feedback, assigned reviewer reading assigned minimum context, and drafts where status/RLS allows.
- Edge Functions or server-side constraints are required for assignment/withdrawal, protected state transitions, formal review completion, `Reviewed`, future `Company-confirmed`, reviewer reassignment/conflicts, moderation actions, admin/support privileged access, notifications, external integrations, and future company reviewer workflow.
- RLS/access matrix must cover Contributor owner, assigned peer reviewer, internal Reviewer, Admin, Support, public, and deferred company reviewer.
- Audit events are required for assignments, eligibility changes, feedback edits/submissions where allowed, formal review completion, Project Proof lifecycle changes from review, revision responses, moderation actions, admin/support access, and any future company reviewer access/confirmation.

Explicit non-goals and deferred capabilities:

- Numeric scores or reputation.
- Reviewer reputation.
- Opportunity-readiness scores.
- Standalone `Verified` labels.
- Public reputation.
- Public proof profiles, proof cards, review pages, or reviewer profiles.
- Marketplace unlock or matching.
- Paid opportunity application flow.
- Payments, payouts, billing, escrow, or company acceptance workflow.
- AI review authority.
- Native chat, voice, or DM review threads.
- Full moderation tooling.
- Company dashboard review flow.
- Open commenting.
- Anonymous public reviews.

## Brand And UI Direction

The active brand is SOMLIA. The repository directory is still named `LERN`, and some older LERN/LERNI assets remain, but active product copy and UI should use SOMLIA.

The visual direction is restrained, professional, concrete, light, and product/editorial rather than dark-glass startup styling. Use existing section functions, local data arrays, Tailwind utilities, hard-edged panels, and `lucide-react` icons before adding new abstractions.

SOMLIA is not an edtech-style brand. Avoid playful learning visuals, cartoon illustrations, and generic course-platform messaging. The brand should feel serious, minimal, ambitious, and practical.

Current palette:

- Ink: `#111827`
- Blue: `#2563EB`
- Green: `#16A34A`
- Gold: `#F5B841`
- Cloud: `#F8FAFC`
- Slate: `#64748B`

Active SOMLIA assets live in `src/assets/*.webp`. Older LERN/LERNI image artifacts should not be treated as active brand assets unless explicitly revived.

Motion should stay subtle and must respect `prefers-reduced-motion`. Performance wins over decorative motion: avoid continuous movement on large hero panels, avoid expensive blur effects on sticky headers, prefer transform and opacity, and keep animations short, purposeful, and quiet.

## Technical Architecture

Core stack:

- Public landing framework: React `18.3.1` + Vite `6.0.5` + TypeScript `5.7.2`.
- Dashboard MVP framework: Angular, approved as a separate product surface; no Angular dashboard code has been scaffolded in this repository yet.
- Repo architecture target: small npm-workspace monorepo with the landing app staying at repo root for the first dashboard scaffold, the Angular dashboard at `apps/dashboard`, optional framework-neutral shared packages under `packages/*`, and root `supabase/` as the canonical backend boundary.
- Runtime/tooling policy: Node.js `24.18.0` pinned in `.nvmrc` and `.node-version`, with `package.json` requiring Node `>=24.15.0 <25`; GitHub Actions CI reads `.nvmrc`.
- Dashboard version target: Angular `22.0.x` after scaffold approval, with Angular-specific TypeScript and RxJS dependencies isolated to the dashboard app/workspace at `apps/dashboard`.
- Deployment target: keep landing on the existing Vercel project for `somlia.com` with root directory `.`, and create a separate dashboard Vercel project, likely `somlia-dashboard`, rooted at `apps/dashboard` and served from `app.somlia.com` when scaffold/deployment work begins.
- Styling: Tailwind CSS `3.4.17` plus global CSS in `src/styles.css`.
- Icons: `lucide-react`.
- Analytics: `@vercel/analytics/react`, dynamically loaded in `src/main.tsx`.
- Database: Supabase via `@supabase/supabase-js`.
- Email automation: Supabase Edge Function forwarding waitlist inserts to Loops.
- Tests: Vitest + Testing Library + jsdom.
- Deployment: Vercel.

Key files:

- `src/App.tsx` - main app, route selection, pages, sections, and waitlist form UI.
- `src/main.tsx` - React root and deferred Vercel Analytics loading.
- `src/lib/waitlist.ts` - client-side Supabase waitlist submission helper.
- `src/App.test.tsx` - route and waitlist UI tests.
- `src/lib/waitlist.test.ts` - Supabase submission tests.
- `src/styles.css` - Tailwind directives, global styles, shared `.field` class, and animations.
- `src/vite-env.d.ts` - typed Vite environment variables.
- `supabase/waitlist.sql` - `public."Whitelist"` schema, constraints, grants, and RLS insert policy.
- `supabase/functions/loops-waitlist/index.ts` - Edge Function for Supabase DB webhook to Loops.
- `supabase/loops-waitlist.md` - Loops and Supabase webhook setup instructions.
- `vercel.json` - rewrites for direct route visits.
- `index.html` - title and meta description.
- `.env.example` and `supabase/.env.example` - documented env var names only.

Local commands:

```sh
npm install
npm run dev
npm run preview
npm test
npm run test:watch
npm run build
```

For frontend changes, run `npm test` and `npm run build`. For visual changes, also verify desktop and mobile browser views.

Vercel rewrites cover `/roadmap`, `/roadmap/`, `/privacy-policy`, and `/privacy-policy/`.

## Waitlist Contract

The waitlist storage table is intentionally named `public."Whitelist"`. The client default is `VITE_SUPABASE_WAITLIST_TABLE=Whitelist`.

Current roles:

- `Learner`
- `Company`
- `Investor / Partner`

These must stay in sync:

- `WaitlistRole` in `src/lib/waitlist.ts`.
- Role select options in `WaitlistSection` inside `src/App.tsx`.
- Role check constraint in `supabase/waitlist.sql`.
- `ROLE_KEYS` in `supabase/functions/loops-waitlist/index.ts`.
- Loops workflow branches in `supabase/loops-waitlist.md`.
- Privacy copy if collected data, processors, or communication behavior changes.

Client-side code may use only public Vite env vars:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_WAITLIST_TABLE=Whitelist
```

The Supabase anon key is acceptable in frontend env vars for this insert-only waitlist flow. The Supabase service role key must never be exposed in frontend code or any `VITE_` variable. Keep the `Whitelist` casing exact anywhere the table name is referenced.

Server-only values belong in Supabase Edge Function secrets:

```env
LOOPS_API_KEY=
WAITLIST_WEBHOOK_SECRET=
LOOPS_WAITLIST_EVENT_NAME=waitlistJoined
```

The Loops Edge Function is deployed with `--no-verify-jwt` because it authenticates the database webhook with the `x-waitlist-webhook-secret` header. Preserve the method check, secret-header auth, table guard, role mapping, Loops payload shape, and idempotency key behavior when editing it.

Current data rules:

- Email is unique.
- Roles are enforced in frontend types/options and in the database check constraint.
- Name must be non-empty and no more than 160 trimmed characters.
- Message is optional and no more than 2000 characters.
- Supabase Row Level Security is enabled.
- Anonymous clients may insert only; no anonymous read, update, or delete policy is defined.
- Client-side Supabase auth persistence is disabled because the app only performs anonymous waitlist inserts.

Waitlist submission flow:

1. User submits the waitlist form in `WaitlistSection`.
2. `WaitlistSection` dynamically imports `submitWaitlistSignup` from `src/lib/waitlist.ts`.
3. `submitWaitlistSignup` normalizes values and inserts into Supabase table `Whitelist`.
4. Supabase stores the row in `public."Whitelist"`.
5. Supabase Database Webhook calls the `loops-waitlist` Edge Function on insert.
6. Edge Function validates the secret header.
7. Edge Function sends a role-specific event to Loops.
8. Loops workflow sends the matching email sequence.

The Edge Function accepts only `POST`, ignores non-insert events and non-`public."Whitelist"` payloads, maps role labels to `learner`, `company`, and `investor`, sends Loops event data with first name, optional last name, role metadata, truncated message, and created-at timestamp, and uses an idempotency key in the form `waitlist-{signup.id}-{eventName}`.

Loops should deliver role-specific welcome copy for learners, companies, and investors/partners. The newest handover prefers three separate role-specific Loops workflows instead of one mixed workflow, because each audience needs different copy. If Loops is configured as one workflow with role branches, keep the branch logic explicit and update `supabase/loops-waitlist.md` to match the real operational setup.

## Privacy And Compliance

The privacy policy is embedded in `src/App.tsx`. It currently names Supabase, Loops, and Vercel Analytics as service providers, lists an effective date of June 4, 2026, and uses `support@somlia.com` as the contact email.

The policy currently covers categories of personal information collected, purpose of collection, vendor disclosure, retention, rights, security, international transfers, children, policy changes, and a California-style notice-at-collection table. It is a practical site policy, not a substitute for attorney review.

If SOMLIA starts collecting new categories of data, uses new processors, changes analytics behavior, or adds account, payment, community, hiring, or marketplace features, update the privacy policy and notice-at-collection copy in the same change.

Do not commit real local secrets. `.env.local`, `supabase/.env`, and `*.local` env files are ignored intentionally.

## Marketing Ideas

Potential content angles:

- "Why certificates are not enough"
- "What a proof profile should show"
- "Proof of work for early-career talent"
- "How companies can discover emerging talent before hiring"
- "From learning to earning: the new career path"
- "Learning signal vs proof signal"
- "The missing bridge between courses and jobs"
- "Show what you can do, not just what you studied"
- "Proof before opportunity"
- "Build proof before you need permission"
- "Build proof before you ask for opportunity"
- "Learn by doing. Earn by proving"
- "Move from learning to earning with proof"
- "A proof profile for the skills your resume cannot show"
- "A proof profile for the AI-native professional"
- "A portfolio that grows every time you practice"
- "Learn, apply, prove, earn"
- "No resumes required. No credentials required. Only demonstrated capability"
- "Where practical work becomes career evidence"
- "Not another course. Not another job board. A proof network"

Potential launch channels:

- Student communities.
- Career changer communities.
- No-code and AI builder communities.
- Startup founder groups that need small useful tasks completed.
- LinkedIn build-in-public posts.
- University entrepreneurship groups.
- Bootcamps.
- Small business networks.
- Newsletters about the future of work and education.
- Waitlist referral campaign.

Potential campaigns:

- Show completed projects becoming proof cards.
- Recruit 5-10 companies to submit small, useful briefs.
- Invite an early learner cohort to complete one proof track in public.
- Reward specific, high-quality reviewer feedback.
- Share founder-led build-in-public updates around proof profiles, company briefs, and early outcomes.
- Publish proof-profile mock examples on social.
- Create comparison content: course certificate vs proof profile, job board vs demonstrated capability, resume claims vs completed project evidence.
- Produce short videos showing Learn -> Apply -> Review -> Prove.
- Run a "Proof Of Progress" content series explaining why certificates are not enough.
- Create founder-led waitlist updates from Stepan.
- Ask learners which skills they want to prove, and use answers to choose first tracks.
- Ask companies which small tasks they would outsource to emerging talent.
- Launch a small 7-day proof challenge for early learners.
- Offer early companies a low-friction pilot: one small task, one contributor, one measurable outcome.
- Run a "Show the work" launch campaign featuring before/after proof profiles.
- Publish a "From project to proof" content series showing how completed work becomes a credential-like artifact.
- Write a founder essay on the gap between learning platforms and job platforms.

Potential conversion improvements:

- Add role-specific landing sections for learners, companies, and partners.
- Add separate CTAs for people who want to build proof and companies that want to submit briefs.
- Add a lightweight sample proof profile preview.
- Add social proof once pilots exist: waitlist count, company logos, completed projects, reviewer count, or proof cards created.
- Add a stronger visual example of a real company brief.
- Add a dedicated `/companies` page.
- Add separate waitlist paths for learners, companies, and partners.
- Add sample proof profile detail view.
- Add sample paid assignment flow.
- Add conversion analytics for CTA clicks and waitlist roles.
- Add calendar/contact CTA for companies once company brief validation begins.

## Roadmap

Current roadmap page themes:

1. Build Proof
2. Learn Through Practice
3. Community Validation
4. Reputation Network
5. AI-Augmented Growth
6. Paid Opportunities

Suggested next roadmap detail:

- Validate waitlist collection end to end in production.
- Keep collecting segmented waitlist signups.
- Review learner, company, and investor/partner responses weekly.
- Identify the strongest first learner segment.
- Identify first company task categories.
- Track Loops email replies manually.
- Improve landing copy based on waitlist replies.
- Harden waitlist security.
- Clean git history before public release.
- Interview learners and companies.
- Confirm Vercel env vars are set in both Production and Preview.
- Test one live waitlist submission after redeploy.
- Confirm Loops workflows for all three roles.
- Add production monitoring for Supabase inserts and Edge Function failures.
- Replace or remove old LERN/LERNI assets if they are no longer needed.
- Add Open Graph and social preview assets for launch sharing.
- Add a basic admin/export workflow for waitlist entries.
- Add a consent checkbox if needed for marketing emails.
- Define the first 3 skill tracks. Candidate tracks include AI automation, marketing, sales, research, and operations.
- Recruit the first 20-50 beta users.
- Recruit the first 5-10 companies or startup task providers.
- Measure which audience segment converts best from the waitlist.
- Create a sample proof profile schema that aggregates multiple Project Proofs and provenance-backed signals; SOM-20 is conceptually unblocked.
- Design the first project/challenge format around a brief, submission, review rubric, revision loop, and Project Proof; SOM-21 is conceptually unblocked.
- Build project submission flow.
- Add basic project evidence pages.
- Add peer/professional reviewer and feedback workflow.
- Add feedback history, reviewer reputation signals, and revision tracking.
- Add public proof profile pages.
- Build proof profile MVP fields: completed projects, feedback received, reviews given, milestones earned, and opportunity readiness.
- Add milestones, competence signals, profile sharing, and verified contributor status.
- Add AI feedback support, AI-assisted project review, personalized next-step recommendations, and skill gap detection.
- Add AI project brief generation for companies, AI review summaries, AI proof profile summaries, AI matching between contributors and briefs, and AI quality checks for submissions.
- Add company brief intake.
- Add company brief validation before users access submitted briefs.
- Define pricing or unpaid pilot rules for first company briefs.
- Add company review and repeat-task flow.
- Add admin dashboard for reviewing waitlist and submissions.
- Expand email automation beyond waitlist confirmation into early access cohort emails, challenge completion notifications, and company lead follow-up.
- Add payment flow once paid tasks begin.
- Define platform fees, contributor eligibility rules, dispute handling, and basic contracts or task terms.

Future platform and engineering considerations:

- Add user accounts, learner profiles, proof profile pages, company brief management, matching, notifications, and email preferences.
- Add terms of service before account or marketplace features.
- Add community guidelines and reviewer conduct policy before community review or marketplace features.
- Add consent and email preference management.
- Add unsubscribe process and improve email deliverability.
- Add data deletion/export processes.
- Add abuse reporting and moderation workflow for community features.
- Review payment, tax, contractor classification, and marketplace terms before paid opportunities.
- Consider moving content/data arrays out of `src/App.tsx` as the site grows.
- Consider adding a lightweight router if the route count increases.
- Add E2E tests for direct routes and waitlist submission.
- Add Edge Function tests or a local validation script.
- Add CI for `npm test` and `npm run build`.
- Add deployment environment documentation for Vercel and Supabase.
- Add error logging or observability for failed waitlist submissions.

## Open Questions

- Who is the first target user: students, career changers, young professionals, freelancers, startup operators, AI upskillers, or another group?
- What are the first practical skill tracks?
- What counts as verified proof in the MVP?
- What does a minimum proof card include?
- Who reviews submitted work at the MVP stage: peers, experts, AI, companies, or a mix?
- What level of proof should unlock company briefs?
- How will quality be scored?
- What is the first company task type that is simple enough to pilot?
- Will SOMLIA own learning content, aggregate external content, or focus only on projects and proof?
- Should companies submit real paid briefs immediately or start with simulated briefs?
- Will companies pay SOMLIA, learners, or both?
- Do companies pay per brief, verified contributor, subscription, success fee, or hiring outcome?
- How will paid tasks be priced?
- Are company briefs open competitions, matched assignments, or invite-only?
- How much of the product starts as manual operations before automation?
- Should learners earn immediately or only after reaching verified status?
- Are learner accounts free at launch?
- Will reviewers be compensated or reputation-based?
- Who is the first customer: learners, companies, schools, bootcamps, sponsors, or partners?
- Which launch wedge is strongest: learners or companies?
- Which first vertical is strongest: AI automation, research, content, operations, sales, design, or another skill area?
- What company segment is easiest to sell to first?
- What proof or traction is needed before pitching companies?
- Should SOMLIA stay broad or focus on one niche first?
- Should the brand emphasize "proof of progress" or "proof of work" more heavily?
- Is "Proof Of Progress" the final product language?
- Should the main headline stay "Build proof of progress" or return closer to "Learn. Apply. Earn."?
- Should SOMLIA emphasize AI-native learning more strongly above the fold?
- Should "paid opportunities" be softened until the operational model is validated?
- What is the first live beta promise: learning path, project feedback, paid task access, or proof profile?
- Which geography and regulatory market is the initial focus?
- Who monitors waitlist submissions and follows up with priority leads?
- Who owns support email responses, privacy requests, deletion requests, Loops workflows, and segmentation?
- What is the escalation path if Supabase inserts work but Loops emails fail?
- Should roadmap phases be more detailed on the `/roadmap` page?
- Does the privacy policy need legal review before public launch?
- Should Vercel production env vars be configured now?
- Should `public."Whitelist"` remain the long-term table name, or should it become `waitlist_signups` before production hardening?
- Should routing move to React Router or another proper router once routes grow?
- Should route-specific metadata be handled through a framework like Next.js if SEO needs increase?
- Should privacy policy content move out of `src/App.tsx` into structured content files?
- Should analytics remain Vercel-only, or will product analytics be added later?
- Should Edge Function deployments be managed manually or through CI?
- Should Supabase reads and admin dashboards be added later?
- Should waitlist records include source/referral tracking?
- Should the Loops webhook handle retries or dead-letter logging?
- Should proof profiles become authenticated user records in Supabase Auth?
- Is `dist/` intentionally generated only locally, or should build artifacts never be committed?
- Is Loops definitely the email provider for launch and lifecycle automation beyond waitlist confirmation?
- What data retention policy should apply specifically to waitlist entries?
- What should happen to existing waitlist users once the first MVP is ready?
- How often should founder updates be sent?
- What are the first success metrics: waitlist size, replies, company briefs, completed projects, paid tasks, or repeat usage?
- How will abuse prevention work for waitlist and later task submissions?
- What marketplace trust and safety rules are needed?
- How will low-quality reviews be detected or discouraged?
- How will SOMLIA prevent fake proof or shallow feedback?
- Should proof profiles be private, shareable, or fully public?
- What proof profile data is public, private, or company-visible?
- How should AI feedback be labeled and trusted?
- What makes a milestone "Gold" or opportunity-ready?
- What countries will the first version support?
- What brand casing should be enforced everywhere, likely `SOMLIA` in all caps?
- What legal and payment requirements apply before paid opportunities launch?

## Launch And Handoff Checklist

- Run `npm test`.
- Run `npm run build`.
- Confirm `.env.local` has valid Supabase public values for local testing.
- Confirm Vercel Production and Preview have the required public env vars.
- Confirm Supabase table and RLS policy are applied.
- Confirm Supabase DB webhook is configured for `public."Whitelist"` inserts.
- Confirm `LOOPS_API_KEY`, `WAITLIST_WEBHOOK_SECRET`, and `LOOPS_WAITLIST_EVENT_NAME` are set in Supabase secrets.
- Submit a test waitlist signup.
- Verify the row exists in Supabase.
- Verify the Edge Function logs show success.
- Verify Loops receives the contact and event.
- Verify the correct Loops workflow email sends for each role.
- Review privacy policy with counsel before public scale.

## Decision Log

Dates marked `estimated` are inferred from local git history, handover timestamps, and conversation context. They approximate when the decision first appeared in the project, not necessarily the exact moment it was made.

- 2026-06-28: Product, Security/Privacy, and Backend defined the Dashboard MVP Feedback / Review workflow. Feedback starts as assigned/request-based structured feedback tied to a specific submitted Project Proof version, not open commenting or feedback on a contributor's identity. Internal Reviewer/Admin feedback is the default formal-review path; assigned Contributor peer feedback is allowed as non-formal by default; company reviewer participation and Company-confirmed outcomes are deferred except controlled future pilots with authority, consent, and approval. Feedback can request changes, drive revision/resubmission, and support private proof-history labels such as Demonstrated, Not yet reviewed, Reviewed, Feedback received, Changes requested, and Revised after feedback. Contributors cannot self-award Reviewed or Company-confirmed. Numeric scores/reputation, standalone Verified labels, public reputation, public proof/review pages, marketplace/payment behavior, AI review authority, native chat/voice, open commenting, and full moderation tooling remain deferred.
- 2026-06-28: Product, Backend, and Security/Privacy defined the Dashboard MVP conceptual data model around Project Proof. The core model is Contributor -> Task/Project/Challenge/Brief source -> Project Proof -> Submission/Version/Revision -> Deliverables/Evidence placeholders -> Feedback/Review placeholders -> private Proof Card and private Profile / Proof history. Project Proof remains the central private evidence unit; proof cards are condensed displays, and Profile / Proof is a private aggregation of Project Proofs, demonstrated skills, feedback references, revisions, learning connections, and provenance labels. Learning completion is not proof by itself; Feedback / Review workflow details are handled by SOM-56. Public profiles/share links, standalone Verified labels, numeric scores/reputation/opportunity-readiness, marketplace/payment data, company dashboard data, uploads/storage, and real schema/RLS/storage implementation remain deferred pending approved access matrices, safety requirements, privacy lifecycle, and Legal/Product decisions.
- 2026-06-28: Product, Backend, and Security/Privacy defined Dashboard MVP auth, roles, RLS, and privacy/security requirements. Dashboard access starts as a waitlist-approved invite-only beta using Supabase Auth as the accepted provider assumption. The only external MVP role is Contributor; Reviewer, Admin, and Support are internal/privileged roles with least-necessary access. Dashboard account/profile/proof/feedback data remains private by default and separate from `public."Whitelist"`. Public proof profiles, company/operator/investor dashboard roles, marketplace access, payments, verified contributor labels, numeric scores/reputation, native chat/voice, and automatic account creation from waitlist records are deferred. Implementation beyond a mock/no-data shell is blocked until auth/session/redirects, RLS access matrices/tests, staging Supabase isolation, privacy notice/data lifecycle, admin/support audit, Project Proof data model, and Feedback/Review workflow requirements are accepted.
- 2026-06-28: Operations/Engineering approved the Dashboard MVP technical architecture. SOMLIA will evolve the current repo into a small npm-workspace monorepo when dashboard scaffolding begins, keeping the React/Vite landing and waitlist app in the repo root and adding the Angular dashboard as a separate app at `apps/dashboard`. The dashboard will use a separate Vercel project on `app.somlia.com`, with root `supabase/` remaining the canonical backend boundary. Angular code, dependencies, TypeScript constraints, routes, env vars, and deployment settings stay isolated from the landing surface. Real authenticated dashboard data remains blocked until auth/RLS/privacy, Project Proof data model, and Feedback/Review workflow decisions are complete.
- 2026-06-28: Operations/Engineering pinned the SOMLIA repo Node.js policy for Dashboard MVP architecture: local development and CI use Node.js `24.18.0`, `package.json` accepts Node `>=24.15.0 <25`, and GitHub Actions reads `.nvmrc`. Dashboard scaffolding should target Angular `22.0.x`, with Angular-specific TypeScript/RxJS requirements isolated to `apps/dashboard`; the existing React/Vite landing and waitlist app remains unchanged except that it must continue to pass tests and build under the pinned Node line.
- 2026-06-26: Founder and CTO approved starting a SOMLIA MVP dashboard as a separate Angular product surface while preserving the existing React/Vite landing and waitlist site as the public marketing surface. MVP dashboard scope includes Tasks/Projects, Learning, Feedback/Review, Profile/Proof, and Settings; community chat/voice, live marketplace, payments, active paid opportunities, live verification, and numeric overall score are deferred unless Product, Security, and Legal approve later.
- 2026-06-26: Product defined the Dashboard MVP as a separate Angular learner/contributor workspace with five primary areas: Tasks / Projects, Learning, Feedback / Review, Profile / Proof, and Settings. The default dashboard experience should center on practical work that becomes Project Proof, with feedback and revisions connected to proof history. Company marketplace, payments, active paid opportunities, verified contributor status, numeric scores/reputation, native community chat/voice, company dashboard flows, and public proof profiles remain deferred pending later Product, Security, Legal, and Engineering approval.
- 2026-06-21: Product defined the first proof artifact as a Project Proof: one structured, private-by-default evidence record for one contributor's attempt at one project, challenge, or company brief, including outputs, process evidence, feedback, revisions, reflection, and provenance-labeled outcomes. Proof profiles will later aggregate multiple Project Proofs. MVP credibility is descriptive and provenance-based; standalone Verified labels and numeric credibility scores are deferred.
- 2026-06-20: Product approved `Share a company task` as the first company-facing brief-interest CTA. It reuses the existing waitlist by scrolling to it with `Company` preselected and company-specific optional-message guidance; no new fields, routes, external forms, calendar flow, backend contract, or privacy data categories are introduced.
- 2026-06-07: Product approved broadening the first sprint into a proof-of-progress validation sprint. AI/no-code builders remain the primary first audience wedge, but the story should cover learning, practice, community feedback, proof profiles, and opportunity after proof. Suggested content ratio is 60% AI/no-code builder posts, 25% broader career/proof-of-progress posts, and 15% company/operator posts, with secondary learner audiences of career changers and early-career builders and company-side discovery focused on startup operators and founders with small useful tasks.
- 2026-06-07: Product defined a company brief as a real-world project prompt from a company, scoped tightly enough for emerging talent to solve and concrete enough to become proof of skill. A company brief is a small practical work challenge around a real business problem or task, not a general company description or about-us summary, and should include context, objective, constraints, deliverables, evaluation criteria, deadline/effort size, simulated/unpaid/paid status, and the proof added if completed well.
- 2026-06-07: Product approved qualified earning/opportunity wording for the first validation sprint. Marketing may explicitly say earning is part of the SOMLIA journey and that SOMLIA is being built to connect trusted proof with company/partner opportunities on/through the platform after proof, but must not imply that paid opportunities, marketplace access, or payment functionality are live today.
- 2026-06-06: Project Bible/docs-maintenance chat adopted a cross-chat thread-reporting workflow: report docs update completions, blockers, and scope questions back through Codex thread messaging when Operations/Admin requests report-back; coordinate decision, blocker, workflow, and handoff updates with Operations/Admin and relevant source chats; keep Linear as the operational source of truth for actionable work and status; do not make product strategy decisions through docs edits without Product approval.
- 2026-06-06: Product approved the 14-day validation sprint proof-reply response flow: people who reply "proof" on LinkedIn or X should receive a public acknowledgement plus a short, non-spammy DM with the early access/waitlist link and one validation question about the skill they want to prove. Proof replies are validation signals, not only waitlist conversions; do not promise live proof profiles, paid work, or company brief access, and do not manually add people to email marketing unless they submit the waitlist form themselves.
- 2026-06-05: Created this Project Bible from the SOMLIA handover and existing repo instructions, removing repeated implementation notes and preserving unique product, technical, privacy, and roadmap decisions.
- 2026-06-05: Product chat owns SOMLIA product decisions, MVP scope, acceptance criteria, roadmap placement, and implementation handoff. Backend and frontend chats own execution only after product scope is clear enough to build.
- 2026-06-05: Created an Operations/Admin chat role to manage Linear hygiene, cross-chat handoffs, sprint tracking, blocker tracking, and operational readiness while Product remains responsible for strategy, scope, and product decisions.
- 2026-06-05: SOMLIA uses Operations/Admin chat as the orchestrator for cross-chat work. Linear remains the operational source of truth; Product defines scope and decisions; Backend and Frontend execute implementation-ready issues; Operations/Admin coordinates dispatch, status, blockers, and documentation update suggestions.
- 2026-06-05: Linear status workflow is Backlog for captured work, Todo for approved next-up work, In Progress for active execution, In Review for reported-complete work awaiting verification, and Done for verified/accepted work. The `Blocked` label marks access, decision, dependency, or external-state blockers, and the `Handoff Ready` label marks scoped work ready for dispatch.
- 2026-06-05: SOMLIA's first marketing push will be a 14-day founder-led validation sprint focused on learner-side demand, with lightweight company discovery in parallel. The goal is to identify the strongest first learner segment and first company task category, not to run a broad public launch.
- 2026-06-05: SOMLIA's first 14-day validation sprint will target AI/no-code builders as the primary learner audience because they already understand project-based proof, share work publicly, and overlap with future company task demand in automation, research, marketing operations, and internal tools.
- 2026-06-05: The first AI/no-code builder validation sprint campaign promise is "Build proof that you can ship useful AI/no-code work, not just learn tools."
- 2026-06-05: The first SOMLIA validation sprint will run for 14 days with 3 founder-led LinkedIn/X posts per week, 10 direct learner conversations, 5 direct company/operator conversations, one waitlist CTA, simple tracking in Linear or a sheet, and weekly review of signups, replies, and repeated language.
- 2026-06-05: LinkedIn will be the primary channel for the first 14-day SOMLIA validation sprint, with optional adapted reposts to X. LinkedIn is prioritized for founder-led credibility, early professionals, operators, company discovery, and YC/investor legibility.
- 2026-06-05: The first validation sprint will use four content pillars: Proof Beats Certificates, Show The Work, AI/No-Code Needs Trust, and From Practice To Opportunity.
- 2026-06-05: Marketing execution will start after Product approves strategy. Marketing chat will draft campaign assets first; Operations/Admin chat will then convert approved campaign work into Linear tasks and track execution.
- 2026-06-02 (estimated): Active brand changed to SOMLIA, despite the repository directory and some legacy assets still using LERN/LERNI names.
- 2026-06-02 (estimated): Routing remains intentionally simple and client-side inside `src/App.tsx`; Vercel rewrites support direct visits to `/roadmap`.
- 2026-06-02 (estimated): Supabase became the waitlist data store, with table `public."Whitelist"` and client default `VITE_SUPABASE_WAITLIST_TABLE=Whitelist`.
- 2026-06-02 (estimated): Waitlist roles were set as `Learner`, `Company`, and `Investor / Partner`; every role change must update frontend, SQL, Edge Function, Loops workflow docs, and privacy copy as needed.
- 2026-06-02 (estimated): Supabase RLS permits anonymous waitlist inserts only; no anonymous read, update, or delete policy is defined.
- 2026-06-02 (estimated): The Supabase anon key may be exposed through frontend Vite env vars for the insert-only waitlist flow; the service role key must remain server-only and must never use a `VITE_` prefix.
- 2026-06-02 (estimated): Vercel Analytics is used through `@vercel/analytics/react` and loaded lazily in `src/main.tsx`.
- 2026-06-03 (estimated): Product narrative centers on "Learn -> Apply -> Earn" and "Build proof of progress."
- 2026-06-03 (estimated): Positioning moved from paid practical tasks toward proof of progress: practical projects, feedback, revision, competence signals, and opportunity readiness.
- 2026-06-03 (estimated): "Proof profile" is the central product artifact, and paid opportunities are roadmap intent rather than a live product promise.
- 2026-06-03 (estimated): Community review is part of the core product loop, with reviewer reputation and revision history as future proof signals.
- 2026-06-03 (estimated): The website style moved from a dark/glass startup page to a lighter, cleaner product/editorial page using the SOMLIA palette.
- 2026-06-03 (estimated): Performance wins over decorative motion: avoid continuous hero-panel motion and expensive sticky-header blur; prefer subtle transform/opacity animations with reduced-motion support.
- 2026-06-03 (estimated): The waitlist helper and Supabase client are lazy-loaded so the initial frontend stays lighter.
- 2026-06-03 (estimated): Loops is integrated through a Supabase Edge Function triggered by database inserts, not exposed through client-side `VITE_` variables.
- 2026-06-03 (estimated): The Loops Edge Function stays deployed with `--no-verify-jwt` and relies on `x-waitlist-webhook-secret` for webhook authentication.
- 2026-06-04 (estimated): Current landing information architecture is Hero, Problem, How SOMLIA Works, Proof System, Community Layer, Real Opportunities, For Companies, Roadmap, Waitlist, and FAQ.
- 2026-06-04 (estimated): Vercel rewrites support direct visits to `/privacy-policy` as well as `/roadmap`.
- 2026-06-04 (estimated): Vercel rewrites should cover both plain and trailing-slash variants for roadmap and privacy routes.
- 2026-06-04 (estimated): The embedded privacy policy names Supabase, Loops, and Vercel Analytics, with effective date June 4, 2026.
- 2026-06-04 (estimated): The embedded privacy policy is a practical site policy with notice-at-collection content, not a substitute for attorney review.
- 2026-06-05 (estimated): The broader product journey is Learn -> Apply -> Review -> Improve -> Prove -> Earn.
- 2026-06-05 (estimated): SOMLIA is also not positioned as a freelance marketplace; the stronger framing is a bridge from skills to real opportunity through verified proof.
- 2026-06-05 (estimated): SOMLIA is infrastructure for measurable personal progress, where every meaningful learner action should create visible evidence.
- 2026-06-05 (estimated): The early product wedge is waitlist validation before account, marketplace, or paid brief flows.
- 2026-06-05 (estimated): Companies should submit real briefs rather than traditional job postings, and opportunities should come after demonstrated capability.
- 2026-06-05 (estimated): The opportunity layer should make the payoff concrete as Company brief -> Verified contributors -> Completed work -> Payment issued -> New proof added.
- 2026-06-05 (estimated): Website narrative should stay learner-first but not learner-only, with a rough 70% learner progress and 30% company/opportunity balance.
- 2026-06-05 (estimated): The first challenge format should include a brief, submission, review rubric, revision loop, and proof artifact.
- 2026-06-05 (estimated): Candidate first skill tracks are AI automation, marketing, sales, research, and operations.
- 2026-06-05 (estimated): Proof profile MVP should capture completed projects, feedback received, reviews given, milestones earned, and opportunity readiness.
- 2026-06-05 (estimated): Company briefs should pass through SOMLIA validation before eligible users access them.
- 2026-06-05 (estimated): Terms of service, payment terms, community guidelines, and reviewer conduct policy are needed before account, paid-opportunity, or community-review features scale.
- 2026-06-05 (estimated): SOMLIA should avoid edtech-style visuals and generic course-platform messaging; the brand should feel serious, minimal, ambitious, and practical.
- 2026-06-05 (estimated): Current documented frontend versions are React 18.3.1, TypeScript 5.7.2, Vite 6.0.5, and Tailwind CSS 3.4.17.
- 2026-06-05 (estimated): Role-specific Loops welcome emails are preferred as three separate audience workflows; if implemented as one branched workflow, documentation must reflect the actual setup.
- 2026-06-05 (estimated): Early validation should include weekly review of segmented waitlist responses, manual tracking of Loops replies, and landing-copy iteration based on replies.
- 2026-06-05 (estimated): Product validation should measure which waitlist audience segment converts best before committing to the first wedge.
- 2026-06-05 (estimated): Early company validation should use low-friction pilots: one small task, one contributor, and one measurable outcome.
- 2026-06-05 (estimated): Paid-opportunity work will require platform fees, contributor eligibility, dispute handling, and basic contracts or task terms.
- 2026-06-05 (estimated): AI roadmap should include company brief generation, review summaries, proof profile summaries, matching, and quality checks, not only learner feedback.
- 2026-06-05 (estimated): Attached handover listed email automation as not implemented; reconciled against current repository state by treating waitlist insert-to-Loops as implemented while lifecycle/onboarding automation remains roadmap work.
