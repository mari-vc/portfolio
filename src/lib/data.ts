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
  email: "hello@marivc.com",
  // Mini sobre (seção About)
  aboutShort: {
    pt: "Meu trabalho acontece na interseção entre estratégia, tecnologia e design, colaborando com equipes para tomar melhores decisões e criar experiências que fazem sentido para as pessoas.",
    en: "My work sits at the intersection of strategy, technology, and design, collaborating with teams to make better decisions and create experiences that make sense to people.",
  } as L,
  aboutShort2: {
    pt: "Não acredito que bom design seja apenas bonito. Acredito que bom design torna decisões mais fáceis, produtos mais intuitivos e times mais eficientes.",
    en: "I don't believe good design is just about being beautiful. I believe good design makes decisions easier, products more intuitive, and teams more efficient.",
  } as L,
  socials: {
    linkedin: "https://www.linkedin.com/in/marivc/",
    github: "https://github.com/mari-vc",
    email: "mailto:hello@marivc.com",
  },
  // TODO: substituir pelo PDF real do currículo em /public
  resumeUrl: "/resume.pdf",
};

// Frase de impacto (seção 5)
export const impactQuote = {
  text: {
    pt: "Bom design se sente. Quando tudo funciona, ele cumpriu seu papel.",
    en: "Good design is felt. When everything works, it has done its job.",
  } as L,
  attribution: {
    pt: "minha bússola de trabalho",
    en: "my work compass",
  } as L,
};

// Carrossel de logos — lugares onde trabalhei (seção 3)
// Cada logo é um arquivo em /public/logos/<slug>.svg (ou .png).
// `scale` é opcional: usado para equilibrar marcas em formato de ícone/selo
// (quadradas, mais "cheias") contra as wordmarks, que são mais finas e largas.
export const companies: { name: string; logo: string; scale?: number }[] = [
  { name: "Nomad", logo: "/logos/nomad.png", scale: 0.8 },
  { name: "RD Saúde", logo: "/logos/rdsaude.svg", scale: 0.85 },
  { name: "iFood", logo: "/logos/ifood.svg", scale: 1.2 },
  { name: "StarkBank", logo: "/logos/starkbank.svg", scale: 0.85 },
  { name: "Claro", logo: "/logos/claro.svg", scale: 0.85 },
  { name: "Itaú", logo: "/logos/itau.avif", scale: 1.4 },
  { name: "Decisiv", logo: "/logos/decisiv.svg", scale: 0.8 },
];

// Curiosidades (seção 6)
// `link` marca um @handle dentro do `text` (ex.: "(@mari.vc)") para virar
// link clicável no render, sem precisar reescrever o texto.
export const curiosities: {
  icon: string;
  title: L;
  text: L;
  link?: { handle: string; url: string };
}[] = [
  {
    icon: "guitar",
    title: { pt: "Violão", en: "Guitar" },
    text: {
      pt: "A música sempre fez parte da minha vida, seja ir em um show ou simplesmente tocar violão. É um dos meus jeitos favoritos de desacelerar e recarregar as energias.",
      en: "Music has always been part of my life, whether it's going to a show or just playing guitar. It's one of my favorite ways to slow down and recharge.",
    },
  },
  {
    icon: "camera",
    title: { pt: "Fotografia", en: "Photography" },
    text: {
      pt: "Foi atrás da câmera que aprendi a importância do olhar: observar antes de enquadrar e perceber detalhes que muitas vezes passam despercebidos.",
      en: "It was behind the camera that I learned the importance of looking: observing before framing, and noticing details that often go unseen.",
    },
  },
  {
    icon: "ceramics",
    title: { pt: "Cerâmica", en: "Ceramics" },
    text: {
      pt: "A cerâmica me lembra que algumas coisas não podem ser aceleradas. É meu exercício favorito de paciência e imperfeição. (@mari.vc)",
      en: "Ceramics reminds me that some things can't be rushed. It's my favorite exercise in patience and imperfection. (@mari.vc)",
    },
    link: { handle: "@mari.vc", url: "https://www.instagram.com/mari.vc" },
  },
  {
    icon: "dog",
    title: { pt: "Jake, o Chihuahua", en: "Jake, the Chihuahua" },
    text: {
      pt: "Pequeno, teimoso e absolutamente convencido de que manda na casa. Meu melhor companheiro. (@jake.thedoguinho)",
      en: "Small, stubborn, and absolutely convinced he runs the house. My best companion. (@jake.thedoguinho)",
    },
    link: { handle: "@jake.thedoguinho", url: "https://instagram.com/jake.thedoguinho" },
  },
  {
    icon: "boardgame",
    title: { pt: "Jogos de tabuleiro", en: "Board games" },
    text: {
      pt: "Gosto de entender como regras simples podem criar experiências complexas. E confesso: também sou bastante competitiva.",
      en: "I like understanding how simple rules can create complex experiences. And I'll admit it: I'm also fairly competitive.",
    },
  },
  {
    icon: "yoga",
    title: { pt: "Yoga", en: "Yoga" },
    text: {
      pt: "Meu lembrete semanal de que nem todo problema precisa ser resolvido imediatamente.",
      en: "My weekly reminder that not every problem needs to be solved right away.",
    },
  },
];

