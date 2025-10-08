import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-lg">
      <div className="bg-hero-gradient text-sm text-primary-foreground">
        <div className="container flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium tracking-tight">
            Infinity Auditing &amp; Accounting — Trusted advisors guiding bold
            finance decisions.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
            <a
              href="tel:+971501234567"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="size-4" />
              +971 50 123 4567
            </a>
            <a
              href="mailto:connect@infinityauditing.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="size-4" />
              connect@infinityauditing.com
            </a>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-semibold text-foreground"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-end text-white shadow-soft">
            IA
          </span>
          <div className="leading-none">
            <span className="block text-base font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Infinity
            </span>
            <span className="block text-2xl font-extrabold text-primary">
              Auditing &amp; Accounting
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative px-1 py-2 transition-all",
                  isActive
                    ? "text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-primary",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-border/80 p-2 text-foreground transition hover:border-primary hover:text-primary lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "lg:hidden",
          mobileOpen
            ? "block border-t border-border/70 bg-background/95"
            : "hidden",
        )}
      >
        <nav className="container flex flex-col gap-4 py-6 text-base font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between rounded-lg border border-transparent px-4 py-3 transition",
                  isActive
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 border-t border-border/80 pt-4">
            <Button variant="outline" asChild className="justify-center">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild className="justify-center">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
