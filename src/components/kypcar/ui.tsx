"use client";

// Shared UI primitives for the Kypcar demo — ported from the original
// prototype's ui.jsx. Colors, icons, buttons, common chrome.
import type { CSSProperties, ReactNode } from "react";
import { C, FONT } from "./tokens";

// ─────────────────────────────────────────────────────────────
// Icons — stroke-based, 24px viewBox, currentColor.
// ─────────────────────────────────────────────────────────────
const ICON_PATHS: Record<string, ReactNode> = {
  search: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  back: <path d="M15 18l-6-6 6-6" />,
  forward: <path d="M9 18l6-6-6-6" />,
  chevDown: <path d="M6 9l6 6 6-6" />,
  chevUp: <path d="M18 15l-6-6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
  share: <g><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" /></g>,
  star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  starFill: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="current" />,
  user: <g><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></g>,
  chat: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  car: <g><path d="M5 17h14M7 17v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2M20 17v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2" /><path d="M3 17l2-6a3 3 0 012.8-2h8.4A3 3 0 0119 11l2 6v-3a1 1 0 00-1-1H4a1 1 0 00-1 1v3z" fill="current" /><circle cx="7.5" cy="13.5" r=".8" fill="current" stroke="none" /><circle cx="16.5" cy="13.5" r=".8" fill="current" stroke="none" /></g>,
  mapPin: <g><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></g>,
  cal: <g><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></g>,
  gas: <g><path d="M3 22h12V4a1 1 0 00-1-1H4a1 1 0 00-1 1v18z" /><path d="M3 12h12M15 9l3 0 3 3v6a2 2 0 11-4 0v-3" /></g>,
  seat: <g><path d="M6 19V9a3 3 0 013-3h6a3 3 0 013 3v5" /><path d="M3 19h18M9 13h6" /></g>,
  settings: <g><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></g>,
  bell: <g><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 004 0" /></g>,
  arrowR: <path d="M5 12h14M13 5l7 7-7 7" />,
  check: <path d="M5 12l5 5L20 7" />,
  shield: <g><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M8 12l3 3 5-5" /></g>,
  key: <g><circle cx="8" cy="15" r="4" /><path d="M10.85 12.15L19 4M15 7l2 2M18 4l2 2" /></g>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  snow: <g><path d="M12 3v18M3 12h18M5.5 5.5l13 13M5.5 18.5l13-13" /></g>,
  bluetooth: <path d="M7 7l10 10-5 5V2l5 5L7 17" />,
  apple: <path d="M17.05 12.04c-.03-2.79 2.28-4.13 2.38-4.2-1.3-1.9-3.32-2.16-4.04-2.19-1.72-.17-3.36 1.01-4.23 1.01-.88 0-2.22-.99-3.65-.96-1.88.03-3.61 1.09-4.58 2.78-1.95 3.39-.5 8.41 1.4 11.17.93 1.35 2.04 2.86 3.49 2.8 1.4-.06 1.93-.9 3.62-.9 1.68 0 2.16.9 3.64.87 1.5-.03 2.46-1.37 3.38-2.73 1.06-1.56 1.5-3.07 1.53-3.15-.03-.01-2.93-1.13-2.96-4.5zM14.42 4.04c.77-.94 1.3-2.23 1.15-3.54-1.11.05-2.46.74-3.27 1.66-.72.81-1.35 2.13-1.18 3.4 1.24.09 2.51-.62 3.3-1.52z" fill="current" stroke="none" />,
  camera: <g><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" /><circle cx="12" cy="13" r="4" /></g>,
  eye: <g><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></g>,
  filter: <path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3z" />,
  sliders: <g><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></g>,
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  helpC: <g><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01" /></g>,
  logout: <g><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" /></g>,
  globe: <g><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" /></g>,
  badge: <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3l-4.8 2.6.9-5.4L4.2 7.7l5.4-.8L12 2z" />,
};

export function I({
  name,
  size = 20,
  color,
  fill = "none",
  stroke,
  sw = 1.7,
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  sw?: number;
  style?: CSSProperties;
}) {
  const s = stroke || color || "currentColor";
  const f = fill === "current" ? color || "currentColor" : fill;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={f}
      stroke={fill === "current" ? "none" : s}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0, ...style }}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

// Stars row
export function Stars({ value = 5, size = 12 }: { value?: number; size?: number }) {
  return (
    <div style={{ display: "inline-flex", gap: 1, color: C.lime }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <I key={i} name="starFill" size={size} color={i < Math.round(value) ? C.lime : "rgba(238,238,239,0.2)"} />
      ))}
    </div>
  );
}

