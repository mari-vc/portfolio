import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n'
import { Hero } from '@/components/Hero'
import { AboutMini } from '@/components/AboutMini'
import { LogoCarousel } from '@/components/LogoCarousel'
import { FeaturedWork } from '@/components/FeaturedWork'
import { ImpactQuote } from '@/components/ImpactQuote'
import { Curiosities } from '@/components/Curiosities'
import { Contact } from '@/components/Contact'

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }]
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <AboutMini lang={lang} dict={dict} />
      <LogoCarousel />
      <FeaturedWork lang={lang} dict={dict} />
      <ImpactQuote lang={lang} />
      <Curiosities lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict} />
    </>
  )
}
