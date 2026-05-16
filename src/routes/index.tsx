import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Shirt, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import attireImg from "@/assets/attire.jpg";
import celebrationImg from "@/assets/celebration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Dreams — Dressing Cape Town's students with dignity" },
      { name: "description", content: "Royal Dreams provides donated formal attire to underprivileged Cape Town students for matric dances and graduations — at no cost." },
      { property: "og:title", content: "Royal Dreams — Dressing students with dignity" },
      { property: "og:description", content: "Donated formal attire for Cape Town's matric dances and graduations." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary">
              <span className="gold-rule" /> A Cape Town non-profit
            </p>
            <h1 className="mt-6 text-5xl md:text-7xl text-primary">
              Every student deserves to feel <em className="text-accent not-italic font-serif italic">royal</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Royal Dreams sources, restores and gifts formal attire to underprivileged
              students across Cape Town — so no one misses their matric dance or
              graduation for want of a dress, a suit, or a clean pair of shoes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-secondary"
              >
                Donate attire <ArrowRight size={16} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary hover:border-primary/60"
              >
                How it works
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat n="120+" label="Students dressed" />
              <Stat n="40+" label="Schools reached" />
              <Stat n="100%" label="At no cost" />
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/20 blur-2xl" aria-hidden />
              <img
                src={heroImg}
                alt="A graduate in emerald and gold regalia"
                width={1600}
                height={1200}
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="container-prose">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">What we do</p>
              <h2 className="mt-3 text-4xl md:text-5xl text-primary">
                Dignity, restored — one garment at a time.
              </h2>
            </div>
            <Link to="/about" className="text-sm text-primary hover:text-secondary inline-flex items-center gap-2">
              Read our story <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Pillar
              icon={<Shirt size={20} />}
              title="Source"
              body="We collect donated dresses, suits, shoes and accessories from generous Capetonians and partner boutiques."
            />
            <Pillar
              icon={<Sparkles size={20} />}
              title="Restore"
              body="Each garment is professionally dry-cleaned and tailored so it feels new on the day it's worn."
            />
            <Pillar
              icon={<Heart size={20} />}
              title="Gift"
              body="Students choose their own outfit through a private, judgement-free fitting — at zero cost to them or their families."
            />
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="py-24">
        <div className="container-prose grid items-center gap-12 md:grid-cols-2">
          <img
            src={attireImg}
            alt="Formal dresses and suits on hangers"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[5/4] w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">The need</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">
              A matric dance can cost more than a month's rent.
            </h2>
            <p className="mt-6 text-muted-foreground">
              For thousands of Cape Town students, the cost of formal attire stands
              between them and the milestone moments their classmates take for
              granted. We exist so that no learner has to choose between dignity and
              participation.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Free fittings, free attire, free returns.",
                "Confidential referrals through schools & social workers.",
                "Every garment professionally cleaned before it's worn.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={celebrationImg}
          alt=""
          loading="lazy"
          width={1400}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden />
        <div className="container-prose relative py-24 text-center text-primary-foreground">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Get involved</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Be the reason someone walks tall.</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Donate that beautiful dress hanging unworn in your wardrobe. Sponsor a
            dry-cleaning batch. Volunteer at a fitting. Every small act becomes a
            milestone memory.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-gold-soft"
            >
              Donate now <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:border-accent hover:text-accent"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-primary">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent">
        {icon}
      </div>
      <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
