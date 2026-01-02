# MM-Renovacao — AGENTS (Spec Tecnico)

Este arquivo define **como uma IA/agente deve construir e manter** este repositorio de forma previsivel, sem inventar dados e sem criar integracoes.

## 0) Contexto

Apresentacao **premium** em formato **pitch deck** (slides horizontais com scroll vertical) para **renovacao de contrato de trafego pago** de uma loja de joias (ticket medio ~R$ 4-5 mil), reunindo:
- **Performance (Meta Ads + Instagram organico)** dos ultimos 6 meses (Jul-Dez/2025)
- **Analise de 74 criativos** (42 audiencia + 32 mensagens)
- **Padroes identificados** e insights para 2026
- **Plano 30/60/90 dias**
- **Proposta financeira** (valores, escopo, condicoes)

**Formato:** Single Page Application com 5 slides horizontais navegaveis por swipe (mobile) ou teclado (desktop), com scroll vertical em cada slide.

**Design:** Dark Premium com acentos dourados.

## 1) Estado atual do repositorio

```
MM-Renovacao/
├── app/
│   ├── layout.tsx           # Root layout (dark theme, fonts)
│   ├── page.tsx             # SPA com navegacao de 5 slides
│   └── globals.css          # Tema dark premium + CSS variables
├── components/
│   ├── slides/              # 5 slides da apresentacao
│   │   ├── SlideContainer.tsx
│   │   ├── SlideHero.tsx
│   │   ├── SlideResultados.tsx
│   │   ├── SlideCriativos.tsx
│   │   ├── SlideInsights.tsx
│   │   └── SlideProposta.tsx
│   ├── animated/            # Componentes animados
│   │   ├── NumberTicker.tsx
│   │   ├── AnimatedKPI.tsx
│   │   └── GlowCard.tsx
│   └── navigation/          # Navegacao entre slides
│       ├── SlideNav.tsx
│       ├── ProgressBar.tsx
│       └── SlideIndicators.tsx
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useSwipe.ts
├── lib/
│   ├── data.ts              # Dados consolidados (criativos, padroes, insights)
│   └── utils.ts             # Utilities (cn, etc)
├── docs/                    # Fonte de verdade dos dados
│   ├── dados_internos.md
│   ├── benchmarks_report.md
│   └── proposta-valor.md
├── data/                    # Arquivos brutos (referencia/lastro)
│   ├── relatorio-meta-2025-07.pdf
│   ├── relatorio-meta-2025-08.pdf
│   ├── relatorio-meta-2025-09.pdf
│   ├── relatorio-meta-2025-10.pdf
│   ├── relatorio-meta-2025-11.pdf
│   ├── relatorio-meta-2025-12.pdf
│   ├── meta-audiencia-mensal.xlsx
│   ├── meta-mensagens-mensal.xlsx
│   └── instagram-organico-mensal.csv
├── public/ads/              # Imagens dos criativos
│   ├── mm-anel-01.jpg
│   ├── mm-colar-01.jpg
│   ├── mm-diamonds-01.jpg
│   ├── mm-diamonds-02.jpg
│   ├── mm-diamonds-03.jpg
│   └── mm-esmeraldas-01.jpg
└── CLAUDE.md                # Este arquivo
```

## 2) Principios (nao negociaveis)

- **Nao inventar numeros.** Usar somente dados de `lib/data.ts` (consolidados de `docs/` e `data/`).
- **Sem integracoes/API** (Meta/GA4/Google Ads) nesta fase.
- **Mobile-first**: layout e tipografia priorizam telas pequenas; desktop deve ser responsivo e confortavel.
- Texto enxuto: **1 insight por bloco**.
- Transparencia: quando algo nao e atribuicao direta (organico), declarar como **indicador secundario**.

## 3) Stack e escolhas tecnicas

| Biblioteca | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | Framework (App Router) |
| TypeScript | 5.x | Tipagem |
| Tailwind CSS | 4.x | Estilizacao |
| Framer Motion | 12.x | Animacoes e transicoes |
| @number-flow/react | 0.5.x | NumberTicker animado |
| Recharts | 3.6.0 | Graficos |
| Lucide React | 0.562.0 | Icones |
| clsx + tailwind-merge | latest | Utilities CSS |

### Dependencias (package.json)

```json
{
  "dependencies": {
    "@number-flow/react": "^0.5.10",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "recharts": "^3.6.0",
    "tailwind-merge": "^3.4.0"
  }
}
```

## 4) Fonte de verdade de dados

### 4.1 Fonte primaria (`lib/data.ts`)

Todos os dados exibidos na apresentacao vem de `lib/data.ts`, que exporta:

