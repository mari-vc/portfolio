import { impactQuote } from "@/lib/data";

export function ImpactQuote() {
  return (
    <section className="border-y border-line/70 bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <blockquote>
          <p className="font-serif text-3xl font-normal leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
            “{impactQuote.text}”
          </p>
          <footer className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-background/50">
            — {impactQuote.attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
