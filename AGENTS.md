# MM-Renovacao — AGENTS (Spec Tecnico)

Este arquivo define **como uma IA/agente deve construir e manter** este repositorio de forma previsivel, sem inventar dados e sem criar integracoes.

## 0) Contexto

Apresentacao **premium** em formato **pitch deck** (slides horizontais) para **renovacao de contrato de trafego pago** de uma loja de joias (ticket medio ~R$ 4-5 mil), reunindo:
- **Performance (Meta Ads + Instagram organico)** dos ultimos 6 meses
- **Narrativa executiva** (o que foi feito, o que melhorou, por que)
- **Plano 30/60/90 dias**
- **Proposta financeira** (valores, escopo, condicoes)

**Formato:** Single Page Application com 10 slides horizontais navegaveis por swipe (mobile) ou teclado (desktop).

**Design:** Dark Premium com acentos dourados.

## 1) Estado atual do repositorio

```
MM-Renovacao/
├── app/
│   ├── layout.tsx           # Root layout (dark theme, fonts)
│   ├── page.tsx             # SPA com navegacao de slides
│   └── globals.css          # Tema dark premium + CSS variables
├── components/
│   ├── slides/              # 10 slides da apresentacao
│   │   ├── SlideContainer.tsx
│   │   ├── SlideHero.tsx
│   │   ├── SlideKPIs.tsx
│   │   ├── SlideAudiencia.tsx
│   │   ├── SlideMensagens.tsx
│   │   ├── SlideBenchmarks.tsx
│   │   ├── SlideOrganico.tsx
│   │   ├── SlideConquistas.tsx
│   │   ├── SlidePlano.tsx
│   │   ├── SlideProposta.tsx
│   │   └── SlideCTA.tsx
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
│   ├── data.ts              # Dados consolidados dos docs
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
└── CLAUDE.md                # Este arquivo (symlink para AGENTS.md)
```

## 2) Principios (nao negociaveis)

- **Nao inventar numeros.** Usar somente o que esta em `docs/dados_internos.md`, `docs/benchmarks_report.md` e `docs/proposta-valor.md`.
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

### 4.1 Fonte primaria
- `docs/dados_internos.md` (tabelas mensais e totais ja consolidados)
- `docs/benchmarks_report.md` (benchmarks e conversoes)
- `docs/proposta-valor.md` (precos)

### 4.2 Fonte secundaria (arquivos brutos em `data/`)

Os arquivos em `data/` servem como referencia/lastro dos dados consolidados:

**Relatorios mensais Meta Ads (PDFs):**
| Arquivo | Periodo | Conteudo |
|---------|---------|----------|
| `relatorio-meta-2025-07.pdf` | Jul/2025 | Relatorio completo Meta Ads |
| `relatorio-meta-2025-08.pdf` | Ago/2025 | Relatorio completo Meta Ads |
| `relatorio-meta-2025-09.pdf` | Set/2025 | Relatorio completo Meta Ads |
| `relatorio-meta-2025-10.pdf` | Out/2025 | Relatorio completo Meta Ads |
| `relatorio-meta-2025-11.pdf` | Nov/2025 | Relatorio completo Meta Ads |
| `relatorio-meta-2025-12.pdf` | Dez/2025 | Relatorio completo Meta Ads |

**Planilhas consolidadas (dados mensais):**
| Arquivo | Conteudo |
|---------|----------|
| `meta-audiencia-mensal.xlsx` | Campanhas de audiencia (Jul-Dez/2025) |
| `meta-mensagens-mensal.xlsx` | Campanhas de mensagem (Ago-Dez/2025) |
| `instagram-organico-mensal.csv` | Metricas organicas Instagram (Jul-Dez/2025) |

### 4.3 Dados exibidos na apresentacao
**Meta Ads — Audiencia (Jul-Dez/2025)**
- Gasto, visitas ao perfil, custo por visita, CTR, CPC

**Meta Ads — Mensagens (Ago-Dez/2025)**
- Gasto, conversas iniciadas, custo por conversa

**Instagram organico — Feed/Reels (Jul-Dez/2025)**
- Posts, seguidores, alcance (indicador secundario)

## 5) Estrutura do app (slides horizontais)

O app e uma **Single Page Application** com 10 slides navegaveis:

