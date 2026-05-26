import { Section } from "./Section";
import { curiosities } from "@/lib/data";

export function Curiosities() {
  return (
    <Section id="curiosidades" eyebrow="Curiosidades">
      <h2 className="mb-12 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
        Além das telas
      </h2>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {curiosities.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 bg-card p-7 transition-colors hover:bg-background"
          >
            <span className="text-3xl" aria-hidden>
              {item.emoji}
            </span>
            <h3 className="text-base font-medium tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
