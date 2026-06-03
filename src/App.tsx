import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Handshake,
  Layers3,
  Lightbulb,
  MessageSquare,
  MousePointer2,
  Rocket,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import logoLockupSrc from "./assets/somlia-logo-cropped.png";
import { submitWaitlistSignup, type WaitlistRole } from "./lib/waitlist";

type Role = WaitlistRole;
type RoadmapPhase = {
  phase: string;
  title: string;
  status?: string;
  description: string;
  groups: {
    label: string;
    items: string[];
  }[];
  vision?: string;
  metric?: string;
};

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Community", href: "/#learners" },
  { label: "For companies", href: "/#companies" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Join waitlist", href: "/#waitlist" },
];

const problems = [
  {
    icon: GraduationCap,
    title: "Knowledge is not enough",
    copy: "Millions of people learn new skills every year, but the path to real experience is still unclear.",
  },
  {
    icon: BadgeCheck,
    title: "Experience is hard to prove",
    copy: "Students need experience to get jobs, while companies need proof that candidates can deliver.",
  },
  {
    icon: Target,
    title: "The signal is weak",
    copy: "Certificates show participation. Employers still need stronger evidence of practical judgment and execution.",
  },
];

const solutionPillars = [
  {
    icon: FileText,
    title: "Build proof of work",
    copy: "Instead of collecting certificates, users build visible evidence through completed practical challenges.",
  },
  {
    icon: Users,
    title: "Improve together",
    copy: "Instead of studying alone, users collaborate, review, and sharpen each other's work.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practice real scenarios",
    copy: "Instead of guessing what employers want, users train on situations shaped around actual work.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Learn",
    copy: "Choose a skill track and start building practical knowledge.",
  },
  {
    step: "02",
    title: "Apply",
    copy: "Complete real-world challenges designed around actual work situations.",
  },
  {
    step: "03",
    title: "Review",
    copy: "Receive feedback from the community and review other users' work.",
  },
  {
    step: "04",
    title: "Build Reputation",
    copy: "Earn trust through completed challenges, reviews, and consistent performance.",
  },
  {
    step: "05",
    title: "Earn Opportunities",
    copy: "Access projects and opportunities after proving your capabilities.",
  },
];

const communityBenefits = [
  "Receive useful feedback from peers",
  "Review other users' work to sharpen judgment",
  "Build reputation through valuable feedback",
  "Learn by seeing how others solve the same challenge",
  "Turn collaboration into credible proof",
];

const companySignals = [
  { label: "Challenge results", icon: ClipboardList },
  { label: "Community validation", icon: Users },
  { label: "Skill reputation", icon: BadgeCheck },
  { label: "AI-native workflows", icon: Sparkles },
  { label: "Public learner profiles", icon: Layers3 },
  { label: "Consistent performance", icon: BarChart3 },
];

const taskCards = [
  {
    title: "Practical challenge",
    label: "Skill track",
    meta: "Real-world scenario",
    amount: "Apply",
    icon: ClipboardList,
  },
  {
    title: "Community review",
    label: "Peer feedback",
    meta: "Improve the work",
    amount: "Review",
    icon: Users,
  },
  {
    title: "Reputation signal",
    label: "Proof of work",
    meta: "Capabilities shown",
    amount: "Grow",
    icon: BadgeCheck,
  },
];

const taskStreamRows = [
  [
    { label: "Skill track", meta: "Practical learning", icon: GraduationCap },
    { label: "Challenge brief", meta: "Real scenario", icon: ClipboardList },
    { label: "Peer review", meta: "Community feedback", icon: MessageSquare },
    { label: "Improved output", meta: "Iteration loop", icon: MousePointer2 },
    { label: "Reputation score", meta: "Proof through work", icon: BadgeCheck },
    { label: "Opportunity path", meta: "After proven ability", icon: Handshake },
  ],
  [
    { label: "AI workflow", meta: "Modern tools", icon: Sparkles },
    { label: "Research judgment", meta: "Better decisions", icon: Search },
    { label: "Clear communication", meta: "Work-ready output", icon: FileText },
    { label: "Quality scoring", meta: "Credible signal", icon: BarChart3 },
    { label: "Profile proof", meta: "Visible progress", icon: Layers3 },
    { label: "Career access", meta: "Real opportunities", icon: Rocket },
  ],
];

