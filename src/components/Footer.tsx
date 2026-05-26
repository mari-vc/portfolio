import Link from "next/link";
import { profile } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export function Footer({ lang, dict }: { lang: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {year} {profile.name}. {dict.footer.made_with}
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={profile.socials.email}
            className="text-muted transition-colors hover:text-foreground"
          >
            E-mail
          </Link>
        </div>
      </div>
    </footer>
  );
}
