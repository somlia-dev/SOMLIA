import { FormEvent, SVGProps, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  Linkedin,
  LockKeyhole,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import footerLogoSrc from "./assets/full-logo-somlia.svg";
import symbolNameLogoSrc from "./assets/symbol-name-logo-somlia.svg";
import type { WaitlistRole } from "./lib/waitlist";

type Role = WaitlistRole;

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
  { label: "Project Proof", href: "/#project-proof" },
  { label: "For companies", href: "/#companies" },
];

const socialLinks = [
  { label: "Follow SOMLIA on X", href: "https://x.com/SomliaOfficial", icon: X },
  { label: "Follow SOMLIA on LinkedIn", href: "https://www.linkedin.com/company/126893968", icon: Linkedin },
  { label: "Join SOMLIA on Reddit", href: "https://www.reddit.com/r/SOMLIA/", icon: RedditIcon },
];

function RedditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8c-4.42 0-8 2.46-8 5.5S7.58 19 12 19s8-2.46 8-5.5S16.42 8 12 8Z" />
      <path d="m13.5 8 .8-3.2 3.1.7" />
      <circle cx="18.75" cy="5.8" r="1.45" />
      <circle cx="8.5" cy="13.25" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="13.25" r="0.75" fill="currentColor" stroke="none" />
      <path d="M8.5 16c1 .7 2.16 1 3.5 1s2.5-.3 3.5-1" />
    </svg>
  );
}

const progressSteps = [
  {
    label: "Learn",
    copy: "Learn a useful skill.",
    color: brand.blue,
  },
  {
    label: "Build",
    copy: "Use it to finish a practical project.",
    color: brand.green,
  },
  {
    label: "Improve",
    copy: "Get feedback and make your work better.",
    color: brand.gold,
  },
  {
    label: "Prove",
    copy: "Keep a clear record of the work, feedback, and changes.",
    color: brand.blue,
  },
];