// Conteúdo da página /about (seção 2 expandida)
export const aboutPage = {
  body: [
    {
      pt: "Sempre gostei de trazer clareza ao caos. Foi isso que me levou ao Design de Produto em 2015 e continua guiando a forma como trabalho hoje.",
      en: "I've always loved bringing clarity to chaos. That's what led me to Product Design in 2015, and it still guides how I work today.",
    },
    {
      pt: "Ao longo da minha carreira, trabalhei em diferentes contextos, de grandes empresas a startups, desenhando produtos para fintechs, logística, saúde, streaming e, mais recentemente, IA.",
      en: "Throughout my career, I've worked across different contexts, from large companies to startups, designing products for fintech, logistics, healthcare, streaming, and more recently, AI.",
    },
    {
      pt: "Hoje, meu trabalho vai além de desenhar interfaces. Gosto de ajudar equipes a tomar melhores decisões, criar sistemas que escalam e transformar problemas complexos em produtos simples para as pessoas.",
      en: "Today, my work goes beyond designing interfaces. I enjoy helping teams make better decisions, building systems that scale, and turning complex problems into simple products for people.",
    },
  ] as L[],
  principles: [
    {
      title: { pt: "Clareza", en: "Clarity" },
      text: {
        pt: "Quanto mais complexo o problema, mais acredito na importância da clareza. Uma das partes que mais gosto no meu trabalho é ajudar a organizar o cenário, encontrar o que realmente importa e criar um caminho antes de partir para as definições.",
        en: "The more complex the problem, the more I believe in the importance of clarity. One of my favorite parts of the job is helping organize the landscape, finding what really matters, and building a path before moving into decisions.",
      },
    },
    {
      title: { pt: "Colaboração", en: "Collaboration" },
      text: {
        pt: "O papel de um designer vai além da interface: envolve mediar diferentes perspectivas, dar contexto às decisões e conectar pessoas. Os melhores produtos que ajudei a construir nasceram dessa colaboração.",
        en: "A designer's role goes beyond the interface: it means mediating different perspectives, giving context to decisions, and connecting people. The best products I've helped build were born from that collaboration.",
      },
    },
    {
      title: { pt: "Pensamento sistêmico", en: "Systems thinking" },
      text: {
        pt: "Gosto de resolver problemas de uma forma que continue fazendo sentido amanhã. Escalar uma solução vai além de criar componentes: envolve identificar padrões, pensar em diferentes níveis de entrega e tomar decisões que possam ser adaptadas e reutilizadas conforme o produto evolui.",
        en: "I like solving problems in ways that keep making sense tomorrow. Scaling a solution goes beyond creating components: it means identifying patterns, thinking across different levels of delivery, and making decisions that can be adapted and reused as the product evolves.",
      },
    },
    {
      title: { pt: "Pragmatismo", en: "Pragmatism" },
      text: {
        pt: "Nem todo problema precisa da solução mais sofisticada. Acredito em encontrar o equilíbrio entre impacto, esforço e velocidade, escolhendo a abordagem que faz mais sentido para o momento do produto e do negócio.",
        en: "Not every problem needs the most sophisticated solution. I believe in finding the balance between impact, effort, and speed, choosing the approach that makes the most sense for where the product and the business are.",
      },
    },
  ] as { title: L; text: L }[],
  timeline: [
    {
      period: { pt: "Fev 2026 – hoje", en: "Feb 2026 – today" },
      role: "Staff Product Designer",
      place: "Pump",
      blurb: {
        pt: "Conectando design e código para construir produtos de IA, do Design System às interfaces em produção.",
        en: "Connecting design and code to build AI products, from the Design System to production interfaces.",
      },
    },
    {
      period: { pt: "Jan 2024 – Jan 2026", en: "Jan 2024 – Jan 2026" },
      role: "Specialist Product Designer",
      place: "StarkBank",
      blurb: {
        pt: "Ajudei a estruturar a área de Design, liderando a criação do Design System e estabelecendo processos para escalar produtos internos.",
        en: "Helped structure the Design practice, leading the creation of the Design System and setting up processes to scale internal products.",
      },
    },
    {
      period: { pt: "Jul 2023 – Dez 2023", en: "Jul 2023 – Dec 2023" },
      role: "Senior Product Designer",
      place: "Nomad",
      blurb: {
        pt: "Simplifiquei experiências de investimento e ajudei a evoluir produtos financeiros por meio de pesquisa, sistemas e colaboração multidisciplinar.",
        en: "Simplified investment experiences and helped evolve financial products through research, systems, and cross-functional collaboration.",
      },
    },
    {
      period: { pt: "Mar 2022 – Set 2022", en: "Mar 2022 – Sep 2022" },
      role: "Product Design Consultant",
      place: "Decisiv",
      blurb: {
        pt: "Transformei fluxos operacionais complexos em ferramentas mais claras e eficientes para equipes de manutenção e logística.",
        en: "Turned complex operational flows into clearer, more efficient tools for maintenance and logistics teams.",
      },
    },
    {
      period: { pt: "Jan 2021 – Mar 2022", en: "Jan 2021 – Mar 2022" },
      role: "Senior Product Designer, LATAM",
      place: "iFood",
      blurb: {
        pt: "Liderei iniciativas para entregadores na América Latina, adaptando produtos a diferentes mercados e influenciando soluções que escalaram entre países.",
        en: "Led initiatives for couriers across Latin America, adapting products to different markets and shaping solutions that scaled across countries.",
      },
    },
    {
      period: { pt: "Jul 2020 – Jan 2021", en: "Jul 2020 – Jan 2021" },
      role: "Product Designer Pleno",
      place: "RD Saúde",
      blurb: {
        pt: "Digitalizei jornadas de saúde durante a pandemia, tornando processos complexos mais simples e acessíveis.",
        en: "Digitized healthcare journeys during the pandemic, making complex processes simpler and more accessible.",
      },
    },
    {
      period: { pt: "Set 2018 – Jul 2020", en: "Sep 2018 – Jul 2020" },
      role: "Product Designer Júnior → Pleno",
      place: "Claro",
      blurb: {
        pt: "Ajudei a definir a linguagem visual e os padrões de um ecossistema digital antes da adoção de Design Systems.",
        en: "Helped define the visual language and patterns of a digital ecosystem before Design Systems were widely adopted.",
      },
    },
    {
      period: { pt: "Ago 2017 – Set 2018", en: "Aug 2017 – Sep 2018" },
      role: "Product Designer Júnior",
      place: "Accenture/Concrete",
      blurb: {
        pt: "Trabalhei no projeto do Itaú, contribuindo para a evolução de produtos digitais e descobrindo meu interesse por resolver problemas complexos, muito antes de desenhar interfaces.",
        en: "Worked on the Itaú project, contributing to the evolution of digital products and discovering my interest in solving complex problems, long before designing interfaces.",
      },
    },
  ] as { period: L; role: string; place: string; blurb: L }[],
  education: {
    degrees: [
      {
        degree: { pt: "Bacharelado em Design de Produto Industrial", en: "Bachelor of Industrial Product Design" },
        school: "IESAM",
        period: { pt: "2009 – 2013 · Pará, Brasil", en: "2009 – 2013 · Pará, Brazil" },
      },
      {
        degree: { pt: "Pós-graduação em Design Centrado no Usuário", en: "Postgraduate in User-Centered Design" },
        school: "Universidade Positivo",
        period: { pt: "2014 – 2015 · Curitiba, Brasil", en: "2014 – 2015 · Curitiba, Brazil" },
      },
    ] as { degree: L; school: string; period: L }[],
    courses: [
      { year: "2026", name: "AI UI Coding Basics in Cursor", school: "Memorisely" },
      { year: "2025", name: "AI Design Bootcamp", school: "Memorisely" },
      { year: "2025", name: "Animating Brands and Products", school: "Aprenda Design" },
      { year: "2024", name: "Design System Bootcamp", school: "Memorisely" },
      { year: "2024", name: "Neuroscience, Design, and User Behavior", school: "IED" },
      { year: "2022", name: "Designing Strategy", school: "IDEO U" },
      { year: "2021", name: "Data and Quantitative Research", school: "Aprenda Design" },
      { year: "2021", name: "Behavior Design", school: "Aprenda Design" },
      { year: "2021", name: "Product Discovery", school: "PM3" },
      { year: "2018", name: "Design System Operations Bootcamp", school: "How" },
    ] as { year: string; name: string; school: string }[],
  },
};

