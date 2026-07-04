import Image from "next/image";
import { companies } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

// Rotações alternadas para os carimbos parecerem batidos à mão.
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function LogoCarousel({ dict }: { dict: Dict }) {
  // Duplicamos a lista para o loop contínuo (a animação desloca -50%).
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-line/70 bg-card/40 py-14">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6">
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
              className={`flex shrink-0 items-center justify-center grayscale transition-[filter,transform] duration-200 hover:rotate-0 hover:grayscale-0 ${tilts[i % tilts.length]}`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="w-auto max-w-none object-contain select-none"
                style={{ height: `${36 * (company.scale ?? 1)}px` }}
                draggable={false}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
