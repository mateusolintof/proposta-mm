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
