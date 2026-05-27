import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, projects, t } from '@/lib/data'
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
          <div>
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
          <div
            className="aspect-[4/3] w-full overflow-hidden rounded-2xl"
            style={{ background: project.cover }}
          />
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
          <Block title={dict.work_detail.challenge}>{t(project.challenge, lang)}</Block>

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.approach}
            </h2>
            <ol className="mt-5 space-y-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed">{t(step, lang)}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.work_detail.results}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {project.outcome.map((metric) => (
                <div key={metric.label.pt} className="bg-card p-6">
                  <p className="text-3xl font-medium tracking-tight">{metric.value}</p>
                  <p className="mt-1 text-sm text-muted">{t(metric.label, lang)}</p>
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{title}</h2>
      <p className="mt-5 text-base leading-relaxed">{children}</p>
    </section>
  )
}
