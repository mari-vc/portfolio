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

export function PhoneFrame({
  children,
  width = 402,
  height = 874,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
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
        {/* dynamic island, contornado à mão em vez de sólido/geométrico */}
        <path
          d={`M${width * 0.42} ${height * 0.027}
              C${width * 0.39} ${height * 0.026} ${width * 0.37} ${height * 0.033} ${width * 0.37} ${height * 0.042}
              C${width * 0.37} ${height * 0.052} ${width * 0.39} ${height * 0.058} ${width * 0.42} ${height * 0.057}
              L${width * 0.58} ${height * 0.058}
              C${width * 0.61} ${height * 0.059} ${width * 0.63} ${height * 0.052} ${width * 0.63} ${height * 0.043}
              C${width * 0.63} ${height * 0.033} ${width * 0.61} ${height * 0.026} ${width * 0.58} ${height * 0.028}
              Z`}
          fill="none" stroke={INK} strokeWidth={width * 0.01} strokeLinejoin="round"
        />
      </svg>

      {/* tela real, recortada dentro do corpo ilustrado */}
      <div
        style={{
          position: "absolute",
          top: inset, left: inset, right: inset, bottom: inset,
          borderRadius: screenRadius,
          overflow: "hidden",
          background: "#000",
          fontFamily: "-apple-system, system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
          <StatusBar />
        </div>
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, overflow: "hidden" }}>{children}</div>
        </div>
        {/* home indicator */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 60,
            height: 34, display: "flex", justifyContent: "center", alignItems: "flex-end",
            paddingBottom: 8, pointerEvents: "none",
          }}
        >
          <div style={{ width: 139, height: 5, borderRadius: 100, background: "rgba(255,255,255,0.7)" }} />
        </div>
      </div>
    </div>
  );
}
