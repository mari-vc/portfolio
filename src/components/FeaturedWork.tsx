import { ViewTransition } from "react";
import Link from "next/link";
import { Section } from "./Section";
import { projects, t } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function FeaturedWork({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <Section id="work" eyebrow={dict.featured_work.eyebrow}>
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
          {dict.featured_work.heading}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${lang}/work/${project.slug}`}
            className="group flex flex-col"
          >
            <ViewTransition name={`work-cover-${project.slug}`} share="morph">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                style={{ background: project.cover }}
              >
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {project.client} · {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
              </div>
            </ViewTransition>

            <div className="mt-5 flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                  {t(project.title, lang)}
                </h3>
                <span className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(project.summary, lang)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
