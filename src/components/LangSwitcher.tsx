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
    <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
      {lang === 'pt' ? (
        <span className="text-foreground font-semibold">PT</span>
      ) : (
        <Link href={otherPath} className="text-muted hover:text-foreground transition-colors">
          PT
        </Link>
      )}
      <span className="text-muted/40">|</span>
      {lang === 'en' ? (
        <span className="text-foreground font-semibold">EN</span>
      ) : (
        <Link href={otherPath} className="text-muted hover:text-foreground transition-colors">
          EN
        </Link>
      )}
    </div>
  )
}
