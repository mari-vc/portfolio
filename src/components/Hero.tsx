import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";
import { MariIllustration } from "@/components/MariIllustration";
import { InkBubble } from "@/components/InkUnderline";

export function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="rise grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1>
            <Image
              src="/hey-im-mari.svg"
              alt={`${profile.name} — ${profile.role}`}
              width={94}
              height={79}
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

        <div className="group relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-[14%] flex h-16 w-24 rotate-3 items-center justify-center opacity-0 transition-all duration-300 group-hover:-rotate-2 group-hover:opacity-100 lg:right-[6%]"
          >
            <InkBubble className="absolute inset-0 h-full w-full" />
            <span className="relative -mt-3 font-mono text-sm text-foreground">
              {dict.hero.hello}
            </span>
          </div>
          <MariIllustration className="h-auto w-64 transition-transform duration-300 group-hover:-rotate-1 sm:w-80 lg:w-96" />
        </div>
      </div>
    </section>
  );
}
