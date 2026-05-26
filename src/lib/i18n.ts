import 'server-only'

export type Locale = 'pt' | 'en'
export const locales: Locale[] = ['pt', 'en']
export const hasLocale = (s: string): s is Locale =>
  locales.includes(s as Locale)

const dictionaries = {
  pt: () => import('@/dictionaries/pt.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
}

export type Dict = Awaited<ReturnType<typeof dictionaries['pt']>>
export const getDictionary = (locale: Locale): Promise<Dict> =>
  dictionaries[locale]()
