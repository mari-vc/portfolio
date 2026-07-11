import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import { hasLocale, getDictionary } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

// Lettering manuscrito do hero (substitui o SVG para permitir pt/en)
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: '500',
})

// Lettering do hero e das citações de fechamento dos cases. PickleMe Bold não
// tem glifos acentuados — os textos que a usam são escritos sem diacríticos
// (ver overview/closing em data.ts).
const pickleMe = localFont({
  src: '../../fonts/PickleMe-Bold.otf',
  variable: '--font-pickleme',
})

export const metadata: Metadata = {
  title: 'Mari Vieira — Staff Product Designer',
  description: 'Portfolio of Mari Vieira, Staff Product Designer.',
}

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
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${caveat.variable} ${pickleMe.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  )
}
