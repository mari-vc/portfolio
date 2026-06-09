// Grifo de esferográfica azul, traço duplo à mão. Usado como destaque
// deliberado sob títulos (Regra da Caneta Única do DESIGN.md).
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
