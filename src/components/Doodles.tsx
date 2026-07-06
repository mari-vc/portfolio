// Rabiscos decorativos reaproveitados do vocabulário dos sketches de projeto
// (cruzinhas de registro, seta de medida, pontilhado, pílula, toggle).
// Usados como anotações de margem, sempre aria-hidden e pointer-events-none.
// O traço herda currentColor; quem usa controla a opacidade pela cor do texto.

const stroke = {
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const thin = { ...stroke, strokeWidth: 2 };

// Cruz de registro com serifas (como as marcas de canto dos sketches).
export function DoodleCrop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 4 L 20 14 M20 26 L 20 36 M4 20 L 14 20 M26 20 L 36 20"
        {...stroke}
      />
    </svg>
  );
}

// Sinal de "mais" simples.
export function DoodlePlus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 5 L 16 27 M5 16 L 27 16" {...stroke} />
    </svg>
  );
}

// Seta de medida |←——→| (mesmo azul esferográfica dos sketches).
export function DoodleMeasure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 24" className={className} aria-hidden="true">
      <g stroke="#2742C7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M6 6 L 6 18 M90 6 L 90 18" />
        <path d="M10 12 L 86 12 M10 12 L 18 7 M10 12 L 18 17 M86 12 L 78 7 M86 12 L 78 17" />
      </g>
    </svg>
  );
}

// Caminho pontilhado curvo.
export function DoodleDots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden="true">
      <path
        d="M4 32 C 36 8, 84 8, 116 30"
        {...thin}
        strokeDasharray="1 9"
      />
    </svg>
  );
}

// Pílula desenhada à mão.
export function DoodlePill({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 40" className={className} aria-hidden="true">
      <path
        d="M22 8 C 8 8, 5 14, 6 20 C 6 28, 12 33, 24 33 L 72 33 C 86 33, 91 27, 90 20 C 90 12, 84 7, 72 7 Z"
        {...stroke}
        strokeWidth={3.5}
      />
    </svg>
  );
}

// Toggle (interruptor) desenhado à mão.
export function DoodleToggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 40" className={className} aria-hidden="true">
      <path
        d="M24 8 C 10 8, 5 14, 6 20 C 6 28, 12 33, 26 33 L 46 33 C 60 33, 65 27, 64 20 C 64 12, 58 7, 46 7 Z"
        {...stroke}
        strokeWidth={3.5}
      />
      <circle cx="46" cy="20" r="9" {...stroke} strokeWidth={3.5} />
    </svg>
  );
}
