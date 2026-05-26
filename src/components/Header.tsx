import Link from "next/link";
import { profile } from "@/lib/data";
import { LangSwitcher } from "./LangSwitcher";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function Header({ lang, dict }: { lang: Locale; dict: Dict }) {
  const navLinks = [
    { href: `/${lang}/#work`, label: dict.nav.works },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/#curiosities`, label: dict.nav.curiosities },
    { href: `/${lang}/#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-md"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="text-base font-semibold tracking-tight hover:text-accent transition-colors"
        >
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LangSwitcher lang={lang} />
        </nav>
        <div className="flex items-center gap-3 sm:hidden">
          <LangSwitcher lang={lang} />
          <Link
            href={`/${lang}/#contact`}
            className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
