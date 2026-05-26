// Conteúdo centralizado do portfólio.
// Tudo aqui são PLACEHOLDERS — substitua pelos seus textos, empresas e projetos reais.

export const profile = {
  name: "Mari Vieira",
  role: "Staff Product Designer",
  location: "São Paulo, Brasil",
  email: "3marivc@gmail.com",
  // Frase de boas-vindas (seção Welcome)
  welcome:
    "Desenho produtos digitais que conectam negócios e pessoas — com clareza, intenção e um cuidado obsessivo pelos detalhes.",
  // Mini sobre (seção About)
  aboutShort:
    "Sou Staff Product Designer com mais de 10 anos de experiência liderando design de produtos complexos em escala. Trabalho na interseção entre estratégia, sistemas e craft, ajudando times a transformar problemas confusos em experiências simples.",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/mari-vc",
    email: "mailto:3marivc@gmail.com",
  },
};

// Frase de impacto (seção 5)
export const impactQuote = {
  text:
    "Bom design não é o que se vê — é o que se sente quando tudo simplesmente funciona.",
  attribution: "minha bússola de trabalho",
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
export const curiosities: { emoji: string; title: string; text: string }[] = [
  {
    emoji: "☕",
    title: "Movida a café",
    text: "Já testei mais de 40 grãos diferentes. O ritual da manhã é inegociável.",
  },
  {
    emoji: "🎹",
    title: "Toco piano",
    text: "Música clássica desde os 8 anos — me ensinou tudo sobre ritmo e composição.",
  },
  {
    emoji: "🏔️",
    title: "Trilhas longas",
    text: "Já caminhei mais de 300km em trilhas. As melhores ideias vêm no meio do mato.",
  },
  {
    emoji: "📚",
    title: "Leio demais",
    text: "Uma média de 30 livros por ano, metade sobre coisas que nada têm a ver com design.",
  },
  {
    emoji: "🧩",
    title: "Coleciono quebra-cabeças",
    text: "Quanto mais peças, melhor. Problemas complexos são meu passatempo favorito.",
  },
  {
    emoji: "🌱",
    title: "Jardineira amadora",
    text: "Tenho 23 plantas em casa. Paciência e iteração também valem para elas.",
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tags: string[];
  // cor do bloco visual do card / capa
  cover: string;
  summary: string;
  // conteúdo da página de detalhe
  overview: string;
  challenge: string;
  approach: string[];
  outcome: { label: string; value: string }[];
  closing: string;
};

// 3 últimos trabalhos (seção 4) — cada um abre uma página de detalhe
export const projects: Project[] = [
  {
    slug: "app-pagamentos",
    title: "Reimaginando pagamentos no app",
    client: "Aurora",
    year: "2025",
    role: "Staff Product Designer · Líder de design",
    tags: ["Mobile", "Fintech", "0→1"],
    cover: "linear-gradient(135deg, #4b3bff 0%, #9b8cff 100%)",
    summary:
      "Redesenho completo do fluxo de pagamentos que reduziu o abandono em 38% e simplificou três telas em uma.",
    overview:
      "A Aurora precisava modernizar seu fluxo de pagamentos, que acumulava anos de soluções pontuais. Liderei o redesenho de ponta a ponta, do discovery ao handoff, junto a times de engenharia, produto e dados.",
    challenge:
      "O fluxo original tinha 7 etapas, alto índice de abandono e inconsistências entre plataformas. Usuários relatavam insegurança na hora de confirmar valores.",
    approach: [
      "Mapeei a jornada atual com dados de funil e 12 entrevistas com usuários.",
      "Defini princípios de design: confiança, velocidade e reversibilidade.",
      "Prototipei 3 direções e testei com usabilidade moderada (8 sessões).",
      "Reduzi o fluxo de 7 para 3 etapas com confirmação clara e estados de erro humanos.",
    ],
    outcome: [
      { label: "Abandono", value: "-38%" },
      { label: "Tempo p/ concluir", value: "-2,1×" },
      { label: "CSAT do fluxo", value: "+19pts" },
    ],
    closing:
      "O novo fluxo virou referência interna de craft e inspirou o redesenho de outras áreas do app.",
  },
  {
    slug: "design-system",
    title: "Um design system para escalar",
    client: "Northwind",
    year: "2024",
    role: "Staff Product Designer · Sistemas",
    tags: ["Design System", "Tokens", "Governança"],
    cover: "linear-gradient(135deg, #15151a 0%, #4a4a55 100%)",
    summary:
      "Criação de um design system unificado adotado por 6 squads, com tokens e documentação viva.",
    overview:
      "Cinco produtos, cinco linguagens visuais. Fui responsável por unificar a experiência criando um design system multiplataforma com governança clara.",
    challenge:
      "Inconsistência visual, retrabalho constante e handoff lento entre design e engenharia atrasavam entregas em semanas.",
    approach: [
      "Auditoria de 200+ componentes existentes para encontrar padrões reais.",
      "Arquitetura de tokens semânticos compartilhados entre web e mobile.",
      "Biblioteca de componentes no Figma espelhada no código.",
      "Rituais de contribuição e documentação viva para manter o sistema saudável.",
    ],
    outcome: [
      { label: "Squads usando", value: "6" },
      { label: "Velocidade de entrega", value: "+40%" },
      { label: "Componentes duplicados", value: "-85%" },
    ],
    closing:
      "Mais do que uma biblioteca, o sistema criou uma linguagem comum entre design e engenharia.",
  },
  {
    slug: "onboarding",
    title: "Onboarding que ativa de verdade",
    client: "Lumen",
    year: "2024",
    role: "Staff Product Designer · Growth",
    tags: ["Growth", "Ativação", "Experimentação"],
    cover: "linear-gradient(135deg, #ff7a59 0%, #ffd166 100%)",
    summary:
      "Novo onboarding orientado a valor que elevou a ativação de novos usuários em 27% no primeiro mês.",
    overview:
      "A Lumen tinha aquisição saudável, mas perdia usuários nos primeiros dias. Redesenhei o onboarding para entregar valor logo no primeiro uso.",
    challenge:
      "O onboarding pedia muita informação antes de mostrar valor. Novos usuários desistiam antes do primeiro 'aha moment'.",
    approach: [
      "Identifiquei o momento de ativação real através de análise de coortes.",
      "Inverti o fluxo: valor primeiro, cadastro depois.",
      "Criei um onboarding progressivo e contextual, sem telas de tutorial.",
      "Rodei testes A/B em 4 variações ao longo de 6 semanas.",
    ],
    outcome: [
      { label: "Ativação D7", value: "+27%" },
      { label: "Etapas de cadastro", value: "-50%" },
      { label: "Drop no 1º dia", value: "-31%" },
    ],
    closing:
      "Provamos que ativação não é sobre explicar o produto — é sobre fazer o usuário sentir o valor o quanto antes.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
