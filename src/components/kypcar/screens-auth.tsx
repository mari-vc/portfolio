"use client";

// Authentication & onboarding screens — ported from screens-auth.jsx: Splash, Welcome, SignIn.
import { useEffect, useState } from "react";
import { C, FONT } from "./tokens";
import { CTA, I, Logo, ScreenHeader } from "./ui";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 50),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1650),
      setTimeout(() => setPhase(4), 1930),
      setTimeout(() => onDone(), 2200),
    ];
    return () => ts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wordH = 60;
  const wordW = wordH * (179 / 36);
  const iconW = wordH * (52 / 36);
  const markRightInWord = (51.3 / 179) * wordW;
  const markCenterInWord = markRightInWord / 2;
  const recenterX = wordW / 2 - markCenterInWord;

  const easeOut = "cubic-bezier(0.16, 1, 0.3, 1)";
  const easeMorph = "cubic-bezier(0.65, 0, 0.35, 1)";

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", width: 520, height: 520, borderRadius: 999,
          background: `radial-gradient(circle, ${C.purpleSoft} 0%, transparent 65%)`,
          filter: "blur(10px)",
          opacity: phase >= 4 ? 0 : phase >= 2 ? 0.95 : 0.55,
          transform: phase >= 2 ? "scale(1.02)" : "scale(0.96)",
          transition: `opacity 500ms ${easeOut}, transform 1400ms ${easeMorph}`,
        }}
      />
      <div
        style={{
          position: "absolute", left: "50%", top: "50%",
          width: wordW, height: wordH,
          marginLeft: -wordW / 2, marginTop: -wordH / 2,
          opacity: phase === 0 ? 0 : phase >= 2 ? 0 : 1,
          transition: phase === 0 ? "none" : `opacity 520ms ${easeOut}`,
        }}
      >
        <Logo size={wordH / 0.95} withWord />
      </div>
      <div
        style={{
          position: "absolute", left: "50%", top: "50%",
          width: iconW, height: wordH,
          marginLeft: -wordW / 2,
          marginTop: -wordH / 2,
          opacity: phase === 0 ? 0 : phase >= 4 ? 0 : 1,
          transform: phase >= 2 ? `translateX(${recenterX}px)` : "translateX(0)",
          transition: phase === 0 ? "none" : `opacity 520ms ${easeOut}, transform 720ms ${easeMorph}`,
        }}
      >
        <Logo size={wordH / 0.95} withWord={false} />
      </div>
    </div>
  );
}

const ONBOARD_POSTER = "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1100&auto=format&fit=crop";

const ONBOARD = [
  { title: "More than renting a car.\nIt's joining a movement.", body: "Kypcar was built to connect people who believe in new ways of moving through the city.", cta: "Continue", alt: "Skip" },
  { title: "Turn what's already\nyours into income", body: "Share securely, earn extra income and help more people move through the city.", cta: "Continue", alt: "Skip" },
  { title: "Peace of mind is part\nof the experience", body: "Verified users, full insurance and Kypcar support whenever you need it.", cta: "Sign in", alt: "Continue without account" },
];

