# MM Renovacao 2025 - Proposta de Trafego Pago

Apresentacao premium em formato **pitch deck** (slides horizontais) para renovacao de contrato de gestao de trafego pago de loja de joias. Apresenta performance dos ultimos 6 meses (Jul-Dez/2025) e proposta de renovacao.

## Visao Geral

Aplicacao Single Page com 10 slides navegaveis por **swipe** (mobile) ou **teclado** (desktop):

| Slide | Conteudo |
|-------|----------|
| 0 | Hero - "6 meses de resultados" |
| 1 | KPIs - 4 metricas principais animadas |
| 2 | Audiencia - Graficos gasto vs visitas |
| 3 | Mensagens - Graficos gasto vs conversas |
| 4 | Benchmarks - Comparativo com mercado |
| 5 | Organico - Metricas Instagram |
| 6 | Conquistas - Lista de resultados |
| 7 | Plano - Roadmap 30/60/90 dias |
| 8 | Proposta - Pricing cards |
| 9 | CTA - Botoes WhatsApp/Email |

## Stack Tecnologica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | Framework React (App Router) |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | 4.x | Estilizacao |
| Framer Motion | 12.x | Animacoes e transicoes |
| @number-flow/react | 0.5.x | NumberTicker animado |
| Recharts | 3.6.0 | Graficos |
| Lucide React | 0.562.0 | Icones |

## Estrutura do Projeto

```
MM-Renovacao/
├── app/
│   ├── layout.tsx           # Root layout (dark theme)
│   ├── page.tsx             # SPA com navegacao de slides
│   └── globals.css          # Tema dark premium
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
│   └── navigation/          # Navegacao
│       ├── SlideNav.tsx
│       ├── ProgressBar.tsx
│       └── SlideIndicators.tsx
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useSwipe.ts
├── lib/
│   ├── data.ts              # Dados consolidados
│   └── utils.ts             # Utilities
├── docs/                    # Fonte de verdade
│   ├── dados_internos.md
│   ├── benchmarks_report.md
│   └── proposta-valor.md
└── data/                    # Arquivos brutos (XLSX/CSV)
```

## Como Executar

### Requisitos
- Node.js 20.x ou superior
- npm

### Instalacao

```bash
# Clonar o repositorio
git clone https://github.com/mateusolintof/proposta-mm.git
cd proposta-mm

# Instalar dependencias
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Navegacao

| Acao | Desktop | Mobile |
|------|---------|--------|
| Proximo slide | `→` ou `Space` | Swipe left |
| Slide anterior | `←` | Swipe right |
| Primeiro slide | `Home` | - |
| Ultimo slide | `End` | - |

### Build de Producao

```bash
npm run build
npm run start
```

## Design: Dark Premium

- **Background:** `#0a0a0a` (preto profundo)
- **Accent:** `#D4AF37` (dourado)
- **Fontes:** Inter (headlines) + JetBrains Mono (numeros)
- **Efeitos:** Glow, glassmorphism, noise overlay

## Dados

Todos os dados sao extraidos de `docs/`:

### Meta Ads - Audiencia (Jul-Dez/2025)
- Gasto total: R$ 8.830,15
- Visitas ao perfil: 26.339
- Custo por visita: R$ 0,34
- CTR: 3,33%

### Meta Ads - Mensagens (Ago-Dez/2025)
- Gasto total: R$ 9.252,42
- Conversas iniciadas: 494
- Custo por conversa: R$ 18,73

### Instagram Organico (Jul-Dez/2025)
- Posts: 208
- Seguimentos: 1.672
- Alcance: 850.048

## Principios

1. **Nao inventar numeros** - Todos os dados vem dos docs
2. **Sem integracoes externas** - Dados estaticos
3. **Transparencia** - Organico marcado como indicador secundario
4. **Mobile-first** - Layout responsivo

## Deploy

O projeto pode ser deployado na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mateusolintof/proposta-mm)

## Contato

- **WhatsApp**: (62) 99862-1000
- **Email**: mateusolintof@gmail.com

---

Desenvolvido com Next.js 16.1 + Framer Motion + Tailwind CSS
