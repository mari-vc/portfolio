"use client";

import { useEffect, useRef } from "react";

const MAX_PUPIL_OFFSET = 3;

export function HeroIllustration({ svg, className }: { svg: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pupils = Array.from(container.querySelectorAll<SVGGElement>(".eye-pupil"));
    if (pupils.length === 0) return;

    function handleMove(e: MouseEvent) {
      for (const pupil of pupils) {
        const rect = pupil.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const offsetX = (dx / dist) * MAX_PUPIL_OFFSET;
        const offsetY = (dy / dist) * MAX_PUPIL_OFFSET;
        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    }

    window.addEventListener("mousemove", handleMove);

    // Primeiro hover (na menina ou num CTA) marca o sorriso como permanente:
    // a expressão toca uma vez e congela. Os gatilhos ficam no <svg> e em
    // CADA botão — não no container flex, que inclui a sobra vazia à esquerda
    // da ilustração e o vão entre os dois botões.
    const svg = container.querySelector("svg");
    const root = container.closest(".hero-root");
    const ctaButtons = Array.from(
      root?.querySelectorAll<HTMLElement>(".hero-cta-buttons a") ?? []
    );
    const smileOnce = () => root?.classList.add("has-smiled");
    svg?.addEventListener("mouseenter", smileOnce, { once: true });
    for (const btn of ctaButtons) {
      btn.addEventListener("mouseenter", smileOnce, { once: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      svg?.removeEventListener("mouseenter", smileOnce);
      for (const btn of ctaButtons) {
        btn.removeEventListener("mouseenter", smileOnce);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`hero-illustration ${className ?? ""}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
