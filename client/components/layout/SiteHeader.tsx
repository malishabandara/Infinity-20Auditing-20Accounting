import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "AML", to: "/aml" },
  { label: "Contact", to: "/contact" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="z-50 border-b border-border/60 bg-background/90 backdrop-blur-lg lg:sticky lg:top-0">
      <div className="container flex items-center justify-between py-4">
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
              href="https://tax.gov.ae/en/media.centre/news.aspx"
              target="_blank"
              rel="noreferrer"
            >
              FTA Updates
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/971545628525"
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
                href="https://tax.gov.ae/en/media.centre/news.aspx"
                target="_blank"
                rel="noreferrer"
              >
                FTA Updates
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-center">
              <a
                href="https://wa.me/971545628525"
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
