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

The early product wedge is waitlist validation before account, marketplace, or paid brief flows are built. Companies are future demand-side users who submit practical briefs, not traditional job postings, and discover ability before hiring. Opportunities should come after demonstrated capability. "Proof profile" is the central product artifact. Paid opportunities are part of the roadmap, not something the current site should imply is already live.

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

## Current Product Surface

The current app is a Vite, React, TypeScript, and Tailwind CSS single-page landing and waitlist site deployed on Vercel.

Current routes:

- `/` - landing page.
- `/roadmap` - roadmap page.
- `/privacy-policy` - privacy policy page.

Routing is intentionally handled inside `src/App.tsx` by reading `window.location.pathname`. Direct visits to client-side routes are supported by rewrites in `vercel.json`.

The landing page currently includes:

- Fixed responsive navigation with a mobile menu.
- Hero: "Build proof of progress."
- Problem comparison: old model vs SOMLIA model.
- How it works: Learn, Apply, Earn.
- Proof system: proof profiles, feedback history, competence signals.
- Community layer: review and revision loop.
- Real opportunities: company briefs, verified contributors, outcomes.
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

- Framework: React `18.3.1` + Vite `6.0.5` + TypeScript `5.7.2`.
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
- Add basic SEO metadata for roadmap and privacy routes if route-specific metadata becomes needed.
- Add a dedicated company brief interest CTA.
- Add a basic admin/export workflow for waitlist entries.
- Add a consent checkbox if needed for marketing emails.
- Define the first 3 skill tracks. Candidate tracks include AI automation, marketing, sales, research, and operations.
- Recruit the first 20-50 beta users.
- Recruit the first 5-10 companies or startup task providers.
- Measure which audience segment converts best from the waitlist.
- Define the shape of a proof artifact.
- Create a sample proof profile schema.
- Design the first project/challenge format: brief, submission, review rubric, revision loop, and proof artifact.
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

- 2026-06-07: Product approved broadening the first sprint into a proof-of-progress validation sprint. AI/no-code builders remain the primary first audience wedge, but the story should cover learning, practice, community feedback, proof profiles, and opportunity after proof. Suggested content ratio is 60% AI/no-code builder posts, 25% broader career/proof-of-progress posts, and 15% company/operator posts, with secondary learner audiences of career changers and early-career builders and company-side discovery focused on startup operators and founders with small useful tasks.
- 2026-06-07: Product defined a company brief as a real-world project prompt from a company, scoped tightly enough for emerging talent to solve and concrete enough to become proof of skill. A company brief is a small practical work challenge around a real business problem or task, not a general company description or about-us summary, and should include context, objective, constraints, deliverables, evaluation criteria, deadline/effort size, simulated/unpaid/paid status, and the proof added if completed well.
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
