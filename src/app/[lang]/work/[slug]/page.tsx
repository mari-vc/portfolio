import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, projects, t } from '@/lib/data'
import { ProjectSketch } from '@/components/ProjectSketch'
import { InkCircle, InkUnderline } from '@/components/InkUnderline'
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

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <div className="mx-auto max-w-3xl px-6 pt-12">
        <Link
          href={`/${lang}/#work`}
          className="group inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-muted shadow-sm ring-1 ring-line transition-colors hover:text-foreground"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          {dict.work_detail.back}
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {project.client} · {project.year}
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {t(project.title, lang)}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t(project.summary, lang)}
          </p>
        </header>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-muted">{dict.work_detail.role}</dt>
            <dd className="mt-1 font-medium">{t(project.role, lang)}</dd>
          </div>
          <div>
            <dt className="text-muted">{dict.work_detail.client}</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-muted">{dict.work_detail.year}</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
        </dl>
      </div>

      <ViewTransition name={`work-cover-${project.slug}`} share="morph">
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-card">
            <ProjectSketch slug={project.slug} className="h-full w-full" />
          </div>
        </div>
      </ViewTransition>

      <ViewTransition enter="content-rise" default="none">
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <Block title={dict.work_detail.overview}>{t(project.overview, lang)}</Block>

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.challenge}
            </h2>
            {t(project.challenge, lang)
              .split(/\n{2,}/)
              .map((p) => p.trim())
              .filter(Boolean)
              .map((p, i) => (
                <p key={i} className={`${i === 0 ? 'mt-5' : 'mt-4'} text-base leading-relaxed`}>
                  {p}
                </p>
              ))}
          </section>

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.approach}
            </h2>
            <ol className="mt-5 space-y-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="relative inline-flex h-8 w-11 shrink-0 items-center justify-center font-mono text-sm text-accent">
                    <InkCircle className="absolute inset-0 h-full w-full" />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-base leading-relaxed">{t(step, lang)}</p>
                </li>
              ))}
            </ol>
          </section>

          {project.pillars && project.pillars.length > 0 && (
            <section className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {dict.work_detail.pillars}
              </h2>
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
            </section>
          )}

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.results}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {project.outcome.map((metric) => (
                <div key={metric.label.pt} className="bg-card p-6">
                  <p className="text-3xl font-medium tracking-tight">{metric.value}</p>
                  <InkUnderline className="mt-1.5 h-2 w-14" />
                  <p className="mt-2 text-sm text-muted">{t(metric.label, lang)}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-12 font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
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
