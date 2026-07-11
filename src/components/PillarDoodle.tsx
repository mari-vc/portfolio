import type { ReactNode } from "react";

// Pequenos desenhos a traço para ilustrar itens de "Decisões de design" no
// layout de lista. Mesmo estilo de tinta preta + grifo azul do ProjectSketch.
const INK = "#15151A";
const BALLPOINT = "#2742C7";

const stroke = {
  stroke: INK,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const thin = { ...stroke, strokeWidth: 1.4 };
const blue = { ...stroke, stroke: BALLPOINT, strokeWidth: 1.8 };

// Nota fiscal com borda serrilhada, linhas de item e o código circulado de azul.
export function ReceiptSketch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true">
      <path
        d="M14 6 L50 6 L50 62 L46 58 L42 62 L38 58 L34 62 L30 58 L26 62 L22 58 L18 62 L14 58 Z"
        {...stroke}
      />
      <path d="M20 16 C 28 15, 36 15, 44 16" {...thin} />
      <path d="M20 24 C 26 23, 32 23, 38 24" {...thin} />
      <path d="M20 30 C 26 29, 32 29, 38 30" {...thin} />
      <path d="M20 42 L 20 48 M24 41 L 24 49 M28 42 L 28 48 M32 41 L 32 49 M36 42 L 36 48 M40 41 L 40 49" {...thin} />
      <path
        d="M17 45 C 14 38, 22 32, 30 33 C 40 34, 44 40, 41 47 C 38 54, 26 56, 19 51 C 15 48, 15 46, 17 45"
        {...blue}
      />
    </svg>
  );
}

const doodles: Record<string, ReactNode> = {
  receipt: (
    <ReceiptSketch className="h-full max-h-32 w-auto shrink-0 self-stretch origin-bottom cursor-default transition-transform duration-300 ease-out hover:-translate-y-1 hover:-rotate-3 hover:scale-105" />
  ),
};

export function PillarDoodle({ name }: { name: string }) {
  return doodles[name] ?? null;
}
