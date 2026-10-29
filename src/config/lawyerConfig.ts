/**
 * Configurações Centrais do Perfil Profissional
 * Edite os dados abaixo para atualizar facilmente informações em toda a landing page.
 */

export const lawyerConfig = {
  name: "Dr. Ricardo Silva",
  title: "Advogado & Consultor Jurídico Estratégico",
  oab: "OAB/SP 412.890",
  experienceYears: "14+",
  headline: "Defesa jurídica estratégica e resolutiva para empresas e patrimônios.",
  subheadline:
    "Atendimento consultivo e contencioso de alto padrão. Protegemos seus interesses com agilidade, discrição e estratégia personalizada.",
  
  // Contatos reais e formatados (substitua pelo número e e-mail definitivos se desejar)
  phoneDisplay: "(11) 98765-4321",
  phoneRaw: "5511987654321", // Apenas dígitos para o link do WhatsApp
  email: "contato@drricardosilva.adv.br",
  address: "Av. Paulista, 1800, Conj. 1402 — Bela Vista, São Paulo/SP",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Paulista,+1800,+São+Paulo",
  hours: "Segunda a Sexta, das 09h às 18h30 (Plantão para urgências)",
  responseTime: "Resposta média em até 2 horas úteis",

  // Prova quantitativa e pilares de atuação
  kpis: [
    { value: "R$ 48M+", label: "Patrimônio e contratos blindados sob gestão estratégica" },
    { value: "14 Anos", label: "De dedicação ao contencioso de alta complexidade" },
    { value: "98.4%", label: "Índice de resoluções favoráveis e acordos vantajosos" },
    { value: "Direto", label: "Atendimento pessoal com o Dr. Ricardo, sem estagiários" },
  ],

  // Formação e Credenciais
  credentials: [
    {
      institution: "Faculdade de Direito da USP (Largo de São Francisco)",
      degree: "Bacharelado em Direito",
      year: "2010",
    },
    {
      institution: "Fundação Getulio Vargas (FGV Direito SP)",
      degree: "Especialização em Direito Societário e Contratos Empresariais",
      year: "2014",
    },
    {
      institution: "Instituto Brasileiro de Direito Processual (IBDP)",
      degree: "Pós-graduação em Processo Civil e Meios Adequados de Resolução de Litígios",
      year: "2018",
    },
  ],

  // Links de navegação para a Top Bar (4 seções principais e enxutas)
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#atuacao" },
    { label: "Sobre o Dr. Ricardo", href: "#sobre" },
    { label: "Atendimento & Contato", href: "#contato" },
  ],

  // Redes e presença profissional
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    jusbrasil: "https://jusbrasil.com.br",
  },
};

export const practiceAreas = [
  {
    id: "empresarial",
    number: "01",
    title: "Direito Empresarial & Blindagem Contratual",
    summary:
      "Mitigação antecipada de passivos, estruturação de contratos de alta complexidade, acordos de sócios e proteção de ativos corporativos.",
    problemsSolved: [
      "Contratos frágeis gerando inadimplência ou riscos de litígio",
      "Conflitos entre sócios ou dissolução parcial de sociedade",
      "Necessidade de auditoria jurídica (Due Diligence) para investimentos e fusões",
      "Reestruturação de débitos e negociações com credores estratégicos",
    ],
    highlight: "Prevenção ativa: cada cláusula é estruturada para blindar o fluxo de caixa.",
  },
  {
    id: "civel-estrategico",
    number: "02",
    title: "Contencioso Cível Estratégico & Cobrança de Alto Valor",
    summary:
      "Atuação contundente em disputas judiciais de expressivo impacto financeiro, execuções de títulos e recuperação célere de haveres.",
    problemsSolved: [
      "Cobrança e execução de títulos extrajudiciais de grandes quantias",
      "Ações indenizatórias complexas e responsabilidade civil",
      "Desconstituição de penhoras indevidas e defesas patrimoniais urgentes",
      "Descumprimento contratual grave com pedido de tutelas de urgência",
    ],
    highlight: "Medidas liminares e rastreamento avançado de ativos.",
  },
  {
    id: "patrimonial-sucessorio",
    number: "03",
    title: "Planejamento Sucessório & Holding Familiar",
    summary:
      "Preservação do patrimônio familiar conquistado ao longo de gerações, redução legítima de carga tributária (ITCMD) e pacificação sucessória.",
    problemsSolved: [
      "Risco de inventários morosos que depreciam o patrimônio da família",
      "Tributação excessiva na transferência de imóveis e bens",
      "Proteção de patrimônio pessoal em face de riscos operacionais dos negócios",
      "Testamentos, doações com reserva de usufruto e governança familiar",
    ],
    highlight: "Segurança jurídica entre gerações sem desgaste emocional.",
  },
  {
    id: "imobiliario",
    number: "04",
    title: "Direito Imobiliário & Transações Seguras",
    summary:
      "Segurança jurídica em compra, venda, locações comerciais de alto padrão, incorporações e regularizações fundiárias.",
    problemsSolved: [
      "Insegurança documental na aquisição de terrenos e imóveis comerciais",
      "Atraso em entrega de obras, distratos e cobranças abusivas",
      "Ações renovatórias e revisionais de aluguel empresarial",
      "Usucapião judicial/extrajudicial e regularização de matrículas",
    ],
    highlight: "Análise minuciosa de certidões e histórico registral.",
  },
];

export const faqItems = [
  {
    question: "Como funciona a consulta jurídica inicial com o Dr. Ricardo Silva?",
    answer:
      "A consulta inicial é um atendimento aprofundado com duração média de 60 minutos, realizado presencialmente em nosso escritório na Av. Paulista ou via videoconferência segura (Google Meet/Teams). Nela, analisamos documentos, avaliamos os riscos reais do cenário e entregamos um plano de ação objetivo com viabilidade jurídica, sem promessas vazias.",
  },
  {
    question: "O atendimento pode ser feito 100% online se eu estiver em outra cidade/estado?",
    answer:
      "Sim. Atuamos com processo eletrônico em todo o território nacional e atendemos clientes no Brasil e no exterior. A videoconferência possui a mesma eficácia da reunião presencial, com envio seguro de documentos criptografados e assinatura digital com validade jurídica plena.",
  },
  {
    question: "Como são definidos os honorários advocatícios?",
    answer:
      "Trabalhamos com total clareza e previsibilidade de custos, rigorosamente pautados pelo Código de Ética e Disciplina da OAB. Dependendo da natureza do caso, o modelo pode ser por honorários contratuais fixos, honorários de êxito (ad exitum) ou modelos híbridos, sempre formalizados em contrato de prestação de serviços transparente.",
  },
  {
    question: "Estou com um prazo judicial correndo ou fui citado. Qual o tempo de resposta?",
    answer:
      "Casos com prazos processuais em curso recebem prioridade máxima. Nosso canal direto no WhatsApp possui triagem de urgência para contato no mesmo dia útil e intervenção processual rápida antes de qualquer preclusão de direitos.",
  },
  {
    question: "Minhas informações e documentos estão protegidos por sigilo?",
    answer:
      "Absolutamente. A inviolabilidade do sigilo profissional entre advogado e cliente é resguardada por lei federal (Estatuto da OAB - Lei 8.906/94) e pela LGPD. Suas informações não são compartilhadas com terceiros em hipótese alguma.",
  },
];
