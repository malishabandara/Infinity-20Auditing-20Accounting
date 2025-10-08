import { Link } from "react-router-dom";

import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ClipboardSignature,
  FileSearch,
  Handshake,
  LineChart,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { HeroCarousel } from "@/components/home/HeroCarousel";

const serviceHighlights = [
  {
    title: "Audit & Assurance",
    description:
      "Robust statutory and internal audits that reveal opportunities, not just risks.",
    icon: ShieldCheck,
    features: ["External & Internal Audit", "IFRS Compliance", "Due Diligence"],
  },
  {
    title: "Taxation Advisory",
    description:
      "Navigate UAE corporate tax, VAT, and cross-border regulation with confidence.",
    icon: Calculator,
    features: [
      "Corporate Tax Planning",
      "VAT Registration & Filing",
      "Tax Health Checks",
    ],
  },
  {
    title: "Accounting & CFO",
    description:
      "Outsourced finance teams delivering accurate reporting and actionable insights.",
    icon: LineChart,
    features: [
      "Bookkeeping Automation",
      "CFO as a Service",
      "Management Reporting",
    ],
  },
];

const valuePillars = [
  {
    title: "Industry-Leading Methodology",
    description:
      "Our hybrid audit methodology blends international standards with UAE regulatory knowledge to safeguard your business.",
    icon: ClipboardSignature,
  },
  {
    title: "Senior Consultants on Every Engagement",
    description:
      "Average 12+ years' experience across financial services, construction, logistics, and technology sectors.",
    icon: UserCheck,
  },
  {
    title: "Insights That Enable Action",
    description:
      "We translate findings into finance roadmaps, empowering leadership to make confident decisions in real time.",
    icon: Handshake,
  },
];

const auditSolutions = [
  {
    title: "Risk-Focused Audit",
    items: [
      "Statutory & external audit execution",
      "Internal controls evaluation",
      "IFRS and GAAP alignment",
    ],
  },
  {
    title: "Special Purpose Review",
    items: [
      "Pre-investment due diligence",
      "ESG and sustainability assurance",
      "Financial feasibility studies",
    ],
  },
  {
    title: "Business Setup & Advisory",
    items: [
      "Entity incorporation guidance",
      "Accounting systems architecture",
      "CFO mentoring & training",
    ],
  },
];

const clients = [
  "Emirates Logistics",
  "MAB Group",
  "SkyReach Holdings",
  "Vertex Medical",
  "Bluewave Retail",
];

const stats = [
  { label: "Years of Advisory", value: "18+" },
  { label: "Clients Across GCC", value: "320" },
  { label: "Industries Served", value: "24" },
  { label: "Audit Success Rate", value: "99%" },
];

export default function Index() {
  return (
    <div className="flex flex-col gap-0">
      <section className="relative overflow-hidden bg-hero-gradient pb-32 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(7,23,44,0.55),transparent_70%)]" />
        <div className="relative container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 ring-1 ring-white/40">
              Precision. Clarity. Confidence.
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Accounting &amp; Audit intelligence for modern UAE businesses.
              </h1>
              <p className="max-w-xl text-lg text-white/85">
                Infinity Auditing &amp; Accounting delivers proactive assurance,
                tax, and outsourced CFO services so you stay compliant and
                future-ready. We partner with leadership teams to transform
                finance into a strategic advantage.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="shadow-lg shadow-primary/40"
                >
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Advisory
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/75">
                Or call us directly at{" "}
                <span className="font-semibold">+971 50 123 4567</span>
              </p>
            </div>
            <div className="grid max-w-xl gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                  Featured Insight
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  "Infinity guided our expansion into GCC with complete audit
                  readiness and seamless tax structuring." — COO, Logistics
                  Sector
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                  Value Delivered
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    360° compliance coverage across finance stack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    Dedicated senior consultant for every engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    Real-time dashboards for leadership decisions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <HeroCarousel />
            <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-sm -translate-x-1/2 rounded-3xl bg-white p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Continuous Monitoring
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    Live Compliance Index
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  99.3%
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    Audit Queries
                  </span>
                  <span className="text-primary">Resolved in 24h</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    Tax Filings
                  </span>
                  <span className="text-primary">100% On Time</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    Finance KPIs
                  </span>
                  <span className="text-primary">+28% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 grid gap-4 rounded-[28px] bg-white p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border/60 bg-gradient-to-br from-background to-secondary/30 p-6"
          >
            <CountUp
              value={stat.value}
              duration={1.8}
              className="text-3xl font-bold text-primary"
            />
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="container space-y-12 py-24">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground">
            Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A fully integrated audit, tax, and finance partnership
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            From statutory reporting to strategic financial leadership, our
            specialists work as an extension of your team.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceHighlights.map(
            ({ title, description, icon: Icon, features }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[26px] border border-border/70 bg-white p-8 shadow-soft transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/0 via-gradient-start/0 to-gradient-end/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative space-y-6">
                  <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-foreground/80"
                      >
                        <CheckCircle2 className="size-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="px-0 text-primary" asChild>
                    <Link to="/services">
                      Explore capability
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative container space-y-12 text-white">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Audit intelligence engineered for growth
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/80">
              Structured delivery frameworks keep your finance operations
              resilient while uncovering efficiencies and opportunities.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {auditSolutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-[24px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <ul className="mt-6 space-y-3 text-sm text-white/85">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FileSearch className="mt-0.5 size-4 text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground">
              Why Infinity
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted partners delivering clarity across every financial
              touchpoint
            </h2>
            <p className="text-lg text-muted-foreground">
              We embed alongside your finance stakeholders, streamline reporting
              cycles, and proactively address regulatory changes. Our
              implementations reduce audit adjustments, accelerate board
              reporting, and equip teams with timely insight.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {valuePillars.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-white p-6 shadow-soft"
                >
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[30px] bg-gradient-to-br from-white via-white to-secondary/60 p-10 shadow-soft">
            <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-gradient-start/40 to-gradient-end/40" />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                "Infinity Auditing transformed our reporting cadence and
                uncovered strategic tax savings within three quarters."
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                CFO, Regional Retail Group
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  67% faster audit issue closure
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  4.8/5 client satisfaction rating
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  Multi-entity consolidation dashboards
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  Always-on compliance tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 pb-24">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Trusted by finance leaders across the UAE
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Mid-market groups, family offices, and high-growth innovators rely
            on Infinity Auditing &amp; Accounting to navigate complex regulatory
            mandates.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-muted-foreground">
          {clients.map((client) => (
            <span
              key={client}
              className="rounded-full border border-border/80 bg-secondary px-6 py-3 text-secondary-foreground"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30" />
        <div className="relative container flex flex-col gap-8 rounded-[30px] border border-border/70 bg-white/80 p-10 text-center shadow-soft backdrop-blur lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Ready When You Are
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Align your finance operations with future-ready governance
            </h2>
            <p className="text-lg text-muted-foreground">
              Share your objectives and our senior consultants will craft a
              roadmap covering audit requirements, tax structures, and finance
              transformation milestones.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <Button size="lg" asChild className="shadow-lg shadow-primary/30">
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
            <a
              href="tel:+971501234567"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              Prefer to speak now? Call +971 50 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
