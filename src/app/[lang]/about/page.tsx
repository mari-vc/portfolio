import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { profile, t } from '@/lib/data'
import { hasLocale, getDictionary } from '@/lib/i18n'

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

const principlesPt = [
  {
    title: 'Clareza acima de tudo',
    text: 'Simplicidade é uma decisão, não um acaso. Removo o que não serve para deixar o essencial respirar.',
  },
  {
    title: 'Design é um esporte de equipe',
    text: 'Os melhores produtos nascem da colaboração próxima entre design, produto, engenharia e dados.',
  },
  {
    title: 'Craft importa',
    text: 'Os detalhes são o que separam o bom do memorável. Cuido deles do conceito ao último pixel.',
  },
  {
    title: 'Decisões guiadas por evidências',
    text: 'Equilibro intuição e dados. Pesquiso, testo e itero antes de cravar uma direção.',
  },
]

const principlesEn = [
  {
    title: 'Clarity above all',
    text: "Simplicity is a decision, not a coincidence. I remove what doesn't serve to let the essential breathe.",
  },
  {
    title: 'Design is a team sport',
    text: 'The best products come from close collaboration between design, product, engineering, and data.',
  },
  {
    title: 'Craft matters',
    text: 'Details are what separate the good from the memorable. I take care of them from concept to the last pixel.',
  },
  {
    title: 'Evidence-driven decisions',
    text: 'I balance intuition and data. I research, test, and iterate before committing to a direction.',
  },
]

const timeline = [
  { period: '2022 — hoje', role: 'Staff Product Designer', place: 'Aurora' },
  { period: '2019 — 2022', role: 'Senior Product Designer', place: 'Northwind' },
  { period: '2016 — 2019', role: 'Product Designer', place: 'Lumen' },
  { period: '2014 — 2016', role: 'UI/UX Designer', place: 'Vértice' },
]

const aboutBodyPt = [
  'Comecei na interface, me apaixonei pelos problemas por trás dela e nunca mais parei. Ao longo de mais de uma década, trabalhei em fintechs, marketplaces e produtos de growth — sempre buscando o ponto onde negócio, tecnologia e pessoas se encontram.',
  'Como Staff, meu trabalho é tanto desenhar quanto elevar o nível de design ao meu redor: mentorando, criando sistemas e ajudando o time a tomar decisões melhores e mais rápidas.',
]

const aboutBodyEn = [
  "I started in interfaces, fell in love with the problems behind them, and never stopped. Over more than a decade, I've worked in fintechs, marketplaces, and growth products — always looking for the point where business, technology, and people meet.",
  'As a Staff Designer, my work is as much about designing as it is about elevating the design level around me: mentoring, building systems, and helping the team make better, faster decisions.',
]

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  const principles = lang === 'pt' ? principlesPt : principlesEn
  const aboutBody = lang === 'pt' ? aboutBodyPt : aboutBodyEn

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href={`/${lang}`}
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        {dict.about_page.back}
      </Link>

      <h1 className="mt-10 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        {dict.about_page.eyebrow}
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
        <p>{t(profile.aboutShort, lang)}</p>
        {aboutBody.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.about_page.principles}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {dict.about_page.timeline}
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {timeline.map((item) => (
            <li
              key={item.period}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium tracking-tight">{item.role}</p>
                <p className="text-sm text-muted">{item.place}</p>
              </div>
              <span className="font-mono text-sm text-muted">{item.period}</span>
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
