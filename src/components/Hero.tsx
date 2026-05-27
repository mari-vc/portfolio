import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="rise">
        <h1>
          <Image
            src="/hey-im-mari.svg"
            alt={`${profile.name} — ${profile.role}`}
            width={94}
            height={94}
            priority
            className="h-auto w-48 sm:w-64 lg:w-72"
          />
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
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

        <p className="mt-12 font-mono text-sm text-muted">
          {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  );
}
