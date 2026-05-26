import { impactQuote, t } from "@/lib/data";
import type { Locale } from "@/lib/data";

export function ImpactQuote({ lang }: { lang: Locale }) {
  return (
    <section className="border-y border-line/70 bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <blockquote>
          <p className="font-serif text-3xl font-normal leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
            &ldquo;{t(impactQuote.text, lang)}&rdquo;
          </p>
          <footer className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-background/50">
            — {t(impactQuote.attribution, lang)}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
