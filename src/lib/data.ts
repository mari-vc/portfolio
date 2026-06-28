// Conteúdo centralizado do portfólio.
// Tudo aqui são PLACEHOLDERS — substitua pelos seus textos, empresas e projetos reais.

export type Locale = 'pt' | 'en'

// Bilingual text field
export type L = { pt: string; en: string }

// Helper to get text in the right locale
export function t(field: L, lang: Locale): string {
  return field[lang]
}

export const profile = {
  name: "marivc",
  role: "Staff Product Designer",
  location: "São Paulo, Brasil",
  email: "3marivc@gmail.com",
  // Mini sobre (seção About)
  aboutShort: {
    pt: "Sou Staff Product Designer com mais de 10 anos de experiência liderando design de produtos complexos em escala. Trabalho na interseção entre estratégia, sistemas e craft, ajudando times a transformar problemas confusos em experiências simples.",
    en: "I'm a Staff Product Designer with over 10 years of experience leading design of complex products at scale. I work at the intersection of strategy, systems, and craft, helping teams transform messy problems into simple experiences.",
  } as L,
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/mari-vc",
    email: "mailto:3marivc@gmail.com",
  },
};

// Frase de impacto (seção 5)
export const impactQuote = {
  text: {
    pt: "Bom design não é o que se vê: é o que se sente quando tudo simplesmente funciona.",
    en: "Good design isn't what you see — it's what you feel when everything just works.",
  } as L,
  attribution: {
    pt: "minha bússola de trabalho",
    en: "my work compass",
  } as L,
};

// Carrossel de logos — lugares onde trabalhei (seção 3)
// Renderizados como wordmarks. Troque por imagens em /public/logos se preferir.
export const companies: { name: string }[] = [
  { name: "Aurora" },
  { name: "Northwind" },
  { name: "Lumen" },
  { name: "Vértice" },
  { name: "Kavak" },
  { name: "Pulse" },
  { name: "Órbita" },
  { name: "Nimbus" },
];

// Curiosidades (seção 6)
export const curiosities: { icon: string; title: L; text: L }[] = [
  {
    icon: "coffee",
    title: { pt: "Movida a café", en: "Powered by coffee" },
    text: {
      pt: "Já testei mais de 40 grãos diferentes. O ritual da manhã é inegociável.",
      en: "Tested over 40 different beans. The morning ritual is non-negotiable.",
    },
  },
  {
    icon: "piano",
    title: { pt: "Toco piano", en: "I play piano" },
    text: {
      pt: "Música clássica desde os 8 anos: me ensinou tudo sobre ritmo e composição.",
      en: "Classical music since age 8 — taught me everything about rhythm and composition.",
    },
  },
  {
    icon: "trail",
    title: { pt: "Trilhas longas", en: "Long hikes" },
    text: {
      pt: "Já caminhei mais de 300km em trilhas. As melhores ideias vêm no meio do mato.",
      en: "Walked over 300km on trails. The best ideas come in the middle of nowhere.",
    },
  },
  {
    icon: "books",
    title: { pt: "Leio demais", en: "I read a lot" },
    text: {
      pt: "Uma média de 30 livros por ano, metade sobre coisas que nada têm a ver com design.",
      en: "About 30 books a year, half on things completely unrelated to design.",
    },
  },
  {
    icon: "puzzle",
    title: { pt: "Coleciono quebra-cabeças", en: "Puzzle collector" },
    text: {
      pt: "Quanto mais peças, melhor. Problemas complexos são meu passatempo favorito.",
      en: "The more pieces, the better. Complex problems are my favorite pastime.",
    },
  },
  {
    icon: "plant",
    title: { pt: "Jardineira amadora", en: "Amateur gardener" },
    text: {
      pt: "Tenho 23 plantas em casa. Paciência e iteração também valem para elas.",
      en: "23 plants at home. Patience and iteration apply to them too.",
    },
  },
];

