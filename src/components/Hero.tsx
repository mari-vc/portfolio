import Link from "next/link";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";
import { MariIllustration } from "@/components/MariIllustration";

export function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="relative rise grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-hand text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            {dict.hero.heading}
          </h1>

          <p className="mt-2 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {dict.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/${lang}/#work`}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              {dict.hero.cta_works}
            </Link>
            <Link
              href={`/${lang}/#contact`}
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              {dict.hero.cta_contact}
            </Link>
          </div>

          <p className="mt-12 font-mono text-sm leading-relaxed text-muted">
            {dict.hero.meta_role}
            <br />
            {dict.hero.meta_focus}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <MariIllustration className="h-auto w-64 sm:w-80 lg:w-96" />
        </div>
      </div>
    </section>
  );
}
