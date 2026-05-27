import Link from "next/link";
import { Section } from "./Section";
import { profile, t } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function AboutMini({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <Section id="about" eyebrow={dict.about_mini.eyebrow}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <p className="text-2xl font-light leading-snug tracking-tight sm:text-3xl">
          {t(profile.aboutShort, lang)}
        </p>
        <div className="flex flex-col items-start justify-end gap-5">
          <p className="text-sm leading-relaxed text-muted">
            {dict.about_mini.cta_text}
          </p>
          <Link
            href={`/${lang}/about`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            {dict.about_mini.cta_label}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
