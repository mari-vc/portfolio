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
    pt: "Sou Staff Product Designer há mais de 10 anos, liderando o design de produtos complexos em escala. Trabalho na interseção entre estratégia, sistemas e craft, ajudando times a transformar problemas confusos em experiências simples.",
    en: "I've been a Staff Product Designer for over 10 years, leading the design of complex products at scale. I work at the intersection of strategy, systems, and craft, helping teams transform messy problems into simple experiences.",
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
// Cada logo é um arquivo em /public/logos/<slug>.svg (ou .png).
// `scale` é opcional: usado para equilibrar marcas em formato de ícone/selo
// (quadradas, mais "cheias") contra as wordmarks, que são mais finas e largas.
export const companies: { name: string; logo: string; scale?: number }[] = [
  { name: "Nomad", logo: "/logos/nomad.png" },
  { name: "RD Saúde", logo: "/logos/rdsaude.svg" },
  { name: "iFood", logo: "/logos/ifood.svg", scale: 1.2 },
  { name: "StarkBank", logo: "/logos/starkbank.svg" },
  { name: "Claro", logo: "/logos/claro.svg" },
  { name: "Itaú", logo: "/logos/itau.avif", scale: 1.4 },
  { name: "Decisiv", logo: "/logos/decisiv.svg", scale: 0.8 },
];

// Curiosidades (seção 6)
export const curiosities: { icon: string; title: L; text: L }[] = [
  {
    icon: "ceramics",
    title: { pt: "Faço cerâmica", en: "I make ceramics" },
    text: {
      pt: "Compartilho as peças que faço no Instagram @mari.vc.",
      en: "I share the pieces I make on Instagram @mari.vc.",
    },
  },
  {
    icon: "camera",
    title: { pt: "Tiro fotos", en: "I take photos" },
    text: {
      pt: "Sempre gostei, desde pequena. Um hobby que segue comigo até hoje.",
      en: "I've loved it since I was a kid — a hobby that's stuck with me ever since.",
    },
  },
  {
    icon: "guitar",
    title: { pt: "Toco violão", en: "I play guitar" },
    text: {
      pt: "Um dos meus jeitos favoritos de desacelerar depois do trabalho.",
      en: "One of my favorite ways to slow down after work.",
    },
  },
  {
    icon: "dog",
    title: { pt: "Tenho um chihuahua", en: "I have a chihuahua" },
    text: {
      pt: "O Jake. Pequeno de tamanho, gigante de personalidade.",
      en: "Jake. Small in size, huge in personality.",
    },
  },
  {
    icon: "boardgame",
    title: { pt: "Coleciono jogos de tabuleiro", en: "Board game collector" },
    text: {
      pt: "Uma coleção que monto com meu marido, jogo por jogo.",
      en: "A collection I've been building with my husband, game by game.",
    },
  },
  {
    icon: "yoga",
    title: { pt: "Faço aula de yoga", en: "I practice yoga" },
    text: {
      pt: "Um tempo só meu para respirar e desligar o piloto automático.",
      en: "Time just for me, to breathe and switch off autopilot.",
    },
  },
];

