# SOMLIA Private Access Handoff Template

> Security warning: This file records access status and secure-item references
> only. Never record passwords, tokens, recovery codes, private keys, database
> credentials, connection strings, API keys, or secret values here. Ignored is
> not encrypted: the `.handoff/` directory is not a credential vault. Store all
> credentials in the approved password manager and use individual invitations.

## Person And Review

| Field | Value |
|---|---|
| Developer name |  |
| Work email |  |
| GitHub username |  |
| Start date |  |
| Access approved by |  |
| Initial review date |  |
| Next access review / expiry |  |
| Revocation/offboarding owner |  |
| Managed or personal device |  |
| Device security confirmed |  |

## Approval Requirements

- [ ] Every service uses an individual account; no shared login.
- [ ] 2FA is complete before access is approved; phishing-resistant methods are
      preferred where supported.
- [ ] Personal recovery codes remain in the developer's secure manager.
- [ ] Founder/Operations controls organization-owner and critical recovery paths.
- [ ] Least-privilege role and production scope are recorded per service.
- [ ] Any production elevation has a Linear issue, approver, scope, start date,
      review/expiry date, verification plan, and revocation owner.
- [ ] No credential was sent through email, Linear, a PR, ordinary chat, or AI.
- [ ] The developer understands that ignored local files are not encrypted.

## Development Services

For each service, `Secure item reference` means the password-manager item name or
identifier only. Never paste the credential value.

### GitHub

| Field | Value |
|---|---|
| Repository | https://github.com/aerostepan/LERN |
| Individual account |  |
| Approved role | Write/collaborator only; no Admin |
| Invitation accepted |  |
| 2FA confirmed |  |
| Clone/push branch verified |  |
| Access approver |  |
| Review/expiry date |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |
| Notes | No direct pushes to `main` |

### Linear

| Field | Value |
|---|---|
| Workspace/team | SOMLIA |
| Individual account |  |
| Approved role | Member with SOMLIA team/assigned-issue access; no admin |
| Invitation accepted |  |
| 2FA/SSO confirmed |  |
| Assigned issue read/update verified |  |
| Access approver |  |
| Review/expiry date |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |

### Vercel

Default: Preview visibility/deployment only where the current plan supports it.
No production environment settings, domains, rollback/promote, team admin, or
billing permission. If the plan cannot separate these permissions, document the
effective risk and obtain Founder/Operations approval before granting access.

| Field | Value |
|---|---|
| Project | somlia |
| Individual account |  |
| Effective role and plan limitation |  |
| Preview access verified |  |
| Production visibility required? |  |
| Production settings denied/confirmed |  |
| 2FA confirmed |  |
| Access approver / Linear issue |  |
| Start and review/expiry date |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |

### Supabase

Default: no dashboard access. Grant task-bound, project-scoped access only when
an assigned backend issue requires it. Never grant Owner/Admin. Even read-only
access may expose production PII or secrets, so record the effective access and
obtain explicit Founder/Operations approval.

| Field | Value |
|---|---|
| Organization/project |  |
| Dashboard URL |  |
| Individual account |  |
| Assigned backend Linear issue |  |
| Effective project role |  |
| Production PII/secrets exposure acknowledged |  |
| Required resources only |  |
| Secret-management permission required? |  |
| 2FA confirmed |  |
| Start and review/expiry date |  |
| Verification/rollback plan |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |

### Loops

Default: Member, never Owner. Inspection/testing only unless an assigned Linear
issue explicitly authorizes a workflow change.

| Field | Value |
|---|---|
| Workspace | Somlia |
| Dashboard | https://app.loops.so/ |
| Individual account |  |
| Approved role | Member; never Owner |
| Workflow-change permission / Linear issue |  |
| Learner/Company/Investor workflows visible |  |
| 2FA confirmed if supported |  |
| Start and review/expiry date |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |

### Codex / Coding AI

| Field | Value |
|---|---|
| Provider/product |  |
| Individual account |  |
| Approved workspace/project |  |
| Repository scope |  |
| Linear/GitHub connector scope |  |
| Production connectors absent/read-only |  |
| Training/data-retention controls reviewed |  |
| 2FA confirmed |  |
| Start and review/expiry date |  |
| Revocation owner |  |
| Secure item reference | N/A - individual account |
| Notes | Never use the founder's AI account or paste secrets/PII into prompts |

## Owner-Only Services By Default

DNS, operational email, password-manager administration, billing, X, LinkedIn,
and Reddit are not normal full-stack permissions. Keep them owner-only/no access
unless a specific Linear issue authorizes temporary, individually delegated
access with no recovery, billing, or full-admin permission.

| Service | Account/URL | Access granted? | Delegated role | Linear issue | Expiry | Revocation owner |
|---|---|---|---|---|---|---|
| Domain/DNS | somlia.com | No |  |  |  |  |
| Operational email | support@somlia.com | No |  |  |  |  |
| Password manager admin |  | No |  |  |  |  |
| X | https://x.com/SomliaOfficial | No |  |  |  |  |
| LinkedIn | https://www.linkedin.com/company/126893968/ | No |  |  |  |  |
| Reddit | https://www.reddit.com/r/SOMLIA/ | No |  |  |  |  |

## Environment And Non-Human Credential Inventory

Record metadata and secure-item references only, never values.

| Credential/integration | Owner | Purpose/scope | Environment | Granted/created | Review/expiry | Rotation/revocation owner | Secure item reference |
|---|---|---|---|---|---|---|---|
| GitHub Actions secrets |  | CI | GitHub |  |  |  |  |
| GitHub PAT/SSH/deploy keys |  |  |  |  |  |  |  |
| GitHub OAuth apps/integrations |  |  |  |  |  |  |  |
| Vercel CLI/project/integration tokens |  |  |  |  |  |  |  |
| Supabase access/CLI tokens |  |  |  |  |  |  |  |
| Supabase DB credentials/connection strings |  |  |  |  |  |  |  |
| Supabase Edge Function secrets |  |  | Production |  |  |  |  |
| Loops API key |  | Edge Function only | Production |  |  |  |  |
| Waitlist webhook secret |  | DB webhook auth | Production |  |  |  |  |
| GitHub/Linear/AI connectors or MCP grants |  |  |  |  |  |  |  |
| Email delegation/app passwords |  |  |  |  |  |  |  |
| Password-manager collection/recovery paths |  |  |  |  |  |  |  |

Public frontend variable delivery may be tracked by status only:

| Variable | Environment | Delivered securely | Verified | Owner |
|---|---|---|---|---|
| `VITE_SUPABASE_URL` | Local/Preview/Production |  |  |  |
| `VITE_SUPABASE_ANON_KEY` | Local/Preview/Production |  |  |  |
| `VITE_SUPABASE_WAITLIST_TABLE` | Local/Preview/Production |  |  |  |

## Access Verification

- [ ] Repository cloned; branch push works without direct `main` access.
- [ ] Assigned Linear issue can be read and updated.
- [ ] Vercel Preview can be reviewed with production controls unavailable unless
      separately approved.
- [ ] Any Supabase access matches an active backend issue and recorded expiry.
- [ ] Loops access is Member/inspection-only unless separately approved.
- [ ] `npm ci`, `npm test`, and `npm run build` pass locally.
- [ ] AI connectors are narrow and production connectors are absent/read-only.
- [ ] PR, Preview, human approval, merge, and Linear closure are understood.

## Final Approval

| Field | Value |
|---|---|
| Developer confirms access works |  |
| Developer confirms security rules |  |
| Founder/Operations approval |  |
| Approval date |  |
| Next access review date |  |
| Follow-up Linear issues |  |
