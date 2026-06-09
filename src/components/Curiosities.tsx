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
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {curiosities.map((item) => (
          <div
            key={item.title.pt}
            className="group flex flex-col gap-3 bg-card p-7 transition-colors hover:bg-background"
          >
            <CuriosityDoodle
              name={item.icon}
              className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6"
            />
            <h3 className="text-base font-medium tracking-tight">
              {t(item.title, lang)}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{t(item.text, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
