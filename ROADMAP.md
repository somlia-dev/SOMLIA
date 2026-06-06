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
- Define the first proof artifact shape.
- Create a sample proof profile schema.
- Design the first project/challenge format: brief, submission, review rubric, revision loop, and proof artifact.
- Add a stronger visual example of a real company brief to the website.
- Add Open Graph and social preview assets for launch sharing.
- Add basic SEO metadata for roadmap and privacy routes if needed.
- Add a dedicated company brief interest CTA or calendar/contact CTA.

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

## Blockers

- Supabase DB webhook and Edge Function secrets must be confirmed in production.
- Loops workflow setup needs verification against the real operational configuration.
- First learner segment is not chosen.
- First skill track is not chosen.
- First company task category is not chosen.
- Proof artifact and proof profile MVP shape are not finalized.
- Privacy policy should be reviewed with counsel before public scale.
- Paid opportunities require legal, payment, contractor classification, dispute, and marketplace terms review before launch.

## Workstreams

## 1. Product

### Current Priorities

- Keep the product wedge focused on waitlist validation.
- Preserve the core positioning: Learn -> Apply -> Earn and Build proof of progress.
- Keep the site learner-first but not learner-only, roughly 70% learner progress and 30% company/opportunity narrative.
- Validate which audience segment has the strongest signal.
- Define the first practical track and proof artifact.

### Next Tasks

- Review segmented waitlist responses weekly.
- Identify the strongest first learner segment.
- Validate whether AI/no-code builders are the strongest first learner segment.
- Identify first company task categories.
- Define the first practical skill track.
- Define the first proof card contents.
- Draft the first project/challenge format.
- Define what makes a contributor verified or opportunity-ready at MVP stage.
- Decide whether first company briefs are simulated, unpaid pilots, or paid from day one.

### Later Tasks

- Build proof profile MVP fields: completed projects, feedback received, reviews given, milestones earned, opportunity readiness.
- Add project submission and revision history.
- Add milestones and competence signals.
- Add verified contributor status.
- Add company brief validation and matching.
- Add payment flow and platform fee model.
- Add AI-assisted feedback, review summaries, proof summaries, matching, and quality checks.

### Dependencies

- First learner segment.
- First company task category.
- Review rubric.
- Proof artifact schema.
- Company brief validation rules.
- Legal and payment review before paid opportunities.

### Open Questions

- Who is the first target user: students, career changers, young professionals, freelancers, startup operators, AI upskillers, or another group?
- What is the first practical skill track?
- What counts as verified proof in the MVP?
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
- Add basic SEO metadata for roadmap and privacy routes if route-specific metadata becomes needed.
- Add dedicated company brief interest CTA or contact path.
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
- Run a 14-day founder-led validation sprint focused on learner-side demand, with lightweight company discovery in parallel.
- Target AI/no-code builders as the first validation sprint learner audience.
- Use "Build proof that you can ship useful AI/no-code work, not just learn tools" as the first validation sprint campaign promise.
- Use LinkedIn as the primary channel for the first validation sprint, with optional adapted reposts to X.
- Keep messaging against passive courses, weak resumes, generic job boards, and certificates without evidence.
- Keep company story practical: real briefs, verified contributors, completed work, outcomes.
- Use LinkedIn and founder-led updates as early storytelling channels.

### Next Tasks

- Define the first 14-day validation sprint audience.
- Draft founder-led launch posts.
- Build the first validation sprint content calendar around four pillars: Proof Beats Certificates, Show The Work, AI/No-Code Needs Trust, and From Practice To Opportunity.
- Run 3 founder-led LinkedIn/X posts per week during the 14-day validation sprint.
- Create learner discovery questions.
- Create company discovery questions.
- Hold 10 direct AI/no-code learner conversations.
- Hold 5 direct company/operator discovery conversations.
- Track which posts and conversations produce high-signal waitlist signups.
- Track sprint signups, replies, conversations, and repeated language.
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
