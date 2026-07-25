import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProject, projects, visibleProjects, t, type L } from '@/lib/data'
import { ProjectSketch } from '@/components/ProjectSketch'
import { InkCircle, InkUnderline } from '@/components/InkUnderline'
import { KypcarDemo } from '@/components/kypcar/KypcarDemo'
import { HandshakeFlow, HandshakeCheckoutFlow } from '@/components/HandshakeFlow'
import { PillarDoodle } from '@/components/PillarDoodle'
import { ImageExpand } from '@/components/ImageExpand'
import { PrototypeEmbed } from '@/components/PrototypeEmbed'
import { hasLocale, getDictionary } from '@/lib/i18n'

export function generateStaticParams() {
  const langs = ['pt', 'en']
  return langs.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }
  const locale = hasLocale(lang) ? lang : 'pt'
  return {
    title: `${t(project.title, locale)} — ${project.client}`,
    description: t(project.summary, locale),
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  const project = getProject(slug)
  if (!project) notFound()

  const index = visibleProjects.findIndex((p) => p.slug === slug)
  const next =
    index === -1
      ? visibleProjects[0]
      : visibleProjects[(index + 1) % visibleProjects.length]

  return (
    <article>
      <ViewTransition enter="content-rise-1" default="none">
        <div className="mx-auto max-w-3xl px-6 pt-12">
          <Link
            href={`/${lang}/#work`}
            className="group inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-muted shadow-sm ring-1 ring-line transition-colors hover:text-foreground"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {dict.work_detail.back}
          </Link>
        </div>
      </ViewTransition>

      <ViewTransition name={`work-cover-${project.slug}`} share="morph">
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-card">
            <ProjectSketch slug={project.slug} className="h-full w-full" />
          </div>
        </div>
      </ViewTransition>

      <ViewTransition enter="content-rise-2" default="none">
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <header className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.client} · {project.year}
            </p>
            <h1 className="font-hand mt-4 text-4xl font-medium leading-tight tracking-tight">
              {t(project.title, lang)}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {t(project.summary, lang)}
            </p>
          </header>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-muted">{dict.work_detail.role}</dt>
              <dd className="mt-1 font-medium">
                {t(project.role, lang)
                  .split(' · ')
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </dd>
            </div>
            <div>
              <dt className="text-muted">{dict.work_detail.client}</dt>
              <dd className="mt-1 font-medium">
                {project.clientUrl ? (
                  <Link
                    href={project.clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-2 transition-colors hover:text-accent"
                  >
                    {project.client}
                  </Link>
                ) : (
                  project.client
                )}
              </dd>
            </div>
            <div>
              <dt className="text-muted">{dict.work_detail.year}</dt>
              <dd className="mt-1 font-medium">{project.year}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              const label = typeof tag === "string" ? tag : t(tag, lang)
              return (
                <span
                  key={label}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {label}
                </span>
              )
            })}
          </div>

          <Block title={dict.work_detail.overview}>{t(project.overview, lang)}</Block>

          {project.problem && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.problem}
              </h2>
              <p className="mt-5 text-base leading-relaxed">{t(project.problem.intro, lang)}</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {project.problem.stats.map((stat, i) => (
                  <li key={i} className="py-4 text-base leading-relaxed">
                    {t(stat, lang)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Block title={dict.work_detail.challenge}>{t(project.challenge, lang)}</Block>

          {project.comparisonTable && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.comparison}
              </h2>
              <p className="mt-5 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                {t(project.comparisonTable.intro, lang)}
              </p>

              <div className="mt-6 hidden sm:grid sm:grid-cols-[8rem_1fr_1fr] sm:gap-6 sm:pb-3">
                <span />
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                  {dict.work_detail.comparison_traditional}
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {dict.work_detail.comparison_atelier}
                </span>
              </div>

              <div className="mt-6 divide-y divide-line border-y border-line sm:mt-0">
                {project.comparisonTable.rows.map((row) => (
                  <div
                    key={row.axis.pt}
                    className="grid gap-3 py-5 sm:grid-cols-[8rem_1fr_1fr] sm:items-start sm:gap-6"
                  >
                    <span className="font-medium tracking-tight sm:pt-0.5 sm:font-mono sm:text-xs sm:font-normal sm:uppercase sm:tracking-wide sm:text-muted">
                      {t(row.axis, lang)}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-muted/70 sm:hidden">
                        {dict.work_detail.comparison_traditional}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-muted sm:mt-0">
                        {t(row.before, lang)}
                      </p>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <span className="font-mono text-[10px] uppercase tracking-wide text-accent/70 sm:hidden">
                        {dict.work_detail.comparison_atelier}
                      </span>
                      <p className="mt-1 text-sm font-medium leading-relaxed sm:mt-0">
                        {t(row.after, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.objective && (
            <Block title={dict.work_detail.objective}>{t(project.objective, lang)}</Block>
          )}

          {project.constraints && (
            <Block title={dict.work_detail.constraints}>{t(project.constraints, lang)}</Block>
          )}

          {(project.marketAnalysis || project.uxAnalysis) && (
            <h2 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.context}
            </h2>
          )}

          {project.marketAnalysis && (
            <section className="mt-8">
              <h3 className="text-lg font-medium tracking-tight">
                {dict.work_detail.market_analysis}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {t(project.marketAnalysis.intro, lang)}
              </p>

              <div className="mt-6 divide-y divide-line border-y border-line">
                {project.marketAnalysis.competitors.map((c) => (
                  <div
                    key={c.name}
                    className={`flex flex-col gap-2 py-5 pl-4 -ml-4 sm:flex-row sm:items-start sm:gap-6 ${
                      c.highlight ? "border-l-2 border-accent" : "border-l-2 border-transparent"
                    }`}
                  >
                    <div className="flex shrink-0 items-center gap-2 sm:w-28">
                      <span
                        className={`tracking-tight ${
                          c.highlight ? "font-semibold text-accent" : "font-medium"
                        }`}
                      >
                        {c.name}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed text-muted">
                        {t(c.model, lang)}
                      </p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted/70">
                        {t(c.scope, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed">
                {t(project.marketAnalysis.insight, lang)}
              </p>
            </section>
          )}

          {project.uxAnalysis && (
            <section className="mt-10">
              <h3 className="text-lg font-medium tracking-tight">
                {dict.work_detail.ux_analysis}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {t(project.uxAnalysis.intro, lang)}
              </p>

              <div className="mt-6 divide-y divide-line border-y border-line">
                {project.uxAnalysis.references.map((r) => (
                  <div
                    key={r.name}
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:gap-6"
                  >
                    <div className="shrink-0 sm:w-28">
                      <span className="font-medium tracking-tight">{r.name}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed text-muted">
                        {t(r.pattern, lang)}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">
                        <span className="text-accent">→ </span>
                        {t(r.takeaway, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {project.uxAnalysis.insight && (
                <p className="mt-6 text-base leading-relaxed">
                  {t(project.uxAnalysis.insight, lang)}
                </p>
              )}
            </section>
          )}

          {project.demo && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.demo}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {dict.work_detail.demo_hint}
              </p>
              <div className="mt-6 -mx-6 sm:mx-0">
                <KypcarDemo />
              </div>
            </section>
          )}

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.approach}
            </h2>
            {project.approach.length > 0 && "text" in project.approach[0] ? (
              <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {(project.approach as { title: L; text: L; image?: { src: string; alt: L } }[]).map((step, i) => (
                  <div key={i} className="bg-card p-6">
                    <span className="font-mono text-sm text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-lg font-medium tracking-tight">
                      {t(step.title, lang)}
                    </h3>
                    <InkUnderline className="mt-1.5 h-2 w-12" />
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(step.text, lang)}</p>
                    {step.image && (
                      <ImageExpand src={step.image.src} alt={t(step.image.alt, lang)} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <ol className="mt-5 space-y-4">
                {(project.approach as L[]).map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="relative inline-flex h-8 w-11 shrink-0 items-center justify-center font-mono text-sm text-accent">
                      <InkCircle className="absolute inset-0 h-full w-full" />
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="pt-1 text-base leading-relaxed">{t(step, lang)}</p>
                  </li>
                ))}
              </ol>
            )}
          </section>

          {project.prototypeEmbed && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {t(project.prototypeEmbed.title, lang)}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {t(project.prototypeEmbed.hint, lang)}
              </p>
              <PrototypeEmbed
                src={project.prototypeEmbed.src}
                title={t(project.prototypeEmbed.title, lang)}
                lang={lang}
              />
            </section>
          )}

          {project.flowDiagram && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {t(project.flowDiagram.title, lang)}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {t(project.flowDiagram.caption, lang)}
              </p>
              <div className="mt-8">
                <HandshakeFlow lang={lang} />
              </div>
            </section>
          )}

          {project.pillars && project.pillars.length > 0 && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {project.pillarsTitle ? t(project.pillarsTitle, lang) : dict.work_detail.pillars}
              </h2>
              {project.pillarsIntro && (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                  {t(project.pillarsIntro, lang)}
                </p>
              )}
              {project.pillarsLayout === "list" ? (
                <ol className="mt-5 space-y-4">
                  {project.pillars.map((pillar, i) => (
                    <li key={i} className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <span className="relative inline-flex h-8 w-11 shrink-0 items-center justify-center font-mono text-sm text-accent">
                          <InkCircle className="absolute inset-0 h-full w-full" />
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-1 items-stretch justify-between gap-4 pt-1">
                          <div>
                            <h3 className="text-base font-medium tracking-tight">
                              {t(pillar.title, lang)}
                            </h3>
                            <p className="mt-1 text-base leading-relaxed text-muted">
                              {t(pillar.text, lang)}
                            </p>
                          </div>
                          {pillar.doodle && (
                            <PillarDoodle name={pillar.doodle} />
                          )}
                        </div>
                      </div>
                      {pillar.imageAfter && (
                        <div className="ml-[3.25rem] overflow-hidden rounded-2xl border border-line">
                          <Image
                            src={pillar.imageAfter.src}
                            alt={t(pillar.imageAfter.alt, lang)}
                            width={pillar.imageAfter.width}
                            height={pillar.imageAfter.height}
                            className="h-auto w-full object-contain"
                            sizes="(min-width: 768px) 700px, 100vw"
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {project.pillars.map((pillar, i) => (
                    <div key={i} className="bg-card p-6">
                      <span className="font-mono text-sm text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 text-lg font-medium tracking-tight">
                        {t(pillar.title, lang)}
                      </h3>
                      <InkUnderline className="mt-1.5 h-2 w-12" />
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t(pillar.text, lang)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {project.outcome && project.outcome.length > 0 && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.results}
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                {project.outcome.map((metric) => (
                  <div key={metric.label.pt} className="bg-card p-6">
                    <p className="text-2xl font-normal leading-snug tracking-tight">{t(metric.label, lang)}</p>
                    <InkUnderline className="mt-1.5 h-2 w-14" />
                    <p className="mt-2 text-sm text-muted">{metric.value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.checkoutFlow && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {t(project.checkoutFlow.title, lang)}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {t(project.checkoutFlow.caption, lang)}
              </p>
              <div className="mt-8">
                <HandshakeCheckoutFlow lang={lang} />
              </div>
              {project.checkoutFlow.image && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={project.checkoutFlow.image.src}
                    alt={t(project.checkoutFlow.image.alt, lang)}
                    width={project.checkoutFlow.image.width}
                    height={project.checkoutFlow.image.height}
                    className="h-auto w-full object-contain"
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
              )}
            </section>
          )}

          <p className="mt-12 font-hand max-w-2xl text-2xl leading-relaxed text-foreground">
            {t(project.closing, lang)}
          </p>

          <Link
            href={`/${lang}/work/${next.slug}`}
            className="group mt-16 flex items-center justify-between rounded-2xl border border-line p-6 transition-colors hover:border-foreground/30"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.next_project}
              </p>
              <p className="mt-1 text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                {t(next.title, lang)}
              </p>
            </div>
            <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </ViewTransition>
    </article>
  )
}

function Block({ title, children }: { title: string; children: string }) {
  const paragraphs = children.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)
  return (
    <section className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className={`${i === 0 ? 'mt-5' : 'mt-4'} text-base leading-relaxed`}>
          {p}
        </p>
      ))}
    </section>
  )
}
