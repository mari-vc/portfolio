import Link from "next/link";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="rise">
        <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Disponível para novos projetos
        </p>

        <h1 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Olá, sou {profile.name.split(" ")[0]}.
          <br />
          <span className="text-muted">{profile.welcome}</span>
        </h1>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#trabalhos"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Ver trabalhos
          </Link>
          <Link
            href="/#contato"
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
          >
            Falar comigo
          </Link>
        </div>

        <p className="mt-12 font-mono text-sm text-muted">
          {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  );
}