// Conteúdo da página /about (seção 2 expandida)
export const aboutPage = {
  body: [
    {
      pt: "Comecei na interface, me apaixonei pelos problemas por trás dela e nunca mais parei. Ao longo de mais de uma década, trabalhei em fintechs, marketplaces e produtos de growth, sempre buscando o ponto onde negócio, tecnologia e pessoas se encontram.",
      en: "I started in interfaces, fell in love with the problems behind them, and never stopped. Over more than a decade, I've worked in fintechs, marketplaces, and growth products — always looking for the point where business, technology, and people meet.",
    },
    {
      pt: "Como Staff, meu trabalho é tanto desenhar quanto elevar o nível de design ao meu redor: mentorando, criando sistemas e ajudando o time a tomar decisões melhores e mais rápidas.",
      en: "As a Staff Designer, my work is as much about designing as it is about elevating the design level around me: mentoring, building systems, and helping the team make better, faster decisions.",
    },
  ] as L[],
  principles: [
    {
      title: { pt: "Clareza acima de tudo", en: "Clarity above all" },
      text: {
        pt: "Simplicidade é uma decisão, não um acaso. Removo o que não serve para deixar o essencial respirar.",
        en: "Simplicity is a decision, not a coincidence. I remove what doesn't serve to let the essential breathe.",
      },
    },
    {
      title: { pt: "Design é um esporte de equipe", en: "Design is a team sport" },
      text: {
        pt: "Os melhores produtos nascem da colaboração próxima entre design, produto, engenharia e dados.",
        en: "The best products come from close collaboration between design, product, engineering, and data.",
      },
    },
    {
      title: { pt: "Craft importa", en: "Craft matters" },
      text: {
        pt: "Os detalhes são o que separam o bom do memorável. Cuido deles do conceito ao último pixel.",
        en: "Details are what separate the good from the memorable. I take care of them from concept to the last pixel.",
      },
    },
    {
      title: { pt: "Decisões guiadas por evidências", en: "Evidence-driven decisions" },
      text: {
        pt: "Equilibro intuição e dados. Pesquiso, testo e itero antes de cravar uma direção.",
        en: "I balance intuition and data. I research, test, and iterate before committing to a direction.",
      },
    },
  ] as { title: L; text: L }[],
  timeline: [
    {
      period: { pt: "2022 – hoje", en: "2022 – today" },
      role: "Staff Product Designer",
      place: "Aurora",
    },
    {
      period: { pt: "2019 – 2022", en: "2019 – 2022" },
      role: "Senior Product Designer",
      place: "Northwind",
    },
    {
      period: { pt: "2016 – 2019", en: "2016 – 2019" },
      role: "Product Designer",
      place: "Lumen",
    },
    {
      period: { pt: "2014 – 2016", en: "2014 – 2016" },
      role: "UI/UX Designer",
      place: "Vértice",
    },
  ] as { period: L; role: string; place: string }[],
};

export type Project = {
  slug: string;
  title: L;
  client: string;
  year: string;
  role: L;
  tags: string[];
  summary: L;
  // conteúdo da página de detalhe
  overview: L;
  challenge: L;
  approach: L[];
  // pilares do sistema (opcional) — grid visual de arquitetura
  pillars?: { title: L; text: L }[];
  outcome: { label: L; value: string }[];
  closing: L;
};

