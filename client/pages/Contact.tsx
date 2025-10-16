import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const contactChannels = [
  {
    label: "Phone",
    value: "+971 58 189 7800",
    href: "tel:+971581897800",
    icon: Phone,
  },
  {
    label: "Email",
    value: "info@infinityauditing.com",
    href: "mailto:info@infinityauditing.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/971581897800",
    icon: MessageCircle,
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const fullName = formData.get("fullName") as string;
      const company = formData.get("company") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const service = formData.get("service") as string;
      const message = formData.get("message") as string;

      // Format message for WhatsApp
      const whatsappMessage = `*New Enquiry from Contact Form*\n\n*Full Name:* ${fullName}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service of Interest:* ${service}\n*Message:* ${message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/971581897800?text=${encodedMessage}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappUrl, "_blank");

      // Show success notification
      toast.success("Opening WhatsApp. Please send your message to complete the enquiry.");

      // Reset form
      formRef.current?.reset();
    } catch (error) {
      toast.error("Failed to process enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10619954/pexels-photo-10619954.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Downtown Dubai skyline with modern skyscrapers and business district."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.45)_0%,rgba(13,62,120,0.75)_100%)]" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),transparent_65%)]" />
        <div className="relative z-10 container space-y-8">
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
          <div className="rounded-[28px] border border-border/70 bg-card p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground">
              Submit your enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your focus areas and preferred engagement timeline.
              We will follow up with a tailored roadmap.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Jane Ahmed"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Company
                  <input
                    type="text"
                    name="company"
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
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  Contact Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 50 000 0000"
                    className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                Services of Interest
                <select
                  name="service"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue="Audit & Assurance"
                >
                  <option value="Audit & Assurance">
                    Audit &amp; Assurance
                  </option>
                  <option value="Taxation Advisory">
                    Taxation Advisory
                  </option>
                  <option value="Accounting & CFO">
                    Accounting &amp; CFO Services
                  </option>
                  <option value="Business Setup">
                    Business Incorporation
                  </option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                How can we help?
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Share your current objectives, timelines, or challenges."
                  className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Submit Enquiry"}
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="rounded-[28px] border border-border/70 bg-card p-8 shadow-soft">
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
          <div className="rounded-[28px] border border-border/70 bg-card p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">
              Visit our head office
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-primary" />
                <span>
                    Level 02, Bldg. 04, Bay Square,
                  <br />
                    Business Bay, Dubai, UAE
                </span>
              </div>
              <div className="h-56 overflow-hidden rounded-2xl">
                <iframe
                  title="Infinity Auditing location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.373303734937!2d55.299673!3d25.156869999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0d52e9a3cf%3A0x56a5bec96cba8237!2sZengage%20Global%20-%20UAE!5e0!3m2!1sen!2slk!4v1760546609446!5m2!1sen!2slk"
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
