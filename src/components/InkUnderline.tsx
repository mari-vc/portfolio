// Traços de esferográfica azul feitos à mão, usados como grifos
// deliberados (Regra da Caneta Única do DESIGN.md).

// Círculo de anotação à mão, para destacar números de margem.
export function InkCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M28 5 C 44 4, 52 10, 51 20 C 50 30, 40 36, 26 35 C 13 34, 5 29, 6 19 C 7 10, 16 6, 32 6"
        stroke="#2742C7"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function InkUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 14"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M4 8 C 48 4, 118 3, 216 6 M12 12 C 68 8, 142 8, 198 10"
        stroke="#2742C7"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
