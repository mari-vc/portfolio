import Link from "next/link";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "/#trabalhos", label: "Trabalhos" },
  { href: "/about", label: "Sobre" },
  { href: "/#curiosidades", label: "Curiosidades" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-md"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
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
        </nav>
        <Link
          href="/#contato"
          className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background sm:hidden"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
