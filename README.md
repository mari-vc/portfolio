# portfolio

Portfólio de Staff Product Design — site em Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Seções

1. **Welcome** — hero de abertura (`src/components/Hero.tsx`)
2. **Mini sobre mim** + link "saber mais" → página `/about` (`src/components/AboutMini.tsx`, `src/app/about/page.tsx`)
3. **Carrossel de logos** dos lugares onde trabalhei (`src/components/LogoCarousel.tsx`)
4. **3 últimos trabalhos** com link para página de detalhe `/work/[slug]` (`src/components/FeaturedWork.tsx`, `src/app/work/[slug]/page.tsx`)
5. **Frase de impacto** (`src/components/ImpactQuote.tsx`)
6. **Curiosidades** (`src/components/Curiosities.tsx`)
7. **Falar comigo** / contato (`src/components/Contact.tsx`)

## Como editar o conteúdo

Todo o conteúdo (nome, textos, empresas, projetos, curiosidades, contatos) está
centralizado em **`src/lib/data.ts`** como placeholders. Basta editar esse arquivo.

Para trocar os logos por imagens reais, coloque os arquivos em `public/logos/` e
ajuste `src/components/LogoCarousel.tsx`.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```