// Conteúdo da página /about (seção 2 expandida)
export const aboutPage = {
  body: [
    {
      pt: "Comecei a desenhar interfaces em 2015 e me apaixonei pelos problemas por trás delas. Nunca mais parei: passei por fintechs, logística, saúde e telecom, sempre buscando o ponto onde negócio, tecnologia e pessoas se encontram.",
      en: "I started designing interfaces in 2015 and fell in love with the problems behind them. I never stopped: I've worked across fintech, logistics, healthcare, and telecom, always chasing the point where business, technology, and people meet.",
    },
    {
      pt: "Hoje, como Staff Product Designer na Pump, meu trabalho é tanto desenhar quanto elevar o nível de design ao meu redor: mentorando, criando sistemas e trazendo para fluxos internos e complexos o mesmo rigor de craft que qualquer produto de consumidor final merece.",
      en: "Today, as a Staff Product Designer at Pump, my work is as much about designing as it is about raising the design bar around me: mentoring, building systems, and bringing the same craft rigor any consumer-facing product deserves to complex, internal workflows.",
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
      period: { pt: "Fev 2026 – hoje", en: "Feb 2026 – today" },
      role: "Staff Product Designer",
      place: "Pump",
    },
    {
      period: { pt: "Jan 2024 – Jan 2026", en: "Jan 2024 – Jan 2026" },
      role: "Specialist Product Designer",
      place: "StarkBank",
    },
    {
      period: { pt: "Jul 2023 – Dez 2023", en: "Jul 2023 – Dec 2023" },
      role: "Senior Product Designer",
      place: "Nomad",
    },
    {
      period: { pt: "Mar 2022 – Set 2022", en: "Mar 2022 – Sep 2022" },
      role: "Product Design Consultant",
      place: "Decisiv",
    },
    {
      period: { pt: "Jan 2021 – Mar 2022", en: "Jan 2021 – Mar 2022" },
      role: "Senior Product Designer, LATAM",
      place: "iFood",
    },
    {
      period: { pt: "Jul 2020 – Jan 2021", en: "Jul 2020 – Jan 2021" },
      role: "Product Designer",
      place: "RD Saúde",
    },
    {
      period: { pt: "Set 2018 – Jul 2020", en: "Sep 2018 – Jul 2020" },
      role: "Product Designer",
      place: "Claro",
    },
    {
      period: { pt: "Ago 2017 – Set 2018", en: "Aug 2017 – Sep 2018" },
      role: "Product Designer",
      place: "Accenture",
    },
  ] as { period: L; role: string; place: string }[],
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
    slug: "kypcar",
    title: {
      pt: "Kypcar: um app de compartilhamento de carros do zero",
      en: "Kypcar: a car-sharing app from scratch",
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
      pt: "Um app de compartilhamento de carros peer-to-peer para São Paulo — 'Mobilidade Reinventada' — desenhado do zero como freelance, do onboarding à reserva.",
      en: "A peer-to-peer car-sharing app for São Paulo — 'Reinvented Mobility' — designed from scratch as a freelance project, from onboarding to booking.",
    },
    overview: {
      pt: "A Kypcar é uma plataforma de compartilhamento de carros peer-to-peer em São Paulo: donos de carro alugam o veículo parado para outras pessoas, e quem aluga economiza até 40% frente às locadoras tradicionais. Fui contratada como freelance para desenhar o produto inteiro do zero, sozinha, do primeiro rascunho de fluxo até a tela final.",
      en: "Kypcar is a peer-to-peer car-sharing platform in São Paulo: car owners rent out their idle vehicle to other people, and renters save up to 40% versus traditional rental agencies. I was brought on as a freelancer to design the entire product from scratch, solo, from the first flow sketch to the final screen.",
    },
    marketAnalysis: {
      intro: {
        pt: "Antes de desenhar a primeira tela, mapeei o cenário competitivo: como locadoras tradicionais, locadoras digitais e marketplaces peer-to-peer resolvem — ou não — o mesmo problema de mobilidade.",
        en: "Before designing the first screen, I mapped the competitive landscape: how traditional rental agencies, digital-first rental agencies, and peer-to-peer marketplaces each solve — or don't solve — the same mobility problem.",
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
            pt: "Marketplace peer-to-peer com hardware conectado: o carro destrava pelo app, sem encontro para troca de chaves — reserva instantânea, sem aprovação do dono.",
            en: "Peer-to-peer marketplace with connected hardware: the car unlocks through the app, no key-handoff meetup — instant booking, no owner approval.",
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
        pt: "Localiza e Movida têm escala, mas dependem de frota própria e presença física; a Turbi digitalizou a experiência de alugar, mas manteve o mesmo modelo de frota. Do outro lado, Turo e Getaround provaram o peer-to-peer em outros mercados — cada uma resolvendo a fricção de um jeito (a Turo com seguro e reputação, a Getaround com hardware que elimina a troca de chaves). O modelo simplesmente não tinha equivalente validado no Brasil. Essa lacuna virou a base de várias decisões de produto: se ninguém aqui tinha resolvido confiança num marketplace peer-to-peer, isso precisava ser o centro da experiência, não um detalhe nos termos de uso.",
        en: "Localiza and Movida have scale, but depend on owned fleets and physical presence; Turbi digitized the rental experience but kept the same fleet model. On the other side, Turo and Getaround proved peer-to-peer in other markets — each solving the friction differently (Turo with insurance and reputation, Getaround with hardware that eliminates the key handoff). The model simply had no proven equivalent in Brazil. That gap grounded several product decisions: if nobody here had solved trust in a peer-to-peer marketplace yet, it had to be the center of the experience, not a detail buried in the terms of service.",
      },
    },
    uxAnalysis: {
      intro: {
        pt: "Depois do mercado, mergulhei na experiência: como apps consolidados desenham o contato entre duas pessoas que não se conhecem? Analisei interface e fluxo de produtos onde a transação depende desse encontro — e o que cada um resolve bem virou repertório para o Kypcar.",
        en: "After the market, I dug into the experience: how do established apps design the contact between two strangers? I analyzed the interface and flows of products where the transaction depends on that encounter — and what each one solves well became repertoire for Kypcar.",
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
            pt: "Identidade visível dos dois lados — avatar, nome e nota do anfitrião sempre à mão — e contato sem sair do app, sem depender de telefone ou WhatsApp.",
            en: "Visible identity on both sides — the host's avatar, name, and rating always at hand — and contact without leaving the app, no phone number or WhatsApp needed.",
          },
        },
        {
          name: "DogHero",
          pattern: {
            pt: "Resolve a ansiedade de quem entrega algo precioso a um estranho: perfis com histórico concreto — anfitrião desde quando, quantas hospedagens, tempo de resposta — e verificação visível antes de qualquer conversa.",
            en: "Solves the anxiety of handing something precious to a stranger: profiles with a concrete track record — hosting since when, how many stays, response time — and visible verification before any conversation.",
          },
          takeaway: {
            pt: "O lastro numérico da confiança: 'anfitrião desde 2023 · 128 viagens', tempo de resposta e o selo de identidade verificada no perfil — números que falam pelo anfitrião antes dele dizer qualquer coisa.",
            en: "The numeric ballast of trust: 'host since 2023 · 128 trips', reply time, and the verified-identity badge on the profile — numbers that speak for the host before they say a word.",
          },
        },
      ],
      insight: {
        pt: "O padrão comum entre eles: a interface não pede confiança, ela mostra evidência — identidade, reputação e regras visíveis no momento certo. No Kypcar, juntei os três repertórios: o anúncio do Airbnb, o encontro do Uber e o histórico do DogHero.",
        en: "The common thread: the interface doesn't ask for trust, it shows evidence — identity, reputation, and rules visible at the right moment. In Kypcar, I combined all three repertoires: Airbnb's listing, Uber's encounter, and DogHero's track record.",
      },
    },
    challenge: {
      pt: "Um marketplace peer-to-peer tem duas pontas para convencer ao mesmo tempo: quem procura um carro precisa confiar no anfitrião e no processo antes de pagar por dias que ainda não aconteceram; quem oferece o carro precisa sentir que a plataforma protege o patrimônio dele. A resposta da Kypcar passa por verificação de identidade com IA (reconhecimento facial e validação de CNH), seguro completo incluso e limpeza profissional entre locações — tudo isso precisava ficar visível e claro na experiência, não só existir nos termos de uso.\n\nCom uma pessoa só no design e um prazo de freelance, o produto também precisava nascer completo: onboarding, busca, filtros, perfil do anfitrião, agenda, checkout, pós-reserva e chat — não dava para lançar com metade do fluxo.",
      en: "A peer-to-peer marketplace has two sides to convince at once: the person looking for a car needs to trust the host and the process before paying for days that haven't happened yet; the person offering the car needs to feel the platform protects their asset. Kypcar's answer runs through AI-powered identity verification (facial recognition and driver's license validation), full insurance included, and professional cleaning between rentals — all of it needed to be visible and clear in the experience, not just sitting in the terms of service.\n\nWith one person on design and a freelance timeline, the product also had to launch whole: onboarding, search, filters, host profile, scheduling, checkout, post-booking and chat — there was no shipping with half the flow.",
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
        pt: "Prototipei o fluxo inteiro navegável — não telas soltas — para validar a experiência de ponta a ponta antes de qualquer linha de código de produção.",
        en: "Prototyped the entire flow as a navigable product — not standalone screens — to validate the end-to-end experience before any production code was written.",
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
          pt: "Num marketplace P2P, retirada e devolução se combinam no chat. Por isso a conversa carrega o contexto da reserva — carro, datas e endereço fixados no topo — e fica a um toque de qualquer ponto do fluxo.",
          en: "In a P2P marketplace, pickup and return get arranged in chat. So the conversation carries the booking context — car, dates, and address pinned at the top — and sits one tap away from anywhere in the flow.",
        },
      },
    ],
    closing: {
      pt: "Entrei antes da primeira tela existir e saí com um produto navegável de ponta a ponta — prova de que um app de marketplace inteiro pode nascer do trabalho de uma pessoa só, quando o fluxo é desenhado com cuidado desde o início.",
      en: "I came in before the first screen existed and left with an end-to-end navigable product — proof that a whole marketplace app can be born from one person's work, when the flow is designed with care from the very start.",
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
