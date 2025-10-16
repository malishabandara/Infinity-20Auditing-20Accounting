import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Compass,
  Globe2,
  LineChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    year: "2013",
    title: "Founded in India",
    description:
      "Built to deliver rigorous audit support for family businesses expanding across the GCC.",
  },
  {
    year: "2018",
    title: "Regional Expansion",
    description:
      "Established specialised practices for logistics, healthcare, and hospitality sectors.",
  },
  {
    year: "2024",
    title: "Digital Finance Lab",
    description:
      "Launched analytics-led advisory to help CFOs visualise real-time compliance and cash flow.",
  },
  {
    year: "2025",
    title: "Infinity Today",
    description:
      "120+ clients across 24 industries with ongoing engagements in tax, assurance, and advisory.",
  },
];

const values = [
  {
    title: "Integrity First",
    description:
      "Independence is non-negotiable. Every engagement is benchmarked to international standards.",
    icon: Compass,
  },
  {
    title: "Forward Momentum",
    description:
      "We translate compliance into competitive advantage through proactive advisory and continual optimisation.",
    icon: Target,
  },
  {
    title: "Global Perspective",
    description:
      "Our consultants bring multi-jurisdiction expertise ensuring cross-border taxation and reporting are aligned.",
    icon: Globe2,
  },
];

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

const About = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Colleagues celebrating success over financial charts in a modern office."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.45)_0%,rgba(13,62,120,0.75)_100%)]" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_60%)]" />
        <div className="relative z-10 container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            About Infinity
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Trusted auditors, strategic partners, and advocates for financial
            clarity.
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Infinity Auditing &amp; Accounting has guided organisations across
            the UAE for nearly two decades. Our philosophy is simple: combine
            uncompromising governance with insights that enable bold business
            moves. Every engagement is partner-led, data-informed, and grounded
            in international best practice.
          </p>
        </div>
      </section>

      <section className="container space-y-12 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Mission &amp; Operating Principles
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Our mission is to safeguard the financial backbone of forward
                thinking businesses. We embed alongside leadership teams to
                identify risk, elevate governance, and uncover efficiencies that
                propel sustained growth.
              </p>
              <p>
                Every consultant at Infinity commits to responsive
                communication, clarity of analysis, and meticulous execution.
                Clients choose us for our agility, sector awareness, and
                unwavering commitment to independence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
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
          <div className="space-y-6 rounded-[28px] border border-border/70 bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-foreground">
              Our Assurance Commitments
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-4 text-primary" />
                Partner and senior manager oversight across every milestone
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-4 text-primary" />
                Proactive regulator engagement and documentation readiness
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-4 text-primary" />
                Intelligent tooling to monitor compliance and deliver insights
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container space-y-12">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Milestones that shaped our firm
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  {milestone.year}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Leadership Team
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Senior specialists lead every engagement, applying global experience
            to local regulations.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {leadership.map((leader) => (
            <div
              key={leader.name}
              className="rounded-[26px] border border-border/70 bg-card p-8 text-center shadow-soft"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                {leader.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {leader.name}
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {leader.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
