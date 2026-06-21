---
name: Portfólio marivc
description: Caderno de sketches de uma Staff Product Designer, papel quente, tinta preta e caneta esferográfica azul
colors:
  paper: "#fafaf8"
  ink: "#15151a"
  pencil: "#6b6b73"
  paper-line: "#e6e4de"
  paper-bright: "#ffffff"
  ballpoint: "#2742c7"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  quote:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.2em"
rounded:
  card: "16px"
  pill: "9999px"
spacing:
  gutter: "24px"
  section-y: "80px"
  section-y-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.pencil}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  card-cover:
    backgroundColor: "{colors.paper-bright}"
    rounded: "{rounded.card}"
---

# Design System: Portfólio marivc

## 1. Overview

**Creative North Star: "O Caderno de Sketches"**

Este site é o caderno de uma designer aberto sobre a mesa: papel quente, tinta preta e uma caneta esferográfica azul para grifar o que importa. A base é precisa e contida (grid limpo, tipografia sóbria, muito branco), e a personalidade entra pelo traço: lettering manuscrito no hero, autorretrato a nanquim, sublinhados e anotações que parecem feitos à mão. A brincadeira nunca grita; ela se esconde em hovers, margens e detalhes que recompensam quem presta atenção, exatamente como as surpresas de um caderno de verdade.

O sistema rejeita explicitamente tudo que pareça gerado: gradientes roxos genéricos, bento grids, cards idênticos de ícone + título + texto, espetáculo de scroll. Se um elemento pudesse sair de um template, ele não pertence a este caderno. Profundidade vem de tinta e papel, não de sombra e vidro.

