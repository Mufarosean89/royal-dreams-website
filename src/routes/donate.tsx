import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, Sparkles, HandHeart, Users } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Royal Dreams" },
      { name: "description", content: "Donate formal attire, sponsor dry-cleaning, or volunteer with Royal Dreams in Cape Town." },
      { property: "og:title", content: "Donate to Royal Dreams" },
      { property: "og:description", content: "Help dress a Cape Town student for their milestone moment." },
    ],
  }),
  component: DonatePage,
});

const ways = [
  { icon: <Shirt size={20} />, t: "Donate attire", b: "Formal dresses, suits, smart shoes, jewellery and accessories in good condition.", cta: "Drop-off info" },
  { icon: <Sparkles size={20} />, t: "Sponsor cleaning", b: "R150 covers a professional dry-clean. R2 500 sponsors a full batch.", cta: "Sponsor a batch" },
  { icon: <HandHeart size={20} />, t: "Give financially", b: "Fund alterations, transport and the small things that make the day perfect.", cta: "Make a gift" },
  { icon: <Users size={20} />, t: "Volunteer", b: "Help at fittings, photograph events, or lend your tailoring skills.", cta: "Join the team" },
];

function DonatePage() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Get involved</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl text-primary">
          Help a student feel <em className="italic text-accent not-italic font-serif">royal</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Royal Dreams is powered by Capetonians who believe in second chances —
          for clothes, and for the moments they make possible. Here's how you can help.
        </p>
      </section>

      <section className="border-t border-border bg-muted/40 py-20">
        <div className="container-prose grid gap-6 md:grid-cols-2">
          {ways.map((w) => (
            <div key={w.t} className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent">
                {w.icon}
              </div>
              <h3 className="mt-5 font-serif text-2xl text-primary">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.b}</p>
              <Link to="/contact" className="mt-6 inline-block text-sm font-medium text-primary hover:text-secondary">
                {w.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">What we accept</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-primary">Wardrobe wishlist</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl text-primary">Most needed</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>• Formal dresses (all sizes — especially 14+)</li>
                <li>• Men's suits, blazers and dress shirts</li>
                <li>• Smart shoes (men's and women's)</li>
                <li>• Clutches, ties, jewellery & accessories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary">Condition</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>• Clean and free of damage</li>
                <li>• No missing buttons or broken zips</li>
                <li>• Worn no more than a handful of times</li>
                <li>• We'll dry-clean everything before it's gifted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
