import Link from "next/link";
import { Section } from "./Section";
import { profile, t } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function AboutMini({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <Section id="about" eyebrow={dict.about_mini.eyebrow}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <p className="text-xl font-light leading-snug tracking-tight sm:text-2xl">
            {t(profile.aboutShort, lang)}
          </p>
          <p className="text-xl font-light leading-snug tracking-tight sm:text-2xl">
            {t(profile.aboutShort2, lang)}
          </p>
        </div>
        <div className="flex flex-col items-start justify-end gap-5 lg:border-l lg:border-line lg:pl-8">
          <p className="font-mono text-sm leading-relaxed text-muted">
            {dict.hero.meta_role}
            <br />
            {dict.hero.meta_focus}
          </p>
          <p className="text-sm leading-relaxed text-muted">
            {dict.about_mini.cta_text}
          </p>
          <Link
            href={`/${lang}/about`}
            className="text-sm font-medium text-foreground underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
          >
            {dict.about_mini.cta_label}
          </Link>
        </div>
      </div>
    </Section>
  );
}
