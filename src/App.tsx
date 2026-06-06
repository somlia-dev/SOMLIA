import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Handshake,
  LockKeyhole,
  Menu,
  MessageSquare,
  ShieldCheck,
  X,
} from "lucide-react";
import footerLogoSrc from "./assets/full-logo-somlia.svg";
import symbolNameLogoSrc from "./assets/symbol-name-logo-somlia.svg";
import appSymbolSrc from "./assets/symbol-somlia.svg";
import progressSymbolSrc from "./assets/somlia-symbol-transparent.svg";
import type { WaitlistRole } from "./lib/waitlist";

type Role = WaitlistRole;
type IconType = typeof GraduationCap;

const brand = {
  ink: "#111827",
  blue: "#2563EB",
  green: "#16A34A",
  gold: "#F5B841",
  cloud: "#F8FAFC",
  slate: "#64748B",
};

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Proof system", href: "/#proof-system" },
  { label: "Community", href: "/#community" },
  { label: "Companies", href: "/#companies" },
  { label: "FAQ", href: "/#faq" },
];

const progressSteps = [
  {
    label: "Learn",
    title: "Acquire focused skills",
    copy: "Start with structured skill tracks designed around practical outcomes, not passive consumption.",
    color: brand.blue,
    icon: GraduationCap,
    metric: "Skill foundation",
  },
  {
    label: "Apply",
    title: "Complete real projects",
    copy: "Turn knowledge into visible work through briefs, submissions, revisions, and applied judgment.",
    color: brand.green,
    icon: ClipboardList,
    metric: "Project evidence",
  },
  {
    label: "Earn",
    title: "Unlock opportunities",
    copy: "Use verified progress to access paid company briefs, partnerships, and career pathways after ability is shown.",
    color: brand.gold,
    icon: Handshake,
    metric: "Outcome readiness",
  },
];

const comparisonRows = [
  {
    old: "Courses measure participation.",
    somlia: "SOMLIA measures practical progress.",
  },
  {
    old: "Job boards ask for experience.",
    somlia: "SOMLIA helps people build evidence of experience.",
  },
  {
    old: "Certificates rarely show judgment.",
    somlia: "Proof cards show work, feedback, revision, and consistency.",
  },
];

const proofSignals = [
  { label: "Projects completed", value: "04", color: brand.blue },
  { label: "Reviews received", value: "12", color: brand.green },
  { label: "Milestones earned", value: "03", color: brand.gold },
];

const proofFeatures = [
  {
    icon: FileText,
    title: "Project evidence",
    copy: "Every completed project becomes a durable proof artifact with context, output, and evaluation.",
  },
  {
    icon: MessageSquare,
    title: "Feedback history",
    copy: "Peer, professional, and AI feedback show how the work improved over time.",
  },
  {
    icon: BadgeCheck,
    title: "Competence signals",
    copy: "Progress is expressed through quality, consistency, contribution, and outcome readiness.",
  },
];

const communityItems = [
  "Submit practical work for review",
  "Receive specific feedback",
  "Improve the project through revision",
  "Build reputation by helping others",
];

const realOpportunityItems = [
  {
    title: "Company brief",
    copy: "A business submits a real task that needs to be completed, without opening a hiring process.",
    icon: BriefcaseBusiness,
    color: brand.blue,
    examples: ["Research a market", "Create content", "Build an automation"],
  },
  {
    title: "Verified contributors",
    copy: "Only users with proven capability receive access to higher-signal assignments.",
    icon: BadgeCheck,
    color: brand.green,
    examples: ["Proof profile reviewed", "Feedback history visible", "Milestones earned"],
  },
  {
    title: "Outcome",
    copy: "Work is completed, feedback is recorded, payment is issued, and the proof profile grows.",
    icon: Handshake,
    color: brand.gold,
    examples: ["Completed work", "Payment issued", "New proof added"],
  },
];

const opportunityFlow = [
  {
    label: "Company",
    title: "Submits brief",
    copy: "A real business task enters SOMLIA.",
    color: brand.blue,
  },
  {
    label: "Verified members",
    title: "Complete work",
    copy: "Contributors apply proven skill.",
    color: brand.green,
  },
  {
    label: "Payment",
    title: "Outcome unlocked",
    copy: "Work creates earning potential.",
    color: brand.gold,
  },
  {
    label: "Proof profile",
    title: "New proof added",
    copy: "The result becomes visible evidence.",
    color: brand.ink,
  },
];

