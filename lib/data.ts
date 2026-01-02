// Dados consolidados de docs/dados_internos.md, docs/benchmarks_report.md, docs/proposta-valor.md

// Meta Ads - Campanhas de Audiencia (Jul-Dez/2025)
export const audienciaTotal = {
  periodo: "Jul-Dez/2025",
  gastoTotal: 8830.15,
  alcance: 598167,
  impressoes: 773248,
  cliquesLink: 25785,
  ctrLink: 3.33,
  cpcLink: 0.34,
  cpmCalculado: 11.42,
  visitasPerfil: 26339,
  custoPorVisita: 0.34,
  visitasPor1000Imp: 34.06,
};

export const audienciaMensal = [
  { mes: "Jul", gasto: 1490.63, alcance: 91085, impressoes: 129566, cliques: 3505, ctr: 2.71, cpc: 0.43, visitasPerfil: 3696, custoVisita: 0.40, visitasPor1000: 28.53 },
  { mes: "Ago", gasto: 1429.53, alcance: 103317, impressoes: 126415, cliques: 5246, ctr: 4.15, cpc: 0.27, visitasPerfil: 5373, custoVisita: 0.27, visitasPor1000: 42.50 },
  { mes: "Set", gasto: 1342.01, alcance: 85123, impressoes: 101559, cliques: 3311, ctr: 3.26, cpc: 0.41, visitasPerfil: 3188, custoVisita: 0.42, visitasPor1000: 31.39 },
  { mes: "Out", gasto: 1739.58, alcance: 136130, impressoes: 188387, cliques: 5403, ctr: 2.87, cpc: 0.32, visitasPerfil: 5533, custoVisita: 0.31, visitasPor1000: 29.37 },
  { mes: "Nov", gasto: 1590.30, alcance: 94768, impressoes: 111558, cliques: 3314, ctr: 2.97, cpc: 0.48, visitasPerfil: 3405, custoVisita: 0.47, visitasPor1000: 30.52 },
  { mes: "Dez", gasto: 1238.10, alcance: 87744, impressoes: 115763, cliques: 5006, ctr: 4.32, cpc: 0.25, visitasPerfil: 5144, custoVisita: 0.24, visitasPor1000: 44.44 },
];

export const audienciaComparativo = {
  julSet: { ctr: 3.37, cpc: 0.35, cpm: 11.92, cliques: 12062, impressoes: 357540, visitasPerfil: 12257, custoVisita: 0.35, visitasPor1000: 34.28 },
  outDez: { ctr: 3.30, cpc: 0.33, cpm: 10.99, cliques: 13723, impressoes: 415708, visitasPerfil: 14082, custoVisita: 0.32, visitasPor1000: 33.87 },
};

// Meta Ads - Campanhas de Mensagem/WhatsApp (Ago-Dez/2025)
export const mensagensTotal = {
  periodo: "Ago-Dez/2025",
  gastoTotal: 9252.42,
  impressoes: 251989,
  alcance: 116302,
  cliquesLink: 2266,
  conversasIniciadas: 494,
  ctrLink: 0.90,
  cpcLink: 4.08,
  custoPorConversa: 18.73,
  conversasPorClique: 21.80,
};

export const mensagensMensal = [
  { mes: "Ago", gasto: 1634.23, alcance: 13212, impressoes: 28723, cliques: 219, conversas: 58, ctr: 0.76, cpc: 7.46, custoConversa: 28.18, convPorClique: 26.48 },
  { mes: "Set", gasto: 2316.99, alcance: 30185, impressoes: 66079, cliques: 518, conversas: 115, ctr: 0.78, cpc: 4.47, custoConversa: 20.15, convPorClique: 22.20 },
  { mes: "Out", gasto: 2105.15, alcance: 30384, impressoes: 60384, cliques: 298, conversas: 75, ctr: 0.49, cpc: 7.06, custoConversa: 28.07, convPorClique: 25.17 },
  { mes: "Nov", gasto: 1773.88, alcance: 19796, impressoes: 41538, cliques: 365, conversas: 73, ctr: 0.88, cpc: 4.86, custoConversa: 24.30, convPorClique: 20.00 },
  { mes: "Dez", gasto: 1422.17, alcance: 22725, impressoes: 55265, cliques: 866, conversas: 173, ctr: 1.57, cpc: 1.64, custoConversa: 8.22, convPorClique: 19.98 },
];

export const mensagensComparativo = {
  agoOut: { ctr: 0.67, cpc: 5.85, custoConversa: 24.42, conversas: 248 },
  novDez: { ctr: 1.27, cpc: 2.60, custoConversa: 12.99, conversas: 246 },
};

