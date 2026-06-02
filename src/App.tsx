import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
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
import logoLockupSrc from "./assets/lerni-logo-cropped.png";

type Role = "Learner" | "Company" | "Investor / Partner";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For learners", href: "#learners" },
  { label: "For companies", href: "#companies" },
  { label: "Join waitlist", href: "#waitlist" },
];

const problems = [
  {
    icon: GraduationCap,
    title: "No real experience",
    copy: "Courses and class projects rarely look like the work companies need done.",
  },
  {
    icon: BadgeCheck,
    title: "No proof of skills",
    copy: "It is hard to show judgment, execution, and reliability without real task history.",
  },
  {
    icon: Target,
    title: "No clear path",
    copy: "Learning often ends before earning starts, leaving people stuck between both worlds.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Learn the task basics",
    copy: "Get the context, examples, and expectations before work begins.",
  },
  {
    step: "02",
    title: "Complete a real company task",
    copy: "Work on practical micro-projects from startups and small teams.",
  },
  {
    step: "03",
    title: "Get feedback and proof",
    copy: "Turn completed work into evidence of ability, not just effort.",
  },
  {
    step: "04",
    title: "Earn and unlock better tasks",
    copy: "Move from simple execution to higher-value work as trust grows.",
  },
];

const learnerBenefits = [
  "Build a real portfolio",
  "Earn from beginner-friendly tasks",
  "Get feedback from real projects",
  "Learn skills companies actually need",
  "Move from simple tasks to more valuable work",
];

const companyTasks = [
  { label: "Market research", icon: Search },
  { label: "Lead generation", icon: Users },
  { label: "Data collection", icon: BarChart3 },
  { label: "Content support", icon: MessageSquare },
  { label: "Competitor analysis", icon: Layers3 },
  { label: "Operations support", icon: ClipboardList },
];

const taskCards = [
  {
    title: "Market research sprint",
    label: "Startup task",
    meta: "3 hrs",
    amount: "Paid",
    icon: Search,
  },
  {
    title: "Lead list cleanup",
    label: "Beginner-friendly",
    meta: "Feedback",
    amount: "$",
    icon: Users,
  },
  {
    title: "Content support brief",
    label: "Portfolio proof",
    meta: "Review",
    amount: "Level up",
    icon: MessageSquare,
  },
];

const taskStreamRows = [
  [
    { label: "Research sprint", meta: "Startup task", icon: Search },
    { label: "Lead list", meta: "Paid micro-project", icon: Users },
    { label: "Content brief", meta: "Portfolio proof", icon: FileText },
    { label: "Market map", meta: "Feedback loop", icon: BarChart3 },
    { label: "Ops checklist", meta: "Beginner-friendly", icon: ClipboardList },
    { label: "Company handoff", meta: "Real client", icon: Handshake },
  ],
  [
    { label: "Learn basics", meta: "Task context", icon: GraduationCap },
    { label: "Apply judgment", meta: "Real output", icon: MousePointer2 },
    { label: "Earn payout", meta: "Proof of work", icon: CircleDollarSign },
    { label: "Unlock next task", meta: "Better work", icon: Rocket },
    { label: "Get reviewed", meta: "Useful feedback", icon: BadgeCheck },
    { label: "Build portfolio", meta: "Visible progress", icon: Layers3 },
  ],
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020203] text-white">
      <div className="noise" />
      <BackgroundGrid />
      <Navbar />
      <main>
        <HeroSection />
        <TaskStreamSection />
        <ProblemSection />
        <SolutionSection />
        <LearnersSection />
        <CompaniesSection />
        <WhyNowSection />
        <EarlyAccessSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-soft backdrop-blur-2xl sm:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="LERNI home">
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
          href="#waitlist"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Join early access
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
            Learn by doing. Earn by proving.
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl 2xl:text-7xl">
            Real skills. Real tasks. Real experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            LERNI helps students and young professionals gain practical experience by completing paid tasks
            from real startups and companies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#waitlist" variant="primary">
              Join as a learner
            </ButtonLink>
            <ButtonLink href="#companies" variant="secondary">
              Request help for your company
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Starting with students, startups, and practical micro-projects.
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
                  alt="LERNI logo"
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-zinc-500">Live task path</p>
                <p className="font-medium text-white">Learn - Apply - Earn</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-zinc-300">
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
              Open beta
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
    <section aria-label="LERNI task stream" className="relative overflow-hidden py-8 lg:py-12">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-3 px-5 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Task stream</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Practical work moving through the LERNI loop.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-zinc-500">
          A calm flow of beginner-friendly work, feedback, and proof.
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

