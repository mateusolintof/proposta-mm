# MM Renovacao 2025 - Proposta de Trafego Pago

Apresentacao premium em formato **pitch deck** (slides horizontais) para renovacao de contrato de gestao de trafego pago de loja de joias. Apresenta performance dos ultimos 6 meses (Jul-Dez/2025) e proposta de renovacao.

## Visao Geral

Aplicacao Single Page com **5 slides horizontais** (scroll vertical dentro de cada slide), navegaveis por **swipe** (mobile) ou **teclado** (desktop):

| Slide | Conteudo |
|-------|----------|
| 0 | Hero - Capa minimalista (periodo + canais) |
| 1 | Resultados - KPIs + evolucao mensal + benchmarks |
| 2 | Criativos - Grid visual + filtros |
| 3 | Insights - Padroes + recomendacoes 2026 |
| 4 | Proposta - Plano 30/60/90 + pricing + CTA |

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
│   ├── favicon.ico          # Favicon (logo cliente)
│   ├── page.tsx             # SPA com navegacao de slides
│   └── globals.css          # Tema dark premium
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
│   └── navigation/          # Navegacao
│       ├── SlideNav.tsx
│       ├── ProgressBar.tsx
│       └── SlideIndicators.tsx
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useSwipe.ts
├── lib/
│   ├── data.ts              # Dados consolidados
│   ├── creatives.generated.ts # Criativos completos (gerado a partir de data/)
│   └── utils.ts             # Utilities
├── docs/                    # Fonte de verdade
│   ├── analise-criativos.md
│   ├── criativos-assets.md
│   ├── dados_internos.md
│   ├── benchmarks_joias_br.md
│   ├── benchmarks_report.md
│   └── proposta-valor.md
├── scripts/                 # Scripts offline (pipeline de dados/assets)
├── data/                    # Arquivos brutos (referencia/lastro)
│   ├── relatorio-meta-2025-{07-12}.pdf  # 6 PDFs mensais
│   ├── meta-audiencia-mensal.xlsx
│   ├── meta-mensagens-mensal.xlsx
│   └── instagram-organico-mensal.csv
└── public/
    ├── ads/                  # Imagens dos criativos
    └── brand/                # Assets de marca
        └── monicametran-logo.jpg # Logo (foto de perfil) usada no Hero e no favicon
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

Fonte de verdade: `lib/data.ts` (consolidado de `docs/` e `data/`):

### Criativos (capas reais)
- Lista completa (exports): `lib/creatives.generated.ts` (gerado offline)
- Imagens: `public/ads/mm-ig-{shortcode}.jpg`
- Overrides (quando nao existe `dd/mm` no nome): `data/creative_overrides.json`
- Pipeline:
  - `python3 scripts/generate_creatives.py`
  - `python3 scripts/download_instagram_thumbs.py`

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

1. **Nao inventar numeros** - Todos os dados vem de `lib/data.ts` (consolidado de `docs/` e `data/`)
2. **Sem integracoes externas** - Dados estaticos
3. **Transparencia** - Organico marcado como indicador secundario
4. **Mobile-first** - Layout responsivo

## Branding

- Logo: `public/brand/monicametran-logo.jpg` (tambem exibida no Slide 0 - Hero)
- Favicon: `app/favicon.ico` (atualizado para refletir a marca)

## Deploy

O projeto pode ser deployado na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mateusolintof/proposta-mm)

## Contato

- **WhatsApp**: (62) 99862-1000
- **Email**: mateusolintof@gmail.com

---

Desenvolvido com Next.js 16.1 + Framer Motion + Tailwind CSS