// Instagram Organico - Feed (Jul-Dez/2025)
export const organicoTotal = {
  periodo: "Jul-Dez/2025",
  posts: 208,
  visualizacoes: 4659382,
  alcance: 850048,
  curtidas: 23172,
  comentarios: 2643,
  compartilhamentos: 2033,
  salvamentos: 2480,
  seguimentos: 1672,
};

export const organicoMensal = [
  { mes: "Jul", posts: 33, visualizacoes: 824092, alcance: 123009, curtidas: 3919, comentarios: 517, compartilhamentos: 349, salvamentos: 263, seguimentos: 101 },
  { mes: "Ago", posts: 25, visualizacoes: 686603, alcance: 112548, curtidas: 2225, comentarios: 253, compartilhamentos: 226, salvamentos: 316, seguimentos: 86 },
  { mes: "Set", posts: 25, visualizacoes: 1179887, alcance: 147910, curtidas: 3394, comentarios: 388, compartilhamentos: 342, salvamentos: 484, seguimentos: 172 },
  { mes: "Out", posts: 31, visualizacoes: 675123, alcance: 128171, curtidas: 2816, comentarios: 242, compartilhamentos: 294, salvamentos: 371, seguimentos: 355 },
  { mes: "Nov", posts: 41, visualizacoes: 553293, alcance: 161244, curtidas: 3063, comentarios: 359, compartilhamentos: 360, salvamentos: 419, seguimentos: 404 },
  { mes: "Dez", posts: 53, visualizacoes: 740384, alcance: 177166, curtidas: 7755, comentarios: 884, compartilhamentos: 462, salvamentos: 627, seguimentos: 554 },
];

export const organicoComparativo = {
  julSet: { alcance: 383467, visualizacoes: 2690582, seguimentos: 359, posts: 83 },
  outDez: { alcance: 466581, visualizacoes: 1968800, seguimentos: 1313, posts: 125 },
};

// Benchmarks de mercado (Fashion/Beauty como proxy para joias)
export const benchmarks = {
  ctr: { min: 0.7, max: 1.2, label: "CTR Fashion/Beauty" },
  cpc: { min: 2.17, max: 6.51, label: "CPC Fashion/Beauty (R$)" },
  custoConversa: { min: 8.14, max: 32.55, label: "Custo/Conversa (R$)" },
  cpm: { valor: 18.77, label: "CPM Brasil (R$)" },
};

// Benchmarks com fontes citadas (para transparencia)
export const benchmarksComFontes = {
  ctr: {
    min: 0.7,
    max: 1.2,
    fonte: "Superads Fashion/Beauty 2025",
    referencia: "L887-L891"
  },
  cpc: {
    min: 2.17,
    max: 6.51,
    fonte: "Superads Fashion/Beauty 2025",
    nota: "USD convertido (1 USD = 5,42 BRL)",
    referencia: "L887-L891"
  },
  custoConversa: {
    min: 8.14,
    max: 32.55,
    fonte: "Superads Click-to-Message 2025",
    referencia: "L736-L741"
  },
  cpm: {
    valor: 18.77,
    fonte: "Superads Brasil All Industries 2025",
    referencia: "L49-L53"
  }
};

// Evolucao mensal consolidada (custo por resultado)
export const evolucaoMensal = [
  { mes: "Jul", custoVisita: 0.40, custoConversa: null, visitasPerfil: 3696, conversas: 0 },
  { mes: "Ago", custoVisita: 0.27, custoConversa: 28.18, visitasPerfil: 5373, conversas: 58 },
  { mes: "Set", custoVisita: 0.42, custoConversa: 20.15, visitasPerfil: 3188, conversas: 115 },
  { mes: "Out", custoVisita: 0.31, custoConversa: 28.07, visitasPerfil: 5533, conversas: 75 },
  { mes: "Nov", custoVisita: 0.47, custoConversa: 24.30, visitasPerfil: 3405, conversas: 73 },
  { mes: "Dez", custoVisita: 0.24, custoConversa: 8.22, visitasPerfil: 5144, conversas: 173 },
];

