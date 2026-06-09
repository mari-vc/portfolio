// Traços de esferográfica azul feitos à mão, usados como grifos
// deliberados (Regra da Caneta Única do DESIGN.md).

// Balão de fala desenhado à mão (contorno de tinta preta, sem preenchimento).
export function InkBubble({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M48 6 C 76 5, 92 13, 91 28 C 90 41, 74 49, 50 49 C 44 49, 38 49, 33 48 C 28 54, 21 58, 13 59 C 17 54, 19 50, 19 45 C 10 41, 5 35, 6 27 C 7 13, 24 7, 48 6 Z"
        stroke="#15151A"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

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
