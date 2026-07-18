import type { Locale } from "@/lib/data";

// User flow do check-in do Handshake redesenhado a traço, no mesmo estilo das
// capas (ProjectSketch): tinta preta sobre papel e um único grifo de
// esferográfica azul (Regra da Caneta Única do DESIGN.md).
const INK = "#15151A";
const BALLPOINT = "#2742C7";

const stroke = {
  stroke: INK,
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const arrow = { ...stroke, strokeWidth: 2, strokeDasharray: "1 7" };
const blue = { ...stroke, stroke: BALLPOINT, strokeWidth: 2.5 };

const labels = {
  pt: {
    start: ["Entregador chega", "ao restaurante"],
    scan: ["Escaneia o QR code", "na parede"],
    valid: ["Código", "válido?"],
    done: ["Check-in", "confirmado"],
    store: ["É o código", "da loja?"],
    auto: ["Check-in automático", "após alguns minutos"],
    tell: ["Conta o que", "aconteceu"],
    support: ["Falar com", "o suporte"],
    yes: "sim",
    no: "não",
  },
  en: {
    start: ["Courier arrives", "at the restaurant"],
    scan: ["Scans the QR code", "on the wall"],
    valid: ["Valid", "code?"],
    done: ["Check-in", "confirmed"],
    store: ["Right store's", "code?"],
    auto: ["Automatic check-in", "after a few minutes"],
    tell: ["Tells us what", "happened"],
    support: ["Talk to", "support"],
    yes: "yes",
    no: "no",
  },
};

function NodeText({
  x,
  y,
  lines,
  className = "",
}: {
  x: number;
  y: number;
  lines: string[];
  className?: string;
}) {
  return (
    <text
      x={x}
      y={y - (lines.length - 1) * 8}
      textAnchor="middle"
      fill={INK}
      fontSize="13"
      className={className}
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 16}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function EdgeLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text x={x} y={y} textAnchor="middle" fill={INK} fontSize="11" fontStyle="italic">
      {text}
    </text>
  );
}