// Top criativos de audiencia - dados completos extraidos de meta-audiencia-mensal.xlsx
// Total: 42 criativos unicos analisados (Jul-Dez/2025)
export const criativosAudiencia = [
  {
    id: "reels-layla-ago",
    nome: "Reels Layla Monteiro",
    campanha: "Nova Colecao",
    mes: "Ago",
    tipo: "reel",
    ctr: 7.45,
    cpc: 0.09,
    visitasPerfil: 2361,
    investido: 222.41,
    destaque: "Melhor CTR",
    influenciador: "Layla Monteiro",
  },
  {
    id: "video-post-nov28",
    nome: "Video Post 28/11",
    campanha: "AURA",
    mes: "Nov",
    tipo: "video",
    ctr: 6.52,
    cpc: 0.21,
    visitasPerfil: 237,
    investido: 51.00,
    destaque: null,
    influenciador: null,
  },
  {
    id: "video-post-dez04",
    nome: "Video Post 04/12",
    campanha: "AURA",
    mes: "Dez",
    tipo: "video",
    ctr: 6.24,
    cpc: 0.18,
    visitasPerfil: 1802,
    investido: 320.35,
    destaque: "Alta conversao",
    influenciador: "Isadora",
  },
  {
    id: "video-post-nov12",
    nome: "Video Post 12/11",
    campanha: "AURA",
    mes: "Nov",
    tipo: "video",
    ctr: 5.92,
    cpc: 0.41,
    visitasPerfil: 160,
    investido: 60.00,
    destaque: null,
    influenciador: null,
  },
  {
    id: "reels-isadora-set",
    nome: "Reels Isadora",
    campanha: "New Collection",
    mes: "Set",
    tipo: "reel",
    ctr: 5.28,
    cpc: 0.27,
    visitasPerfil: 441,
    investido: 118.24,
    destaque: null,
    influenciador: "Isadora",
  },
  {
    id: "reels-primavera-ago",
    nome: "Reels Colecao Primavera",
    campanha: "Primavera",
    mes: "Ago",
    tipo: "reel",
    ctr: 5.10,
    cpc: 0.36,
    visitasPerfil: 663,
    investido: 222.41,
    destaque: null,
    influenciador: "Layla Monteiro",
  },
  {
    id: "video-post-nov21",
    nome: "Video Post 21/11",
    campanha: "AURA",
    mes: "Nov",
    tipo: "video",
    ctr: 4.86,
    cpc: 0.35,
    visitasPerfil: 654,
    investido: 228.00,
    destaque: null,
    influenciador: null,
  },
  {
    id: "post-reels-out04",
    nome: "Post Reels 04/10",
    campanha: "MM Diamonds",
    mes: "Out",
    tipo: "reel",
    ctr: 4.68,
    cpc: 0.20,
    visitasPerfil: 2034,
    investido: 410.00,
    destaque: "Maior volume",
    influenciador: null,
  },
  {
    id: "video-post-nov26",
    nome: "Video Post 26/11",
    campanha: "AURA",
    mes: "Nov",
    tipo: "video",
    ctr: 4.53,
    cpc: 0.29,
    visitasPerfil: 1378,
    investido: 379.12,
    destaque: null,
    influenciador: "Thassia",
  },
  {
    id: "reels-thassia-dez",
    nome: "Reels Thassia AURA",
    campanha: "Colecao AURA",
    mes: "Dez",
    tipo: "reel",
    ctr: 4.44,
    cpc: 0.33,
    visitasPerfil: 1306,
    investido: 379.12,
    destaque: null,
    influenciador: "Thassia",
  },
];

