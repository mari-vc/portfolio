import type { ReactNode } from "react";

// Doodles de tinta para as curiosidades, no lugar de emoji (Regra do Traço).
const INK = "#15151A";

const stroke = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const thin = { ...stroke, strokeWidth: 2 };

const doodles: Record<string, ReactNode> = {
  coffee: (
    <g>
      <path d="M14 22 C 13 34, 16 42, 24 43 C 32 42, 35 34, 34 21 C 27 23, 21 23, 14 22 Z" {...stroke} />
      <path d="M34 25 C 40 24, 43 27, 42 31 C 41 35, 37 36, 34 35" {...stroke} />
      <path d="M19 15 C 17 12, 19 9, 18 6 M26 15 C 24 12, 26 9, 25 6" {...thin} />
    </g>
  ),
  piano: (
    <g>
      <path d="M8 14 C 18 12, 32 12, 40 13 L 41 36 C 30 38, 18 38, 9 37 Z" {...stroke} />
      <path d="M16 14 L 16 36 M24 13 L 24 37 M32 13 L 32 36" {...thin} />
      <path d="M14 14 L 14 26 L 18 26 L 18 14 M22 13 L 22 26 L 26 26 L 26 13 M30 13 L 30 26 L 34 26 L 34 13" fill={INK} stroke="none" />
    </g>
  ),
  trail: (
    <g>
      <path d="M6 38 C 12 28, 17 20, 22 14 C 27 20, 30 25, 33 30" {...stroke} />
      <path d="M26 32 C 30 26, 33 22, 36 18 C 40 24, 42 30, 44 37" {...stroke} />
      <path d="M19 20 C 21 22, 23 22, 25 20" {...thin} />
      <path d="M8 41 C 16 43, 32 43, 42 41" {...thin} strokeDasharray="1 6" />
    </g>
  ),
  books: (
    <g>
      <path d="M24 14 C 19 10, 12 9, 7 11 L 8 36 C 13 34, 19 35, 24 39 C 29 35, 35 34, 40 36 L 41 11 C 36 9, 29 10, 24 14 Z" {...stroke} />
      <path d="M24 15 L 24 38" {...thin} />
      <path d="M12 17 C 15 16, 18 17, 20 18 M12 23 C 15 22, 18 23, 20 24 M28 18 C 31 17, 34 16, 36 17" {...thin} />
    </g>
  ),
  puzzle: (
    <g>
      <path d="M12 16 L 20 15 C 19 11, 21 8, 25 8 C 29 8, 31 11, 30 15 L 38 16 L 39 24 C 43 23, 46 25, 46 29 C 46 33, 43 35, 39 34 L 38 41 L 13 42 Z" {...stroke} />
      <path d="M13 26 C 17 25, 19 27, 19 30 C 19 33, 17 35, 13 34" {...thin} />
    </g>
  ),
  plant: (
    <g>
      <path d="M16 32 L 34 31 L 32 43 L 19 44 Z" {...stroke} />
      <path d="M25 31 C 25 24, 25 19, 25 14" {...stroke} />
      <path d="M25 20 C 19 19, 15 15, 15 9 C 21 9, 25 13, 25 19 M25 16 C 30 15, 33 11, 33 6 C 28 7, 25 10, 25 15" {...stroke} />
    </g>
  ),
};

export function CuriosityDoodle({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {doodles[name] ?? <circle cx="25" cy="25" r="14" {...stroke} />}
    </svg>
  );
}
