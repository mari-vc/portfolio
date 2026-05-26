import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Sobre — ${profile.name}`,
  description: profile.aboutShort,
};

const principles = [
  {
    title: "Clareza acima de tudo",
    text: "Simplicidade é uma decisão, não um acaso. Removo o que não serve para deixar o essencial respirar.",
  },
  {
    title: "Design é um esporte de equipe",
    text: "Os melhores produtos nascem da colaboração próxima entre design, produto, engenharia e dados.",
  },
  {
    title: "Craft importa",
    text: "Os detalhes são o que separam o bom do memorável. Cuido deles do conceito ao último pixel.",
  },
  {
    title: "Decisões guiadas por evidências",
    text: "Equilibro intuição e dados. Pesquiso, testo e itero antes de cravar uma direção.",
  },
];

const timeline = [
  { period: "2022 — hoje", role: "Staff Product Designer", place: "Aurora" },
  { period: "2019 — 2022", role: "Senior Product Designer", place: "Northwind" },
  { period: "2016 — 2019", role: "Product Designer", place: "Lumen" },
  { period: "2014 — 2016", role: "UI/UX Designer", place: "Vértice" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Voltar
      </Link>

      <h1 className="mt-10 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        Sobre mim
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
        <p>{profile.aboutShort}</p>
        <p>
          Comecei na interface, me apaixonei pelos problemas por trás dela e
          nunca mais parei. Ao longo de mais de uma década, trabalhei em
          fintechs, marketplaces e produtos de growth — sempre buscando o ponto
          onde negócio, tecnologia e pessoas se encontram.
        </p>
        <p>
          Como Staff, meu trabalho é tanto desenhar quanto elevar o nível de
          design ao meu redor: mentorando, criando sistemas e ajudando o time a
          tomar decisões melhores e mais rápidas.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          No que acredito
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Trajetória
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {timeline.map((item) => (
            <li
              key={item.period}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-medium tracking-tight">
                  {item.role}
                </p>
                <p className="text-sm text-muted">{item.place}</p>
              </div>
              <span className="font-mono text-sm text-muted">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="text-lg font-medium tracking-tight">
          Quer trocar uma ideia?
        </p>
        <Link
          href="/#contato"
          className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          Falar comigo
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
