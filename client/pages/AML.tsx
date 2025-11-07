import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Lock,
  BarChart3,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";

const amlServices = [
  {
    title: "Customer Onboarding",
    description:
      "Authenticate individuals and businesses using AI-driven KYC (Know Your Customer) & KYB (Know Your Business) solutions.",
    icon: Users,
  },
  {
    title: "Risk Assessment & Screening",
    description:
      "Every customer undergoes real-time risk profiling based on international AML compliance databases.",
    icon: BarChart3,
  },
  {
    title: "Transaction Monitoring",
    description:
      "Continuous monitoring of transactions to detect and report suspicious activities in real-time.",
    icon: Zap,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensure your organization aligns with international AML standards and regulatory requirements.",
    icon: Lock,
  },
  {
    title: "AML Reporting Services",
    description:
      "Specialized Go AML reporting services helping businesses meet their anti-money laundering compliance obligations.",
    icon: Shield,
  },
  {
    title: "MLRO Provisioning",
    description:
      "Expert Money Laundering Reporting Officer support from risk assessment through comprehensive oversight.",
    icon: Globe,
  },
];

const whyOntrax = [
  {
    title: "Certified & Trusted",
    description:
      "As an accredited compliance provider, we uphold the highest standards of excellence, ensuring your AML practices remain robust and audit-ready.",
  },
  {
    title: "Industry Recognition",
    description:
      "Our proven track record, client success stories, and award-winning performance have positioned us as a trusted name in compliance advisory.",
  },
  {
    title: "Global Expertise",
    description:
      "UAE-based team with global expertise delivering customized, sector-specific compliance strategies.",
  },
  {
    title: "Dedicated Support",
    description:
      "Dedicated AML professionals providing continuous support from risk assessment to MLRO provisioning.",
  },
];

const amlStats = [
  { label: "Customers Worldwide", value: "120" },
  { label: "Years of Experience", value: "9" },
  { label: "Industries Served", value: "24" },
  { label: "Compliance Rate", value: "99%" },
];

export default function AML() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/burjk.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(7,23,44,0.85),transparent_70%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container grid min-h-[72vh] items-center gap-8 sm:gap-10 lg:gap-12 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 ring-1 ring-white/40">
              Compliance & Risk Management
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Your Trusted Patner in AML Risk Management
              </h1>
              <p className="max-w-xl mx-auto text-lg text-white/85 text-center">
                We deliver tailored Anti-Money Laundering compliance solutions
                that protect your business, ensure regulatory alignment, and
                foster long-term credibility.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-primary/40"
              >
                <Link to="/contact">Get AML Consultation</Link>
              </Button>
            </div>
            <div className="mx-auto w-full max-w-2xl">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-white text-center">
                  Key Benefits
                </p>
                <ul className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 text-sm text-white">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5" />
                    <span>Safeguard from financial crime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5" />
                    <span>Regulatory compliance assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5" />
                    <span>Reputational risk protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mt-8 grid gap-4 rounded-[28px] bg-card p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {amlStats.map((stat) => (
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

      {/* Our Approach Section */}
      <section className="container space-y-12 py-24">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground">
            Our Approach
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AML Compliance in 5 Steps
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Stay Compliant. Stay Secure. Precision, Partnership, Protection
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {amlServices.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[26px] border border-border/70 bg-card p-8 shadow-soft transition hover:-translate-y-1"
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ontrax Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Professional team working on compliance and risk management"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.45)_0%,rgba(13,62,120,0.75)_100%)]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container space-y-12 text-white">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Infinity: Your Unwavering Compliance Advantage
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/80">
              Trusted by regulated entities across the MENA region
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {whyOntrax.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container space-y-12 py-24">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground">
            Expertise
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Trusted Partner in AML Compliance & Financial Security
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            In today's fast-changing regulatory environment, Anti-Money
            Laundering (AML) compliance is not just a requirement—it's a
            safeguard for your business. We deliver customized, cutting-edge AML
            compliance solutions that protect your organization from financial
            risks, legal penalties, and reputational damage.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-[24px] border border-border/70 bg-card p-8 shadow-soft">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary mb-4">
                <Shield className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Financial Institutions
              </h3>
              <p className="text-muted-foreground">
                Comprehensive AML solutions tailored for banks, investment
                firms, and payment processors.
              </p>
            </div>
            <div className="rounded-[24px] border border-border/70 bg-card p-8 shadow-soft">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary mb-4">
                <Zap className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Crypto Businesses
              </h3>
              <p className="text-muted-foreground">
                Specialized compliance solutions for cryptocurrency exchanges
                and digital asset platforms.
              </p>
            </div>
            <div className="rounded-[24px] border border-border/70 bg-card p-8 shadow-soft">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary mb-4">
                <Globe className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                DNFBP Sector
              </h3>
              <p className="text-muted-foreground">
                Designated Non-Financial Businesses and Professions compliance
                expertise.
              </p>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[30px] bg-gradient-to-br from-card via-card to-secondary/60 p-10 shadow-soft">
            <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-gradient-start/40 to-gradient-end/40" />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Certified AML Compliance Excellence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team of certified experts ensures your compliance framework
                aligns with international standards while improving operational
                efficiency and business resilience.
              </p>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  ✓ International standards alignment
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  ✓ Real-time monitoring systems
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  ✓ Audit-ready documentation
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
                  ✓ 24/7 compliance support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30" />
        <div className="relative container flex flex-col gap-8 rounded-[30px] border border-border/70 bg-card/80 p-10 text-center shadow-soft backdrop-blur lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Take Action Today
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Safeguard your business from financial crime
            </h2>
            <p className="text-lg text-muted-foreground">
              With Infinity Auditing & Accounting Pvt Ltd as your trusted
              partner, navigate complex AML regulations with confidence.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <Button size="lg" asChild className="shadow-lg shadow-primary/30">
              <Link to="/contact">Schedule AML Assessment</Link>
            </Button>
            <a
              href="tel:+971545628525"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              Call +971 54 562 8525
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