function ProblemSection() {
  return (
    <Section id="problem" eyebrow="The gap" title="Courses give knowledge. Companies ask for experience." compact>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          Most people finish courses or university projects but still cannot prove real work experience.
          Companies want people who have already done practical work. LERNI closes this gap by turning
          learning into real tasks.
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
    <Section id="how-it-works" eyebrow="How it works" title="LERNI turns learning into practical work.">
      <div className="grid gap-4 lg:grid-cols-4">
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
    <Section id="learners" eyebrow="For learners" title="For people who want more than certificates.">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <GraduationCap className="h-7 w-7" />
            </div>
            <p className="mt-8 text-2xl font-semibold leading-snug text-white">
              Build experience you can point to.
            </p>
            <p className="mt-5 leading-8 text-zinc-400">
              Start with clear, beginner-friendly tasks. Prove that you can research, organize,
              communicate, and deliver. Then use that proof to access better work.
            </p>
            <div className="mt-8">
              <ButtonLink href="#waitlist" variant="primary">
                Join as a learner
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {learnerBenefits.map((benefit, index) => (
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
    <Section id="companies" eyebrow="For companies" title="Flexible help from motivated talent.">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          Companies can use LERNI to get help with practical tasks without hiring full-time. Bring the
          work that matters, and LERNI helps shape it into clear micro-projects for motivated learners.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companyTasks.map((task, index) => (
          <Reveal key={task.label} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <task.icon className="h-5 w-5 text-white" />
              </div>
              <p className="font-medium text-white">{task.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="#waitlist" variant="secondary">
          Submit a company task
        </ButtonLink>
      </div>
    </Section>
  );
}

function WhyNowSection() {
  return (
    <Section id="why-now" eyebrow="Why now" title="The traditional path from education to work is broken.">
      <Reveal>
        <div className="glass mx-auto max-w-5xl rounded-[2rem] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                <Lightbulb className="h-7 w-7" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-white">A practical bridge is overdue.</p>
            </div>
            <p className="text-lg leading-8 text-zinc-400">
              People need proof of practical skills faster. Companies need flexible help. AI is changing
              work, but human judgment, research, execution, and adaptability still matter. LERNI creates
              a practical bridge between education and work.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function EarlyAccessSection() {
  return (
    <Section id="early-access" eyebrow="MVP" title="We are starting manually.">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-8 text-zinc-400">
          Before building a complex marketplace, LERNI is starting with a small group of learners and
          companies. Every first task will be managed manually to understand what actually works.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal>
          <ActionCard
            icon={CircleDollarSign}
            title="I want to gain experience"
            copy="Join the first learner group for paid practical tasks, real feedback, and portfolio proof."
            button="Join as a learner"
            href="#waitlist"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ActionCard
            icon={BriefcaseBusiness}
            title="I need help with tasks"
            copy="Share the work your team needs done and shape it into a clear, manageable micro-project."
            button="Request company help"
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("LERNI early access submission", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", role: "Learner", message: "" });
  }

  return (
    <section id="waitlist" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Join waitlist</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Help shape the first LERNI tasks.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              LERNI helps people build real-world experience by completing paid practical tasks from real
              companies. Join early access as a learner, company, investor, or partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Students", "Startups", "Practical micro-projects"].map((item) => (
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
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
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
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
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
                  value={formData.role}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, role: event.target.value as Role }))
                  }
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
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  className="field resize-none"
                  placeholder="Tell us what you want to learn, build, or get help with."
                />
              </FormField>
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              Join early access
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-zinc-200"
              >
                Thanks. Your interest is logged for early access.
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
            <p className="font-semibold tracking-[0.2em] text-white">LERNI</p>
            <p className="mt-1 text-sm text-zinc-500">Learn by doing. Earn by proving.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-400">
          <a className="transition hover:text-white" href="#learners">
            Learners
          </a>
          <a className="transition hover:text-white" href="#companies">
            Companies
          </a>
          <a className="transition hover:text-white" href="#waitlist">
            Contact
          </a>
        </div>
        <p className="text-sm text-zinc-600 md:text-right">© 2026 LERNI. All rights reserved.</p>
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
  icon: typeof CircleDollarSign;
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
      <img src={logoLockupSrc} alt="LERNI logo" className="h-full w-full object-contain mix-blend-multiply" />
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
