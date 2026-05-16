import { createFileRoute } from "@tanstack/react-router";
import attireImg from "@/assets/attire.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Royal Dreams" },
      { name: "description", content: "Royal Dreams is a Cape Town non-profit restoring dignity to underprivileged students through donated formal attire." },
      { property: "og:title", content: "About Royal Dreams" },
      { property: "og:description", content: "Our story, values and the people behind Royal Dreams." },
      { property: "og:image", content: attireImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Our story</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl text-primary">
          A small idea, sewn from <em className="font-serif italic text-accent not-italic">borrowed</em> dresses.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Royal Dreams began with a single matric dance and a single dress passed
          between friends. Today, we are a growing Cape Town non-profit dedicated
          to ensuring that no student misses a milestone moment because of what
          they can — or cannot — afford to wear.
        </p>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl text-primary">Our mission</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-foreground/80">
            <p>
              To restore dignity, confidence and joy to underprivileged students by
              providing them with high-quality, professionally cleaned formal
              attire for milestone events — matric dances, graduations, awards
              evenings and more.
            </p>
            <p>
              We believe every learner deserves to walk into their dance hall or
              across their graduation stage feeling celebrated, not compromised.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="text-4xl text-primary">What we stand for</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Dignity", b: "Private fittings, no questions asked, no logos on what we lend." },
            { t: "Quality", b: "Every garment dry-cleaned and tailored before it's gifted." },
            { t: "Community", b: "Built with Cape Town schools, social workers and donors." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">A note from the founder</p>
          <p className="mt-6 max-w-3xl font-serif text-3xl md:text-4xl italic leading-tight">
            "We're still small. We're still learning. But every fitting reminds us
            why we started — and why we can't stop."
          </p>
          <p className="mt-6 text-sm text-primary-foreground/70">— The Royal Dreams team</p>
        </div>
      </section>
    </>
  );
}