const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "PHASE 1",
    title: "Community Validation",
    status: "Current Stage",
    description:
      "Start by validating the need for a practical bridge between learning and real experience.",
    groups: [
      {
        label: "Focus",
        items: [
          "Build waitlist",
          "Gather early adopters",
          "Build community",
          "Validate demand",
        ],
      },
    ],
  },
  {
    phase: "PHASE 2",
    title: "Skill Tracks",
    description: "Launch the first practical learning tracks around high-demand, AI-relevant work.",
    groups: [
      {
        label: "Tracks",
        items: [
          "Launch first practical learning tracks",
          "AI Automation",
          "Sales",
          "Marketing",
        ],
      },
    ],
  },
  {
    phase: "PHASE 3",
    title: "Community Review System",
    description: "Make peer feedback a core part of learning, improvement, and trust.",
    groups: [
      {
        label: "Features",
        items: [
          "Peer-to-peer feedback",
          "Review reputation",
          "Learning through collaboration",
          "Quality scoring",
        ],
      },
    ],
  },
  {
    phase: "PHASE 4",
    title: "Reputation Engine",
    description: "Turn consistent performance into a signal people can carry beyond the platform.",
    groups: [
      {
        label: "Features",
        items: [
          "Challenge completion history",
          "Community contribution score",
          "Skill reputation score",
          "Public learner profiles",
        ],
      },
    ],
  },
  {
    phase: "PHASE 5",
    title: "AI-Native Learning",
    description: "Help users work alongside modern AI tools with confidence and practical judgment.",
    groups: [
      {
        label: "Features",
        items: [
          "AI-assisted workflows",
          "AI productivity tools",
          "Practical AI usage training",
          "Human + AI collaboration",
        ],
      },
    ],
  },
  {
    phase: "PHASE 6",
    title: "Opportunities",
    description:
      "Open access to real opportunities after users have shown what they can do.",
    groups: [
      {
        label: "Pathways",
        items: [
          "Real-world projects",
          "Company partnerships",
          "Talent discovery",
          "Career opportunities",
        ],
      },
    ],
  },
];

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const isRoadmap = path === "/roadmap";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020203] text-white">
      <div className="noise" />
      <BackgroundGrid />
      <Navbar />
      <main>{isRoadmap ? <RoadmapPage /> : <LandingPage />}</main>
      <Footer />
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <HeroSection />
      <TaskStreamSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <LearnersSection />
      <CompaniesSection />
      <WhyNowSection />
      <EarlyAccessSection />
      <WaitlistSection />
    </>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-soft backdrop-blur-2xl sm:px-5">
        <a href="/#top" className="flex items-center gap-3" aria-label="SOMLIA home">
          <LogoLockup size="nav" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/#waitlist"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Join Waitlist
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pb-4 pt-36 sm:px-6 sm:pt-32 lg:px-8 lg:pb-0 lg:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-white" />
            The bridge between learning and real work experience.
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl 2xl:text-7xl">
            Learn. Apply. Earn.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Build real experience while learning. Complete practical challenges, receive community
            feedback, develop AI-native skills, and create a reputation based on what you can actually do.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#waitlist" variant="primary">
              Join Waitlist
            </ButtonLink>
            <ButtonLink href="#companies" variant="secondary">
              For Companies
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Practical challenges, community feedback, and AI-native skill development.
          </p>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const flowItems = ["Learn", "Apply", "Earn"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-xl lg:max-w-lg xl:max-w-xl"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass relative overflow-hidden rounded-[2rem] bg-zinc-950/55 p-4 sm:p-5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,rgba(255,255,255,0.045))]" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="relative rounded-[1.65rem] border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-2xl sm:p-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-soft sm:h-14 sm:w-28">
                <img
                  src={logoLockupSrc}
                  alt="SOMLIA logo"
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-zinc-500">Experience path</p>
                <p className="font-medium text-white">Learn - Apply - Earn</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-zinc-300">
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
              Waitlist open
            </div>
          </div>

          <div className="relative mt-7">
            <div className="absolute left-[16%] right-[16%] top-1/2 z-0 h-px bg-white/12" />
            {!reduceMotion ? (
              <motion.div
                className="absolute left-[16%] top-1/2 z-0 h-px w-[22%] bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ["0%", "185%", "0%"], opacity: [0.15, 0.85, 0.15] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}
            <div className="relative z-10 grid grid-cols-3 gap-3">
              {flowItems.map((item, index) => (
                <motion.div
                  key={item}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: index === 1 ? [0, -4, 0] : [0, 3, 0],
                          borderColor: ["rgba(255,255,255,0.10)", "rgba(255,255,255,0.20)", "rgba(255,255,255,0.10)"],
                        }
                  }
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }}
                  className="rounded-2xl border border-white/10 bg-zinc-950/85 p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">0{index + 1}</p>
                  <p className="mt-2 text-sm font-medium text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-7 h-56 sm:h-64">
            {taskCards.map((card, index) => {
              const Icon = card.icon;
              const positions = [
                "left-0 top-1 rotate-[-2deg]",
                "right-0 top-16 rotate-[2deg]",
                "left-7 right-4 bottom-1 rotate-[-0.5deg]",
              ];
              const cardMotionStates = [
                { y: [0, -10, 3, 0], x: [0, 4, 0], rotate: [-2, -1, -2] },
                { y: [0, 8, -7, 0], x: [0, -5, 0], rotate: [2, 1, 2] },
                { y: [0, -6, 8, 0], x: [0, 3, 0], rotate: [-0.5, 0.5, -0.5] },
              ];

              return (
                <motion.div
                  key={card.title}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          ...cardMotionStates[index],
                          scale: [1, 1.015, 1],
                        }
                  }
                  transition={{
                    duration: 6.5 + index * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.45,
                  }}
                  className={`absolute ${positions[index]} w-[84%] rounded-3xl border border-white/14 bg-zinc-950/90 p-4 shadow-soft backdrop-blur-2xl sm:w-[72%] sm:p-5`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="rounded-2xl bg-white p-2 text-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-500">{card.label}</p>
                        <p className="mt-1 font-medium text-white">{card.title}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                      {card.amount}
                    </span>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-white/70 via-white to-white/70"
                      initial={{ width: "24%" }}
                      animate={{ width: ["34%", "78%", "52%", "88%", "40%"] }}
                      transition={{
                        duration: 5.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.45,
                      }}
                    />
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">{card.meta}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TaskStreamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="SOMLIA experience loop" className="relative overflow-hidden py-8 lg:py-12">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-3 px-5 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Experience loop</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Practical challenges become visible proof.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-zinc-500">
          A steady path from learning to application, feedback, reputation, and opportunities.
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#020203] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#020203] to-transparent" />
        {taskStreamRows.slice(0, 1).map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4 px-4"
          >
            {[...row, ...row].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${item.label}-${index}`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex w-64 items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-zinc-500">{item.meta}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RoadmapPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-6 sm:pt-40 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          <Rocket className="h-4 w-4 text-white" />
          SOMLIA Roadmap
        </div>
        <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
          Building the bridge from learning to real work.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          The roadmap moves from community validation to skill tracks, peer review, reputation,
          AI-native learning, and access to real opportunities.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/#waitlist" variant="primary">
            Join Waitlist
          </ButtonLink>
          <ButtonLink href="/#top" variant="secondary">
            Back to landing page
          </ButtonLink>
        </div>
      </motion.div>

      <div className="relative mt-20">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent lg:block" />
        <div className="grid gap-5">
          {roadmapPhases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 0.04}>
              <RoadmapPhaseCard phase={phase} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapPhaseCard({
  phase,
  index,
}: {
  phase: (typeof roadmapPhases)[number];
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-soft backdrop-blur-xl sm:p-7 lg:ml-12"
    >
      <div className="absolute -left-[3.25rem] top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white text-sm font-semibold text-black lg:flex">
        {index + 1}
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {phase.phase}
            </span>
            {phase.status ? (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                {phase.status}
              </span>
            ) : null}
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">{phase.title}</h2>
          <p className="mt-4 leading-7 text-zinc-400">{phase.description}</p>
          {phase.vision ? (
            <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 leading-7 text-zinc-300">
              {phase.vision}
            </p>
          ) : null}
        </div>

        <div className="space-y-5">
          {phase.groups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{group.label}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {phase.metric ? (
            <div className="rounded-2xl border border-white/10 bg-white px-5 py-4 text-black">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Success Metric</p>
              <p className="mt-2 font-semibold">{phase.metric}</p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function ProblemSection() {
  return (
    <Section id="problem" eyebrow="The gap" title="The Experience Gap" compact>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          Millions of people learn new skills every year. Yet employers continue asking for experience.
          Students need experience to get jobs. Companies need proof that candidates can deliver.
          Traditional education teaches knowledge. It rarely provides practical experience.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {problems.map((problem, index) => (
          <Reveal key={problem.title} delay={index * 0.08}>
            <FeatureCard icon={problem.icon} title={problem.title} copy={problem.copy} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SolutionSection() {
  return (
    <Section id="solution" eyebrow="The solution" title="A New Way To Learn">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          SOMLIA transforms learning into practical experience. Instead of collecting certificates, users
          build proof of work. Instead of studying alone, users collaborate, review, and improve together.
          Instead of guessing what employers want, users practice real-world scenarios.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {solutionPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <FeatureCard icon={pillar.icon} title={pillar.title} copy={pillar.copy} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Learn through the full experience loop.">
      <div className="grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">{step.step}</span>
                <div className="h-px flex-1 bg-white/10 mx-4" />
                <CheckCircle2 className="h-5 w-5 text-zinc-400 transition group-hover:text-white" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{step.copy}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function LearnersSection() {
  return (
    <Section id="learners" eyebrow="Community" title="Learn Together">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <GraduationCap className="h-7 w-7" />
            </div>
            <p className="mt-8 text-2xl font-semibold leading-snug text-white">
              The review process is part of the learning.
            </p>
            <p className="mt-5 leading-8 text-zinc-400">
              The best learning happens through feedback. Users review each other's work, exchange
              insights, identify improvements, and grow together. Every useful review strengthens the
              community and makes the reputation system more credible.
            </p>
            <div className="mt-8">
              <ButtonLink href="#waitlist" variant="primary">
                Join Waitlist
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {communityBenefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.06}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex min-h-24 items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />
                <span className="text-zinc-200">{benefit}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CompaniesSection() {
  return (
    <Section id="companies" eyebrow="For companies" title="Discover Proven Talent">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          Instead of relying solely on resumes and certificates, companies can discover people who have
          already demonstrated their skills through practical challenges and community validation. See what
          candidates can do before hiring them.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companySignals.map((signal, index) => (
          <Reveal key={signal.label} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <signal.icon className="h-5 w-5 text-white" />
              </div>
              <p className="font-medium text-white">{signal.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="#waitlist" variant="secondary">
          For Companies
        </ButtonLink>
      </div>
    </Section>
  );
}

function WhyNowSection() {
  return (
    <Section id="ai" eyebrow="AI-native skills" title="Built For The AI Era">
      <Reveal>
        <div className="glass mx-auto max-w-5xl rounded-[2rem] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                <Lightbulb className="h-7 w-7" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-white">Modern professionals work alongside AI.</p>
            </div>
            <p className="text-lg leading-8 text-zinc-400">
              Modern professionals do not compete against AI. They work alongside it. SOMLIA teaches users
              how to combine practical skills with modern AI tools to improve productivity, decision making,
              research, communication, and execution. The goal is not simply learning a skill. The goal is
              becoming an AI-native professional.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function EarlyAccessSection() {
  return (
    <Section id="early-access" eyebrow="Who it is for" title="Everyone helps close the experience gap.">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          SOMLIA brings learners, community reviewers, and companies into one practical loop. Learning and
          teaching happen simultaneously, while opportunities come after people have proven their abilities.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Reveal>
          <ActionCard
            icon={GraduationCap}
            title="Learners"
            copy="Build practical skills, complete challenges, receive feedback, and create proof of what you can do."
            button="Join Waitlist"
            href="#waitlist"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ActionCard
            icon={MessageSquare}
            title="Community Reviewers"
            copy="Review peer work, share useful feedback, and earn reputation by helping others improve."
            button="Build Reputation"
            href="#waitlist"
          />
        </Reveal>
        <Reveal delay={0.16}>
          <ActionCard
            icon={BriefcaseBusiness}
            title="Companies"
            copy="Discover people who have already shown practical ability through challenges and validation."
            button="For Companies"
            href="#waitlist"
          />
        </Reveal>
      </div>
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
    <section id="waitlist" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Join waitlist</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Help Build The Future Of Learning
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Join the waitlist and help shape a platform designed to transform learning into experience.
              SOMLIA helps people turn learning into real experience through practical challenges, community
              collaboration, and AI-native skill development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Practical challenges", "Community feedback", "AI-native skills"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-5 sm:p-7">
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
                  placeholder="Tell us what you want to learn, build, or get help with."
                />
              </FormField>
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitState === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:bg-zinc-400"
            >
              {submitState === "loading" ? "Saving..." : "Join early access"}
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            {submitMessage ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                aria-live="polite"
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                  submitState === "error"
                    ? "border-red-400/25 bg-red-950/30 text-red-100"
                    : "border-white/10 bg-white/[0.05] text-zinc-200"
                }`}
              >
                {submitMessage}
              </motion.p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3 md:items-center md:text-left">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <LogoLockup size="footer" />
          <div>
            <p className="font-semibold tracking-[0.2em] text-white">SOMLIA</p>
            <p className="mt-1 text-sm text-zinc-500">Turning learning into real experience.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-400">
          <a className="transition hover:text-white" href="/#learners">
            Learners
          </a>
          <a className="transition hover:text-white" href="/#companies">
            Companies
          </a>
          <a className="transition hover:text-white" href="/#waitlist">
            Contact
          </a>
          <a className="transition hover:text-white" href="/roadmap">
            Roadmap
          </a>
        </div>
        <p className="text-sm text-zinc-600 md:text-right">© 2026 SOMLIA. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  compact = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 ${
        compact ? "py-10 lg:py-10" : "py-20 lg:py-28"
      }`}
    >
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof GraduationCap;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -7, rotate: -0.4 }}
      className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft transition hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/[0.08] blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-400">{copy}</p>
    </motion.div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  copy,
  button,
  href,
}: {
  icon: typeof GraduationCap;
  title: string;
  copy: string;
  button: string;
  href: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass h-full rounded-[2rem] p-6 sm:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-zinc-400">{copy}</p>
      <div className="mt-8">
        <ButtonLink href={href} variant="primary">
          {button}
        </ButtonLink>
      </div>
    </motion.div>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-300">{label}</span>
      {children}
    </label>
  );
}

function ButtonLink({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const classes =
    variant === "primary"
      ? "bg-white text-black hover:bg-zinc-200"
      : "border border-white/12 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]";

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${classes}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

function LogoLockup({ size }: { size: "nav" | "footer" }) {
  const dimensions = size === "nav" ? "h-10 w-24 sm:w-28" : "h-11 w-28";

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white px-2.5 py-2 shadow-soft ${dimensions}`}
    >
      <img src={logoLockupSrc} alt="SOMLIA logo" className="h-full w-full object-contain mix-blend-multiply" />
    </span>
  );
}

function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-2]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/[0.055] blur-3xl" />
    </div>
  );
}

export default App;