// 3 últimos trabalhos (seção 4) — cada um abre uma página de detalhe
export const projects: Project[] = [
  {
    slug: "design-system",
    title: {
      pt: "Atelier: um design system dentro do produto",
      en: "Atelier: a design system inside the product",
    },
    client: "Pump",
    year: "2026",
    role: {
      pt: "Staff Product Designer · Design Engineer",
      en: "Staff Product Designer · Design Engineer",
    },
    tags: ["Design System", "White-label", "AI-native"],
    summary: {
      pt: "Um design system só vira sistema quando deixa de ser biblioteca e vira base de construção.",
      en: "A design system only becomes a system when it stops being a library and turns into a foundation to build on.",
    },
    overview: {
      pt: "A maioria dos design systems vive ao lado do produto: uma biblioteca que exige esforço de implementação, atualização e uso. Meu papel foi construir o Atelier dentro dele, e fazer com que o DS fosse além de manter apenas a consistência.\n\nEle acelerou a entrega de features funcionais e permitiu que nossos clientes construíssem widgets internos de acordo com suas necessidades.\n\nIsso tudo só foi possível através de uma documentação densa de uso e direcionamento, da construção de forma nativa em IA e de agentes internos que garantem as boas práticas, aceleram pesquisas e protótipos, e entregam em React e Tailwind.",
      en: "Most design systems live next to the product — a library that takes effort to implement, keep updated, and use. My role was to build Atelier inside the product, and make the design system go beyond just keeping things consistent.\n\nIt sped up the delivery of working features and let our customers build internal widgets to fit their own needs.\n\nAll of that was only possible through dense usage-and-guidance documentation, an AI-native build, and internal agents that enforce best practices, speed up research and prototyping, and ship in React and Tailwind.",
    },
    challenge: {
      pt: "Entregar features rápido sem sacrificar qualidade, e manter experiência e usabilidade de alto nível em toda a plataforma, com uma só pessoa no design. Ao mesmo tempo, a personalização precisava escalar sozinha: não importa qual cliente entre, a marca dele se aplica, sem retrabalho.\n\nE o sistema tinha que ir além da equipe: os próprios usuários montando o que precisam no dia a dia. Para isso, o design system precisava ser legível não só por pessoas, mas por agentes de IA, com a IA trazendo valor real e confiável, não hype. No papel, cada uma dessas frentes puxa para um lado. O trabalho foi fazer todas caberem no mesmo sistema.",
      en: "Shipping features fast without sacrificing quality, and holding a high level of experience and usability across the whole platform — with a single person on design. At the same time, personalization had to scale on its own: no matter which client comes in, their brand applies itself, with no rework.\n\nAnd the system had to reach beyond the team: users themselves assembling what they need day to day. For that, the design system had to be readable not just by people but by AI agents, with AI bringing real, trustworthy value, not hype. On paper, each of these fronts pulls in a different direction. The work was making them all fit in one system.",
    },
    approach: [
      {
        pt: "Ponta a ponta, sem handoff. Conduzo cada feature do escopo e do wireframe ao protótipo de alta fidelidade, à implementação em produção e à revisão de qualidade. Nenhuma decisão de design se perde na passagem, porque não existe passagem.",
        en: "End to end, no handoff. I take every feature from scope and wireframe to high-fidelity prototype, production implementation, and quality review. No design decision gets lost in the handoff, because there is no handoff.",
      },
      {
        pt: "Componente antes de tela. Acessibilidade (contraste, foco, leitor de tela) e os cinco idiomas entram já no primeiro rascunho, não como um ajuste no fim.",
        en: "Components before screens. Accessibility (contrast, focus, screen reader) and all five languages come in with the first sketch, not as a fix at the end.",
      },
      {
        pt: "Padrão em vez de exceção. Quando um caso novo aparece, ele volta para o sistema, e não para uma tela solta. É assim que a consistência escala sem travar a velocidade.",
        en: "Patterns over exceptions. When a new case shows up, it goes back into the system, not onto a one-off screen. That's how consistency scales without slowing the team down.",
      },
    ],
    pillars: [
      {
        title: { pt: "Tokens em camadas", en: "Layered tokens" },
        text: {
          pt: "De primitivos a tokens semânticos, marca e produto ficam em camadas separadas. Trocar a cor de uma marca não encosta em nenhuma tela.",
          en: "From primitives to semantic tokens, brand and product sit in separate layers. Changing a brand's color touches no screen.",
        },
      },
      {
        title: { pt: "White-label por derivação", en: "Derived white-label" },
        text: {
          pt: "A partir de poucos valores de marca, o sistema deriva paletas inteiras em OKLCh (contraste previsível), tipografia e modo escuro. Marca nova entra por configuração.",
          en: "From a handful of brand values, the system derives whole palettes in OKLCh (predictable contrast), typography, and dark mode. A new brand comes in through configuration.",
        },
      },
      {
        title: { pt: "Atelier, o workbench", en: "Atelier, the workbench" },
        text: {
          pt: "100 componentes e 11 fundações, cada um construído e documentado em isolamento, com uso, variações e direcionamento. É a fonte da verdade entre design e engenharia: ninguém precisa adivinhar como montar uma tela.",
          en: "100 components and 11 foundations, each built and documented in isolation — with usage, variants, and guidance. It's the source of truth between design and engineering: no one has to guess how to build a screen.",
        },
      },
      {
        title: { pt: "Extensível pelos clientes", en: "Extensible by customers" },
        text: {
          pt: "Sobre essa base documentada, os próprios clientes da Pump montam widgets dentro da plataforma, com os mesmos componentes e padrões do produto.",
          en: "On top of that documented foundation, Pump's own customers assemble widgets inside the platform — using the same components and patterns as the product.",
        },
      },
    ],
    outcome: [
      { label: { pt: "Componentes no Atelier", en: "Components in Atelier" }, value: "100" },
      { label: { pt: "Retrabalho por marca", en: "Rework per brand" }, value: "0" },
      { label: { pt: "Idiomas suportados", en: "Languages supported" }, value: "5" },
    ],
    closing: {
      pt: "Comecei desenhando telas. Hoje desenho o sistema que faz todas elas existirem, em qualquer marca, e que deixa o time da Pump, e até os clientes, construírem muito além do que eu desenharia sozinha.",
      en: "I started by designing screens. Now I design the system that makes all of them exist, in any brand — and that lets Pump's team, and even its customers, build far beyond what I'd ever design on my own.",
    },
  },
  {
    slug: "app-pagamentos",
    title: {
      pt: "Reimaginando pagamentos no app",
      en: "Reimagining payments in the app",
    },
    client: "Aurora",
    year: "2025",
    role: {
      pt: "Staff Product Designer · Líder de design",
      en: "Staff Product Designer · Design Lead",
    },
    tags: ["Mobile", "Fintech", "0→1"],
    summary: {
      pt: "Redesenho completo do fluxo de pagamentos que reduziu o abandono em 38% e simplificou três telas em uma.",
      en: "Complete redesign of the payment flow that reduced drop-off by 38% and simplified three screens into one.",
    },
    overview: {
      pt: "A Aurora precisava modernizar seu fluxo de pagamentos, que acumulava anos de soluções pontuais. Liderei o redesenho de ponta a ponta, do discovery ao handoff, junto a times de engenharia, produto e dados.",
      en: "Aurora needed to modernize its payment flow, which had accumulated years of quick fixes. I led the end-to-end redesign, from discovery to handoff, alongside engineering, product, and data teams.",
    },
    challenge: {
      pt: "O fluxo original tinha 7 etapas, alto índice de abandono e inconsistências entre plataformas. Usuários relatavam insegurança na hora de confirmar valores.",
      en: "The original flow had 7 steps, high drop-off, and inconsistencies across platforms. Users reported feeling insecure when confirming amounts.",
    },
    approach: [
      {
        pt: "Mapeei a jornada atual com dados de funil e 12 entrevistas com usuários.",
        en: "Mapped the current journey with funnel data and 12 user interviews.",
      },
      {
        pt: "Defini princípios de design: confiança, velocidade e reversibilidade.",
        en: "Defined design principles: trust, speed, and reversibility.",
      },
      {
        pt: "Prototipei 3 direções e testei com usabilidade moderada (8 sessões).",
        en: "Prototyped 3 directions and tested with moderated usability sessions (8 sessions).",
      },
      {
        pt: "Reduzi o fluxo de 7 para 3 etapas com confirmação clara e estados de erro humanos.",
        en: "Reduced the flow from 7 to 3 steps with clear confirmation and human error states.",
      },
    ],
    outcome: [
      { label: { pt: "Abandono", en: "Drop-off" }, value: "-38%" },
      { label: { pt: "Tempo p/ concluir", en: "Time to complete" }, value: "-2,1×" },
      { label: { pt: "CSAT do fluxo", en: "Flow CSAT" }, value: "+19pts" },
    ],
    closing: {
      pt: "O novo fluxo virou referência interna de craft e inspirou o redesenho de outras áreas do app.",
      en: "The new flow became an internal craft reference and inspired the redesign of other areas of the app.",
    },
  },
  {
    slug: "onboarding",
    title: {
      pt: "Onboarding que ativa de verdade",
      en: "Onboarding that actually activates",
    },
    client: "Lumen",
    year: "2024",
    role: {
      pt: "Staff Product Designer · Growth",
      en: "Staff Product Designer · Growth",
    },
    tags: ["Growth", "Ativação", "Experimentação"],
    summary: {
      pt: "Novo onboarding orientado a valor que elevou a ativação de novos usuários em 27% no primeiro mês.",
      en: "New value-oriented onboarding that increased new user activation by 27% in the first month.",
    },
    overview: {
      pt: "A Lumen tinha aquisição saudável, mas perdia usuários nos primeiros dias. Redesenhei o onboarding para entregar valor logo no primeiro uso.",
      en: "Lumen had healthy acquisition, but was losing users in the first days. I redesigned the onboarding to deliver value from the very first use.",
    },
    challenge: {
      pt: "O onboarding pedia muita informação antes de mostrar valor. Novos usuários desistiam antes do primeiro 'aha moment'.",
      en: "The onboarding asked for too much information before showing value. New users gave up before their first aha moment.",
    },
    approach: [
      {
        pt: "Identifiquei o momento de ativação real através de análise de coortes.",
        en: "Identified the real activation moment through cohort analysis.",
      },
      {
        pt: "Inverti o fluxo: valor primeiro, cadastro depois.",
        en: "Flipped the flow: value first, registration later.",
      },
      {
        pt: "Criei um onboarding progressivo e contextual, sem telas de tutorial.",
        en: "Created progressive, contextual onboarding without tutorial screens.",
      },
      {
        pt: "Rodei testes A/B em 4 variações ao longo de 6 semanas.",
        en: "Ran A/B tests on 4 variations over 6 weeks.",
      },
    ],
    outcome: [
      { label: { pt: "Ativação D7", en: "D7 Activation" }, value: "+27%" },
      { label: { pt: "Etapas de cadastro", en: "Registration steps" }, value: "-50%" },
      { label: { pt: "Drop no 1º dia", en: "Day 1 drop-off" }, value: "-31%" },
    ],
    closing: {
      pt: "Provamos que ativação não é sobre explicar o produto: é sobre fazer o usuário sentir o valor o quanto antes.",
      en: "We proved that activation isn't about explaining the product — it's about making users feel the value as soon as possible.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