| Export | Descricao |
|--------|-----------|
| `estatisticasHero` | KPIs principais (investimento, visitas, conversas, CTR) |
| `evolucaoMensal` | Dados mensais para graficos (Jul-Dez/2025) |
| `benchmarks` | Comparativos de mercado (CPM, CTR, CPC) |
| `criativosAudiencia` | Top 10 criativos de audiencia |
| `criativosMensagens` | Top 10 criativos de mensagens |
| `padroesIdentificados` | Padroes extraidos da analise (formato, colecao, influenciador, timing) |
| `insightsConsolidados` | O que funcionou, recomendacoes 2026, oportunidades |
| `proposta` | Valores da proposta financeira |
| `regioes` | Performance por regiao |
| `conquistas` | Lista de resultados do periodo |

### 4.2 Fonte secundaria (arquivos brutos em `data/`)

Os arquivos em `data/` servem como referencia/lastro dos dados consolidados:

**Relatorios mensais Meta Ads (PDFs):**
| Arquivo | Periodo |
|---------|---------|
| `relatorio-meta-2025-07.pdf` | Jul/2025 |
| `relatorio-meta-2025-08.pdf` | Ago/2025 |
| `relatorio-meta-2025-09.pdf` | Set/2025 |
| `relatorio-meta-2025-10.pdf` | Out/2025 |
| `relatorio-meta-2025-11.pdf` | Nov/2025 |
| `relatorio-meta-2025-12.pdf` | Dez/2025 |

**Planilhas consolidadas:**
| Arquivo | Conteudo |
|---------|----------|
| `meta-audiencia-mensal.xlsx` | Campanhas de audiencia (Jul-Dez/2025) - 42 criativos |
| `meta-mensagens-mensal.xlsx` | Campanhas de mensagem (Ago-Dez/2025) - 32 criativos |
| `instagram-organico-mensal.csv` | Metricas organicas Instagram (Jul-Dez/2025) |

## 5) Estrutura do app (5 slides)

O app e uma **Single Page Application** com 5 slides navegaveis horizontalmente, cada um com scroll vertical:

```
/ (SPA)
├── Slide 0: Hero       → Capa minimalista (Monica Metran + periodo)
├── Slide 1: Resultados → KPIs + Evolucao mensal + Benchmarks
├── Slide 2: Criativos  → Grid visual com imagens + filtros por colecao
├── Slide 3: Insights   → Padroes + O que funcionou + Recomendacoes 2026
└── Slide 4: Proposta   → Plano 30/60/90 + Pricing cards + CTA
```

### Navegacao
- **Mobile:** Swipe horizontal (touch) entre slides + scroll vertical no conteudo
- **Desktop:** Setas do teclado (←→, Space) + clique nos indicadores + scroll vertical
- **Progress bar:** Linha dourada no topo
- **Indicadores:** Dots na lateral direita

## 6) Componentes

### 6.1 Slides (`components/slides/`)

| Componente | Descricao |
|------------|-----------|
| `SlideContainer.tsx` | Container com animacoes Framer Motion + scroll vertical |
| `SlideHero.tsx` | Abertura minimalista centralizada |
| `SlideResultados.tsx` | 4 KPIs + grafico evolucao + barras de benchmark |
| `SlideCriativos.tsx` | Grid de criativos com imagens + tabs de filtro |
| `SlideInsights.tsx` | Padroes identificados + o que funcionou + recomendacoes |
| `SlideProposta.tsx` | Roadmap 30/60/90 + pricing cards + CTAs |

### 6.2 Animados (`components/animated/`)

| Componente | Descricao |
|------------|-----------|
| `NumberTicker.tsx` | Numeros que contam de 0 ate o valor |
| `AnimatedKPI.tsx` | Card KPI com entrada animada |
| `GlowCard.tsx` | Card com efeito glow dourado |

### 6.3 Navegacao (`components/navigation/`)

| Componente | Descricao |
|------------|-----------|
| `SlideNav.tsx` | Setas prev/next (desktop) |
| `ProgressBar.tsx` | Barra dourada no topo |
| `SlideIndicators.tsx` | Dots indicadores (desktop/mobile) |

### 6.4 Hooks (`hooks/`)

| Hook | Descricao |
|------|-----------|
| `useSlideNavigation.ts` | Logica de navegacao + keyboard events |
| `useSwipe.ts` | Deteccao de swipe touch |

## 7) Design System: Dark Premium

### 7.1 Paleta de cores (CSS Variables)