export function WelcomeScreen({ onContinue, onSkip }: { onContinue: () => void; onSkip: () => void }) {
  const [step, setStep] = useState(0);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(r);
  }, []);
  const slide = ONBOARD[step];
  const next = () => (step < 2 ? setStep(step + 1) : onContinue());

  return (
    <div
      style={{
        width: "100%", height: "100%", background: C.bg, position: "relative", overflow: "hidden",
        opacity: entered ? 1 : 0,
        transition: "opacity 450ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, filter: "saturate(1.05) contrast(1.05) brightness(0.78)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url("${ONBOARD_POSTER}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
      </div>
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(8,8,9,0.2) 0%, rgba(8,8,9,0.1) 35%, rgba(8,8,9,0.85) 60%, rgba(8,8,9,1) 80%)",
        }}
      />
      <div style={{ position: "absolute", top: 56, right: 20, zIndex: 10 }}>
        <button
          onClick={onSkip}
          style={{
            background: "rgba(0,0,0,0.4)", border: `1px solid ${C.border2}`,
            borderRadius: 99, padding: "6px 14px",
            fontFamily: FONT, fontSize: 13, fontWeight: 500,
            color: C.text, cursor: "pointer",
          }}
        >
          Skip
        </button>
      </div>
      <div style={{ position: "absolute", top: 56, left: 20, zIndex: 10 }}>
        <Logo size={32} withWord={false} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5, padding: "0 24px 50px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, animation: "kFadeUp 0.45s ease both" }}>
          <h1 style={{ margin: 0, fontFamily: FONT, fontSize: 26, fontWeight: 600, color: C.text, lineHeight: 1.2, textAlign: "center", whiteSpace: "pre-line", textWrap: "balance", letterSpacing: -0.4 }}>
            {slide.title}
          </h1>
          <p style={{ margin: 0, fontFamily: FONT, fontSize: 14, fontWeight: 400, color: C.textDim, lineHeight: 1.5, textAlign: "center", maxWidth: 320 }}>
            {slide.body}
          </p>
        </div>
        <div style={{ display: "flex", gap: 6, margin: "8px 0 12px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === step ? 22 : 6, height: 6, borderRadius: 99,
                background: i === step ? C.lime : "rgba(238,238,239,0.25)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
        <CTA kind={step === 2 ? "lime" : "purple"} full onClick={next}>
          {slide.cta}
        </CTA>
        <button
          onClick={onSkip}
          style={{
            background: "none", border: step === 2 ? `1.5px solid ${C.text}` : "none",
            padding: step === 2 ? "14px 22px" : "8px",
            borderRadius: 14, width: step === 2 ? "100%" : "auto",
            fontFamily: FONT, fontSize: 14, fontWeight: 500,
            color: C.text, cursor: "pointer", marginTop: -4,
          }}
        >
          {slide.alt}
        </button>
      </div>
    </div>
  );
}

export function SignInScreen({ onSignIn, onBack }: { onSignIn: () => void; onBack: () => void }) {
  const [mode, setMode] = useState<"home" | "email">("home");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);

  const doLogin = () => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      onSignIn();
    }, 900);
  };

  if (mode === "home") {
    return (
      <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1100&auto=format&fit=crop')",
            backgroundSize: "cover", backgroundPosition: "center 35%",
          }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(8,8,9,0.35) 0%, rgba(8,8,9,0.05) 22%, rgba(8,8,9,0) 45%, rgba(8,8,9,0.65) 75%, rgba(8,8,9,0.92) 92%, rgba(8,8,9,1) 100%)",
          }}
        />
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            position: "absolute", top: 56, left: 18, zIndex: 10,
            width: 36, height: 36, borderRadius: 99,
            background: "transparent", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.text,
          }}
        >
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none">
            <path d="M10 1L1.5 10 10 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ position: "absolute", top: 110, left: 0, right: 0, zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "kFadeUp 0.5s ease both" }}>
          <Logo size={44} withWord color={C.text} />
          <div style={{ fontFamily: FONT, fontSize: 15, color: C.text, opacity: 0.85, letterSpacing: -0.2, fontWeight: 400 }}>movement is collective</div>
        </div>
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, zIndex: 5, padding: "0 22px", display: "flex", flexDirection: "column", gap: 12, animation: "kFadeUp 0.6s ease 0.1s both" }}>
          <ContinueButton kind="light" icon={<GoogleGIcon size={22} />} label="Continue with Google" onClick={doLogin} />
          <ContinueButton kind="dark" icon={<AppleIcon size={22} color="#fff" />} label="Continue with Apple" onClick={doLogin} />
          <ContinueButton kind="ghost" icon={<MailIcon size={20} color={C.text} />} label="Continue with email" onClick={() => setMode("email")} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, position: "relative", overflow: "hidden" }}>
      <ScreenHeader title="Sign in with email" onBack={() => setMode("home")} />
      <div style={{ padding: "20px 24px 30px", animation: "kFadeUp 0.4s ease both" }}>
        <h1 style={{ margin: "12px 0 6px", fontFamily: FONT, fontSize: 26, fontWeight: 600, letterSpacing: -0.4, lineHeight: 1.2 }}>Welcome back</h1>
        <p style={{ margin: "0 0 28px", fontFamily: FONT, fontSize: 14, color: C.textDim }}>Sign in with your registered email and password.</p>

        <FieldInput label="Email" value={email} onChange={setEmail} placeholder="you@email.com" type="email" />
        <FieldInput label="Password" value={pwd} onChange={setPwd} placeholder="••••••••" type="password" />

        <button style={{ background: "none", border: "none", padding: 0, margin: "6px 0 28px", fontFamily: FONT, fontSize: 13, fontWeight: 500, color: C.purpleLight, cursor: "pointer" }}>
          Forgot password
        </button>

        <CTA kind="lime" full disabled={busy} onClick={doLogin}>
          {busy ? "Signing in…" : "Sign in"}
        </CTA>
      </div>
    </div>
  );
}

