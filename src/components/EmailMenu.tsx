"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Labels = {
  default: string;
  copy: string;
  copied: string;
};

// Menu de escolha de e-mail: em vez de forçar um webmail, o visitante escolhe
// para onde ir (Gmail, Outlook, app padrão) ou copia o endereço. O `mailto:`
// respeita o handler que a própria pessoa configurou no sistema/navegador.
//
// O gatilho é customizável (`triggerContent` + `triggerClassName`) para casar
// com cada contexto: link grande na Home, botão com ícone na página Sobre.
export function EmailMenu({
  email,
  labels,
  triggerContent,
  triggerClassName = "",
  align = "center",
}: {
  email: string;
  labels: Labels;
  triggerContent: ReactNode;
  triggerClassName?: string;
  align?: "center" | "left";
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const options = [
    {
      label: "Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      external: true,
    },
    {
      label: "Outlook",
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      external: true,
    },
    {
      label: labels.default,
      href: `mailto:${email}`,
      external: false,
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sem clipboard: mantém o menu aberto para o visitante copiar manualmente
    }
  }

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={triggerClassName}
      >
        {triggerContent}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-10 mt-2 w-56 overflow-hidden rounded-xl border border-line bg-background p-1 text-left shadow-sm ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
        >
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target={opt.external ? "_blank" : undefined}
              rel={opt.external ? "noopener noreferrer" : undefined}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-card hover:text-accent"
            >
              {opt.label}
            </a>
          ))}
          <button
            type="button"
            role="menuitem"
            onClick={handleCopy}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-card hover:text-accent"
          >
            {copied ? labels.copied : labels.copy}
          </button>
        </div>
      )}
    </div>
  );
}

// Ícone de envelope reutilizado no gatilho (página Sobre).
export function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7.5L12 12.5L20 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
