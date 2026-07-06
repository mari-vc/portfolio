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
    email: "mailto:3marivc@gmail.com",
  },
  // TODO: substituir pelo PDF real do currículo em /public
  resumeUrl: "/resume.pdf",
};

// Frase de impacto (seção 5)
export const impactQuote = {
  text: {
    pt: "Bom design não é o que se vê: é o que se sente quando tudo simplesmente funciona.",
    en: "Good design isn't what you see. It's what you feel when everything just works.",
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
  { name: "RD Saúde", logo: "/logos/rdsaude.svg" },
  { name: "iFood", logo: "/logos/ifood.svg", scale: 1.2 },
  { name: "StarkBank", logo: "/logos/starkbank.svg" },
  { name: "Claro", logo: "/logos/claro.svg" },
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
      title: { pt: "Clareza é uma vantagem competitiva", en: "Clarity is a competitive advantage" },
      text: {
        pt: "Quanto mais complexo o problema, mais importante é tornar o caminho claro. Meu papel é ajudar equipes a enxergar o que realmente importa antes de começar a desenhar.",
        en: "The more complex the problem, the more important it is to make the path clear. My role is to help teams see what really matters before they start designing.",
      },
    },
    {
      title: { pt: "Os melhores produtos são construídos em conjunto", en: "The best products are built together" },
      text: {
        pt: "Meu trabalho é conectar pessoas, perspectivas e disciplinas, não apenas desenhar telas. Acredito que os melhores produtos que construí nasceram da colaboração.",
        en: "My job is to connect people, perspectives, and disciplines, not just design screens. I believe the best products I've built were born from collaboration.",
      },
    },
    {
      title: { pt: "Sistemas criam escala", en: "Systems create scale" },
      text: {
        pt: "Gosto de resolver problemas de uma forma que possa ser reutilizada amanhã. Um bom sistema reduz inconsistências, acelera decisões e libera tempo para resolver novos desafios.",
        en: "I like solving problems in ways that can be reused tomorrow. A good system reduces inconsistencies, speeds up decisions, and frees up time to tackle new challenges.",
      },
    },
    {
      title: { pt: "Boas decisões vêm antes das boas interfaces", en: "Good decisions come before good interfaces" },
      text: {
        pt: "Antes de pensar na solução, gosto de entender o contexto, validar hipóteses e fazer as perguntas certas. Interfaces bonitas são consequência de decisões bem tomadas.",
        en: "Before thinking about the solution, I like to understand the context, validate hypotheses, and ask the right questions. Beautiful interfaces are the consequence of good decisions.",
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
  year: string;
  role: L;
  tags: string[];
  summary: L;
  // conteúdo da página de detalhe
  overview: L;
  challenge: L;
  // objetivo e restrições (opcionais) — completam o bloco narrativo inicial
  // (Resumo → Desafio → Objetivo → Restrições → Contexto)
  objective?: L;
  constraints?: L;
  approach: L[];
  // pilares do sistema (opcional) — grid visual de arquitetura
  pillars?: { title: L; text: L }[];
  // título da seção de pilares; sem ele, usa o padrão do dicionário ("Pilares do sistema")
  pillarsTitle?: L;
  outcome?: { label: L; value: string }[];
  closing: L;
  // true → a página do projeto embute o KypcarDemo interativo abaixo da capa.
  demo?: boolean;
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
      pt: "Atelier: quando um Design System deixa de ser biblioteca e vira produto",
      en: "Atelier: when a Design System stops being a library and becomes a product",
    },
    client: "Pump",
    year: "2026",
    role: {
      pt: "Staff Product Designer · Design Engineer",
      en: "Staff Product Designer · Design Engineer",
    },
    tags: ["Design System", "White-label", "AI-native"],
    summary: {
      pt: "Um Design System só vira sistema quando deixa de ser uma biblioteca e passa a ser a base sobre a qual o produto é construído.",
      en: "A Design System only becomes a system when it stops being a library and becomes the foundation the product is built on.",
    },
    overview: {
      pt: "A maioria dos design systems vive ao lado do produto: uma biblioteca que exige esforço de implementação, atualização e uso. Meu papel foi construir o Atelier dentro dele, e fazer com que o DS fosse além de manter apenas a consistência.\n\nEle acelerou a entrega de features funcionais e permitiu que nossos clientes construíssem widgets internos de acordo com suas necessidades.\n\nIsso tudo só foi possível através de uma documentação densa de uso e direcionamento, da construção de forma nativa em IA e de agentes internos que garantem as boas práticas, aceleram pesquisas e protótipos, e entregam em React e Tailwind.",
      en: "Most design systems live next to the product: a library that takes effort to implement, keep updated, and use. My role was to build Atelier inside the product, and make the design system go beyond just keeping things consistent.\n\nIt sped up the delivery of working features and let our customers build internal widgets to fit their own needs.\n\nAll of that was only possible through dense usage-and-guidance documentation, an AI-native build, and internal agents that enforce best practices, speed up research and prototyping, and ship in React and Tailwind.",
    },
    challenge: {
      pt: "O desafio era construir uma plataforma capaz de escalar em três frentes ao mesmo tempo: desenvolvimento, personalização e autonomia.\n\nEnquanto novas funcionalidades precisavam chegar rápido e com qualidade, cada cliente deveria ter sua própria identidade visual sem gerar retrabalho. Além disso, a plataforma precisava permitir que os próprios usuários construíssem interfaces dentro do produto. E, com a chegada da IA, o sistema também precisava ser estruturado para que agentes pudessem utilizá-lo de forma previsível e confiável.\n\nEm vez de resolver cada necessidade separadamente, o objetivo era criar uma única arquitetura capaz de sustentar todas elas.",
      en: "The challenge was to build a platform able to scale on three fronts at once: development, personalization, and autonomy.\n\nWhile new features needed to ship fast and with quality, each client had to have their own visual identity without generating rework. Beyond that, the platform had to let users themselves build interfaces inside the product. And with the arrival of AI, the system also had to be structured so agents could use it in a predictable, reliable way.\n\nInstead of solving each need separately, the goal was to create a single architecture able to sustain all of them.",
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
          en: "100 components and 11 foundations, each built and documented in isolation, with usage, variants, and guidance. It's the source of truth between design and engineering: no one has to guess how to build a screen.",
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
      { label: { pt: "Componentes no Atelier", en: "Components in Atelier" }, value: "100" },
      { label: { pt: "Retrabalho por marca", en: "Rework per brand" }, value: "0" },
      { label: { pt: "Idiomas suportados", en: "Languages supported" }, value: "5" },
    ],
    closing: {
      pt: "Comecei minha carreira desenhando telas. Hoje desenho os sistemas que tornam essas telas possíveis. O Atelier nasceu para dar autonomia ao time, permitir que clientes construam suas próprias interfaces e fazer o produto escalar muito além do que eu conseguiria desenhando sozinha.",
      en: "I started my career designing screens. Today I design the systems that make those screens possible. Atelier was born to give the team autonomy, let clients build their own interfaces, and make the product scale far beyond what I could ever design on my own.",
    },
  },
  {
    slug: "kypcar",
    title: {
      pt: "Construindo uma plataforma de car sharing para São Paulo",
      en: "Building a car-sharing platform for São Paulo",
    },
    client: "Kypcar",
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
      pt: "Entrei antes da primeira tela existir e saí com um produto navegável de ponta a ponta: prova de que um app de marketplace inteiro pode nascer do trabalho de uma pessoa só, quando o fluxo é desenhado com cuidado desde o início.",
      en: "I came in before the first screen existed and left with an end-to-end navigable product: proof that a whole marketplace app can be born from one person's work, when the flow is designed with care from the very start.",
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
      en: "We proved that activation isn't about explaining the product. It's about making users feel the value as soon as possible.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