// Top criativos de mensagens - dados completos extraidos de meta-mensagens-mensal.xlsx
// Total: 32 criativos unicos analisados (Ago-Dez/2025)
export const criativosMensagens = [
  {
    id: "carrossel-origem-stories",
    nome: "Carrossel Origem (stories)",
    campanha: "Colecao Origem",
    mes: "Dez",
    tipo: "carrossel",
    ctr: 1.32,
    custoConversa: 3.14,
    conversas: 3,
    investido: 9.42,
    destaque: "Melhor custo",
    colecao: "Origem",
  },
  {
    id: "video-aura-1",
    nome: "Video Colecao AURA",
    campanha: "Colecao AURA",
    mes: "Dez",
    tipo: "video",
    ctr: 2.08,
    custoConversa: 3.38,
    conversas: 10,
    investido: 33.80,
    destaque: "Melhor CTR",
    colecao: "AURA",
  },
  {
    id: "video-aura-2",
    nome: "Video Colecao AURA [2]",
    campanha: "Colecao AURA",
    mes: "Dez",
    tipo: "video",
    ctr: 1.89,
    custoConversa: 4.66,
    conversas: 27,
    investido: 125.82,
    destaque: null,
    colecao: "AURA",
  },
  {
    id: "video-diamonds-especial",
    nome: "Video MM Diamonds Especial",
    campanha: "MM Diamonds",
    mes: "Dez",
    tipo: "video",
    ctr: 0.74,
    custoConversa: 4.73,
    conversas: 3,
    investido: 14.19,
    destaque: null,
    colecao: "Diamonds",
  },
  {
    id: "carrossel-aura",
    nome: "Carrossel Colecao AURA",
    campanha: "Colecao AURA",
    mes: "Dez",
    tipo: "carrossel",
    ctr: 1.48,
    custoConversa: 7.45,
    conversas: 86,
    investido: 640.70,
    destaque: "Mais conversas",
    colecao: "AURA",
  },
  {
    id: "video-aura-3",
    nome: "Video Colecao AURA [3]",
    campanha: "Colecao AURA",
    mes: "Dez",
    tipo: "video",
    ctr: 1.55,
    custoConversa: 10.25,
    conversas: 29,
    investido: 297.25,
    destaque: null,
    colecao: "AURA",
  },
  {
    id: "carrossel-new-collection",
    nome: "Carrossel New Collection",
    campanha: "Remarketing",
    mes: "Nov",
    tipo: "carrossel",
    ctr: 1.36,
    custoConversa: 12.68,
    conversas: 34,
    investido: 431.12,
    destaque: null,
    colecao: "Mix",
  },
  {
    id: "reels-isadora-msg",
    nome: "Post Reels Isadora",
    campanha: "Influenciador",
    mes: "Set",
    tipo: "reel",
    ctr: 2.01,
    custoConversa: 14.20,
    conversas: 20,
    investido: 284.00,
    destaque: null,
    colecao: "Isadora",
  },
  {
    id: "carrossel-diamonds",
    nome: "Carrossel MM Diamond",
    campanha: "MM Diamonds",
    mes: "Set",
    tipo: "carrossel",
    ctr: 1.39,
    custoConversa: 14.70,
    conversas: 23,
    investido: 338.10,
    destaque: null,
    colecao: "Diamonds",
  },
  {
    id: "reels-evento-aurora",
    nome: "Post Reels Evento Aurora",
    campanha: "Evento",
    mes: "Set",
    tipo: "reel",
    ctr: 0.94,
    custoConversa: 15.28,
    conversas: 25,
    investido: 382.00,
    destaque: null,
    colecao: "Aurora",
  },
];

// Performance por regiao (Dezembro 2025 como referencia)
export const regioes = [
  {
    uf: "SP",
    estado: "Sao Paulo",
    ctr: 5.64,
    cpc: 0.28,
    impressoes: 41913,
    cliques: 2364,
    status: "top" as const,
  },
  {
    uf: "SC",
    estado: "Santa Catarina",
    ctr: 5.24,
    cpc: 0.27,
    impressoes: 8988,
    cliques: 471,
    status: "top" as const,
  },
  {
    uf: "PR",
    estado: "Parana",
    ctr: 5.14,
    cpc: 0.27,
    impressoes: 11811,
    cliques: 607,
    status: "top" as const,
  },
  {
    uf: "GO",
    estado: "Goias",
    ctr: 2.30,
    cpc: 0.57,
    impressoes: 96112,
    cliques: 2211,
    status: "baseline" as const,
  },
];

// Proposta de valores
export const proposta = {
  mensal: 1500.00,
  trimestral: 3900.00,
  semestral: 6000.00,
  contato: {
    whatsapp: "(62) 99862-1000",
    email: "mateusolintof@gmail.com",
  },
};

// Insights pre-calculados
export const insights = {
  audiencia: [
    "CTR medio de 3,33% - muito acima do benchmark de 0,7%-1,2% do setor",
    "CPC de R$ 0,34 - significativamente abaixo do benchmark de R$ 2,17-6,51",
    "Custo por visita ao perfil de R$ 0,34 com pico de eficiencia em Dez (R$ 0,24)",
    "Aumento de 14,9% nas visitas ao perfil no 2o trimestre",
  ],
  mensagens: [
    "Custo por conversa caiu 47% (de R$ 24,42 para R$ 12,99)",
    "CTR dobrou no final do periodo (0,67% para 1,27%)",
    "494 conversas iniciadas no WhatsApp em 5 meses",
    "Dezembro teve o melhor custo por conversa: R$ 8,22",
  ],
  organico: [
    "Seguimentos cresceram 266% (359 para 1.313) no 2o trimestre",
    "208 posts publicados no periodo",
    "Dezembro teve o maior engajamento: 7.755 curtidas",
    "Alcance total de 850 mil contas",
  ],
};