export function HandshakeFlow({ lang }: { lang: Locale }) {
  const l = labels[lang];
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 760 470"
        role="img"
        aria-label={lang === "pt" ? "Fluxo de check-in do Handshake" : "Handshake check-in flow"}
        className="min-w-[640px] w-full"
      >
        {/* início: entregador chega (elipse) */}
        <path d="M40 82 C 38 62, 62 50, 100 49 C 140 48, 166 60, 165 80 C 164 100, 138 111, 100 112 C 64 113, 42 102, 40 82 Z" {...stroke} />
        <NodeText x={102} y={85} lines={l.start} />

        {/* escaneia o QR (retângulo) */}
        <path d="M198 55 C 230 52, 300 52, 336 54 L 339 108 C 304 111, 236 111, 200 109 Z" {...stroke} />
        <NodeText x={268} y={85} lines={l.scan} />

        {/* código válido? (losango) */}
        <path d="M430 46 L 492 80 L 431 116 L 370 81 Z" {...stroke} />
        <NodeText x={431} y={84} lines={l.valid} />

        {/* check-in confirmado (pílula, com grifo azul) */}
        <path d="M552 82 C 550 62, 574 50, 616 49 C 660 48, 686 60, 685 80 C 684 100, 658 111, 616 112 C 576 113, 554 102, 552 82 Z" {...stroke} />
        <NodeText x={618} y={85} lines={l.done} />
        <path d="M540 88 C 528 60, 560 38, 618 36 C 678 34, 704 58, 698 86 C 692 116, 636 130, 584 120 C 556 114, 544 102, 540 88" {...blue} />

        {/* é o código da loja? (losango) */}
        <path d="M430 206 L 496 242 L 431 280 L 366 243 Z" {...stroke} />
        <NodeText x={431} y={246} lines={l.store} />

        {/* check-in automático (retângulo) */}
        <path d="M548 216 C 580 213, 650 213, 688 215 L 691 270 C 656 273, 584 273, 550 271 Z" {...stroke} />
        <NodeText x={619} y={246} lines={l.auto} />

        {/* conta o que aconteceu (retângulo) */}
        <path d="M212 216 C 240 213, 292 213, 324 215 L 327 270 C 296 273, 244 273, 214 271 Z" {...stroke} />
        <NodeText x={269} y={246} lines={l.tell} />

        {/* falar com o suporte (pílula) */}
        <path d="M206 388 C 204 368, 228 356, 268 355 C 310 354, 336 366, 335 386 C 334 406, 308 417, 268 418 C 230 419, 208 408, 206 388 Z" {...stroke} />
        <NodeText x={270} y={391} lines={l.support} />

        {/* setas tracejadas */}
        <path d="M170 81 C 180 80, 186 80, 192 80" {...arrow} />
        <path d="M344 81 C 352 81, 358 81, 364 81" {...arrow} />
        <path d="M497 80 C 515 80, 530 80, 546 80" {...arrow} />
        <EdgeLabel x={522} y={70} text={l.yes} />
        <path d="M431 121 C 431 148, 431 176, 431 200" {...arrow} />
        <EdgeLabel x={447} y={165} text={l.no} />
        <path d="M501 243 C 516 243, 528 243, 542 243" {...arrow} />
        <EdgeLabel x={522} y={233} text={l.yes} />
        <path d="M619 210 C 619 178, 618 146, 618 118" {...arrow} />
        <path d="M361 243 C 351 243, 342 243, 332 243" {...arrow} />
        <EdgeLabel x={347} y={233} text={l.no} />
        <path d="M269 276 C 269 302, 269 326, 269 350" {...arrow} />

        {/* pontas das setas */}
        <path d="M186 76 L 194 80 L 186 85" {...stroke} strokeWidth={2} />
        <path d="M358 77 L 366 81 L 358 86" {...stroke} strokeWidth={2} />
        <path d="M540 76 L 548 80 L 540 85" {...stroke} strokeWidth={2} />
        <path d="M427 194 L 431 202 L 436 194" {...stroke} strokeWidth={2} />
        <path d="M536 239 L 544 243 L 536 248" {...stroke} strokeWidth={2} />
        <path d="M614 124 L 618 116 L 623 124" {...stroke} strokeWidth={2} />
        <path d="M338 239 L 330 243 L 338 248" {...stroke} strokeWidth={2} />
        <path d="M265 344 L 269 352 L 274 344" {...stroke} strokeWidth={2} />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// User flow do checkout — mesmo traço e geometria do check-in acima, para as
// duas etapas da jornada lerem como um par. Aqui a validação não é o QR na
// parede, e sim o código impresso na nota fiscal.
// ---------------------------------------------------------------------------

const checkoutLabels = {
  pt: {
    start: ["Pedido pronto", "para retirada"],
    code: ["Digita os 4 últimos", "números da nota"],
    valid: ["Código", "válido?"],
    done: ["Checkout", "confirmado"],
    attempts: ["Ainda tem", "tentativas?"],
    retry: ["Tenta de novo"],
    support: ["Falar com", "o suporte"],
    yes: "sim",
    no: "não",
  },
  en: {
    start: ["Order ready", "for pickup"],
    code: ["Enters the last 4", "digits on the receipt"],
    valid: ["Valid", "code?"],
    done: ["Checkout", "confirmed"],
    attempts: ["Attempts", "left?"],
    retry: ["Tries again"],
    support: ["Talk to", "support"],
    yes: "yes",
    no: "no",
  },
};

export function HandshakeCheckoutFlow({ lang }: { lang: Locale }) {
  const l = checkoutLabels[lang];
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 760 470"
        role="img"
        aria-label={lang === "pt" ? "Fluxo de checkout do Handshake" : "Handshake checkout flow"}
        className="min-w-[640px] w-full"
      >
        {/* início: pedido pronto (elipse) */}
        <path d="M40 82 C 38 62, 62 50, 100 49 C 140 48, 166 60, 165 80 C 164 100, 138 111, 100 112 C 64 113, 42 102, 40 82 Z" {...stroke} />
        <NodeText x={102} y={85} lines={l.start} />

        {/* digita o código da nota (retângulo) */}
        <path d="M198 55 C 230 52, 300 52, 336 54 L 339 108 C 304 111, 236 111, 200 109 Z" {...stroke} />
        <NodeText x={268} y={85} lines={l.code} />

        {/* código válido? (losango) */}
        <path d="M430 46 L 492 80 L 431 116 L 370 81 Z" {...stroke} />
        <NodeText x={431} y={84} lines={l.valid} />

        {/* checkout confirmado (pílula, com grifo azul) */}
        <path d="M552 82 C 550 62, 574 50, 616 49 C 660 48, 686 60, 685 80 C 684 100, 658 111, 616 112 C 576 113, 554 102, 552 82 Z" {...stroke} />
        <NodeText x={618} y={85} lines={l.done} />
        <path d="M540 88 C 528 60, 560 38, 618 36 C 678 34, 704 58, 698 86 C 692 116, 636 130, 584 120 C 556 114, 544 102, 540 88" {...blue} />

        {/* ainda tem tentativas? (losango) */}
        <path d="M430 206 L 496 242 L 431 280 L 366 243 Z" {...stroke} />
        <NodeText x={431} y={246} lines={l.attempts} />

        {/* tenta de novo (retângulo à esquerda, volta para a digitação) */}
        <path d="M212 216 C 240 213, 292 213, 324 215 L 327 270 C 296 273, 244 273, 214 271 Z" {...stroke} />
        <NodeText x={269} y={249} lines={l.retry} />

        {/* falar com o suporte (pílula à direita) */}
        <path d="M552 244 C 550 224, 574 212, 616 211 C 660 210, 686 222, 685 242 C 684 262, 658 273, 616 274 C 576 275, 554 264, 552 244 Z" {...stroke} />
        <NodeText x={618} y={247} lines={l.support} />

        {/* setas tracejadas */}
        <path d="M170 81 C 180 80, 186 80, 192 80" {...arrow} />
        <path d="M344 81 C 352 81, 358 81, 364 81" {...arrow} />
        <path d="M497 80 C 515 80, 530 80, 546 80" {...arrow} />
        <EdgeLabel x={522} y={70} text={l.yes} />
        <path d="M431 121 C 431 148, 431 176, 431 200" {...arrow} />
        <EdgeLabel x={447} y={165} text={l.no} />
        {/* ainda tem tentativas? → sim: volta para digitar */}
        <path d="M361 243 C 351 243, 342 243, 332 243" {...arrow} />
        <EdgeLabel x={347} y={233} text={l.yes} />
        <path d="M269 210 C 269 180, 269 145, 269 122" {...arrow} />
        {/* ainda tem tentativas? → não: suporte */}
        <path d="M501 243 C 516 243, 528 243, 542 243" {...arrow} />
        <EdgeLabel x={522} y={233} text={l.no} />

        {/* pontas das setas */}
        <path d="M186 76 L 194 80 L 186 85" {...stroke} strokeWidth={2} />
        <path d="M358 77 L 366 81 L 358 86" {...stroke} strokeWidth={2} />
        <path d="M540 76 L 548 80 L 540 85" {...stroke} strokeWidth={2} />
        <path d="M427 194 L 431 202 L 436 194" {...stroke} strokeWidth={2} />
        <path d="M338 239 L 330 243 L 338 248" {...stroke} strokeWidth={2} />
        <path d="M265 122 L 269 114 L 274 122" {...stroke} strokeWidth={2} />
        <path d="M536 239 L 544 243 L 536 248" {...stroke} strokeWidth={2} />
      </svg>
    </div>
  );
}