```
/ (SPA)
├── Slide 0: Hero         → "6 meses de resultados"
├── Slide 1: KPIs         → 4 metricas principais animadas
├── Slide 2: Audiencia    → Graficos gasto vs visitas
├── Slide 3: Mensagens    → Graficos gasto vs conversas
├── Slide 4: Benchmarks   → Comparativo com mercado
├── Slide 5: Organico     → Metricas Instagram (secundario)
├── Slide 6: Conquistas   → Lista de resultados
├── Slide 7: Plano        → Roadmap 30/60/90 dias
├── Slide 8: Proposta     → Pricing cards
└── Slide 9: CTA          → Botoes WhatsApp/Email
```

### Navegacao
- **Mobile:** Swipe horizontal (touch)
- **Desktop:** Setas do teclado (←→, Space) + clique nos indicadores
- **Progress bar:** Linha dourada no topo
- **Indicadores:** Dots na lateral direita

## 6) Componentes

### 6.1 Slides (`components/slides/`)

| Componente | Descricao |
|------------|-----------|
| `SlideContainer.tsx` | Container com animacoes Framer Motion |
| `SlideHero.tsx` | Abertura com headline animada |
| `SlideKPIs.tsx` | 4 cards com NumberTicker |
| `SlideAudiencia.tsx` | Graficos ComposedChart (gasto + visitas) |
| `SlideMensagens.tsx` | Graficos ComposedChart (gasto + conversas) |
| `SlideBenchmarks.tsx` | Comparativo barras horizontais |
| `SlideOrganico.tsx` | Metricas Instagram com badge "secundario" |
| `SlideConquistas.tsx` | Lista animada staggered |
| `SlidePlano.tsx` | Roadmap em 3 cards (30/60/90) |
| `SlideProposta.tsx` | Pricing cards (mensal/trimestral/semestral) |
| `SlideCTA.tsx` | CTAs WhatsApp + Email |

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
- **Noise:** Overlay com textura de ruido (opacity 0.03)
- **Gradients:** Gradiente dourado em textos destacados

### 7.4 Classes utilitarias

```css
.card          /* Card base com borda sutil */
.card-gold     /* Card com borda dourada */
.glow-gold     /* Efeito glow */
.glass         /* Glassmorphism */
.text-gradient-gold  /* Texto com gradiente */
```

## 8) Navegacao

### 8.1 useSlideNavigation

```typescript
const {
  currentSlide,    // Indice atual (0-9)
  direction,       // Direcao da transicao (-1 ou 1)
  goToSlide,       // (index) => void
  goNext,          // () => void
  goPrev,          // () => void
  isFirst,         // boolean
  isLast,          // boolean
  progress,        // 0-100 (porcentagem)
} = useSlideNavigation({ totalSlides: 10 });
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

## 9) Regras de calculo (sem inventar)

- CTR = cliques / impressoes
- CPC = gasto / cliques
- Custo por visita = gasto / visitas ao perfil
- Custo por conversa = gasto / conversas iniciadas

Os valores devem ser lidos de `docs/dados_internos.md`.

## 10) Copy e narrativa

Tom: executivo, direto, sem hype.

- Evitar adjetivos vazios
- Sempre ligar acao → impacto
- Organico e **indicador secundario** (nao atribuicao direta)

## 11) Assets de criativos

- Colocar imagens em `public/ads/` se necessario
- Nomear com padrao: `YYYY-MM__campanha__anuncio.png`

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

- [x] 10 slides implementados e navegaveis
- [x] Navegacao por swipe funcional em mobile
- [x] Navegacao por teclado funcional em desktop
- [x] NumberTicker animando em todos os KPIs
- [x] Graficos com animacao de entrada
- [x] Transicoes suaves entre slides
- [x] Tema dark premium consistente
- [x] Dados corretos conforme docs/
- [x] CTA funcional (WhatsApp + Email)
- [x] Layout responsivo (mobile-first)

## 15) Status da Implementacao (Dez/2025)

### Implementacao Concluida

O projeto foi **completamente reestruturado** em 30/12/2025, migrando de uma arquitetura multi-pagina para **slides horizontais (pitch deck)**.

**Mudancas principais:**
- Removidas rotas `/performance`, `/plano`, `/proposta`
- Removidos componentes antigos (HeaderNav, KpiCard, ChartCard, Tabs, etc)
- Adicionado Framer Motion para animacoes
- Adicionado @number-flow/react para NumberTicker
- Criados 10 slides navegaveis
- Implementado tema dark premium
- Implementada navegacao por swipe e teclado

**Contato CTA:**
- Email: mateusolintof@gmail.com
- WhatsApp: (62) 99862-1000

---

**Nota para agentes:** Este projeto usa arquitetura de slides horizontais (SPA). NAO criar novas rotas/paginas. Todas as modificacoes devem ser feitas nos componentes de slides existentes ou criando novos slides se necessario.
