import { profile } from "@/lib/data";
import type { Locale } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

// Os links sociais moram na seção de contato, logo acima; o footer não os
// repete para não mostrar a mesma lista duas vezes na mesma viewport.
export function Footer({ dict }: { lang: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm text-muted">
          © {year} {profile.name}. {dict.footer.made_with}
        </p>
      </div>
    </footer>
  );
}
