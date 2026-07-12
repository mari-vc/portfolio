import Link from "next/link";
import { Section } from "./Section";
import { CuriosityDoodle } from "./CuriosityDoodle";
import { curiosities, t } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

function renderText(text: string, link?: { handle: string; url: string }) {
  if (!link || !text.includes(link.handle)) return text;
  const [before, after] = text.split(link.handle);
  return (
    <>
      {before}
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-accent"
      >
        {link.handle}
      </Link>
      {after}
    </>
  );
}

export function Curiosities({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <Section id="curiosities" eyebrow={dict.curiosities.eyebrow}>
      <h2 className="font-hand mb-12 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
        {dict.curiosities.heading}
      </h2>
      {/* Lista com pauta de caderno (linhas horizontais), em vez de grid de
          cards idênticos; os doodles ficam na margem, alternando inclinação. */}
      <div className="grid gap-x-16 sm:grid-cols-2">
        {curiosities.map((item, i) => (
          <div
            key={item.title.pt}
            className="group flex items-start gap-6 border-b border-line py-7"
          >
            <CuriosityDoodle
              name={item.icon}
              className={`mt-1 h-14 w-14 shrink-0 transition-transform duration-300 group-hover:rotate-0 ${
                i % 2 === 0 ? "-rotate-3" : "rotate-2"
              }`}
            />
            <div>
              <h3 className="text-base font-medium tracking-tight">
                {t(item.title, lang)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {renderText(t(item.text, lang), item.link)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
