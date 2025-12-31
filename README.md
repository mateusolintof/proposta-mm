# MM Renovacao 2025 - Proposta de Trafego Pago

Mini-portal premium para renovacao de contrato de gestao de trafego pago de loja de joias. Apresenta performance dos ultimos 6 meses (Jul-Dez/2025) e proposta de renovacao.

## Visao Geral

Este portal foi desenvolvido para apresentar de forma clara e profissional:
- **Performance de Meta Ads** (campanhas de Audiencia e Mensagens)
- **Metricas de Instagram organico**
- **Plano estrategico 30/60/90 dias**
- **Proposta comercial de renovacao**

## Stack Tecnologica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | Framework React com App Router |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | 4.x | Estilizacao utility-first |
| Recharts | 3.6.0 | Graficos interativos |
| Lucide React | 0.562.0 | Icones |

## Estrutura do Projeto

```
MM-Renovacao/
├── app/                    # Paginas (App Router)
│   ├── page.tsx           # / - Visao Executiva
│   ├── performance/       # /performance - Metricas detalhadas
│   ├── plano/             # /plano - Roadmap 30/60/90
│   └── proposta/          # /proposta - Valores e condicoes
├── components/
│   ├── ui/                # Componentes de interface
│   │   ├── HeaderNav.tsx  # Navegacao principal
│   │   ├── KpiCard.tsx    # Cards de KPI
│   │   ├── ChartCard.tsx  # Container de graficos
│   │   ├── Tabs.tsx       # Tabs de navegacao
│   │   └── ...
│   └── charts/            # Componentes de graficos (Recharts)
│       ├── AudienciaChart.tsx
│       ├── MensagensChart.tsx
│       └── OrganicoChart.tsx
├── lib/
│   └── data.ts            # Dados estaticos consolidados
├── data/                  # Arquivos fonte (XLSX/CSV)
├── docs/                  # Documentacao e dados internos
│   ├── dados_internos.md  # Dados consolidados
│   ├── benchmarks_report.md # Benchmarks de mercado
│   └── proposta-valor.md  # Valores da proposta
└── AGENTS.md              # Spec tecnico para IAs
```

## Rotas

| Rota | Descricao |
|------|-----------|
| `/` | Visao Executiva - Hero, KPIs principais, graficos de tendencia, insights |
| `/performance` | Performance detalhada com tabs: Audiencia, Mensagens, Organico |
| `/plano` | Roadmap 30/60/90 dias, estrategias por alavanca, riscos e mitigacao |
| `/proposta` | Valores (mensal/trimestral/semestral), incluso/nao incluso, CTAs |

## Como Executar

### Requisitos
- Node.js 20.x ou superior
- npm, yarn ou pnpm

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

### Build de Producao

```bash
npm run build
npm run start
```

## Dados

Todos os dados exibidos sao extraidos dos documentos em `docs/`:

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

## Design

- **Mobile-first**: Layout otimizado para dispositivos moveis
- **Responsivo**: Adaptado para desktop com breakpoints em md (768px) e lg (1024px)
- **Paleta**: Tons de amber/dourado (premium), cinzas neutros, acentos verdes para sucesso

## Principios

1. **Nao inventar numeros** - Todos os dados vem dos docs
2. **Sem integracoes externas** - Dados estaticos
3. **Transparencia** - Organico marcado como indicador secundario
4. **1 insight por bloco** - Comunicacao clara e direta

## Deploy

O projeto pode ser facilmente deployado na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mateusolintof/proposta-mm)

## Contato

- **WhatsApp**: (62) 99862-1000
- **Email**: mateusolintof@gmail.com

---

Desenvolvido com Next.js 16.1 + TypeScript + Tailwind CSS
