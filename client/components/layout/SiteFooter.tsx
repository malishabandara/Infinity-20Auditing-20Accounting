import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  Linkedin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "Audit & Assurance",
  "Taxation Advisory",
  "Accounting & Bookkeeping",
  "CFO Outsourcing",
  "Business Incorporation",
];

export const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07172c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(48,196,182,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(53,144,255,0.45),transparent_60%)]" />
      <div className="relative">
        <div className="container grid gap-12 py-16 lg:grid-cols-4">
          <div className="space-y-5">
            <Link
              to="/"
              className="flex items-center gap-3 text-xl font-semibold text-foreground"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2F10df66d7e53546f094860eb5fbd8fefb?format=webp&width=800"
                alt="Infinity Auditing & Accounting logo"
                className="h-10 w-auto object-contain drop-shadow"
                loading="eager"
                decoding="async"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/80">
              Building financial clarity for ambitious organisations across the
              UAE. We combine rigorous audit standards with proactive advisory
              to keep your business a step ahead.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Core Expertise
            </h3>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4" />
                <span>
                  Level 02, Bldg. 04, Bay Square,
                  <br />
                  Business Bay, Dubai, UAE
                </span>
              </li>
              <li>
                <a
                  href="tel:+971545628525"
                  className="flex items-center gap-3 text-white/85 transition hover:text-white"
                >
                  <Phone className="size-4" />
                  +971 54 562 8525
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@infinityauditing.com"
                  className="flex items-center gap-3 text-white/85 transition hover:text-white"
                >
                  <Mail className="size-4" />
                  info@infinityauditing.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971545628525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/85 transition hover:text-white"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Clock className="size-4" />
                Monday – Friday: 9:00 AM – 6:00 PM
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/infinity_auditing?igsh=MWZweDV5bnplcW04Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/infinity-auditing-accounting/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container flex flex-col gap-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Infinity Auditing & Accounting All
              rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span>ISO 9001 Certified</span>
              <span>Dubai FTA Registered</span>
              <span>IFRS Compliant Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
