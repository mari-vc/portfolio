import Link from "next/link";
import { Section } from "./Section";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contato" eyebrow="Falar comigo">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Vamos construir algo
            <br />
            <span className="text-muted">que importa juntos?</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Estou sempre aberta a conversar sobre design, produto ou uma boa
            oportunidade. Me manda uma mensagem.
          </p>
          <Link
            href={profile.socials.email}
            className="group mt-8 inline-flex items-center gap-2 text-xl font-medium tracking-tight underline decoration-1 underline-offset-4 transition-colors hover:text-accent sm:text-2xl"
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-col justify-end gap-1 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <ContactRow label="LinkedIn" href={profile.socials.linkedin} />
          <ContactRow label="GitHub" href={profile.socials.github} />
          <ContactRow label="E-mail" href={profile.socials.email} />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-line py-4 text-sm transition-colors hover:text-accent"
    >
      <span className="font-medium">{label}</span>
      <span className="text-muted transition-transform group-hover:translate-x-1">
        ↗
      </span>
    </Link>
  );
}
