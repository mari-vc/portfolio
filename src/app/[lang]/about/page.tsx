import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { profile, aboutPage, t } from '@/lib/data'
import { hasLocale, getDictionary } from '@/lib/i18n'
import { InkUnderline } from '@/components/InkUnderline'
import { ComputerSketch } from '@/components/ComputerSketch'

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return { title: 'Not Found' }
  const dict = await getDictionary(lang)
  return {
    title: `${dict.about_page.eyebrow} — ${profile.name}`,
    description: t(profile.aboutShort, lang),
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href={`/${lang}`}
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        {dict.about_page.back}
      </Link>

      <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
        <div className="min-w-0 flex-1">
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {dict.about_page.heading}
            <InkUnderline className="mt-2 h-3 w-44 sm:w-56" />
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            {aboutPage.body.map((para, i) => (
              <p key={i}>{t(para, lang)}</p>
            ))}
          </div>
        </div>

        <ComputerSketch className="h-auto w-32 shrink-0 self-center text-foreground sm:mt-2 sm:w-40 sm:self-start" />
      </div>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.about_page.principles}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {aboutPage.principles.map((p) => (
            <div key={p.title.pt}>
              <h3 className="text-base font-medium tracking-tight">{t(p.title, lang)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.text, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.about_page.timeline}
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {aboutPage.timeline.map((item) => (
            <li
              key={item.period.pt}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium tracking-tight">{item.role}</p>
                <p className="text-sm text-muted">{item.place}</p>
              </div>
              <span className="font-mono text-sm text-muted">{t(item.period, lang)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.about_page.education}
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {aboutPage.education.degrees.map((item) => (
            <li
              key={item.school}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium tracking-tight">{t(item.degree, lang)}</p>
                <p className="text-sm text-muted">{item.school}</p>
              </div>
              <span className="font-mono text-sm text-muted">{t(item.period, lang)}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-sm font-medium tracking-tight text-muted">
          {dict.about_page.courses}
        </h3>
        <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {aboutPage.education.courses.map((course) => (
            <li
              key={course.name}
              className="flex items-baseline justify-between gap-4 border-b border-line py-2 text-sm"
            >
              <span>
                {course.name} <span className="text-muted">· {course.school}</span>
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">{course.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="text-lg font-medium tracking-tight">{dict.about_page.contact_heading}</p>
        <p className="mt-2 text-sm text-muted">{dict.about_page.contact_body}</p>
        <Link
          href={`/${lang}/#contact`}
          className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          {dict.about_page.contact_cta}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  )
}
