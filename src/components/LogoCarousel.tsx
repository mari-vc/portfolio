import { companies } from "@/lib/data";

export function LogoCarousel() {
  // Duplicamos a lista para o loop contínuo (a animação desloca -50%).
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-line/70 bg-card/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Lugares por onde passei
        </p>
      </div>

      <div className="marquee-mask relative overflow-hidden">
        {/* fades nas bordas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {loop.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              aria-hidden={i >= companies.length}
              className="select-none whitespace-nowrap text-2xl font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground sm:text-3xl"
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
