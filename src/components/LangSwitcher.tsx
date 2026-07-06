'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/data'

export function LangSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()
  const other: Locale = lang === 'pt' ? 'en' : 'pt'
  // Replace the locale segment in the path
  const otherPath = pathname.replace(new RegExp(`^/${lang}`), `/${other}`)

  return (
    <div className="flex items-center font-mono text-xs uppercase tracking-wider">
      {lang === 'pt' ? (
        <span aria-current="true" className="px-1.5 py-1.5 text-foreground font-semibold">
          PT
        </span>
      ) : (
        <Link
          href={otherPath}
          aria-label="Versão em português"
          className="px-1.5 py-1.5 text-muted hover:text-foreground transition-colors"
        >
          PT
        </Link>
      )}
      <span aria-hidden="true" className="text-muted/40">
        |
      </span>
      {lang === 'en' ? (
        <span aria-current="true" className="px-1.5 py-1.5 text-foreground font-semibold">
          EN
        </span>
      ) : (
        <Link
          href={otherPath}
          aria-label="English version"
          className="px-1.5 py-1.5 text-muted hover:text-foreground transition-colors"
        >
          EN
        </Link>
      )}
    </div>
  )
}