export type Project = {
  slug: string;
  title: L;
  client: string;
  // site oficial do cliente (opcional) — quando presente, o nome do cliente
  // na página de detalhe vira link, abrindo em nova aba
  clientUrl?: string;
  year: string;
  role: L;
  tags: string[];
  summary: L;
  // true → oculto do grid de trabalhos e da navegação "próximo projeto",
  // mas a página de detalhe continua existindo (link direto ainda funciona)
  hidden?: boolean;
  // conteúdo da página de detalhe
  overview: L;
  // "O problema" (opcional) — parágrafo de contexto + lista de números de escala,
  // renderizado entre Resumo e Desafio
  problem?: {
    intro: L;
    stats: L[];
  };
  // tabela comparativa (opcional) — frase de abertura + linhas de contraste
  // eixo a eixo, renderizada entre Resumo e Desafio
  comparisonTable?: {
    intro: L;
    rows: { axis: L; before: L; after: L }[];
  };
  challenge: L;
  // objetivo e restrições (opcionais) — completam o bloco narrativo inicial
  // (Resumo → Desafio → Objetivo → Restrições → Contexto)
  objective?: L;
  constraints?: L;
  // aceita tanto texto solto (legado) quanto { title, text } (com título por passo)
  // `image` (opcional) referencia um arquivo em /public/work/ exibido via botão de expandir
  approach: (L | { title: L; text: L; image?: { src: string; alt: L } })[];
  // pilares do sistema (opcional) — grid visual de arquitetura
  // `doodle` (opcional, só no layout "list") referencia um pequeno desenho a
  // traço renderizado ao lado do item — chaves disponíveis em PillarDoodle.tsx
  // `imageAfter` (opcional, só no layout "list") insere uma imagem de referência
  // (arquivo em /public/work/) em largura cheia logo depois desse item
  pillars?: {
    title: L
    text: L
    doodle?: "receipt"
    imageAfter?: { src: string; alt: L; width: number; height: number }
  }[];
  // título da seção de pilares; sem ele, usa o padrão do dicionário ("Pilares do sistema")
  pillarsTitle?: L;
  // "list" → renderiza os pilares como lista numerada (bolinha + título + texto),
  // igual ao formato antigo de Abordagem, em vez do grid de cards padrão
  pillarsLayout?: "grid" | "list";
  // frase de contexto (opcional), exibida logo abaixo do título da seção de pilares
  pillarsIntro?: L;
  outcome?: { label: L; value: string }[];
  closing: L;
  // true → a página do projeto embute o KypcarDemo interativo abaixo da capa.
  demo?: boolean;
  // user flow desenhado a traço (opcional) — título + legenda; o desenho em si
  // é um componente por projeto (hoje só o HandshakeFlow), renderizado após a Abordagem.
  flowDiagram?: { title: L; caption: L };
  // análise de mercado (opcional) — tabela comparativa de referências + insight estratégico
  marketAnalysis?: {
    intro: L;
    competitors: { name: string; model: L; scope: L; highlight?: boolean }[];
    insight: L;
  };
  // análise de experiência (opcional) — benchmark de UX/UI de apps com dinâmica peer-to-peer:
  // `pattern` é o que o app resolve bem; `takeaway` é o que foi levado para o projeto.
  uxAnalysis?: {
    intro: L;
    references: { name: string; pattern: L; takeaway: L }[];
    insight?: L;
  };
};

