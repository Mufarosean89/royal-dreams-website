import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it Works — Royal Dreams" },
      { name: "description", content: "How students access free formal attire from Royal Dreams, and how donors and partners can help." },
      { property: "og:title", content: "How Royal Dreams works" },
      { property: "og:description", content: "From referral to fitting to the dance floor — the Royal Dreams process explained." },
    ],
  }),
  component: HowPage,
});

const studentSteps = [
  { n: "01", t: "Get referred", b: "A teacher, social worker or community leader sends us a private referral on your behalf." },
  { n: "02", t: "Book a fitting", b: "We arrange a confidential appointment at a time and venue that works for you." },
  { n: "03", t: "Choose your look", b: "Browse dresses, suits, shoes and accessories. Try on as many as you'd like." },
  { n: "04", t: "Take it home", b: "Walk out with your outfit professionally cleaned, tailored and ready for the night." },
];

const donorSteps = [
  { n: "01", t: "Check your wardrobe", b: "We accept formal dresses, suits, smart shoes, jewellery and accessories in good condition." },
  { n: "02", t: "Drop or post", b: "Use one of our Cape Town drop-off points or arrange a collection with us." },
  { n: "03", t: "We restore", b: "Every garment is inspected, cleaned and prepared for its next chapter." },
  { n: "04", t: "It finds a home", b: "Your donation is gifted to a student for a milestone event they'll never forget." },
];

function HowPage() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">How it works</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl text-primary">
          Simple, private, <em className="italic text-accent not-italic font-serif">free.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you need an outfit or have one to give, the Royal Dreams process
          is designed to be as easy and dignified as possible.
        </p>
      </section>

      <section className="border-t border-border bg-muted/40 py-20">
        <div className="container-prose">
          <h2 className="text-3xl md:text-4xl text-primary">For students</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {studentSteps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-serif text-3xl text-accent">{s.n}</span>
                <h3 className="mt-4 font-serif text-xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-prose">
          <h2 className="text-3xl md:text-4xl text-primary">For donors</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {donorSteps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-serif text-3xl text-accent">{s.n}</span>
                <h3 className="mt-4 font-serif text-xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/donate" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-secondary">
              Start a donation
            </Link>
            <Link to="/contact" className="rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary hover:border-primary/60">
              Refer a student
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
