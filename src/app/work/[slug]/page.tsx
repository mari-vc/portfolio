import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.title} — ${project.client}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Capa — morfa a partir do card na home */}
      <ViewTransition name={`work-cover-${project.slug}`} share="morph">
        <div
          className="h-56 w-full sm:h-72"
          style={{ background: project.cover }}
        />
      </ViewTransition>

      <ViewTransition enter="content-rise" default="none">
        <div className="mx-auto max-w-3xl px-6 pb-20">
        <div className="-mt-8">
          <Link
            href="/#trabalhos"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-muted shadow-sm ring-1 ring-line transition-colors hover:text-foreground"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Todos os trabalhos
          </Link>
        </div>

        <header className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {project.client} · {project.year}
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Meu papel</dt>
            <dd className="mt-1 font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Cliente</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-muted">Ano</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
        </dl>

        <Block title="Visão geral">{project.overview}</Block>
        <Block title="O desafio">{project.challenge}</Block>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Abordagem
          </h2>
          <ol className="mt-5 space-y-4">
            {project.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Resultados
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {project.outcome.map((metric) => (
              <div key={metric.label} className="bg-card p-6">
                <p className="text-3xl font-medium tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
          {project.closing}
        </p>

        {/* Próximo projeto */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 flex items-center justify-between rounded-2xl border border-line p-6 transition-colors hover:border-foreground/30"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Próximo projeto
            </p>
            <p className="mt-1 text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
              {next.title}
            </p>
          </div>
          <span className="text-muted transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
        </div>
      </ViewTransition>
    </article>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed">{children}</p>
    </section>
  );
}
