import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSignature,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Comprehensive statutory, internal, and special audits aligned with international standards to deliver stakeholder confidence.",
    deliverables: [
      "External & internal audit delivery",
      "IFRS implementation and advisory",
      "Due diligence and agreed-upon procedures",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Taxation Advisory",
    description:
      "End-to-end VAT and corporate tax advisory ensuring timely compliance, optimised structures, and regulator-ready documentation.",
    deliverables: [
      "Corporate tax strategy & filing",
      "VAT registration, review, and automation",
      "Cross-border tax planning",
    ],
    icon: FileSignature,
  },
  {
    title: "Accounting & CFO Services",
    description:
      "Dedicated finance specialists delivering accurate bookkeeping, insightful management reports, and executive-level guidance.",
    deliverables: [
      "Cloud accounting migration",
      "Monthly closings & MIS dashboards",
      "Interim CFO and board reporting",
    ],
    icon: LineChart,
  },
];

const approach = [
  {
    title: "Discover",
    detail:
      "Understand your operating model, regulatory obligations, and finance ambitions through structured discovery sessions.",
  },
  {
    title: "Design",
    detail:
      "Map controls, timelines, and collaboration plans anchored to international frameworks and UAE guidelines.",
  },
  {
    title: "Deliver",
    detail:
      "Execute audits and advisory programs with transparent updates, measurable milestones, and actionable recommendations.",
  },
  {
    title: "Elevate",
    detail:
      "Embed continuous improvement through dashboards, workshops, and strategic finance planning for leadership teams.",
  },
];

const accelerators = [
  {
    title: "Compliance Control Maps",
    description:
      "Visual frameworks highlight responsibilities, deadlines, and risk exposure across entities and jurisdictions.",
  },
  {
    title: "Finance Data Room Setup",
    description:
      "Secure documentation structures that keep audit trails accessible for banks, investors, and regulators.",
  },
  {
    title: "KPI Insights & Benchmarking",
    description:
      "Benchmark reporting quality, cash flow, and margin trends against industry peers tailored to GCC markets.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6779567/pexels-photo-6779567.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Professionals analyzing financial documents and reports with a calculator."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.25)_0%,rgba(13,62,120,0.55)_100%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            Services
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Precision assurance and advisory tailored to UAE regulations.
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Infinity Auditing &amp; Accounting blends partner-led expertise with
            intelligent tooling to cover every aspect of audit, tax, and finance
            transformation. Explore how our teams can support your next
            milestone.
          </p>
        </div>
      </section>

      <section className="container space-y-12 py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {services.map(({ title, description, deliverables, icon: Icon }) => (
            <div
              key={title}
              className="flex h-full flex-col gap-6 rounded-[28px] border border-border/70 bg-white p-8 shadow-soft"
            >
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Icon className="size-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-2 text-foreground/80"
                  >
                    <CheckCircle2 className="mt-1 size-4 text-primary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                asChild
                className="mt-auto w-fit px-0 text-primary"
              >
                <Link to="/contact">
                  Start conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How we partner with your finance team
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every engagement follows a proven framework ensuring clarity,
              agility, and confidence from day one.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border/70 bg-white p-6 text-center shadow-soft"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Accelerator toolkits for rapid results
            </h2>
            <p className="text-base text-muted-foreground">
              Our teams deploy proven accelerators that streamline onboarding,
              reduce stakeholder effort, and deliver clarity faster.
            </p>
            <div className="space-y-4">
              {accelerators.map((accelerator) => (
                <div
                  key={accelerator.title}
                  className="rounded-2xl border border-border/70 bg-white p-5 shadow-soft"
                >
                  <BarChart3 className="size-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {accelerator.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {accelerator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] bg-gradient-to-br from-primary/90 to-primary/70 p-8 text-white shadow-soft">
            <h3 className="text-2xl font-semibold">
              Finance diagnostics in 10 working days
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Receive a comprehensive assessment covering controls, reporting,
              compliance, and systems adoption with prioritised recommendations.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4" />
                Management letter outlining quick wins and structural
                improvements.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4" />
                Tax and VAT compliance outlook with mitigation actions.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4" />
                Technology enablement roadmap tailored to your finance stack.
              </li>
            </ul>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="mt-8 bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                Request diagnostic
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