// 3 últimos trabalhos (seção 4) — cada um abre uma página de detalhe
export const projects: Project[] = [
  {
    slug: "design-system",
    title: {
      pt: "Atelier: quando um Design System deixa de ser biblioteca e vira infraestrutura",
      en: "Atelier: when a Design System stops being a library and becomes infrastructure",
    },
    client: "Pump",
    year: "2026",
    role: {
      pt: "Staff Product Designer · Design Engineer",
      en: "Staff Product Designer · Design Engineer",
    },
    tags: ["Design System", "White-label", "AI-native"],
    summary: {
      pt: "O Atelier não foi criado para organizar componentes. Foi criado para tornar a evolução do produto previsível.",
      en: "Atelier wasn't created to organize components. It was created to make product evolution predictable.",
    },
    overview: {
      pt: "À medida que a plataforma crescia, três problemas surgiam ao mesmo tempo.\n\nO Design System precisava acompanhar a velocidade de desenvolvimento, permitir que cada cliente personalizasse sua experiência sem gerar retrabalho e, ao mesmo tempo, servir como base para interfaces construídas por usuários e por agentes de IA.\n\nConduzi a criação do Atelier para resolver essas três necessidades em uma única arquitetura. Em vez de uma biblioteca de componentes, construímos uma infraestrutura onde design, documentação e código evoluem juntos.\n\nEm cerca de oito semanas, o sistema chegou a 109 componentes documentados, eliminou inconsistências entre Figma e código e passou a sustentar toda a evolução da plataforma.",
      en: "As the platform grew, three problems emerged at the same time.\n\nThe Design System had to keep up with the pace of development, let each client personalize their experience without generating rework, and at the same time serve as the foundation for interfaces built by users and AI agents.\n\nI led the creation of Atelier to solve these three needs in a single architecture. Instead of a component library, we built infrastructure where design, documentation, and code evolve together.\n\nIn about eight weeks, the system reached 109 documented components, eliminated inconsistencies between Figma and code, and became the foundation sustaining the entire platform's evolution.",
    },
    comparisonTable: {
      intro: {
        pt: "Repensando o papel de um Design System.",
        en: "Rethinking the role of a Design System.",
      },
      rows: [
        {
          axis: { pt: "Objetivo", en: "Goal" },
          before: { pt: "Organizar componentes", en: "Organize components" },
          after: { pt: "Tornar a evolução do produto previsível", en: "Make product evolution predictable" },
        },
        {
          axis: { pt: "Onde vive", en: "Where it lives" },
          before: { pt: "Biblioteca separada do produto", en: "Library separate from the product" },
          after: { pt: "Dentro do próprio produto", en: "Inside the product itself" },
        },
        {
          axis: { pt: "Fonte da verdade", en: "Source of truth" },
          before: { pt: "Design e código precisam se reconciliar", en: "Design and code need to be reconciled" },
          after: { pt: "Código e documentação nascem juntos", en: "Code and documentation are born together" },
        },
        {
          axis: { pt: "Consistência", en: "Consistency" },
          before: { pt: "Depende de revisão humana", en: "Depends on human review" },
          after: { pt: "É garantida automaticamente pelo sistema", en: "Automatically guaranteed by the system" },
        },
        {
          axis: { pt: "Escalabilidade", en: "Scalability" },
          before: { pt: "Designers e devs constroem telas", en: "Designers and devs build screens" },
          after: { pt: "Times, clientes e agentes constroem sobre o mesmo sistema", en: "Teams, clients, and agents build on the same system" },
        },
        {
          axis: { pt: "Customização", en: "Customization" },
          before: { pt: "Cada marca exige adaptações", en: "Each brand requires adaptations" },
          after: { pt: "White-label configurado por tokens", en: "White-label configured via tokens" },
        },
        {
          axis: { pt: "Resultado", en: "Outcome" },
          before: { pt: "Biblioteca reutilizável", en: "Reusable library" },
          after: { pt: "Plataforma capaz de evoluir", en: "Platform capable of evolving" },
        },
      ],
    },
    challenge: {
      pt: "O desafio era construir uma plataforma capaz de escalar em três frentes ao mesmo tempo: velocidade, personalização e autonomia.\n\nEnquanto novas funcionalidades precisavam chegar rápido e com qualidade, cada cliente deveria ter sua própria identidade visual sem gerar retrabalho. Além disso, a plataforma precisava permitir que os próprios usuários construíssem interfaces dentro do produto. E, com a chegada da IA, o sistema também precisava ser estruturado para que agentes pudessem utilizá-lo de forma previsível e confiável.\n\nEm vez de resolver cada necessidade separadamente, o objetivo era criar uma única arquitetura capaz de sustentar todas elas.",
      en: "The challenge was to build a platform able to scale on three fronts at once: development, personalization, and autonomy.\n\nWhile new features needed to ship fast and with quality, each client had to have their own visual identity without generating rework. Beyond that, the platform had to let users themselves build interfaces inside the product. And with the arrival of AI, the system also had to be structured so agents could use it in a predictable, reliable way.\n\nInstead of solving each need separately, the goal was to create a single architecture able to sustain all of them.",
    },
    approach: [
      {
        pt: "Sem handoff. Conduzo cada feature do escopo e do wireframe ao protótipo de alta fidelidade, à implementação em produção e à revisão de qualidade. Nenhuma decisão de design se perde na passagem, porque não existe passagem.",
        en: "No handoff. I take every feature from scope and wireframe to high-fidelity prototype, production implementation, and quality review. No design decision gets lost in the handoff, because there is no handoff.",
      },
      {
        pt: "Componente antes de tela. Acessibilidade (contraste, foco, leitor de tela) e os cinco idiomas entram já no primeiro rascunho, não como um ajuste no fim.",
        en: "Components before screens. Accessibility (contrast, focus, screen reader) and all five languages come in with the first sketch, not as a fix at the end.",
      },
      {
        pt: "Padrão em vez de exceção. Quando um caso novo aparece, ele volta para o sistema, e não para uma tela solta. É assim que a consistência escala sem travar a velocidade.",
        en: "Patterns over exceptions. When a new case shows up, it goes back into the system, not onto a one-off screen. That's how consistency scales without slowing the team down.",
      },
      {
        pt: "White-label além das cores. Assim como a cor já era configurável por marca, passei a aplicar o mesmo princípio para forma e espaço: cada tenant define sua densidade e arredondamento de forma global, sem tocar em componente nenhum.",
        en: "White-label beyond colors. Just as color was already configurable per brand, I extended the same principle to shape and space: each tenant sets their density and roundness globally, without touching a single component.",
      },
    ],
    pillarsTitle: { pt: "Decisões arquiteturais", en: "Architectural decisions" },
    pillars: [
      {
        title: { pt: "Tokens em camadas", en: "Layered tokens" },
        text: {
          pt: "Primitivos alinhados ao Tailwind geram paletas white-label inteiras em OKLCh a partir de poucos valores de marca. Tokens semânticos são a única camada que um componente tem permissão de tocar: a regra é que ele nunca referencia um primitivo direto.",
          en: "Tailwind aligned primitives generate whole white-label palettes in OKLCh from a handful of brand values. Semantic tokens are the only layer a component is allowed to touch: the rule is it never references a primitive directly.",
        },
      },
      {
        title: { pt: "O sistema audita a si mesmo", en: "The system audits itself" },
        text: {
          pt: "Antes de qualquer merge, um comando roda no CI e reprova cor em hexadecimal, valores literais e paletas depreciadas. Ele também prova que todo par de texto e fundo passa em contraste WCAG AA nos dois temas. A disciplina não depende de review manual: é um portão que se recusa a abrir.",
          en: "Before any merge, a command runs in CI and rejects hardcoded hex colors, literal values, and deprecated palettes. It also proves every text and background pair passes WCAG AA contrast in both themes. The discipline doesn't depend on manual review: it's a gate that refuses to open.",
        },
      },
      {
        title: { pt: "Atelier, o workbench", en: "Atelier, the workbench" },
        text: {
          pt: "109 componentes e suas fundações, cada um construído e documentado em isolamento: anatomia, tokens, estados e props nascem no mesmo PR do código. É a fonte da verdade entre design e engenharia: ninguém precisa adivinhar como montar uma tela.",
          en: "109 components and their foundations, each built and documented in isolation: anatomy, tokens, states, and props are born in the same PR as the code. It's the source of truth between design and engineering: no one has to guess how to assemble a screen.",
        },
      },
      {
        title: { pt: "Extensível pelos clientes", en: "Extensible by customers" },
        text: {
          pt: "Sobre essa base documentada, os próprios clientes da Pump montam widgets dentro da plataforma, com os mesmos componentes e padrões do produto.",
          en: "On top of that documented foundation, Pump's own customers assemble widgets inside the platform, using the same components and patterns as the product.",
        },
      },
    ],
    outcome: [
      { label: { pt: "109 componentes", en: "109 components" }, value: "Base única para toda a plataforma" },
      { label: { pt: "208 commits", en: "208 commits" }, value: "Construído em aproximadamente 8 semanas" },
      { label: { pt: "0 hex hardcoded", en: "0 hardcoded hex" }, value: "Consistência garantida automaticamente" },
    ],
    closing: {
      pt: "Comecei desenhando interfaces. Hoje desenho sistemas que permitem que produtos evoluam sem depender de mim. O Atelier nasceu para transformar design em infraestrutura, dando autonomia ao time, aos clientes e aos agentes de IA.",
      en: "I started out designing interfaces. Now I design systems that let products evolve without depending on me. Atelier was born to turn design into infrastructure, giving autonomy to the team, to clients, and to AI agents.",
    },
  },
  {
    slug: "kypcar",
    title: {
      pt: "Construindo uma plataforma de car sharing",
      en: "Building a car-sharing platform for São Paulo",
    },
    client: "Kypcar",
    clientUrl: "https://kypcar.com/",
    year: "2025",
    role: {
      pt: "Freelance · Product Designer",
      en: "Freelance · Product Designer",
    },
    tags: ["Mobile", "0→1", "Marketplace"],
    demo: true,
    summary: {
      pt: "Um app de compartilhamento de carros peer-to-peer para São Paulo ('Mobilidade Reinventada'), desenhado do zero como freelance, do onboarding à reserva.",
      en: "A peer-to-peer car-sharing app for São Paulo ('Reinvented Mobility'), designed from scratch as a freelance project, from onboarding to booking.",
    },
    overview: {
      pt: "A Kypcar é uma plataforma de compartilhamento de carros peer-to-peer em São Paulo: donos de carro alugam o veículo parado para outras pessoas, e quem aluga economiza até 40% frente às locadoras tradicionais. Fui contratada como freelance para desenhar o produto inteiro do zero, sozinha, do primeiro rascunho de fluxo até a tela final.",
      en: "Kypcar is a peer-to-peer car-sharing platform in São Paulo: car owners rent out their idle vehicle to other people, and renters save up to 40% versus traditional rental agencies. I was brought on as a freelancer to design the entire product from scratch, solo, from the first flow sketch to the final screen.",
    },
    objective: {
      pt: "Desenhar o MVP completo da plataforma, do onboarding à reserva, criando uma experiência que gerasse confiança suficiente para um dono entregar o próprio carro a um desconhecido, e para quem aluga escolher um carro particular em vez de uma locadora.",
      en: "Design the platform's complete MVP, from onboarding to booking, creating an experience trustworthy enough for an owner to hand their car to a stranger, and for a renter to choose a private car over a rental agency.",
    },
    constraints: {
      pt: "Projeto freelance com uma designer só e prazo enxuto, sem produto anterior como base. Sem hardware conectado no escopo, a troca de chaves acontece presencialmente: o encontro entre desconhecidos precisava fazer parte da experiência. E a confiança teria que ser construída pelo design, sem a marca estabelecida dos players internacionais.",
      en: "A freelance project with a single designer and a tight timeline, with no previous product to build on. With no connected hardware in scope, the key handoff happens in person: the meetup between strangers had to be part of the experience. And trust had to be built through design, without the established brand of international players.",
    },
    marketAnalysis: {
      intro: {
        pt: "Antes de desenhar a primeira tela, mapeei o cenário competitivo: como locadoras tradicionais, locadoras digitais e marketplaces peer-to-peer resolvem (ou não) o mesmo problema de mobilidade.",
        en: "Before designing the first screen, I mapped the competitive landscape: how traditional rental agencies, digital-first rental agencies, and peer-to-peer marketplaces each solve (or don't) the same mobility problem.",
      },
      competitors: [
        {
          name: "Localiza",
          model: {
            pt: "Locadora tradicional: frota própria, rede de agências físicas, aluguel diário/mensal e carro por assinatura.",
            en: "Traditional rental agency: owned fleet, network of physical branches, daily/monthly rental and car subscription.",
          },
          scope: { pt: "Brasil e América Latina", en: "Brazil and Latin America" },
        },
        {
          name: "Movida",
          model: {
            pt: "Locadora tradicional: mesmo modelo de frota própria e lojas físicas, com aluguel mensal para pessoa física e gestão de frotas corporativas.",
            en: "Traditional rental agency: same owned-fleet and physical-branch model, with monthly rental for individuals and corporate fleet management.",
          },
          scope: { pt: "Brasil", en: "Brazil" },
        },
        {
          name: "Turbi",
          model: {
            pt: "Locadora 100% digital: ainda com frota própria, mas retirada self-service pelo app, sem balcão nem burocracia.",
            en: "100% digital rental agency: still an owned fleet, but self-service pickup through the app, no counter or paperwork.",
          },
          scope: { pt: "Brasil", en: "Brazil" },
        },
        {
          name: "Getaround",
          model: {
            pt: "Marketplace peer-to-peer com hardware conectado: o carro destrava pelo app, sem encontro para troca de chaves: reserva instantânea, sem aprovação do dono.",
            en: "Peer-to-peer marketplace with connected hardware: the car unlocks through the app, no key-handoff meetup: instant booking, no owner approval.",
          },
          scope: { pt: "EUA e Europa", en: "US and Europe" },
        },
        {
          name: "Turo",
          model: {
            pt: "Marketplace peer-to-peer: o dono do carro anuncia, a Turo cuida de pagamento, seguro e confiança. A frota é feita de carros de pessoas comuns.",
            en: "Peer-to-peer marketplace: the car owner lists the vehicle, Turo handles payment, insurance, and trust. The fleet is made of regular people's cars.",
          },
          scope: { pt: "Estados Unidos", en: "United States" },
        },
        {
          name: "Kypcar",
          model: {
            pt: "Marketplace peer-to-peer: a mesma lógica da Turo, adaptada para o contexto e a confiança do usuário brasileiro (verificação por IA, seguro incluso, limpeza profissional).",
            en: "Peer-to-peer marketplace: the same logic as Turo, adapted to the Brazilian user's context and trust needs (AI verification, included insurance, professional cleaning).",
          },
          scope: { pt: "São Paulo", en: "São Paulo" },
          highlight: true,
        },
      ],
      insight: {
        pt: "Localiza e Movida têm escala, mas dependem de frota própria e presença física; a Turbi digitalizou a experiência de alugar, mas manteve o mesmo modelo de frota. Do outro lado, Turo e Getaround provaram o peer-to-peer em outros mercados, cada uma resolvendo a fricção de um jeito (a Turo com seguro e reputação, a Getaround com hardware que elimina a troca de chaves). O modelo simplesmente não tinha equivalente validado no Brasil. Essa lacuna virou a base de várias decisões de produto: se ninguém aqui tinha resolvido confiança num marketplace peer-to-peer, isso precisava ser o centro da experiência, não um detalhe nos termos de uso.",
        en: "Localiza and Movida have scale, but depend on owned fleets and physical presence; Turbi digitized the rental experience but kept the same fleet model. On the other side, Turo and Getaround proved peer-to-peer in other markets, each solving the friction differently (Turo with insurance and reputation, Getaround with hardware that eliminates the key handoff). The model simply had no proven equivalent in Brazil. That gap grounded several product decisions: if nobody here had solved trust in a peer-to-peer marketplace yet, it had to be the center of the experience, not a detail buried in the terms of service.",
      },
    },
    uxAnalysis: {
      intro: {
        pt: "Depois do mercado, mergulhei na experiência: como apps consolidados desenham o contato entre duas pessoas que não se conhecem? Analisei interface e fluxo de produtos onde a transação depende desse encontro, e o que cada um resolve bem virou repertório para o Kypcar.",
        en: "After the market, I dug into the experience: how do established apps design the contact between two strangers? I analyzed the interface and flows of products where the transaction depends on that encounter, and what each one solves well became repertoire for Kypcar.",
      },
      references: [
        {
          name: "Airbnb",
          pattern: {
            pt: "Constrói confiança em camadas na própria página do anúncio: perfil do anfitrião com selo Superhost, avaliações com nota e volume, e mensagens sempre amarradas ao contexto da reserva.",
            en: "Builds trust in layers right on the listing page: host profile with the Superhost badge, reviews with score and volume, and messages always tied to the booking context.",
          },
          takeaway: {
            pt: "O card de anfitrião com selo 'Super host', as avaliações em destaque no anúncio e o chat que carrega a reserva fixada no topo vêm direto desse padrão.",
            en: "The host card with the 'Super host' badge, reviews featured on the listing, and the chat carrying the booking pinned at the top come straight from this pattern.",
          },
        },
        {
          name: "Uber / 99",
          pattern: {
            pt: "Normalizaram no Brasil o encontro entre estranhos: foto, nome e avaliação mútua visíveis antes do encontro, e toda a comunicação dentro do app.",
            en: "Normalized meeting strangers in Brazil: photo, name, and mutual rating visible before the encounter, with all communication inside the app.",
          },
          takeaway: {
            pt: "Identidade visível dos dois lados (avatar, nome e nota do anfitrião sempre à mão) e contato sem sair do app, sem depender de telefone ou WhatsApp.",
            en: "Visible identity on both sides (the host's avatar, name, and rating always at hand) and contact without leaving the app, no phone number or WhatsApp needed.",
          },
        },
        {
          name: "DogHero",
          pattern: {
            pt: "Resolve a ansiedade de quem entrega algo precioso a um estranho: perfis com histórico concreto (anfitrião desde quando, quantas hospedagens, tempo de resposta) e verificação visível antes de qualquer conversa.",
            en: "Solves the anxiety of handing something precious to a stranger: profiles with a concrete track record (hosting since when, how many stays, response time) and visible verification before any conversation.",
          },
          takeaway: {
            pt: "O lastro numérico da confiança: 'anfitrião desde 2023 · 128 viagens', tempo de resposta e o selo de identidade verificada no perfil: números que falam pelo anfitrião antes dele dizer qualquer coisa.",
            en: "The numeric ballast of trust: 'host since 2023 · 128 trips', reply time, and the verified-identity badge on the profile: numbers that speak for the host before they say a word.",
          },
        },
      ],
      insight: {
        pt: "O padrão comum entre eles: a interface não pede confiança, ela mostra evidência: identidade, reputação e regras visíveis no momento certo. No Kypcar, juntei os três repertórios: o anúncio do Airbnb, o encontro do Uber e o histórico do DogHero.",
        en: "The common thread: the interface doesn't ask for trust, it shows evidence: identity, reputation, and rules visible at the right moment. In Kypcar, I combined all three repertoires: Airbnb's listing, Uber's encounter, and DogHero's track record.",
      },
    },
    challenge: {
      pt: "Um marketplace peer-to-peer tem duas pontas para convencer ao mesmo tempo: quem procura um carro precisa confiar no anfitrião e no processo antes de pagar por dias que ainda não aconteceram; quem oferece o carro precisa sentir que a plataforma protege o patrimônio dele. A resposta da Kypcar passa por verificação de identidade com IA (reconhecimento facial e validação de CNH), seguro completo incluso e limpeza profissional entre locações. Tudo isso precisava ficar visível e claro na experiência, não só existir nos termos de uso.\n\nCom uma pessoa só no design e um prazo de freelance, o produto também precisava nascer completo: onboarding, busca, filtros, perfil do anfitrião, agenda, checkout, pós-reserva e chat. Não dava para lançar com metade do fluxo.",
      en: "A peer-to-peer marketplace has two sides to convince at once: the person looking for a car needs to trust the host and the process before paying for days that haven't happened yet; the person offering the car needs to feel the platform protects their asset. Kypcar's answer runs through AI-powered identity verification (facial recognition and driver's license validation), full insurance included, and professional cleaning between rentals. All of it needed to be visible and clear in the experience, not just sitting in the terms of service.\n\nWith one person on design and a freelance timeline, the product also had to launch whole: onboarding, search, filters, host profile, scheduling, checkout, post-booking and chat. There was no shipping with half the flow.",
    },
    approach: [
      {
        pt: "Mapeei a jornada ponta a ponta antes de desenhar uma tela: da primeira abertura do app até a conversa com o anfitrião depois da reserva confirmada.",
        en: "Mapped the end-to-end journey before designing a single screen: from first opening the app to the conversation with the host after the booking is confirmed.",
      },
      {
        pt: "Construí um sistema visual escuro e de alto contraste (roxo e verde-limão) que comunica segurança e tecnologia sem parecer um app financeiro genérico.",
        en: "Built a dark, high-contrast visual system (purple and lime) that reads as secure and tech-forward without looking like a generic fintech app.",
      },
      {
        pt: "Desenhei os dois lados da confiança do marketplace: verificação de identidade com IA e selo de anfitrião verificado do lado de quem oferece o carro; seguro incluso, limpeza profissional e política de cancelamento visíveis do lado de quem reserva.",
        en: "Designed both sides of the marketplace's trust equation: AI identity verification and a verified-host badge on the supply side; included insurance, professional cleaning, and a visible cancellation policy on the booking side.",
      },
      {
        pt: "Prototipei o fluxo inteiro navegável, não telas soltas, para validar a experiência de ponta a ponta antes de qualquer linha de código de produção.",
        en: "Prototyped the entire flow as a navigable product, not standalone screens, to validate the end-to-end experience before any production code was written.",
      },
    ],
    pillarsTitle: { pt: "Decisões de design", en: "Design decisions" },
    pillars: [
      {
        title: { pt: "Confiança no momento da dúvida", en: "Trust at the moment of doubt" },
        text: {
          pt: "Selo de anfitrião verificado, avaliações com nota e volume, política de cancelamento a um toque e seguro somado ao preço. A prova de confiança aparece onde a hesitação acontece, não escondida em termos de uso.",
          en: "Verified-host badge, ratings with score and volume, one-tap cancellation policy, and insurance itemized in the price. Proof of trust shows up where hesitation happens, not buried in the terms of service.",
        },
      },
      {
        title: { pt: "Cor com papel fixo", en: "Color with a fixed role" },
        text: {
          pt: "Sobre o fundo quase preto, o verde-limão marca ação e dinheiro (CTA, preço, status ativo) e o roxo marca navegação e seleção. Uma regra simples que sustenta a hierarquia em qualquer tela nova.",
          en: "On the near-black canvas, lime marks action and money (CTA, price, active status) while purple marks navigation and selection. One simple rule that holds the hierarchy on any new screen.",
        },
      },
      {
        title: { pt: "Reserva sem fricção", en: "Frictionless booking" },
        text: {
          pt: "Do carro à confirmação em três passos: calendário com preço por dia em cada data, resumo com custo total transparente e pagamento salvo. Nenhuma surpresa entre escolher e confirmar.",
          en: "From car to confirmation in three steps: a calendar showing the daily price on every date, a summary with the full transparent cost, and saved payment. No surprises between choosing and confirming.",
        },
      },
      {
        title: { pt: "A conversa faz parte do fluxo", en: "The conversation is part of the flow" },
        text: {
          pt: "Num marketplace P2P, retirada e devolução se combinam no chat. Por isso a conversa carrega o contexto da reserva (carro, datas e endereço fixados no topo) e fica a um toque de qualquer ponto do fluxo.",
          en: "In a P2P marketplace, pickup and return get arranged in chat. So the conversation carries the booking context (car, dates, and address pinned at the top) and sits one tap away from anywhere in the flow.",
        },
      },
    ],
    closing: {
      pt: "Do conceito ao produto funcional, desenhando toda a jornada de ponta a ponta.",
      en: "From concept to a working product, designing the entire journey end to end.",
    },
  },
  {
    slug: "handshake-restaurante",
    title: {
      pt: "Handshake: como reduzimos fraudes sem aumentar o atrito da operação",
      en: "Handshake: how we cut fraud without adding friction to operations",
    },
    client: "iFood",
    year: "2022",
    role: {
      pt: "Senior Product Designer · Logística Latam",
      en: "Senior Product Designer · Latam Logistics",
    },
    tags: ["Mobile", "Research", "Logística"],
    summary: {
      pt: "O desafio não era criar mais uma etapa no fluxo do entregador. Era garantir que cada pedido chegasse à pessoa certa sem comprometer velocidade, experiência ou escala.",
      en: "The challenge wasn't adding one more step to the courier's flow. It was making sure every order reached the right person without compromising speed, experience, or scale.",
    },
    overview: {
      pt: "No iFood, um pedido passa por uma sequência simples: um entregador chega ao restaurante, retira o pedido e segue para a entrega. Mas dois desses momentos não possuíam qualquer mecanismo de validação.\n\nNa chegada ao restaurante, alguns entregadores confirmavam presença antes de realmente chegar, comprometendo métricas importantes da operação. Já na retirada do pedido, não existia uma forma confiável de garantir que o entregador certo retirasse o pedido certo, abrindo espaço para fraudes, roubos e trocas de pacotes.\n\nComo Product Designer da equipe, conduzi a pesquisa, a ideação e a validação de dois novos fluxos da jornada do entregador, criando novos pontos de validação que aumentaram a confiabilidade da operação sem comprometer a experiência de quem entrega.",
      en: "At iFood, an order goes through a simple sequence: a courier arrives at the restaurant, picks up the order, and heads out for delivery. But two of these moments had no validation mechanism at all.\n\nAt arrival, some couriers confirmed presence before actually reaching the restaurant, compromising key operational metrics. At pickup, there was no reliable way to guarantee the right courier picked up the right order, leaving room for fraud, theft, and package swaps.\n\nAs the Product Designer on the team, I led the research, ideation, and validation of two new flows in the courier journey, creating new validation points that increased operational reliability without compromising the courier experience.",
    },
    problem: {
      intro: {
        pt: "O problema tinha escala. Todos os meses, milhares de pedidos eram impactados pela ausência desses mecanismos de validação. Sem uma forma de comprovar quem havia chegado ao restaurante e quem havia retirado cada pedido, a operação perdia confiabilidade, fraudes aconteciam e o iFood absorvia integralmente os custos dos pedidos cancelados.",
        en: "The problem had scale. Every month, thousands of orders were affected by the absence of these validation mechanisms. With no way to prove who had arrived at the restaurant and who had picked up each order, the operation lost reliability, fraud happened, and iFood fully absorbed the cost of cancelled orders.",
      },
      stats: [
        {
          pt: "9.700 pedidos/mês cancelados por ausência de validação na retirada.",
          en: "9,700 orders/month cancelled due to lack of pickup validation.",
        },
        {
          pt: "886 pedidos/mês associados a roubo de pacotes.",
          en: "886 orders/month linked to parcel theft.",
        },
        {
          pt: "0,68% dos pedidos apresentavam trocas na retirada.",
          en: "0.68% of orders had courier/order mismatches at pickup.",
        },
        {
          pt: "100% do valor dos pedidos cancelados era absorvido pelo iFood.",
          en: "100% of cancelled order value was absorbed by iFood.",
        },
      ],
    },
    challenge: {
      pt: "Criar dois novos pontos de validação na jornada do entregador, garantindo que o entregador certo retirasse o pedido certo, no restaurante certo, sem aumentar o atrito da operação, comprometer a experiência de quem entrega ou impactar indicadores como Contact Rate.",
      en: "Create two new validation points in the courier's journey, making sure the right courier picked up the right order, at the right restaurant, without adding friction to the operation, compromising the courier experience, or impacting metrics like Contact Rate.",
    },
    approach: [
      {
        title: { pt: "Pessoas antes da tecnologia", en: "People before technology" },
        text: {
          pt: "Comecei entrevistando entregadores para entender onde a operação realmente falhava. As conversas revelaram duas lacunas importantes: não existia uma forma confiável de validar a chegada ao restaurante nem a retirada do pedido, além de exporem esquemas de fraude já conhecidos por quem estava no campo.",
          en: "I started by interviewing couriers to understand where the operation was actually failing. The conversations revealed two important gaps: there was no reliable way to validate arrival at the restaurant or order pickup, and they exposed fraud schemes already known to people in the field.",
        },
      },
      {
        title: { pt: "Entender a causa antes de discutir soluções", en: "Understand the cause before discussing solutions" },
        text: {
          pt: "Facilitei sessões de ideação com engenharia e designers dos times de Restaurante e Consumidor. Antes de discutir tecnologia, utilizamos 5 Why's para identificar a causa raiz dos problemas e alinhar uma solução única para toda a jornada.",
          en: "I facilitated ideation sessions with engineering and designers from the Restaurant and Consumer teams. Before discussing technology, we used 5 Whys to identify the root cause of the problems and align on a single solution for the whole journey.",
        },
        image: {
          src: "/work/5-whys.png",
          alt: { pt: "Quadro de ideação com a técnica dos 5 Why's", en: "Ideation board using the 5 Whys technique" },
        },
      },
      {
        title: { pt: "Validar a hipótese antes de escalar", en: "Validate the hypothesis before scaling" },
        text: {
          pt: "Antes de desenvolver qualquer solução, precisávamos comprovar que um novo fluxo realmente reduziria fraudes e aumentaria a confiabilidade da operação. A prioridade era validar o comportamento antes de investir na implementação.",
          en: "Before building any solution, we needed to prove that a new flow would actually reduce fraud and increase the operation's reliability. The priority was validating behavior before investing in implementation.",
        },
      },
      {
        title: { pt: "Começar pelo menor risco", en: "Start with the lowest risk" },
        text: {
          pt: "Escolhemos iniciar pela validação de chegada ao restaurante, um fluxo com menor potencial de impacto no Contact Rate. Os aprendizados dessa primeira etapa serviram como base para desenhar a validação da retirada do pedido.",
          en: "We chose to start with restaurant-arrival validation, a flow with lower potential impact on the Contact Rate. The learnings from this first step became the foundation for designing order-pickup validation.",
        },
      },
      {
        title: { pt: "Aprender antes de escalar", en: "Learn before scaling" },
        text: {
          pt: "O rollout aconteceu de forma gradual: primeiro em dois restaurantes do McDonald's para validar compreensão e adesão ao fluxo, depois em sete unidades para medir o impacto operacional. Os indicadores pioraram nos primeiros dias e se estabilizaram logo depois, evidenciando uma curva natural de aprendizado, e não rejeição à solução.",
          en: "The rollout happened gradually: first at two McDonald's restaurants to validate comprehension and adherence to the flow, then at seven locations to measure operational impact. Indicators dipped in the first days and stabilized shortly after, showing a natural learning curve rather than rejection of the solution.",
        },
      },
      {
        title: { pt: "Evoluir a solução com o que aprendemos", en: "Evolve the solution with what we learned" },
        text: {
          pt: "Os testes geraram melhorias importantes antes da expansão da funcionalidade: criamos um fluxo alternativo para entregadores com câmera danificada, orientações para restaurantes manterem os QR Codes visíveis e atualizados e uma estratégia para lidar com grandes redes que possuíam múltiplos identificadores por loja.",
          en: "The tests generated important improvements before the feature expanded: we created an alternative flow for couriers with a damaged camera, guidance for restaurants to keep QR Codes visible and up to date, and a strategy for handling large chains with multiple identifiers per store.",
        },
      },
    ],
    flowDiagram: {
      title: { pt: "User flow do check-in (MVP)", en: "Check-in user flow (MVP)" },
      caption: {
        pt: "Desenhei o fluxo de validação da chegada do entregador ao restaurante: um caminho principal em três etapas e rotas alternativas para lidar com exceções, priorizando uma abordagem baseada em confiança antes de aplicar qualquer penalização.",
        en: "I designed the flow to validate the courier's arrival at the restaurant: a main path in three steps and alternative routes to handle exceptions, prioritizing a trust-based approach before applying any penalty.",
      },
    },
    pillarsTitle: { pt: "Decisões de design", en: "Design decisions" },
    pillarsLayout: "list",
    pillarsIntro: {
      pt: "Decisões pensadas para o MVP: validar o valor da solução com o menor investimento possível antes de evoluir para uma versão mais robusta.",
      en: "Decisions scoped for the MVP: validate the solution's value with the smallest possible investment before evolving into a more robust version.",
    },
    pillars: [
      {
        title: { pt: "QR code na parede, não no app", en: "QR code on the wall, not in the app" },
        text: {
          pt: "Para validar presença física no restaurante, o entregador escaneia um QR code fixado no local. A solução reduz a complexidade tecnológica ao mínimo necessário: uma interação simples, barata e escalável para um problema de milhões de entregas.",
          en: "To validate physical presence at the restaurant, the courier scans a QR code fixed on-site. The solution keeps technological complexity to the bare minimum: a simple, cheap, and scalable interaction for a problem spanning millions of deliveries.",
        },
      },
      {
        title: { pt: "QR codes rotativos", en: "Rotating QR codes" },
        text: {
          pt: "Para evitar que uma foto do código fosse reutilizada em outro momento, cada restaurante possui múltiplos QR codes que alternam conforme a data. Assim, o sistema dificulta tentativas de check-in falso sem adicionar fricção ao entregador.",
          en: "To prevent a photo of the code from being reused later, each restaurant has multiple QR codes that rotate by date. This makes fake check-in attempts harder without adding friction for the courier.",
        },
      },
      {
        title: { pt: "Código único na nota fiscal", en: "Unique code on the receipt" },
        doodle: "receipt",
        text: {
          pt: "No check-out, um código impresso na nota fiscal conecta o entregador ao pedido correto. A entrega só é liberada após essa validação, criando uma segunda camada de segurança contra fraudes.",
          en: "At check-out, a code printed on the receipt connects the courier to the correct order. Delivery is only released after this validation, creating a second layer of protection against fraud.",
        },
      },
      {
        title: { pt: "Erros tratados com confiança", en: "Errors handled with trust" },
        text: {
          pt: "Nem todo erro indica uma tentativa de fraude. Um código desatualizado na loja correta pode ser validado automaticamente após alguns minutos, enquanto tentativas inválidas recebem múltiplas chances antes de qualquer penalização. O fluxo assume boa-fé até que existam sinais reais de abuso.",
          en: "Not every error signals a fraud attempt. An outdated code at the right store can be auto-validated after a few minutes, while invalid attempts get multiple chances before any penalty. The flow assumes good faith until there are real signs of abuse.",
        },
        imageAfter: {
          src: "/work/check-in-flow.png",
          alt: { pt: "Fluxo de check-in do entregador no restaurante", en: "Courier check-in flow at the restaurant" },
          width: 15090,
          height: 14526,
        },
      },
    ],
    outcome: [
      {
        label: { pt: "Preparo mais rápido", en: "Faster prep time" },
        value: "O McDonald's registrou queda no tempo de preparo já no piloto de 7 pontos",
      },
      {
        label: { pt: "Hipótese confirmada", en: "Hypothesis confirmed" },
        value: "NRE caiu e DRE subiu, provando o check-in falso e destravando microtempos reais",
      },
      {
        label: { pt: "R$ 260 milhões", en: "R$260 million" },
        value: "Em pedidos mensais protegidos contra fraude de check-out",
      },
    ],
    closing: {
      pt: "O melhor design nem sempre vive na tela. No Handshake, a interface era um QR code na parede do restaurante e o impacto se media em fraude evitada.",
      en: "The best design does not always live on a screen. In Handshake, the interface was a QR code on the restaurant wall and the impact was measured in fraud prevented.",
    },
  },
  {
    slug: "onboarding",
    hidden: true,
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
      pt: "Provamos que ativar bem significa fazer a pessoa sentir o valor logo de cara, mais do que explicar o produto.",
      en: "We proved that activation isn't about explaining the product. It's about making users feel the value as soon as possible.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Projetos exibidos no grid de trabalhos e na navegação "próximo projeto".
export const visibleProjects = projects.filter((p) => !p.hidden);
