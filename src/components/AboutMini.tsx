import Link from "next/link";
import { Section } from "./Section";
import { profile } from "@/lib/data";

export function AboutMini() {
  return (
    <Section id="sobre" eyebrow="Sobre mim">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <p className="text-2xl font-light leading-snug tracking-tight sm:text-3xl">
          {profile.aboutShort}
        </p>
        <div className="flex flex-col items-start justify-end gap-5">
          <p className="text-sm leading-relaxed text-muted">
            Quer conhecer minha trajetória, princípios de design e o que me move
            no dia a dia?
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Saber mais sobre mim
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
