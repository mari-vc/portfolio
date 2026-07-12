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
  ceramics: (
    <g>
      <path d="M19 8 C 18 7, 18 6, 19 5 L 30 5 C 31 6, 31 7, 30 8 C 35 13, 37 20, 36 28 C 35 37, 30 43, 24 43 C 18 43, 14 37, 13 28 C 12 20, 14 13, 19 8 Z" {...stroke} />
      <path d="M14 20 C 19 22, 29 22, 35 20" {...thin} />
    </g>
  ),
  camera: (
    <g>
      <path d="M8 19 L 15 19 L 17 15 L 33 15 L 35 19 L 42 19 L 42 37 L 8 37 Z" {...stroke} />
      <circle cx="25" cy="28" r="7" {...stroke} />
      <circle cx="25" cy="28" r="2.5" fill={INK} stroke="none" />
      <path d="M12 22 L 15 22" {...thin} />
    </g>
  ),
  boardgame: (
    <g>
      <g className="die-a">
        <rect x="4" y="24" width="16" height="16" rx="3" {...stroke} />
        <circle cx="8" cy="28" r="1.3" fill={INK} stroke="none" />
        <circle cx="16" cy="28" r="1.3" fill={INK} stroke="none" />
        <circle cx="12" cy="32" r="1.3" fill={INK} stroke="none" />
        <circle cx="8" cy="36" r="1.3" fill={INK} stroke="none" />
        <circle cx="16" cy="36" r="1.3" fill={INK} stroke="none" />
      </g>
      <g className="die-b">
        <rect x="26" y="19" width="18" height="18" rx="3" {...stroke} />
        <circle cx="31" cy="24" r="1.4" fill={INK} stroke="none" />
        <circle cx="39" cy="24" r="1.4" fill={INK} stroke="none" />
        <circle cx="31" cy="32" r="1.4" fill={INK} stroke="none" />
        <circle cx="39" cy="32" r="1.4" fill={INK} stroke="none" />
      </g>
    </g>
  ),
  yoga: (
    <g>
      <circle cx="25" cy="12" r="4.5" {...stroke} />
      <path d="M25 17 L 25 26" {...stroke} />
      <path d="M25 19 C 19 20, 15 24, 16 28 C 20 26, 23 24, 25 22 C 27 24, 30 26, 34 28 C 35 24, 31 20, 25 19 Z" {...stroke} />
      <path d="M25 26 C 19 28, 15 32, 17 36 L 25 33 L 33 36 C 35 32, 31 28, 25 26 Z" {...stroke} />
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
  // Violão autoral da Mari servido de /public/doodles (traço complexo demais
  // para inline). A nota sobe no hover do item, simulando o violão tocando.
  // A footprint de layout segue o tamanho padrão dos outros doodles (className
  // herdado, h-14) para o texto alinhar com as outras linhas; o violão em si é
  // maior (mesmo traço do Jake, 5.5rem) e transborda por cima, centralizado na
  // caixa, sem empurrar o texto. A arte é landscape (406×166) e gira 45°, então
  // a extensão vertical do desenho ≈ o lado do container de 5.5rem.
  if (name === "guitar") {
    return (
      <span className={`relative block ${className ?? ""}`} aria-hidden="true">
        <span
          className="absolute block h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2"
          style={{ left: "calc(50% + 8px)", top: "calc(50% + 18px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doodles/guitar.svg"
            alt=""
            className="h-full w-full -rotate-45 object-contain"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doodles/nota01.svg"
            alt=""
            className="doodle-note absolute h-4 w-auto"
            style={{ left: "18%", top: "0%" }}
          />
        </span>
      </span>
    );
  }

  // Jake, o Chihuahua — retrato servido de /public/doodles (traço complexo
  // demais para inline, como o violão acima). A footprint de layout segue o
  // tamanho padrão dos outros doodles (className herdado) para o texto alinhar
  // com as outras linhas; o Jake em si é maior (5.5rem, o mais pessoal do
  // bloco) e transborda por cima, centralizado na caixa, sem empurrar o texto.
  // A patinha acena (.jake-paw, ver globals.css) no hover do link
  // @jake.thedoguinho.
  if (name === "dog") {
    return (
      <span className={`relative block ${className ?? ""}`} aria-hidden="true">
        <span
          className="absolute left-1/2 block h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2"
          style={{ top: "calc(50% + 17px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doodles/jake.svg"
            alt=""
            className="h-full w-full object-contain"
          />
          <svg
            viewBox="0 0 24 24"
            className="jake-paw absolute right-1.5 top-0.5 h-7 w-7"
          >
            <path
              d="M12 20 L12 13"
              stroke="#15151A"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M12 13 C8 12, 6 8, 8 5 C9.5 6, 10 8, 10.5 9.5 C11 7.5, 11.5 6, 13 4.5 C14.5 6, 14.5 8, 14 10 C15.5 8.5, 17 8, 18.5 8.5 C18 11, 15.5 13, 12 13 Z"
              stroke="#15151A"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </span>
    );
  }

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