**Key Characteristics:**
- Papel quente (#fafaf8) como superfície dominante, com muito ar
- Tinta preta para conteúdo, esferográfica azul (#2742c7) só para ação
- Traço manuscrito (lettering, ilustração, rabiscos) como assinatura da marca
- Componentes precisos com surpresas escondidas nos estados de hover
- Mono em caixa alta para "etiquetas de arquivo" (eyebrows, metadados)

## 2. Colors

Uma papelaria reduzida ao essencial: papel, grafite, tinta preta e uma única caneta de cor.

### Primary
- **Tinta Esferográfica** (#2742c7): a caneta azul do estojo. Aparece exclusivamente onde há ação ou destaque intencional: links, hovers de títulos navegáveis, foco de teclado e grifos pontuais. Nunca decora; sempre indica.

### Neutral
- **Papel Quente** (#fafaf8): o fundo de tudo. Levemente amarelado, nunca branco puro de tela.
- **Papel Brilhante** (#ffffff): superfície de cards e blocos que "sobem" um nível do caderno.
- **Tinta Preta** (#15151a): todo o texto principal e blocos invertidos (citação de impacto, botão primário). Um preto tintado, nunca #000.
- **Grafite** (#6b6b73): texto secundário, legendas, metadados. O lápis das anotações de apoio.
- **Linha de Pauta** (#e6e4de): bordas e divisores. A pauta do caderno: presente, mas quase invisível.

### Named Rules (optional, powerful)
**A Regra da Caneta Única.** Só existe uma caneta de cor no estojo. A esferográfica azul cobre no máximo 10% de qualquer tela e aparece apenas em elementos interativos ou grifos deliberados. Uma segunda cor de acento é proibida.

**A Regra do Papel.** Profundidade se faz com camadas de papel (paper → paper-bright) e linhas de pauta, nunca com sombras pesadas, vidro ou gradiente. Se parecer interface de SaaS, saiu do caderno.

## 3. Typography

**Display Font:** Geist (com system-ui, sans-serif)
**Body Font:** Geist (com system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (com ui-monospace) · **Quote Font:** Instrument Serif (com Georgia) · **Hand Font:** Gochi Hand (cursive)

**Character:** Sans geométrica e contemporânea fazendo o trabalho silencioso, mono de máquina de escrever etiquetando as seções, e uma serif editorial reservada para o único momento de voz alta do site (a citação de impacto). O traço manuscrito tem duas formas: a fonte handwriting (Gochi Hand, exclusiva do lettering do hero, onde o texto precisa ser bilíngue) e os SVGs autorais (ilustração, doodles, grifos), que continuam insubstituíveis.

### Hierarchy
- **Display** (500, clamp 30→36px, 1.15): títulos de seção (h2). Tracking apertado (-0.025em).
- **Quote** (400 serif, clamp 30→60px, 1.2): exclusiva da citação de impacto em bloco invertido.
- **Title** (500, 18px, 1.4): títulos de cards e itens de lista.
- **Body** (400, 16–20px, 1.625): parágrafos. Máximo de 65–75ch (`max-w-xl`).
- **Label** (400 mono, 12px, tracking 0.2em, UPPERCASE): eyebrows de seção, metadados, rodapé de citação.

### Named Rules (optional)
**A Regra do Traço.** Ilustrações, doodles e grifos manuscritos são SVGs autorais, parte da identidade: proibido substituí-los por emoji ou icon packs genéricos. A única exceção tipográfica é o lettering do hero, que usa Gochi Hand para poder existir em pt e en; nenhuma outra superfície ganha fonte handwriting.

## 4. Elevation

O sistema é plano por doutrina: profundidade vem do contraste entre camadas de papel (#fafaf8 sobre #ffffff), das linhas de pauta (#e6e4de) e de blocos de tinta invertidos (#15151a), nunca de box-shadow. A única exceção tolerada é o `backdrop-blur` do header sticky, que existe por legibilidade funcional, não por estética de vidro. Estados de hover elevam com movimento (translate de 2px) ou troca de tom de papel, não com sombra.

### Named Rules (optional)
**A Regra do Caderno Fechado.** Nenhum box-shadow decorativo. Se um elemento precisa se destacar, ele vira tinta (bloco invertido), ganha papel mais claro ou ganha linha de pauta. Sombra só se um dia existir um elemento flutuante funcional (menu, tooltip), e mesmo assim difusa e quase imperceptível.

## 5. Components

Precisos com surpresas escondidas: a forma em repouso é contida e séria; o estado de hover é onde mora o humor.

### Buttons
- **Shape:** pill completo (border-radius 9999px)
- **Primary:** bloco de tinta (#15151a) com texto papel (#fafaf8), padding 12px 24px, texto 14px/500
- **Hover / Focus:** primário levanta 2px (`-translate-y-0.5`); secundário escurece a borda (foreground/15 → /40); foco de teclado em anel azul esferográfica
- **Secondary / Ghost:** mesmo pill com borda foreground/15 e fundo transparente

### Chips (if used)
- **Style:** tags de projeto em pill, borda linha-de-pauta (#e6e4de), texto grafite 12px, fundo transparente
- **State:** estáticas (não filtram); o chip de metadado sobre capas usa papel translúcido (background/85 + blur) com texto tinta

### Cards / Containers
- **Corner Style:** 16px (rounded-2xl), o canto suave de um caderno
- **Background:** capa visual no topo + conteúdo sobre o papel da página (sem moldura de card em volta do texto)
- **Shadow Strategy:** nenhuma; ver A Regra do Caderno Fechado
- **Border:** apenas quando o conteúdo precisa de pauta (grid de curiosidades usa borda + gap de 1px simulando linhas)
- **Internal Padding:** 20–28px (p-5 a p-7)

### Inputs / Fields
Não existem formulários no site; contato é por links diretos. Se um dia existirem, seguem a pauta: borda #e6e4de, fundo papel-brilhante, foco em azul esferográfica.

### Navigation
- Header sticky com papel translúcido (background/80 + backdrop-blur) e borda de pauta
- Links em 14px grafite, hover para tinta preta; wordmark em 16px/600 com hover azul
- Mobile: nav recolhe para LangSwitcher + pill "Contato"
- Âncora espacial das view transitions: o header nunca anima durante navegação

### Capas de projeto (signature component)
O bloco visual 4:3 que abre cada case e faz o morph (view transition) para a página de detalhe. É a "página de sketch" de cada projeto: deve carregar traço autoral, não gradiente genérico. Chip de cliente/ano no canto inferior, véu de tinta a 10% no hover do grupo.

## 6. Do's and Don'ts

### Do:
- **Do** usar azul esferográfica (#2742c7) somente em elementos interativos ou grifos deliberados, no máximo 10% da tela (A Regra da Caneta Única).
- **Do** fazer profundidade com camadas de papel, pauta e blocos de tinta invertidos; hover eleva com translate de 2px, nunca com sombra.
- **Do** manter o traço manuscrito como SVG autoral (lettering, ilustração, rabiscos) e usá-lo como assinatura nos momentos-chave.
- **Do** etiquetar seções com mono 12px em caixa alta e tracking 0.2em, como etiquetas de arquivo.
- **Do** esconder as surpresas nos hovers: rotações sutis, setas que andam, grifos que aparecem. Em repouso, tudo é preciso e calmo.
- **Do** garantir contraste AA sobre o papel (#fafaf8) em qualquer cor nova de texto.

### Don't:
- **Don't** usar nada com cara de "criado com IA": gradiente roxo padrão, bento grid, hero-metric, cards idênticos de ícone + título + texto (anti-referência direta do PRODUCT.md).
- **Don't** introduzir uma segunda cor de acento, gradiente decorativo, glassmorphism ou sombra decorativa.
- **Don't** usar #000 ou #fff como cor de texto/fundo de página; os neutros do caderno são tintados.
- **Don't** virar "agência exibida demais": sem scroll-jacking, sem WebGL, sem animação que rouba a cena do conteúdo; toda animação respeita `prefers-reduced-motion`.
- **Don't** soar "corporativo frio": nada de jargão de consultoria, foto de stock ou métricas sem contexto humano.
- **Don't** animar propriedades de layout; transições usam transform/opacity com ease-out (cubic-bezier(0.22, 1, 0.36, 1)).
