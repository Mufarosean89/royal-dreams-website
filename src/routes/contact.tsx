import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Royal Dreams" },
      { name: "description", content: "Get in touch with Royal Dreams in Cape Town — for donations, referrals or partnerships." },
      { property: "og:title", content: "Contact Royal Dreams" },
      { property: "og:description", content: "Reach the Royal Dreams team for donations, referrals or partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container-prose py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-secondary">Contact</p>
      <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl text-primary">
        Let's <em className="italic text-accent not-italic font-serif">talk</em>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Whether you'd like to donate, refer a student, or partner with us — we'd
        love to hear from you.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-6">
          <Info icon={<Mail size={18} />} title="Email" value="hello@royaldreams.org.za" />
          <Info icon={<Phone size={18} />} title="Phone" value="+27 (0) 21 000 0000" />
          <Info icon={<MapPin size={18} />} title="Based in" value="Cape Town, South Africa" />
          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
            We typically reply within two working days. For urgent student
            referrals, please call us directly.
          </div>
        </aside>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              {sent ? "Thank you — we'll be in touch soon." : "We respect your privacy."}
            </p>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-secondary"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-accent">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
