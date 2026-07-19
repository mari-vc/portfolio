"use client";

// Moldura de celular desenhada à mão, no mesmo traço de tinta usado nos
// outros doodles do site (ComputerSketch, InkUnderline) — em vez do bezel
// realista de iPhone, para o demo da Kypcar se sentir parte do caderno de
// ilustrações, não uma captura de tela solta.
import type { ReactNode } from "react";

const INK = "#15151A";

// Contorno do corpo do aparelho como um traço levemente irregular — bordas com
// um leve arco em vez de linhas perfeitamente retas, cantos assimétricos —
// para ler como desenho à mão, no espírito do ComputerSketch/InkUnderline,
// em vez de um <rect> geométrico perfeito.
function phoneBodyPath(w: number, h: number) {
  return `
    M${w * 0.165} ${h * 0.012}
    C${w * 0.06} ${h * 0.004} ${w * 0.012} ${h * 0.05} ${w * 0.016} ${h * 0.15}
    C${w * 0.008} ${h * 0.4} ${w * 0.011} ${h * 0.6} ${w * 0.017} ${h * 0.85}
    C${w * 0.011} ${h * 0.95} ${w * 0.05} ${h * 0.994} ${w * 0.165} ${h * 0.988}
    C${w * 0.32} ${h * 0.994} ${w * 0.62} ${h * 1.0} ${w * 0.84} ${h * 0.989}
    C${w * 0.95} ${h * 0.994} ${w * 0.989} ${h * 0.95} ${w * 0.984} ${h * 0.85}
    C${w * 0.991} ${h * 0.6} ${w * 0.989} ${h * 0.4} ${w * 0.984} ${h * 0.15}
    C${w * 0.989} ${h * 0.05} ${w * 0.95} ${h * 0.004} ${w * 0.84} ${h * 0.011}
    C${w * 0.6} ${h * 0.002} ${w * 0.32} ${h * 0.003} ${w * 0.165} ${h * 0.012}
    Z
  `;
}

function StatusBar() {
  const c = "#fff";
  return (
    <div
      style={{
        display: "flex", gap: 154, alignItems: "center", justifyContent: "center",
        padding: "21px 24px 19px", boxSizing: "border-box",
        position: "relative", zIndex: 20, width: "100%",
      }}
    >
      <div style={{ flex: 1, height: 22, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 1.5 }}>
        <span style={{ fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590, fontSize: 17, lineHeight: "22px", color: c }}>
          9:41
        </span>
      </div>
      <div style={{ flex: 1, height: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c} />
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c} />
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c} />
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c} />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c} />
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c} />
          <circle cx="8.5" cy="10.5" r="1.5" fill={c} />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none" />
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c} />
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// `bare` → só o corpo ilustrado, sem o chrome de iOS (status bar, dynamic
// island e home indicator). Usado quando o conteúdo embutido já desenha a
// própria status bar, como o protótipo do Handshake — senão duplicaria.
export function PhoneFrame({
  children,
  width = 402,
  height = 874,
  bare = false,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
  bare?: boolean;
}) {
  const inset = width * 0.038;
  const screenRadius = width * 0.115;

  return (
    <div style={{ width, height, position: "relative" }}>
      {/* corpo do aparelho, desenhado à mão — traço levemente irregular,
          como os outros doodles em tinta do site */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <path
          d={phoneBodyPath(width, height)}
          fill={INK} stroke={INK} strokeWidth={width * 0.014}
          strokeLinejoin="round" strokeLinecap="round"
        />
        {/* botões laterais */}
        <path d={`M${width * 0.003} ${height * 0.17} L${width * 0.003} ${height * 0.225}`} stroke={INK} strokeWidth={width * 0.013} strokeLinecap="round" />
        <path d={`M${width * 0.003} ${height * 0.255} L${width * 0.003} ${height * 0.31}`} stroke={INK} strokeWidth={width * 0.013} strokeLinecap="round" />
        <path d={`M${width * 0.997} ${height * 0.21} L${width * 0.997} ${height * 0.29}`} stroke={INK} strokeWidth={width * 0.016} strokeLinecap="round" />
      </svg>

      {/* tela real, recortada dentro do corpo ilustrado */}
      <div
        style={{
          position: "absolute",
          top: inset, left: inset, right: inset, bottom: inset,
          borderRadius: screenRadius,
          overflow: "hidden",
          background: bare ? "#fff" : "#000",
          fontFamily: "-apple-system, system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {!bare && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
            <StatusBar />
          </div>
        )}
        {/* Dynamic island como overlay visível (o desenho no corpo do SVG
            ficava atrás da tela). É o sinal mais forte de "iPhone atual".
            Sólida em tinta, como o recorte real, borda levemente irregular no
            espírito dos doodles. Cheia no modo com chrome (Kypcar, tela livre
            no topo) e alinhada ao relógio da status bar; mais compacta e alta
            no modo bare (James), cujo conteúdo já desenha um header apertado. */}
        <div
          style={{
            position: "absolute",
            top: bare ? width * 0.012 : width * 0.044,
            left: 0, right: 0,
            display: "flex", justifyContent: "center", zIndex: 40, pointerEvents: "none",
          }}
        >
          {bare ? (
            // James: header apertado só comporta uma ilha mais baixa e larga.
            <svg width={width * 0.27} height={width * 0.054} viewBox="0 0 100 20" aria-hidden="true">
              <path
                d="M10 1 C4 0.9, 1 4, 1.1 10 C1 16, 4 19.1, 10 19 L90 19 C96 19.1, 99 16, 98.9 10 C99 4, 96 0.9, 90 1 Z"
                fill={INK} stroke={INK} strokeWidth="1" strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Kypcar: tela livre no topo comporta a ilha cheia, proporção real.
            <svg width={width * 0.31} height={width * 0.087} viewBox="0 0 100 28" aria-hidden="true">
              <path
                d="M14 1 C6 0.9, 1 6, 1.1 14 C1 22, 6 27.1, 14 27 L86 27 C94 27.1, 99 22, 98.9 14 C99 6, 94 0.9, 86 1 Z"
                fill={INK} stroke={INK} strokeWidth="1" strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, overflow: "hidden" }}>{children}</div>
        </div>
        {/* home indicator */}
        {!bare && (
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 60,
              height: 34, display: "flex", justifyContent: "center", alignItems: "flex-end",
              paddingBottom: 8, pointerEvents: "none",
            }}
          >
            <div style={{ width: 139, height: 5, borderRadius: 100, background: "rgba(255,255,255,0.7)" }} />
          </div>
        )}
      </div>
    </div>
  );
}