// Pill / chip
export function Pill({
  children,
  active,
  onClick,
  style,
  leading,
  trailing,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  leading?: ReactNode;
  trailing?: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "8px 14px", borderRadius: 999,
        background: active ? C.text : "rgba(238,238,239,0.06)",
        color: active ? C.bg : C.text,
        border: `1px solid ${active ? C.text : C.border}`,
        fontFamily: FONT, fontSize: 13, fontWeight: 500,
        cursor: "pointer", whiteSpace: "nowrap", ...style,
      }}
    >
      {leading}
      {children}
      {trailing}
    </button>
  );
}

// Primary lime CTA button
export function CTA({
  children,
  onClick,
  style,
  kind = "lime",
  disabled,
  full,
}: {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  kind?: "lime" | "purple" | "outline" | "ghost";
  disabled?: boolean;
  full?: boolean;
}) {
  const kinds = {
    lime: { bg: C.lime, color: C.bg, border: "none" },
    purple: { bg: C.purple, color: "#fff", border: "none" },
    outline: { bg: "transparent", color: C.text, border: `1.5px solid ${C.text}` },
    ghost: { bg: "rgba(238,238,239,0.06)", color: C.text, border: `1px solid ${C.border}` },
  };
  const k = kinds[kind];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px 22px", borderRadius: 14, minHeight: 52,
        background: k.bg, color: k.color, border: k.border,
        fontFamily: FONT, fontSize: 16, fontWeight: 600,
        letterSpacing: 0.1, cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        width: full ? "100%" : undefined,
        transition: "transform 0.08s ease, filter 0.15s ease",
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}

