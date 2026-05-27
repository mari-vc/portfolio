import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
