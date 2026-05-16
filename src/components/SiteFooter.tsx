import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">Royal Dreams</p>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
            Dressing Cape Town's students for the milestones that matter — with
            dignity, at no cost.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-accent">How it Works</Link></li>
            <li><Link to="/donate" className="hover:text-accent">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Reach us</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Cape Town, South Africa</li>
            <li>hello@royaldreams.org.za</li>
            <li>+27 (0) 21 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Royal Dreams NPO. All rights reserved.</p>
          <p>Registered non-profit · Cape Town</p>
        </div>
      </div>
    </footer>
  );
}