function ContinueButton({
  kind = "light",
  icon,
  label,
  onClick,
}: {
  kind?: "light" | "dark" | "ghost";
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  const styleByKind = {
    light: { bg: "#FFFFFF", color: "#0E0E10", border: "transparent" },
    dark: { bg: "#0E0E10", color: "#FFFFFF", border: "transparent" },
    ghost: { bg: "rgba(14,14,16,0.18)", color: "#FFFFFF", border: "rgba(255,255,255,0.6)" },
  }[kind];
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
        width: "100%", height: 56, borderRadius: 99,
        background: styleByKind.bg,
        color: styleByKind.color,
        border: `1.5px solid ${styleByKind.border}`,
        backdropFilter: kind === "ghost" ? "blur(8px)" : "none",
        fontFamily: FONT,
        fontSize: 16, fontWeight: 500, letterSpacing: -0.1,
        cursor: "pointer",
        transition: "transform 0.12s ease, filter 0.12s ease",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.985)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function GoogleGIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" fill="#34A853" />
      <path d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.45.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.2 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon({ size = 22, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M17.05 12.04c-.03-2.79 2.28-4.13 2.38-4.2-1.3-1.9-3.32-2.16-4.04-2.19-1.72-.17-3.36 1.01-4.23 1.01-.88 0-2.22-.99-3.65-.96-1.88.03-3.61 1.09-4.58 2.78-1.95 3.39-.5 8.41 1.4 11.17.93 1.35 2.04 2.86 3.49 2.8 1.4-.06 1.93-.9 3.62-.9 1.68 0 2.16.9 3.64.87 1.5-.03 2.46-1.37 3.38-2.73 1.06-1.56 1.5-3.07 1.53-3.15-.03-.01-2.93-1.13-2.96-4.5zM14.42 4.04c.77-.94 1.3-2.23 1.15-3.54-1.11.05-2.46.74-3.27 1.66-.72.81-1.35 2.13-1.18 3.4 1.24.09 2.51-.62 3.3-1.52z"
        fill={color}
      />
    </svg>
  );
}

function MailIcon({ size = 20, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke={color} strokeWidth={1.8} />
      <path d="M4 7.5l8 6 8-6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FieldInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);
  const real = type === "password" && show ? "text" : type;
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontFamily: FONT, fontSize: 12, fontWeight: 500, color: C.textDim, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.6 }}>
        {label}
      </label>
      <div style={{ position: "relative", background: "rgba(238,238,239,0.04)", border: `1px solid ${focus ? C.purple : C.border}`, borderRadius: 12, padding: "0 16px", transition: "border 0.15s ease" }}>
        <input
          type={real}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ width: "100%", background: "transparent", border: "none", outline: "none", padding: "14px 0", fontFamily: FONT, fontSize: 15, color: C.text, paddingRight: type === "password" ? 30 : 0 }}
        />
        {type === "password" && (
          <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", padding: 4, cursor: "pointer", color: C.textDim }}>
            <I name="eye" size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
