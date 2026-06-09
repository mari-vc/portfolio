import { companies } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

// Rotações alternadas para os carimbos parecerem batidos à mão.
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function LogoCarousel({ dict }: { dict: Dict }) {
  // Duplicamos a lista para o loop contínuo (a animação desloca -50%).
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-line/70 bg-card/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.logos.eyebrow}
        </p>
      </div>

      <div className="marquee-mask relative overflow-hidden py-2">
        {/* fades nas bordas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max items-center gap-10 px-8">
          {loop.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              aria-hidden={i >= companies.length}
              className={`select-none whitespace-nowrap rounded-lg border-2 border-foreground/25 px-5 py-2 font-mono text-sm uppercase tracking-[0.15em] text-foreground/50 transition-[color,border-color,transform] duration-200 hover:rotate-0 hover:border-accent hover:text-accent ${tilts[i % tilts.length]}`}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
