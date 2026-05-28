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
  // Frase de boas-vindas (seção Welcome)
  welcome: {
    pt: "Desenho produtos digitais que conectam negócios e pessoas — com clareza, intenção e um cuidado obsessivo pelos detalhes.",
    en: "I design digital products that connect businesses and people — with clarity, intention, and an obsessive attention to detail.",
  } as L,
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
    pt: "Bom design não é o que se vê — é o que se sente quando tudo simplesmente funciona.",
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
export const curiosities: { emoji: string; title: L; text: L }[] = [
  {
    emoji: "☕",
    title: { pt: "Movida a café", en: "Powered by coffee" },
    text: {
      pt: "Já testei mais de 40 grãos diferentes. O ritual da manhã é inegociável.",
      en: "Tested over 40 different beans. The morning ritual is non-negotiable.",
    },
  },
  {
    emoji: "🎹",
    title: { pt: "Toco piano", en: "I play piano" },
    text: {
      pt: "Música clássica desde os 8 anos — me ensinou tudo sobre ritmo e composição.",
      en: "Classical music since age 8 — taught me everything about rhythm and composition.",
    },
  },
  {
    emoji: "🏔️",
    title: { pt: "Trilhas longas", en: "Long hikes" },
    text: {
      pt: "Já caminhei mais de 300km em trilhas. As melhores ideias vêm no meio do mato.",
      en: "Walked over 300km on trails. The best ideas come in the middle of nowhere.",
    },
  },
  {
    emoji: "📚",
    title: { pt: "Leio demais", en: "I read a lot" },
    text: {
      pt: "Uma média de 30 livros por ano, metade sobre coisas que nada têm a ver com design.",
      en: "About 30 books a year, half on things completely unrelated to design.",
    },
  },
  {
    emoji: "🧩",
    title: { pt: "Coleciono quebra-cabeças", en: "Puzzle collector" },
    text: {
      pt: "Quanto mais peças, melhor. Problemas complexos são meu passatempo favorito.",
      en: "The more pieces, the better. Complex problems are my favorite pastime.",
    },
  },
  {
    emoji: "🌱",
    title: { pt: "Jardineira amadora", en: "Amateur gardener" },
    text: {
      pt: "Tenho 23 plantas em casa. Paciência e iteração também valem para elas.",
      en: "23 plants at home. Patience and iteration apply to them too.",
    },
  },
];

export type Project = {
  slug: string;
  title: L;
  client: string;
  year: string;
  role: L;
  tags: string[];
  // cor do bloco visual do card / capa
  cover: string;
  summary: L;
  // conteúdo da página de detalhe
  overview: L;
  challenge: L;
  approach: L[];
  outcome: { label: L; value: string }[];
  closing: L;
};

// 3 últimos trabalhos (seção 4) — cada um abre uma página de detalhe
export const projects: Project[] = [
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
    cover: "linear-gradient(135deg, #4b3bff 0%, #9b8cff 100%)",
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
    slug: "design-system",
    title: {
      pt: "Um design system para escalar",
      en: "A design system to scale",
    },
    client: "Northwind",
    year: "2024",
    role: {
      pt: "Staff Product Designer · Sistemas",
      en: "Staff Product Designer · Systems",
    },
    tags: ["Design System", "Tokens", "Governança"],
    cover: "linear-gradient(135deg, #15151a 0%, #4a4a55 100%)",
    summary: {
      pt: "Criação de um design system unificado adotado por 6 squads, com tokens e documentação viva.",
      en: "Creation of a unified design system adopted by 6 squads, with tokens and living documentation.",
    },
    overview: {
      pt: "Cinco produtos, cinco linguagens visuais. Fui responsável por unificar a experiência criando um design system multiplataforma com governança clara.",
      en: "Five products, five visual languages. I was responsible for unifying the experience by creating a cross-platform design system with clear governance.",
    },
    challenge: {
      pt: "Inconsistência visual, retrabalho constante e handoff lento entre design e engenharia atrasavam entregas em semanas.",
      en: "Visual inconsistency, constant rework, and slow design-to-engineering handoff were delaying deliveries by weeks.",
    },
    approach: [
      {
        pt: "Auditoria de 200+ componentes existentes para encontrar padrões reais.",
        en: "Audit of 200+ existing components to find real patterns.",
      },
      {
        pt: "Arquitetura de tokens semânticos compartilhados entre web e mobile.",
        en: "Semantic token architecture shared between web and mobile.",
      },
      {
        pt: "Biblioteca de componentes no Figma espelhada no código.",
        en: "Figma component library mirrored in code.",
      },
      {
        pt: "Rituais de contribuição e documentação viva para manter o sistema saudável.",
        en: "Contribution rituals and living documentation to keep the system healthy.",
      },
    ],
    outcome: [
      { label: { pt: "Squads usando", en: "Squads using it" }, value: "6" },
      { label: { pt: "Velocidade de entrega", en: "Delivery speed" }, value: "+40%" },
      { label: { pt: "Componentes duplicados", en: "Duplicate components" }, value: "-85%" },
    ],
    closing: {
      pt: "Mais do que uma biblioteca, o sistema criou uma linguagem comum entre design e engenharia.",
      en: "More than a library, the system created a shared language between design and engineering.",
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
    cover: "linear-gradient(135deg, #ff7a59 0%, #ffd166 100%)",
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
      pt: "Provamos que ativação não é sobre explicar o produto — é sobre fazer o usuário sentir o valor o quanto antes.",
      en: "We proved that activation isn't about explaining the product — it's about making users feel the value as soon as possible.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