const companySteps = [
  "Submit a task",
  "Receive completed work",
  "Review proof profiles",
  "Identify future hires",
];

const faqItems = [
  {
    question: "Is SOMLIA an online course platform?",
    answer:
      "No. SOMLIA includes learning, but the core product is proof of progress: projects, feedback, competence signals, and opportunity readiness.",
  },
  {
    question: "Is SOMLIA a job board?",
    answer:
      "No. Opportunities come after users demonstrate capability. SOMLIA is designed to connect proof profiles with real assignments, not list open roles.",
  },
  {
    question: "Who should join the waitlist?",
    answer:
      "Students, career changers, young professionals, early reviewers, and companies interested in talent signals based on demonstrated work.",
  },
  {
    question: "What happens after I join?",
    answer:
      "You will be part of the early access group as SOMLIA validates skill tracks, company briefs, review flows, and paid opportunity pathways.",
  },
];

const roadmapPhases = [
  "Build Proof",
  "Learn Through Practice",
  "Community Validation",
  "Reputation Network",
  "AI-Augmented Growth",
  "Paid Opportunities",
];

const privacyHighlights = [
  {
    title: "Minimal collection",
    copy: "We collect the information needed to manage early access, understand user interest, and contact people who ask to hear from SOMLIA.",
    icon: ClipboardList,
    color: brand.blue,
  },
  {
    title: "Clear use",
    copy: "Waitlist details are used for early access operations, role-specific updates, product research, and basic site performance analytics.",
    icon: ShieldCheck,
    color: brand.green,
  },
  {
    title: "Service providers",
    copy: "Supabase stores waitlist submissions, Loops supports waitlist emails, and Vercel Analytics helps us understand aggregate site usage.",
    icon: LockKeyhole,
    color: brand.gold,
  },
];

const privacySections = [
  {
    title: "1. Scope",
    body: [
      "This Privacy Policy explains how SOMLIA collects, uses, discloses, and protects personal information through this website, the waitlist form, related early-access communications, and basic analytics.",
      "SOMLIA is an early-stage proof-of-progress platform. If we launch additional account, payment, hiring, community, or marketplace features, we will update this policy to describe those practices before or when they become available.",
    ],
  },
  {
    title: "2. Personal information we collect",
    body: [
      "Information you provide directly: name, email address, selected role, and any optional message submitted through the waitlist form.",
      "Technical and usage information: limited information about visits and interactions with the website, such as page views, referrers, device or browser information, approximate location derived from network data, and similar analytics signals.",
      "Communications information: information related to waitlist confirmations, early-access messages, support requests, and privacy requests you send to us.",
    ],
  },
  {
    title: "3. How we use personal information",
    body: [
      "We use personal information to operate the waitlist, respond to requests, send early-access and product updates, understand which audiences are interested in SOMLIA, improve the website, maintain security, debug issues, comply with legal obligations, and protect our rights.",
      "We do not sell personal information, and we do not use waitlist submissions for cross-context behavioral advertising.",
    ],
  },
  {
    title: "4. Legal bases where applicable",
    body: [
      "Where privacy laws require a legal basis, we process waitlist information because you asked to join or hear from us, because we have a legitimate interest in operating and improving SOMLIA, because we need to comply with legal obligations, or because you have given consent where consent is required.",
      "You may withdraw consent or unsubscribe from non-essential communications at any time, but we may retain limited information when needed for security, legal, or recordkeeping purposes.",
    ],
  },
  {
    title: "5. How we disclose personal information",
    body: [
      "Service providers: we use Supabase to store waitlist submissions, Loops to manage waitlist email events and related communications, and Vercel Analytics to understand aggregate website performance and usage.",
      "Legal and safety reasons: we may disclose information if required by law, legal process, or a good-faith need to protect rights, safety, security, or prevent abuse.",
      "Business changes: if SOMLIA is involved in a merger, acquisition, financing, reorganization, or similar transaction, personal information may be transferred as part of that transaction, subject to appropriate protections.",
    ],
  },
  {
    title: "6. Cookies and analytics",
    body: [
      "The website uses Vercel Analytics to measure traffic and performance. Analytics may rely on privacy-preserving technical signals rather than traditional advertising cookies.",
      "You can control cookies or similar technologies through your browser settings. Blocking some technologies may affect how the website works.",
    ],
  },
  {
    title: "7. Retention",
    body: [
      "We keep waitlist and communication records only as long as reasonably necessary for the purposes described in this policy, including managing early access, maintaining business records, complying with law, resolving disputes, and protecting against misuse.",
      "If you ask us to delete your waitlist information, we will take reasonable steps to do so unless we need to retain limited information for legal, security, or legitimate business purposes.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No website, database, or transmission method is completely secure, so we cannot guarantee absolute security.",
      "Access to waitlist data should be limited to people and service providers who need it for the purposes described in this policy.",
    ],
  },
  {
    title: "9. Your privacy rights",
    body: [
      "Depending on where you live, you may have rights to request access, correction, deletion, restriction, portability, objection, withdrawal of consent, or appeal of certain privacy decisions.",
      "California residents may request to know, delete, or correct personal information and may opt out of sale or sharing where applicable. SOMLIA does not sell personal information or share it for cross-context behavioral advertising.",
      "European Economic Area, United Kingdom, and Swiss residents may also have the right to lodge a complaint with a local data protection authority.",
    ],
  },
  {
    title: "10. International transfers",
    body: [
      "SOMLIA and its service providers may process information in the United States and other countries. Where required, we use appropriate safeguards for international transfers.",
    ],
  },
  {
    title: "11. Children",
    body: [
      "SOMLIA is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child provided personal information, contact us so we can take appropriate steps.",
    ],
  },
  {
    title: "12. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new effective date. Material changes will be communicated in a reasonable way when required.",
    ],
  },
  {
    title: "13. Contact",
    body: [
      "To make a privacy request or ask a privacy question, contact SOMLIA at support@somlia.com. Please include enough information for us to verify and respond to your request.",
    ],
  },
];

