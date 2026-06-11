import { Section } from "./Section";
import { CuriosityDoodle } from "./CuriosityDoodle";
import { curiosities, t } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function Curiosities({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <Section id="curiosities" eyebrow={dict.curiosities.eyebrow}>
      <h2 className="mb-12 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
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
              className={`mt-1 h-11 w-11 shrink-0 transition-transform duration-300 group-hover:rotate-0 ${
                i % 2 === 0 ? "-rotate-3" : "rotate-2"
              }`}
            />
            <div>
              <h3 className="text-base font-medium tracking-tight">
                {t(item.title, lang)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {t(item.text, lang)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