const faqItems = [
  {
    question: "What is SOMLIA?",
    answer:
      "SOMLIA is a place to learn by doing useful work, improve through feedback, and build proof of what you can do. It is not just a course platform or a job board.",
  },
  {
    question: "What can I use today?",
    answer:
      "SOMLIA is in early access. You can join the public waitlist. The dashboard and the rest of the product are still being built and tested.",
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

const defaultRouteMetadata = {
  title: "SOMLIA | Build proof of progress",
  description: "Learn by doing real projects, get feedback, and build proof of what you can do.",
  canonical: "https://somlia.com/",
  robots: "index,follow",
};

const routeMetadata = {
  "/roadmap": {
    title: "SOMLIA Roadmap | From proof of progress to opportunity",
    description:
      "Explore how SOMLIA is being built from practical learning and community feedback toward trusted proof profiles, company briefs, and future opportunities.",
    canonical: "https://somlia.com/roadmap",
    robots: "index,follow",
  },
  "/privacy-policy": {
    title: "Privacy Policy | SOMLIA",
    description:
      "Read how SOMLIA collects, uses, shares, and protects personal information for its early-access website and waitlist.",
    canonical: "https://somlia.com/privacy-policy",
    robots: "noindex,follow",
  },
} as const;

function updateNamedMeta(name: string, content: string) {
  const elements = Array.from(document.head.querySelectorAll<HTMLMetaElement>(`meta[name="${name}"]`));
  const meta = elements.shift() ?? document.createElement("meta");

  meta.setAttribute("name", name);
  meta.setAttribute("content", content);
  if (!meta.isConnected) {
    document.head.append(meta);
  }

  elements.forEach((element) => element.remove());
}

function updateCanonical(href: string) {
  const elements = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
  const canonical = elements.shift() ?? document.createElement("link");

  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", href);
  if (!canonical.isConnected) {
    document.head.append(canonical);
  }

  elements.forEach((element) => element.remove());
}

function updateRouteMetadata(path: string) {
  const metadata = routeMetadata[path as keyof typeof routeMetadata] ?? defaultRouteMetadata;

  document.title = metadata.title;
  updateNamedMeta("description", metadata.description);
  updateNamedMeta("robots", metadata.robots);
  updateCanonical(metadata.canonical);
}

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

  useEffect(() => {
    updateRouteMetadata(normalizedPath);
  }, [normalizedPath]);

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
  const [companyInterestRequest, setCompanyInterestRequest] = useState(0);

  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ProjectProofSection />
      <CompaniesSection onCompanyInterest={() => setCompanyInterestRequest((current) => current + 1)} />
      <WaitlistSection companyInterestRequest={companyInterestRequest} />
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
            Join the waitlist
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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white"
            >
              Join the waitlist
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
      <div className="relative mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[calc(100svh-17rem)] sm:px-6 lg:px-8 lg:py-20">
        <Reveal immediate>
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold text-[#2563EB] sm:text-base">Learn. Build. Prove.</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#111827] sm:text-6xl lg:text-7xl">
              Build proof of progress.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:mt-7 sm:text-xl sm:leading-8">
              SOMLIA helps you learn a useful skill, use it in real projects, get feedback, and keep proof of what you can do.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#waitlist" variant="primary">
                Join the waitlist
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                See how it works
              </ButtonLink>
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
      <div data-testid="hero-wave-pattern" className="hero-wave-pattern absolute inset-0">
        <div data-testid="hero-wave-row" className="hero-wave-row hero-wave-row-forward" />
        <div data-testid="hero-wave-row" className="hero-wave-row hero-wave-row-reverse" />
      </div>
      <div className="hero-wave-fade absolute inset-0" />
    </div>
  );
}

function ProjectProofPreview() {
  const proofItems = [
    ["The task", "Sort sample customer requests and suggest the next step."],
    ["The work", "A simple AI and no-code workflow."],
    ["Feedback", "Make the handoff clearer."],
    ["Revision", "Added routing rules and a clearer summary."],
  ];

  return (
    <article className="project-proof-preview overflow-hidden rounded-lg border border-[#D9E0EA] bg-white shadow-[0_20px_48px_rgba(17,24,39,0.08)]">
      <div className="border-b border-[#E5E7EB] p-5 sm:p-6">
        <span className="inline-flex rounded-md border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#2563EB]">
          Example only
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-[#111827]">Inbound request triage</h3>
        <p className="mt-1 text-sm text-[#64748B]">Simulated project</p>
      </div>
      <dl>
        {proofItems.map(([label, value], index) => (
          <div key={label} className="grid gap-2 border-b border-[#E5E7EB] px-5 py-4 sm:grid-cols-[7rem_1fr] sm:gap-5 sm:px-6">
            <dt className="flex items-center gap-3 font-semibold text-[#111827]">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: [brand.blue, brand.green, brand.gold, brand.blue][index] }}
              />
              {label}
            </dt>
            <dd className="leading-7 text-[#64748B]">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="grid grid-cols-2 divide-x divide-[#E5E7EB] bg-[#F8FAFC] text-sm font-medium text-[#64748B]">
        <p className="px-5 py-4 text-center">Not yet reviewed</p>
        <p className="px-5 py-4 text-center">Private</p>
      </div>
    </article>
  );
}

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="Learn by doing."
      copy="Each step turns practice into clear evidence of your skills."
    >
      <div className="relative grid gap-0 border-y border-[#D9E0EA] md:grid-cols-4 md:border-y-0">
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#CBD5E1] md:block" />
        {progressSteps.map((step, index) => (
          <ProgressStepCard key={step.label} step={step} index={index} />
        ))}
      </div>
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
  return (
    <article className="group relative grid grid-cols-[3.25rem_1fr] gap-4 border-b border-[#E5E7EB] py-6 last:border-b-0 md:block md:border-b-0 md:px-5 md:py-0">
      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white text-sm font-semibold transition duration-200 group-hover:-translate-y-1"
        style={{ borderColor: step.color, color: step.color }}
      >
        0{index + 1}
      </div>
      <div className="md:mt-7">
        <h3 className="text-xl font-semibold text-[#111827]">{step.label}</h3>
        <p className="mt-2 max-w-[16rem] leading-7 text-[#64748B]">{step.copy}</p>
      </div>
    </article>
  );
}

function ProjectProofSection() {
  return (
    <section id="project-proof" className="scroll-mt-24 border-y border-[#E5E7EB] bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#2563EB]">Project Proof</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              The work behind your skills, kept in one place.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              A Project Proof records what you were asked to do, what you made, the feedback you received, and how your work changed. It is private by default.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ProjectProofPreview />
        </Reveal>
      </div>
    </section>
  );
}

function CompaniesSection({ onCompanyInterest }: { onCompanyInterest: () => void }) {
  return (
    <section id="companies" className="scroll-mt-24 bg-[#111827] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#93C5FD]">For companies</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Find people through their work, not only their resume.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              SOMLIA is being built so companies can share small, useful tasks and discover people through clear proof of what they can do.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-l-2 border-[#F5B841] pl-6 sm:pl-8">
            <p className="font-semibold text-[#F5B841]">Company briefs and paid opportunities are not live yet.</p>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Have a small task in mind? Join the waitlist as a Company and tell us about it.
            </p>
            <button
              type="button"
              onClick={onCompanyInterest}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93C5FD]"
            >
              Share a company task
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WaitlistSection({ companyInterestRequest }: { companyInterestRequest: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
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

  useEffect(() => {
    if (companyInterestRequest === 0) {
      return;
    }

    setFormData((current) => ({ ...current, role: "Company" }));
    clearSubmitFeedback();

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    sectionRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    messageRef.current?.focus();
  }, [companyInterestRequest]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const { submitWaitlistSignup } = await import("./lib/waitlist");
      await submitWaitlistSignup(formData);
      setSubmitState("success");
      setSubmitMessage(
        formData.role === "Company"
          ? "Thanks — your company interest is recorded. We’ll follow up about early company pilots and how briefs may work."
          : "Thanks — you’re on the SOMLIA early-access waitlist.",
      );
      setFormData({ name: "", email: "", role: "Learner", message: "" });
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "We could not save your signup. Please try again.");
    }
  }

  return (
    <section ref={sectionRef} id="waitlist" className="scroll-mt-20 border-b border-[#D9E0EA] bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-xl lg:pt-6">
            <p className="text-sm font-semibold text-[#2563EB]">Early access</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              Help us build SOMLIA.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Join the waitlist if you want to learn by doing, share a company task, or support the project.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="rounded-lg border border-[#D9E0EA] bg-white p-5 shadow-[0_18px_44px_rgba(17,24,39,0.06)] sm:p-7">
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
                  ref={messageRef}
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
                  placeholder={
                    formData.role === "Company"
                      ? "What small task or business problem would you like contributors to solve? (Optional)"
                      : "What would you like to learn, build, or prove? (Optional)"
                  }
                />
              </FormField>
            </div>
            <button
              type="submit"
              disabled={submitState === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
            >
              {submitState === "loading" ? "Saving..." : "Join the waitlist"}
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
    <Section id="faq" eyebrow="FAQ" title="A few quick answers." copy="">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-[#D9E0EA] bg-white">
        {faqItems.map((item) => (
          <details key={item.question} className="group border-b border-[#E5E7EB] p-5 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#111827]">
              {item.question}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#64748B] transition duration-200 group-open:rotate-45">+</span>
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
          {copy ? <p className="mt-5 text-lg leading-8 text-[#64748B]">{copy}</p> : null}
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
      className={`inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${padding} ${classes}`}
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
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex items-center">
          <LogoLockup size="footer" />
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#64748B] md:justify-center">
          <a className="transition hover:text-[#111827]" href="/#how-it-works">
            How it works
          </a>
          <a className="transition hover:text-[#111827]" href="/#project-proof">
            Project Proof
          </a>
          <a className="transition hover:text-[#111827]" href="/#companies">
            For companies
          </a>
          <a className="transition hover:text-[#111827]" href="/roadmap">
            Roadmap
          </a>
          <a className="transition hover:text-[#111827]" href="/privacy-policy">
            Privacy Policy
          </a>
          <a className="transition hover:text-[#111827]" href="/#waitlist">
            Join the waitlist
          </a>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  title={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#CBD5E1] bg-white text-[#64748B] transition duration-200 hover:-translate-y-0.5 hover:border-[#111827] hover:text-[#111827] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2563EB]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-[#94A3B8] md:text-right">© 2026 SOMLIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
