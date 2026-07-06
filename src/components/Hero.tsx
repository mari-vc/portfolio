import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";
import { HeroIllustration } from "@/components/HeroIllustration";

const rawMarivcMotionSvg = fs.readFileSync(
  path.join(process.cwd(), "public/doodles/mari-motion.svg"),
  "utf-8"
);

// Envolve os olhos em <g class="eye-pupil"> para que o cursor possa
// deslocá-los sutilmente (efeito "olhos seguem o mouse"), sem conflitar
// com a transform do blink, que continua aplicada ao <path> interno.
const marivcMotionSvg = rawMarivcMotionSvg
  .replace(/(<path id="eye"[^/]*\/>)/, '<g class="eye-pupil">$1</g>')
  .replace(/(<path id="eye_2"[^/]*\/>)/, '<g class="eye-pupil">$1</g>');

export function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="hero-root relative rise flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="md:shrink-0">
          <h1 className="font-hand whitespace-nowrap text-[52px] leading-[0.85] sm:text-[64px]">
            {dict.hero.heading}
          </h1>

          <p className="mt-2 text-lg leading-relaxed text-muted md:max-w-md">
            {dict.hero.subtitle}
          </p>

          <div className="hero-cta-buttons mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </div>

        <HeroIllustration
          svg={marivcMotionSvg}
          className="flex w-72 shrink-0 self-center justify-center sm:w-80 md:w-[28rem] md:shrink md:justify-end md:self-auto md:[&_svg]:w-full [&_svg]:h-auto [&_svg]:w-72 sm:[&_svg]:w-80"
        />
      </div>
    </section>
  );
}