// Padroes identificados na analise de 74 criativos (42 audiencia + 32 mensagens)
export const padroesIdentificados = {
  formato: {
    titulo: "Formato",
    descricao: "Reels e videos dominam os top performers",
    dados: {
      audiencia: "8 de 10 top criativos sao Reels/Videos",
      mensagens: "Videos AURA tem custo/conversa 50% menor que media",
      ctrMedioReels: 5.5,
      ctrMedioCarrossel: 3.2,
    },
    recomendacao: "Priorizar formato video/reels para ambas campanhas",
  },
  colecao: {
    titulo: "Colecao",
    descricao: "AURA Viva lidera em eficiencia de conversao",
    dados: {
      melhorAudiencia: "AURA - 5 criativos no top 10",
      melhorMensagens: "AURA - custo/conversa de R$3-10",
      segundaMelhor: "Origem - R$3,14/conversa em stories",
      volume: "MM Diamonds - bom para awareness",
    },
    recomendacao: "Manter AURA como principal, Origem para stories",
  },
  influenciador: {
    titulo: "Influenciadores",
    descricao: "Layla Monteiro e Isadora com resultados excepcionais",
    dados: {
      layla: { ctr: 7.45, cpc: 0.09, campanhas: 2 },
      isadora: { ctr: 5.28, cpc: 0.27, campanhas: 4 },
      thassia: { ctr: 4.5, cpc: 0.31, campanhas: 3 },
    },
    recomendacao: "Renovar parceria Layla, expandir com Isadora",
  },
  timing: {
    titulo: "Timing",
    descricao: "Nov/Dez com pico de eficiencia",
    dados: {
      melhorMes: "Dezembro",
      custoConversaDez: 8.22,
      custoConversaMedia: 18.73,
      reducao: "56% menor que media do periodo",
    },
    recomendacao: "Aumentar investimento em Nov/Dez para 2026",
  },
};

// Insights consolidados para apresentacao
export const insightsConsolidados = {
  oQueFuncionou: [
    {
      titulo: "Reels com influenciadoras",
      metrica: "CTR 7,45%",
      contexto: "vs benchmark 0,7-1,2%",
      impacto: "6x acima do mercado",
    },
    {
      titulo: "Colecao AURA em videos",
      metrica: "R$ 3,38/conversa",
      contexto: "vs media R$ 18,73",
      impacto: "82% mais eficiente",
    },
    {
      titulo: "Dezembro otimizado",
      metrica: "R$ 8,22/conversa",
      contexto: "melhor mes do ano",
      impacto: "173 conversas geradas",
    },
    {
      titulo: "CPC consistente",
      metrica: "R$ 0,34",
      contexto: "vs benchmark R$ 2,17-6,51",
      impacto: "84% abaixo do mercado",
    },
  ],
  recomendacoes2026: [
    {
      area: "Criativos",
      acao: "Dobrar investimento em Reels com influenciadoras",
      justificativa: "Formato com CTR 5-7% vs 3% de carrosseis",
      prioridade: "alta" as const,
    },
    {
      area: "Colecoes",
      acao: "Lancar campanhas AURA em formato video",
      justificativa: "Melhor custo/conversa do portfolio",
      prioridade: "alta" as const,
    },
    {
      area: "Sazonalidade",
      acao: "Aumentar budget em 30% para Nov/Dez",
      justificativa: "Historico de eficiencia 56% maior",
      prioridade: "media" as const,
    },
    {
      area: "Regioes",
      acao: "Manter foco em SP, SC, PR",
      justificativa: "CTR 5%+ vs 2,3% em outras regioes",
      prioridade: "media" as const,
    },
  ],
  oportunidades: [
    {
      titulo: "Stories da colecao Origem",
      potencial: "Escalar formato com R$3,14/conversa",
      acao: "Testar com mais budget",
    },
    {
      titulo: "Mix video + carrossel AURA",
      potencial: "Carrossel gerou 86 conversas (maior volume)",
      acao: "Combinar awareness + conversao",
    },
    {
      titulo: "Novos influenciadores",
      potencial: "Layla e Isadora provaram modelo",
      acao: "Buscar 2-3 novas parcerias no mesmo perfil",
    },
  ],
};

// Estatisticas consolidadas para hero
export const estatisticasHero = {
  totalInvestido: 18082.57, // audiencia + mensagens
  visitasPerfil: 26339,
  conversasWhatsApp: 494,
  ctrMedio: 3.33,
  reducaoCusto: 47, // % de reducao no custo/conversa
  criativosAnalisados: 74,
  mesesAnalisados: 6,
};

// Helpers para formatacao
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("pt-BR").format(value);
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(2).replace(".", ",")}%`;
};
