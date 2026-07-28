"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

// Botão de expandir para imagens de referência (ex.: fotos de quadro de
// ideação) embutidas em cards de conteúdo. Abre em overlay fullscreen,
// fecha com Escape, clique fora ou no X. Sem `children`, renderiza o botão
// "Ver imagem" padrão; com `children`, usa o conteúdo passado (ex.: a própria
// imagem já exibida inline) como gatilho de clique.
export function ImageExpand({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={children ? `${alt} — ampliar` : alt}
        className={
          children
            ? "block w-full cursor-zoom-in text-left"
            : "mt-3 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
        }
      >
        {children ?? (
          <>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Ver imagem
          </>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-4xl"
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1000}
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