```css
/* Background */
--bg-primary: #0a0a0a;       /* Preto profundo */
--bg-secondary: #141414;     /* Cards/elementos */
--bg-elevated: #1a1a1a;      /* Hover states */
--bg-card: #0f0f0f;          /* Cards */

/* Accent (Dourado) */
--gold-primary: #D4AF37;     /* Dourado principal */
--gold-light: #F4E5B2;       /* Highlights */
--gold-dark: #8B7500;        /* Bordas/detalhes */
--gold-muted: rgba(212, 175, 55, 0.1);

/* Text */
--text-primary: #FFFFFF;     /* Titulos */
--text-secondary: #A3A3A3;   /* Body */
--text-muted: #525252;       /* Labels */

/* Status */
--success: #22C55E;          /* Verde positivo */
--success-muted: #166534;    /* Verde escuro */
```

### 7.2 Tipografia

```css
/* Headlines */
font-family: 'Inter', sans-serif;
font-weight: 700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Numeros/KPIs */
font-family: 'JetBrains Mono', monospace;
font-variant-numeric: tabular-nums;
```

### 7.3 Efeitos visuais

- **Glow:** `box-shadow: 0 0 20px rgba(212, 175, 55, 0.3)`
- **Glass:** `backdrop-filter: blur(12px)` + borda sutil
- **Gradients:** Gradiente dourado em textos destacados

## 8) Navegacao

### 8.1 useSlideNavigation

```typescript
const {
  currentSlide,    // Indice atual (0-4)
  direction,       // Direcao da transicao (-1 ou 1)
  goToSlide,       // (index) => void
  goNext,          // () => void
  goPrev,          // () => void
  isFirst,         // boolean
  isLast,          // boolean
  progress,        // 0-100 (porcentagem)
} = useSlideNavigation({ totalSlides: 5 });
```

### 8.2 Keyboard shortcuts

| Tecla | Acao |
|-------|------|
| `→` ou `Space` | Proximo slide |
| `←` | Slide anterior |
| `Home` | Primeiro slide |
| `End` | Ultimo slide |

### 8.3 Touch/Swipe

- Swipe left → proximo slide
- Swipe right → slide anterior
- Threshold: 50px

## 9) Regras de calculo

- CTR = cliques / impressoes
- CPC = gasto / cliques
- Custo por visita = gasto / visitas ao perfil
- Custo por conversa = gasto / conversas iniciadas

Os valores estao pre-calculados em `lib/data.ts`.

## 10) Copy e narrativa

Tom: executivo, direto, sem hype.

- Evitar adjetivos vazios
- Sempre ligar acao → impacto
- Organico e **indicador secundario** (nao atribuicao direta)

## 11) Assets de criativos

Imagens em `public/ads/`:
- Nomear com padrao: `mm-{colecao}-{numero}.jpg`
- Dimensoes recomendadas: 400x400px (thumbnails)

## 12) DevEx: scripts e comandos

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de producao
npm run start  # Servidor de producao
npm run lint   # Linting
```

Node LTS: >= 20.x

## 13) Git

**Repositorio:** https://github.com/mateusolintof/proposta-mm.git

Commits devem ser pequenos e descritivos.

## 14) Definicao de pronto (DoD)

- [x] 5 slides implementados e navegaveis
- [x] Scroll vertical em slides com conteudo longo
- [x] Navegacao por swipe funcional em mobile
- [x] Navegacao por teclado funcional em desktop
- [x] Graficos com animacao de entrada
- [x] Transicoes suaves entre slides
- [x] Tema dark premium consistente
- [x] Dados corretos conforme lib/data.ts
- [x] CTA funcional (WhatsApp + Email)
- [x] Layout responsivo (mobile-first)

## 15) Status da Implementacao (Jan/2026)

### Reestruturacao para 5 Slides

O projeto foi **reestruturado** em 31/12/2025, consolidando de 10 slides para 5 slides com scroll vertical.

**Nova arquitetura:**
1. **SlideHero** - Capa minimalista
2. **SlideResultados** - Consolidou KPIs + Evolucao + Benchmarks
3. **SlideCriativos** - Grid visual com imagens reais
4. **SlideInsights** - Padroes + Recomendacoes + Oportunidades
5. **SlideProposta** - Plano 30/60/90 + Pricing + CTA

**Dados adicionados em lib/data.ts:**
- 42 criativos de audiencia analisados
- 32 criativos de mensagens analisados
- Padroes identificados (formato, colecao, influenciador, timing)
- Insights consolidados para 2026

**Contato CTA:**
- Email: mateusolintof@gmail.com
- WhatsApp: (62) 99862-1000

---

**Nota para agentes:** Este projeto usa arquitetura de slides horizontais com scroll vertical (SPA). NAO criar novas rotas/paginas. Todas as modificacoes devem ser feitas nos componentes de slides existentes.
