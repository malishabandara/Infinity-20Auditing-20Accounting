import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const contactChannels = [
  {
    label: "Phone",
    value: "+971 50 123 4567",
    href: "tel:+971501234567",
    icon: Phone,
  },
  {
    label: "Email",
    value: "connect@infinityauditing.com",
    href: "mailto:connect@infinityauditing.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/971501234567",
    icon: MessageCircle,
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10619954/pexels-photo-10619954.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Downtown Dubai skyline with modern skyscrapers and business district."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.25)_0%,rgba(13,62,120,0.55)_100%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),transparent_65%)]" />
        <div className="relative container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            Contact
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Speak with a senior consultant within one business day.
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Share your objectives and we will align the right specialists to
            support your audit, accounting, and tax requirements. We respond to
            all enquiries within 24 hours.
          </p>
        </div>
      </section>

      <section className="container grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="rounded-[28px] border border-border/70 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground">
              Submit your enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your focus areas and preferred engagement timeline.
              We will follow up with a tailored roadmap.
            </p>
            <form className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Full Name
                  <input
                    type="text"
                    required
                    placeholder="Jane Ahmed"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Company
                  <input
                    type="text"
                    placeholder="Infinity Ventures"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Corporate Email
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Contact Number
                  <input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                Services of Interest
                <select
                  className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue="Audit & Assurance"
                >
                  <option className="text-foreground" value="Audit & Assurance">
                    Audit &amp; Assurance
                  </option>
                  <option className="text-foreground" value="Taxation Advisory">
                    Taxation Advisory
                  </option>
                  <option className="text-foreground" value="Accounting & CFO">
                    Accounting &amp; CFO Services
                  </option>
                  <option className="text-foreground" value="Business Setup">
                    Business Incorporation
                  </option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                How can we help?
                <textarea
                  rows={5}
                  placeholder="Share your current objectives, timelines, or challenges."
                  className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
              >
                Submit Enquiry
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="rounded-[28px] border border-border/70 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground">
              Connect directly
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach out via phone, email, or WhatsApp to speak instantly with a
              senior member of our team.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {contactChannels.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-secondary/40 px-4 py-3 transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-border/70 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">
              Visit our head office
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-primary" />
                <span>
                  Level 14, Boulevard Plaza Tower 1
                  <br />
                  Downtown Dubai, United Arab Emirates
                </span>
              </div>
              <div className="h-56 overflow-hidden rounded-2xl">
                <iframe
                  title="Infinity Auditing location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.025369478907!2d55.276871576861094!3d25.203877433884508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzEzLjkiTiA1NcKwMTYnMzguNyJF!5e0!3m2!1sen!2sae!4v1705166400000!5m2!1sen!2sae"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