// Kypcar logo — official brand SVGs (K mark + "kypcar" wordmark).
// `size` controls the HEIGHT in pixels; width scales by the logo's aspect ratio.
export function Logo({
  size = 28,
  color = C.text,
  withWord = true,
}: {
  size?: number;
  color?: string;
  withWord?: boolean;
}) {
  if (withWord) {
    const h = Math.round(size * 0.95);
    const w = Math.round(h * (179 / 36));
    return (
      <svg width={w} height={h} viewBox="0 0 179 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color, display: "inline-block", verticalAlign: "middle" }} aria-label="Kypcar">
        <path d="M65.5267 27.347H60.3195V0H65.5267V15.6613L70.8142 8.36346H76.8401L70.4043 17.4641L76.8401 27.3458H70.8142L65.5267 19.4738V27.3458V27.347Z" fill="currentColor" />
        <path d="M91.9267 8.36462H97.4623L86.762 35.9975H81.1874L84.7538 26.8956L78.1124 8.36462H83.6469L87.5015 19.6392L91.9279 8.36462H91.9267Z" fill="currentColor" />
        <path d="M105.209 8.36468V10.7016C106.765 8.61041 108.611 7.70898 111.44 7.70898C113.448 7.70898 115.129 8.20045 116.727 9.26611C119.596 11.2344 121.032 14.1041 121.032 17.9167C121.032 23.9846 117.26 28.0027 111.562 28.0027C108.816 28.0027 106.808 27.1414 105.209 25.2972V35.8333H100.002V8.36468H105.209ZM105.209 18.0809C105.209 21.5248 107.218 23.8204 110.251 23.8204C113.285 23.8204 115.458 21.4007 115.458 18.0395C115.458 14.6783 113.367 12.0957 110.415 12.0957C107.463 12.0957 105.211 14.5555 105.211 18.0809H105.209Z" fill="currentColor" />
        <path d="M141.079 25.1743C138.907 27.1426 136.651 28.0027 133.783 28.0027C128.003 28.0027 123.738 23.7389 123.738 17.958C123.738 12.1772 127.92 7.70898 133.823 7.70898C136.651 7.70898 138.988 8.69314 141.407 10.8658L137.922 14.0226C136.774 12.8743 135.544 12.3414 134.027 12.3414C131.159 12.3414 129.026 14.6783 129.026 17.7938C129.026 20.9093 131.199 23.3703 134.233 23.3703C135.586 23.3703 136.57 22.9603 137.922 21.7718L141.079 25.1743Z" fill="currentColor" />
        <path d="M158.092 8.36468H163.299V27.347H158.092V24.723C156.329 26.9772 154.28 28.0027 151.492 28.0027C146.162 28.0027 142.35 23.8617 142.35 18.0809C142.35 12.3001 146.367 7.70776 151.902 7.70776C154.485 7.70776 156.247 8.60919 158.092 10.7831V8.36346V8.36468ZM147.927 17.9994C147.927 21.3192 150.098 23.8204 152.928 23.8204C155.759 23.8204 158.176 21.1149 158.176 17.8352C158.176 14.5555 156.045 12.0957 152.969 12.0957C149.892 12.0957 147.927 14.5141 147.927 17.9994Z" fill="currentColor" />
        <path d="M173.63 8.36468V11.1517C174.162 9.75757 174.532 9.18338 175.311 8.60919C176.131 8.03622 177.237 7.70776 178.385 7.70776C178.507 7.70776 178.713 7.70776 179 7.74791V13.0774C178.59 13.0373 178.18 12.9959 177.894 12.9959C176.459 12.9959 175.148 13.6516 174.409 14.7185C173.794 15.5798 173.631 16.3985 173.631 18.2038V27.3458H168.424V8.36468H173.631H173.63Z" fill="currentColor" />
        <path d="M42.7624 23.4567C40.2336 22.0528 39.0392 18.6442 40.0986 15.8852C41.9645 11.0264 48.9112 10.5703 51.3354 15.2453C54.1865 20.7439 48.1996 26.476 42.7624 23.4567Z" fill={C.lime} />
        <path d="M33.6202 0H18.4558C14.9948 0 12.1891 2.80575 12.1891 6.26682C12.1891 9.72789 14.9948 12.5336 18.4558 12.5336H33.6202C37.0813 12.5336 39.887 9.72789 39.887 6.26682C39.887 2.80575 37.0813 0 33.6202 0Z" fill="currentColor" />
        <path d="M12.3571 18.1357C12.3571 14.6942 9.5436 11.9084 6.09035 11.957C2.80982 12.0021 0.0462393 14.766 1.74863e-05 18.0481C-0.048637 21.5017 2.73683 24.3155 6.17793 24.3155H7.00019C9.82215 24.3155 12.1235 26.5758 12.1758 29.3968L12.1819 29.7338C12.1819 33.1911 14.9905 36.0013 18.4486 36.0013H33.6191C35.3475 36.0013 36.9142 35.2993 38.0491 34.1643C39.2837 32.9296 40.0062 31.1839 39.8688 29.274C39.6316 25.9566 36.7074 23.4664 33.3819 23.4664H18.4486L18.2126 23.498C15.0172 23.9238 12.2135 21.357 12.3571 18.1357Z" fill="currentColor" />
      </svg>
    );
  }
  const h = Math.round(size * 0.95);
  const w = Math.round(h * (52 / 36));
  return (
    <svg width={w} height={h} viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color, display: "inline-block", verticalAlign: "middle" }} aria-label="Kypcar">
      <path d="M42.7625 23.4567C40.2337 22.0528 39.0392 18.6442 40.0987 15.8852C41.9646 11.0264 48.9112 10.5703 51.3354 15.2453C54.1866 20.7439 48.1996 26.476 42.7625 23.4567Z" fill={C.lime} />
      <path d="M33.6203 0H18.4559C14.9949 0 12.1892 2.80575 12.1892 6.26682C12.1892 9.72789 14.9949 12.5336 18.4559 12.5336H33.6203C37.0813 12.5336 39.887 9.72789 39.887 6.26682C39.887 2.80575 37.0813 0 33.6203 0Z" fill="currentColor" />
      <path d="M12.3571 18.1357C12.3571 14.6942 9.5436 11.9084 6.09035 11.957C2.80982 12.0021 0.0462393 14.766 1.74863e-05 18.0481C-0.048637 21.5017 2.73683 24.3155 6.17793 24.3155H7.00019C9.82215 24.3155 12.1235 26.5758 12.1758 29.3968L12.1819 29.7338C12.1819 33.1911 14.9905 36.0013 18.4486 36.0013H33.6191C35.3475 36.0013 36.9142 35.2993 38.0491 34.1643C39.2837 32.9296 40.0062 31.1839 39.8688 29.274C39.6316 25.9566 36.7074 23.4664 33.3819 23.4664H18.4486L18.2126 23.498C15.0172 23.9238 12.2135 21.357 12.3571 18.1357Z" fill="currentColor" />
    </svg>
  );
}

