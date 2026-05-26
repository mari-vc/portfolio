import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28 ${className}`}
    >
      {eyebrow && (
        <p className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="inline-block h-px w-8 bg-foreground/30" />
          {eyebrow}
        </p>
      )}
      {children}
    </section>
  );
}
