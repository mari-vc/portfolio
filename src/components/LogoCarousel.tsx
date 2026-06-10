"use client";

import { useState } from "react";
import { companies } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

// Rotações alternadas para os carimbos parecerem batidos à mão.
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function LogoCarousel({ dict }: { dict: Dict }) {
  const [paused, setPaused] = useState(false);
  // Duplicamos a lista para o loop contínuo (a animação desloca -50%).
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-line/70 bg-card/40 py-14">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.logos.eyebrow}
        </p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? dict.logos.play : dict.logos.pause}
          className="mb-10 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          {paused ? (
            <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true">
              <path d="M5 3.5 L 12 8 L 5 12.5 Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true">
              <path d="M5 3 L 5 13 M11 3 L 11 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div className="marquee-mask relative overflow-hidden py-2">
        {/* fades nas bordas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          className="marquee-track flex w-max items-center gap-10 px-8"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {loop.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              aria-hidden={i >= companies.length}
              className={`select-none whitespace-nowrap rounded-lg border-2 border-foreground/25 px-5 py-2 font-mono text-sm uppercase tracking-[0.15em] text-foreground/60 transition-[color,border-color,transform] duration-200 hover:rotate-0 hover:border-accent hover:text-accent ${tilts[i % tilts.length]}`}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