const noticeAtCollectionRows = [
  {
    category: "Identifiers",
    examples: "Name and email address",
    purpose: "Operate the waitlist, communicate about early access, and respond to requests",
  },
  {
    category: "User-provided details",
    examples: "Selected role and optional message",
    purpose: "Understand audience interest and tailor early-access communications",
  },
  {
    category: "Internet or network activity",
    examples: "Page views, referrers, device/browser data, and similar analytics signals",
    purpose: "Measure site performance, improve content, and maintain security",
  },
];

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const normalizedPath = path.replace(/\/$/, "") || "/";
  const isRoadmap = normalizedPath === "/roadmap";
  const isPrivacyPolicy = normalizedPath === "/privacy-policy";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Navbar />
      <main>
        {isPrivacyPolicy ? <PrivacyPolicyPage /> : isRoadmap ? <RoadmapPage /> : <LandingPage />}
      </main>
      <Footer />
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ProofSystemSection />
      <CommunitySection />
      <OpportunitiesSection />
      <WaitlistSection />
      <FaqSection />
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="/#top" aria-label="SOMLIA home" className="flex items-center">
          <LogoLockup size="nav" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[#64748B] transition hover:text-[#111827]">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/#waitlist" variant="primary" size="sm">
            Join waitlist
          </ButtonLink>
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD5E1] text-[#111827] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-[#E5E7EB] bg-[#F8FAFC] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#111827] transition hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#waitlist"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white"
            >
              Join waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[#E5E7EB] bg-[#F8FAFC] pt-20">
      <HeroBackdrop />
      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-center px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Reveal immediate>
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-semibold text-[#2563EB]">
              <img
                src={progressSymbolSrc}
                alt=""
                width={36}
                height={36}
                decoding="async"
                className="h-9 w-9 object-contain"
              />
              Proof Of Progress
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-[#111827] sm:text-6xl lg:text-7xl">
              Build proof of progress.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:mt-7 sm:text-xl sm:leading-8">
              SOMLIA helps ambitious people learn practical skills, apply them through real projects, and create proof companies can use to discover emerging talent.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#waitlist" variant="primary">
                Join the waitlist
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                See how it works
              </ButtonLink>
            </div>
            <div className="mt-7 grid max-w-2xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
              {progressSteps.map((step) => (
                <div key={step.label} className="border-l-2 bg-white/70 px-3 py-2 sm:px-4 sm:py-3" style={{ borderColor: step.color }}>
                  <p className="text-sm font-semibold text-[#111827]">{step.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">{step.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(#E5E7EB_1px,transparent_1px),linear-gradient(90deg,#E5E7EB_1px,transparent_1px)] bg-[size:84px_84px] opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-80 hidden min-[1680px]:block">
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="hero-profile-float ml-auto w-[30rem] translate-x-32">
            <ProofConsole />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F8FAFC]" />
    </div>
  );
}

function ProofConsole() {
  return (
    <div className="proof-console-card border border-[#D9E0EA] bg-white p-5 shadow-[0_18px_44px_rgba(17,24,39,0.08)]">
      <div className="flex items-start justify-between border-b border-[#E5E7EB] pb-5">
        <div className="flex items-center gap-3">
          <img src={appSymbolSrc} alt="" width={56} height={56} decoding="async" className="h-14 w-14 object-contain" />
          <div>
            <p className="font-semibold text-[#111827]">Progress profile</p>
            <p className="mt-1 text-sm text-[#64748B]">AI Automation track</p>
          </div>
        </div>
        <span className="proof-verified-pill rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#16A34A]">Verified</span>
      </div>
      <div className="grid grid-cols-3 border-b border-[#E5E7EB]">
        {proofSignals.map((signal, index) => (
          <div key={signal.label} className="border-r border-[#E5E7EB] px-4 py-5 last:border-r-0">
            <p className="proof-metric-value text-3xl font-semibold" style={{ color: signal.color, animationDelay: `${0.18 + index * 0.08}s` }}>
              {signal.value}
            </p>
            <p className="mt-2 text-sm leading-5 text-[#64748B]">{signal.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 pt-5">
        {["Customer research workflow", "Automation brief", "Peer review revision"].map((item, index) => (
          <div key={item} className="proof-row-signal flex items-center justify-between border border-[#E5E7EB] bg-[#F8FAFC] p-3" style={{ animationDelay: `${0.28 + index * 0.08}s` }}>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#111827]">
                {index + 1}
              </span>
              <p className="text-sm font-medium text-[#111827]">{item}</p>
            </div>
            <CheckCircle2 className="proof-checkmark h-5 w-5 text-[#16A34A]" style={{ animationDelay: `${1.1 + index * 0.45}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <Section id="problem" eyebrow="The gap" title="Learning alone is not enough." copy="SOMLIA is built for people caught between acquiring skills and proving they can use them in the real world.">
      <div className="overflow-hidden border border-[#D9E0EA] bg-white">
        {comparisonRows.map((row, index) => (
          <div key={row.old} className="grid border-b border-[#E5E7EB] last:border-b-0 md:grid-cols-2">
            <div className="border-b border-[#E5E7EB] p-5 md:border-b-0 md:border-r">
              <p className="text-sm font-semibold text-[#64748B]">Old model {index + 1}</p>
              <p className="mt-3 text-lg font-medium text-[#111827]">{row.old}</p>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-[#2563EB]">SOMLIA model</p>
              <p className="mt-3 text-lg font-medium text-[#111827]">{row.somlia}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="A structured path from skill to outcome."
      copy="The experience is simple enough to understand quickly, but strong enough to create credible evidence over time."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {progressSteps.map((step, index) => (
          <Reveal key={step.label} delay={index * 0.08}>
            <ProgressStepCard step={step} index={index} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-8 border border-[#D9E0EA] bg-white p-5">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#64748B]">Experience loop</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#111827]">Learn, apply, review, improve, prove.</h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-5">
              {["Learn", "Apply", "Review", "Improve", "Prove"].map((item, index) => (
                <div key={item} className="border border-[#E5E7EB] bg-[#F8FAFC] p-3">
                  <p className="text-sm font-semibold text-[#111827]">{item}</p>
                  <div className="mt-3 h-1.5 bg-[#E5E7EB]">
                    <div
                      className="h-full"
                      style={{
                        width: `${38 + index * 14}%`,
                        backgroundColor: index < 2 ? brand.blue : index < 4 ? brand.green : brand.gold,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ProgressStepCard({
  step,
  index,
}: {
  step: (typeof progressSteps)[number];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <article className="h-full border border-[#D9E0EA] bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#64748B]">0{index + 1}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${step.color}14`, color: step.color }}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <h3 className="mt-8 text-3xl font-semibold text-[#111827]">{step.label}</h3>
      <p className="mt-3 text-lg font-medium text-[#111827]">{step.title}</p>
      <p className="mt-4 leading-7 text-[#64748B]">{step.copy}</p>
      <div className="mt-8 h-1.5 bg-[#E5E7EB]">
        <div
          className="h-full"
          style={{ width: `${48 + index * 22}%`, backgroundColor: step.color }}
        />
      </div>
    </article>
  );
}

function ProofSystemSection() {
  return (
    <Section
      id="proof-system"
      eyebrow="Proof system"
      title="Your ability, made visible."
      copy="Proof Of Progress is the credibility layer: not a badge for showing up, but a record of work, feedback, revision, and demonstrated competence."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <ProofProfile />
        </Reveal>
        <div className="grid gap-4">
          {proofFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <FeatureRow icon={feature.icon} title={feature.title} copy={feature.copy} color={index === 0 ? brand.blue : index === 1 ? brand.green : brand.gold} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProofProfile() {
  return (
    <div className="border border-[#D9E0EA] bg-white">
      <div className="flex flex-col gap-5 border-b border-[#E5E7EB] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img src={appSymbolSrc} alt="" width={64} height={64} loading="lazy" decoding="async" className="h-16 w-16 object-contain" />
          <div>
            <p className="text-sm font-semibold text-[#64748B]">Proof profile</p>
            <h3 className="mt-1 text-2xl font-semibold text-[#111827]">Maya, Career transition</h3>
          </div>
        </div>
        <div className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">Opportunity-ready</div>
      </div>
      <div className="grid border-b border-[#E5E7EB] sm:grid-cols-3">
        {proofSignals.map((signal) => (
          <div key={signal.label} className="border-b border-[#E5E7EB] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <p className="text-4xl font-semibold" style={{ color: signal.color }}>
              {signal.value}
            </p>
            <p className="mt-2 text-sm text-[#64748B]">{signal.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 p-6">
        <ProofRow title="Research workflow redesign" status="Reviewed" score="92%" color={brand.green} />
        <ProofRow title="Automation project brief" status="Revised" score="88%" color={brand.blue} />
        <ProofRow title="Client communication simulation" status="Milestone" score="Gold" color={brand.gold} />
      </div>
    </div>
  );
}

function ProofRow({ title, status, score, color }: { title: string; status: string; score: string; color: string }) {
  return (
    <div className="grid gap-4 border border-[#E5E7EB] bg-[#F8FAFC] p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        <p className="font-medium text-[#111827]">{title}</p>
      </div>
      <span className="text-sm text-[#64748B]">{status}</span>
      <span className="text-sm font-semibold text-[#111827]">{score}</span>
    </div>
  );
}

function CommunitySection() {
  return (
    <Section
      id="community"
      eyebrow="Community layer"
      title="Feedback turns practice into progress."
      copy="SOMLIA uses community review to make learning active. Users improve their work while building a reputation for the feedback they give."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="border-l-2 border-[#16A34A] bg-white p-6">
            <h3 className="text-3xl font-semibold leading-tight text-[#111827]">The review process is part of the learning.</h3>
            <p className="mt-5 leading-8 text-[#64748B]">
              Every submission creates a loop: work is shared, reviewed, improved, and converted into credible proof. Good reviewers also build reputation by helping others improve.
            </p>
            <div className="mt-8">
              <ButtonLink href="#waitlist" variant="primary">
                Join early access
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-3">
          {communityItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="flex items-center justify-between border border-[#D9E0EA] bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#16A34A]">
                    {index + 1}
                  </span>
                  <p className="font-medium text-[#111827]">{item}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#94A3B8]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OpportunitiesSection() {
  return (
    <Section
      id="companies"
      eyebrow="Real opportunities"
      title="Proof should lead to real assignments."
      copy="SOMLIA creates a new way to discover talent: company work is matched to verified contributors after capability is demonstrated."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {realOpportunityItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <OpportunityCard item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 border border-[#D9E0EA] bg-white p-6">
          <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#2563EB]">Opportunity loop</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#111827]">
                Company work becomes measurable progress.
              </h3>
              <p className="mt-5 leading-8 text-[#64748B]">
                The payoff is not a badge. It is a completed assignment, a recorded outcome, and a stronger proof profile.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {opportunityFlow.map((step) => (
                <div key={step.title} className="border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                  <p className="text-sm font-semibold" style={{ color: step.color }}>
                    {step.label}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-[#111827]">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#64748B]">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 border border-[#111827] bg-[#111827] p-6 text-white">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#93C5FD]">For companies</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight">Discover ability before hiring.</h3>
              <p className="mt-5 leading-8 text-white/70">
                Instead of relying on resumes, companies can submit real projects and evaluate demonstrated capability.
              </p>
              <div className="mt-6 grid gap-2 text-sm font-medium text-white sm:grid-cols-3">
                {["No resumes required.", "No credentials required.", "Only demonstrated capability."].map((item) => (
                  <div key={item} className="border border-white/15 bg-white/5 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-4">
              {companySteps.map((step, index) => (
                <div key={step} className="border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-white/45">0{index + 1}</p>
                  <p className="mt-3 text-sm font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 border border-[#D9E0EA] bg-[#111827] p-6 text-white">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#93C5FD]">Early access roadmap</p>
              <h3 className="mt-3 text-3xl font-semibold">A proof-of-work network for emerging talent, built in stages.</h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {roadmapPhases.slice(0, 6).map((phase, index) => (
                <div key={phase} className="border border-white/15 bg-white/5 p-3">
                  <p className="text-sm text-white/50">0{index + 1}</p>
                  <p className="mt-2 text-sm font-medium text-white">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Learner" as Role,
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  function clearSubmitFeedback() {
    setSubmitState("idle");
    setSubmitMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const { submitWaitlistSignup } = await import("./lib/waitlist");
      await submitWaitlistSignup(formData);
      setSubmitState("success");
      setSubmitMessage("Thanks. Your interest is logged for early access.");
      setFormData({ name: "", email: "", role: "Learner", message: "" });
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "We could not save your signup. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="border-y border-[#D9E0EA] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <Reveal>
          <div>
            <p className="text-sm font-semibold text-[#2563EB]">Join the first proof-of-work network</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              Be early to the platform connecting proof profiles to real opportunities.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              Join the waitlist to help shape practical tracks, company briefs, review systems, and paid outcomes for emerging talent.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Company briefs", "Proof profiles", "Paid opportunities"].map((item) => (
                <div key={item} className="border border-[#E5E7EB] bg-[#F8FAFC] p-3 text-sm font-medium text-[#111827]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="border border-[#D9E0EA] bg-[#F8FAFC] p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Name" id="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={submitState === "loading"}
                  value={formData.name}
                  onChange={(event) => {
                    clearSubmitFeedback();
                    setFormData((current) => ({ ...current, name: event.target.value }));
                  }}
                  className="field"
                  placeholder="Your name"
                />
              </FormField>
              <FormField label="Email" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={submitState === "loading"}
                  value={formData.email}
                  onChange={(event) => {
                    clearSubmitFeedback();
                    setFormData((current) => ({ ...current, email: event.target.value }));
                  }}
                  className="field"
                  placeholder="you@example.com"
                />
              </FormField>
            </div>
            <div className="mt-5">
              <FormField label="I am a" id="role">
                <select
                  id="role"
                  name="role"
                  disabled={submitState === "loading"}
                  value={formData.role}
                  onChange={(event) => {
                    clearSubmitFeedback();
                    setFormData((current) => ({ ...current, role: event.target.value as Role }));
                  }}
                  className="field"
                >
                  <option>Learner</option>
                  <option>Company</option>
                  <option>Investor / Partner</option>
                </select>
              </FormField>
            </div>
            <div className="mt-5">
              <FormField label="Short message" id="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  disabled={submitState === "loading"}
                  value={formData.message}
                  onChange={(event) => {
                    clearSubmitFeedback();
                    setFormData((current) => ({ ...current, message: event.target.value }));
                  }}
                  className="field resize-none"
                  placeholder="Tell us what you want to learn, build, or prove."
                />
              </FormField>
            </div>
            <button
              type="submit"
              disabled={submitState === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] active:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
            >
              {submitState === "loading" ? "Saving..." : "Join early access"}
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-4 text-xs leading-5 text-[#64748B]">
              We use waitlist details to manage early access and send related updates. Read the{" "}
              <a className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]" href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
            <WaitlistSubmissionFeedback state={submitState} message={submitMessage} />
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function WaitlistSubmissionFeedback({ state, message }: { state: "idle" | "loading" | "success" | "error"; message: string }) {
  if (state === "loading") {
    return (
      <div className="mt-4 min-h-[72px]" role="status" aria-label="Saving waitlist signup" aria-live="polite">
        <div data-testid="waitlist-submit-skeleton" className="waitlist-skeleton border border-[#D9E0EA] bg-white px-4 py-3">
          <span className="sr-only">Saving waitlist signup</span>
          <div className="h-3 w-28 bg-[#E2E8F0]" />
          <div className="mt-3 h-2.5 w-full max-w-sm bg-[#E2E8F0]" />
          <div className="mt-2 h-2.5 w-2/3 bg-[#E2E8F0]" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 min-h-[72px]">
      {message ? (
        <p
          aria-live="polite"
          className={`content-reveal border px-4 py-3 text-sm ${
            state === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}

function FaqSection() {
  return (
    <Section id="faq" eyebrow="FAQ" title="What early users should know." copy="SOMLIA is intentionally not another course catalog or job marketplace. The platform starts with proof.">
      <div className="mx-auto max-w-4xl border border-[#D9E0EA] bg-white">
        {faqItems.map((item) => (
          <details key={item.question} className="group border-b border-[#E5E7EB] p-5 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#111827]">
              {item.question}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#64748B] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl leading-7 text-[#64748B]">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 lg:px-8">
      <Reveal immediate>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#2563EB]">Privacy Policy</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#111827] sm:text-6xl">
              How SOMLIA handles personal information.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748B]">
              This policy is written for the current SOMLIA website and waitlist. It explains what we collect, why we collect it, which providers support the site, and how people can make privacy requests.
            </p>
          </div>
          <div className="border-l-2 border-[#2563EB] bg-white p-5">
            <p className="text-sm font-semibold text-[#111827]">Effective date</p>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">June 4, 2026</p>
            <p className="mt-5 text-sm font-semibold text-[#111827]">Privacy contact</p>
            <a className="mt-2 inline-block text-sm font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]" href="mailto:support@somlia.com">
              support@somlia.com
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {privacyHighlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full border border-[#D9E0EA] bg-white p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${item.color}14`, color: item.color }}>
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-xl font-semibold text-[#111827]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[#64748B]">{item.copy}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-12 border border-[#D9E0EA] bg-white p-5 sm:p-7">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB]">California notice at collection</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827]">Personal information categories collected through the site.</h2>
            <p className="mt-4 leading-7 text-[#64748B]">
              This notice summarizes the categories of personal information we collect, examples from the current site, and the business purposes for collection.
            </p>
          </div>
          <div className="mt-7 overflow-hidden border border-[#E5E7EB]">
            <div className="hidden grid-cols-[0.9fr_1fr_1.4fr] bg-[#F8FAFC] text-sm font-semibold text-[#111827] md:grid">
              <div className="border-r border-[#E5E7EB] p-4">Category</div>
              <div className="border-r border-[#E5E7EB] p-4">Examples</div>
              <div className="p-4">Purpose</div>
            </div>
            {noticeAtCollectionRows.map((row) => (
              <div key={row.category} className="grid border-t border-[#E5E7EB] md:grid-cols-[0.9fr_1fr_1.4fr]">
                <div className="border-b border-[#E5E7EB] p-4 md:border-b-0 md:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#64748B] md:hidden">Category</p>
                  <p className="mt-1 font-semibold text-[#111827] md:mt-0">{row.category}</p>
                </div>
                <div className="border-b border-[#E5E7EB] p-4 md:border-b-0 md:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#64748B] md:hidden">Examples</p>
                  <p className="mt-1 leading-7 text-[#64748B] md:mt-0">{row.examples}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#64748B] md:hidden">Purpose</p>
                  <p className="mt-1 leading-7 text-[#64748B] md:mt-0">{row.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4">
        {privacySections.map((section) => (
          <Reveal key={section.title}>
            <article className="border border-[#D9E0EA] bg-white p-5 sm:p-7">
              <h2 className="text-2xl font-semibold text-[#111827]">{section.title}</h2>
              <div className="mt-4 grid gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-[#64748B]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RoadmapPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 lg:px-8">
      <Reveal immediate>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-[#2563EB]">SOMLIA roadmap</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#111827] sm:text-6xl">
            Building the bridge from learning to earning in stages.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
            The platform starts by helping users build proof, then expands into practice, community validation, reputation, AI-augmented growth, and paid opportunities.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapPhases.map((phase, index) => (
          <Reveal key={phase} delay={index * 0.06}>
            <div className="h-full border border-[#D9E0EA] bg-white p-6">
              <p className="text-sm font-semibold text-[#64748B]">Phase 0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold text-[#111827]">{phase}</h2>
              <div className="mt-8 h-1.5 bg-[#E5E7EB]">
                <div className="h-full" style={{ width: `${26 + index * 12}%`, backgroundColor: index < 2 ? brand.blue : index < 4 ? brand.green : brand.gold }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  copy,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#64748B]">{copy}</p>
        </div>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <div
      className={immediate ? "content-reveal" : undefined}
      style={immediate && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

function OpportunityCard({ item }: { item: (typeof realOpportunityItems)[number] }) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col border border-[#D9E0EA] bg-white p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${item.color}14`, color: item.color }}>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-7 text-2xl font-semibold text-[#111827]">{item.title}</h3>
      <p className="mt-4 leading-7 text-[#64748B]">{item.copy}</p>
      <div className="mt-auto grid gap-2 pt-6">
        {item.examples.map((example) => (
          <div key={example} className="border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2 text-sm font-medium text-[#111827]">
            {example}
          </div>
        ))}
      </div>
    </article>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  copy,
  color,
}: {
  icon: IconType;
  title: string;
  copy: string;
  color: string;
}) {
  return (
    <article className="border border-[#D9E0EA] bg-white p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${color}14`, color }}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
          <p className="mt-3 leading-7 text-[#64748B]">{copy}</p>
        </div>
      </div>
    </article>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-[#111827]">{label}</span>
      {children}
    </label>
  );
}

function ButtonLink({
  href,
  variant,
  size = "md",
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  size?: "sm" | "md";
  children: React.ReactNode;
}) {
  const classes =
    variant === "primary"
      ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
      : "border border-[#CBD5E1] bg-white text-[#111827] hover:border-[#94A3B8]";
  const padding = size === "sm" ? "px-4 py-2.5" : "px-6 py-3.5";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${padding} ${classes}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function LogoLockup({ size }: { size: "nav" | "footer" }) {
  const isNav = size === "nav";
  const dimensions = isNav ? "h-10 w-44 sm:w-52" : "h-16 w-20";
  const logoSrc = isNav ? symbolNameLogoSrc : footerLogoSrc;
  const width = isNav ? 208 : 80;
  const height = isNav ? 37 : 62;

  return (
    <span className={`flex shrink-0 items-center justify-center overflow-hidden ${dimensions}`}>
      <img
        src={logoSrc}
        alt="SOMLIA logo"
        width={width}
        height={height}
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#D9E0EA] bg-[#F8FAFC] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-center">
        <div className="flex items-center">
          <LogoLockup size="footer" />
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#64748B] md:justify-center">
          <a className="transition hover:text-[#111827]" href="/#how-it-works">
            How it works
          </a>
          <a className="transition hover:text-[#111827]" href="/#proof-system">
            Proof system
          </a>
          <a className="transition hover:text-[#111827]" href="/#companies">
            Companies
          </a>
          <a className="transition hover:text-[#111827]" href="/roadmap">
            Roadmap
          </a>
          <a className="transition hover:text-[#111827]" href="/privacy-policy">
            Privacy Policy
          </a>
          <a className="transition hover:text-[#111827]" href="/#waitlist">
            Contact
          </a>
        </div>
        <p className="text-sm text-[#94A3B8] md:text-right">© 2026 SOMLIA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