// Avatar
export function Avatar({
  src,
  size = 36,
  name,
  ring,
}: {
  src?: string | null;
  size?: number;
  name?: string;
  ring?: string | null;
}) {
  if (!src) {
    return (
      <div
        style={{
          width: size, height: size, borderRadius: 999,
          background: C.purpleSoft, color: C.purple,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: size * 0.4, flexShrink: 0,
          border: ring ? `2px solid ${ring}` : "none",
        }}
      >
        {(name || "?").charAt(0).toUpperCase()}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      style={{
        width: size, height: size, borderRadius: 999, objectFit: "cover",
        flexShrink: 0, border: ring ? `2px solid ${ring}` : "none",
      }}
    />
  );
}

// Bottom tab bar
export const TABS = [
  { key: "encontrar", label: "Explore", icon: "search" },
  { key: "viagem", label: "Trips", icon: "car" },
  { key: "favoritos", label: "Favorites", icon: "heart" },
  { key: "chat", label: "Inbox", icon: "chat" },
  { key: "perfil", label: "Profile", icon: "user" },
] as const;

export function TabBar({ active, onChange }: { active: string | null; onChange: (key: string) => void }) {
  return (
    <div
      style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        paddingBottom: 28, paddingTop: 10,
        background: "linear-gradient(to top, rgba(8,8,9,0.98) 60%, rgba(8,8,9,0))",
        backdropFilter: "blur(14px)",
        zIndex: 40,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "0 12px" }}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              padding: "6px 8px",
              color: active === tab.key ? C.lime : C.textMute,
            }}
          >
            <I name={tab.icon} size={22} fill={active === tab.key && tab.key === "favoritos" ? "current" : "none"} />
            <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 500, letterSpacing: 0.2 }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Sheet/modal that slides up
export function Sheet({
  open,
  onClose,
  title,
  children,
  fullHeight,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  fullHeight?: boolean;
}) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 80, pointerEvents: open ? "auto" : "none" }}>
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.55)",
          opacity: open ? 1 : 0, transition: "opacity 0.25s ease",
        }}
      />
      <div
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          background: C.bg,
          borderTopLeftRadius: 24, borderTopRightRadius: 24,
          transform: open ? "translateY(0)" : "translateY(105%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          maxHeight: fullHeight ? "92%" : "82%",
          display: "flex", flexDirection: "column",
          border: `1px solid ${C.border}`, borderBottom: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 6px" }}>
          <div style={{ width: 44, height: 4, background: "rgba(238,238,239,0.18)", borderRadius: 99 }} />
        </div>
        {title && (
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 20px 14px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <span style={{ width: 28 }} />
            <span style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: C.text }}>{title}</span>
            <button
              onClick={onClose}
              style={{
                background: "rgba(238,238,239,0.08)", border: "none", borderRadius: 999,
                width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
                color: C.text, cursor: "pointer",
              }}
            >
              <I name="close" size={14} />
            </button>
          </div>
        )}
        <div style={{ flex: 1, overflowY: "auto", paddingBottom: 30 }}>{children}</div>
      </div>
    </div>
  );
}

// Top-of-screen back header used on full-screen pages
export function ScreenHeader({
  title,
  onBack,
  right,
}: {
  title: string;
  onBack: () => void;
  right?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 16px", minHeight: 52,
        background: C.bg,
        position: "relative", zIndex: 10,
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "rgba(238,238,239,0.06)", border: `1px solid ${C.border}`,
          width: 38, height: 38, borderRadius: 999, color: C.text,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", flexShrink: 0,
        }}
      >
        <I name="back" size={18} />
      </button>
      <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, flex: 1, textAlign: "center", padding: "0 8px" }}>
        {title}
      </span>
      <div style={{ display: "flex", gap: 8, minWidth: 38, justifyContent: "flex-end" }}>{right}</div>
    </div>
  );
}

// Standard "Section title — See all" row
export function SectionTitle({
  children,
  action,
  onAction,
}: {
  children: ReactNode;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", marginBottom: 14 }}>
      <h3 style={{ margin: 0, fontFamily: FONT, fontSize: 17, fontWeight: 600, color: C.text, letterSpacing: -0.1 }}>{children}</h3>
      {action && (
        <button onClick={onAction} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: FONT, fontSize: 14, fontWeight: 500, color: C.purpleLight }}>
          {action}
        </button>
      )}
    </div>
  );
}

// Status pill (In progress, Confirmed, etc.)
export function StatusPill({ status }: { status: string }) {
  const map: Record<string, { bg: string; fg: string; dot: string }> = {
    "In progress": { bg: "rgba(194,236,19,0.16)", fg: C.lime, dot: C.lime },
    Confirmed: { bg: "rgba(151,71,255,0.16)", fg: C.purple, dot: C.purple },
    Completed: { bg: "rgba(238,238,239,0.08)", fg: C.textDim, dot: C.textDim },
    Cancelled: { bg: "rgba(255,82,82,0.14)", fg: C.red, dot: C.red },
  };
  const s = map[status] || map["Completed"];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 10px", borderRadius: 99, background: s.bg, color: s.fg,
        fontFamily: FONT, fontSize: 11, fontWeight: 600, letterSpacing: 0.2,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 99, background: s.dot }} />
      {status}
    </span>
  );
}
