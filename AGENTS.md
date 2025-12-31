# MM-Renovacao — AGENTS (Spec Técnico)

Este arquivo define **como uma IA/agente deve construir** este repositório de forma previsível, sem inventar dados e sem criar integrações.

## 0) Contexto
Mini-portal **premium** (web) para **renovação de contrato de tráfego pago** de uma loja de joias (ticket médio ~R$ 4–5 mil), reunindo:
- **Performance (Meta Ads + Instagram orgânico)** dos últimos 6 meses
- **Narrativa executiva** (o que foi feito, o que melhorou, por quê)
- **Plano 30/60/90 dias**
- **Proposta financeira** (valores, escopo, condições)

**Requisito UI:** **mobile-first**, mas bem ajustado para desktop.

## 1) Estado atual do repositório
Estrutura atual (já existe):
- `data/`
  - `campanhas-audiencia.xlsx`
  - `campanha-audiencia-atualizado (1).xlsx` (**inclui visitas ao perfil e custo por visita**)
  - `campanhas-mensagem.xlsx`
  - `dados-feed-organico.csv`
- `docs/`
  - `dados_internos.md` (**fonte interna consolidada: totais + séries mensais + comparativos**)
  - `benchmarks_report.md` (**benchmarks de mercado + benchmarks internos**) 
  - `proposta-valor.md` (**valores e condições da proposta**) 
- `AGENTS.md`

**Antes de qualquer implementação**, ler os 3 docs em `docs/`.

## 2) Princípios (não negociáveis)
- **Não inventar números.** Usar somente o que está em `docs/dados_internos.md`, `docs/benchmarks_report.md` e `docs/proposta-valor.md`.
- **Sem integrações/API** (Meta/GA4/Google Ads) nesta fase.
- **Mobile-first**: layout e tipografia priorizam telas pequenas; desktop deve ser responsivo e confortável.
- Cada seção deve seguir: **Afirmação → Prova → Explicação → Próximo passo**.
- Texto enxuto: **1 insight por bloco**.
- Transparência: quando algo não é atribuição direta (orgânico), declarar como **indicador secundário**.

## 3) Stack e escolhas técnicas (padrão recomendado)
A IA deve scaffoldar e implementar usando:
- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** (ou alternativa equivalente, mas preferir Tailwind)
- Biblioteca de gráficos: **Recharts** (simples e confiável) OU **Chart.js**
- Ícones: `lucide-react` (opcional)

### 3.1 Requisitos de UI
- Tipografia e espaçamento consistentes
- Cards de KPI claros
- Gráficos legíveis em mobile (sem poluição)
- Dark mode opcional (não obrigatório)
- Acessibilidade mínima: contraste adequado, headings semânticos, foco visível

## 4) Fonte de verdade de dados (data strategy)

### 4.1 Fonte primária (MVP)
Para o MVP, a IA deve **usar como fonte de verdade**:
- `docs/dados_internos.md` (tabelas mensais e totais já consolidados)
- `docs/benchmarks_report.md` (benchmarks e conversões)
- `docs/proposta-valor.md` (preços)

> Motivo: já está consolidado, evita erro de parsing dos XLSX/CSV.

### 4.2 Fonte secundária (opcional)
Os arquivos em `data/` ficam como referência/lastro e podem ser usados no futuro para automatizar.

### 4.3 Dados mínimos que devem aparecer no portal (já existem em `docs/dados_internos.md`)
**Meta Ads — Audiência (Jul–Dez/2025)**
- Gasto, alcance, impressões, cliques, CTR, CPC, CPM
- **Visitas ao perfil** e **custo por visita**

**Meta Ads — Mensagens (Ago–Dez/2025)**
- Gasto, alcance, impressões, cliques, CTR, CPC
- **Conversas iniciadas** e **custo por conversa**

**Instagram orgânico — Feed/Reels (Jul–Dez/2025)**
- Posts, visualizações, alcance, curtidas, comentários, compartilhamentos, salvamentos, seguidores

## 5) Estrutura do app (páginas e navegação)
O app deve ter 4 rotas principais (+ anexos opcional):

1) `/` **Visão Executiva**
- Hero (headline + sub)
- KPIs (cards):
  - Custo por visita ao perfil (médio) + visitas totais (6m)
  - Custo por conversa (médio) + conversas totais (período disponível)
  - CTR e CPC (audiência)
  - Seguidores ganhos (orgânico) como indicador secundário
- Gráfico de tendência (6m):
  - Audiência: gasto vs visitas ao perfil (ou gasto vs cliques) + custo por visita
  - Mensagens: gasto vs conversas + custo por conversa
- Bloco “O que melhorou” (3–6 bullets)
- CTA: “Ver performance” / “Ver proposta”

2) `/performance`
- Tabs: **Audiência (Perfil)** | **Mensagens (WhatsApp)** | **Orgânico (Feed/Reels)**
- Gráficos mensais (linhas/barras) e tabela (compacta)
- Insights automatizados (texto curto): melhor mês, tendência, comparativo 3m vs 3m
- Observação de metodologia (rodapé curto)

3) `/plano`
- Roadmap 30/60/90 dias (cards)
- Estratégia por alavanca:
  - Criativos (testes, ângulos, frequência)
  - Estrutura de campanhas (prospecting/remarketing)
  - WhatsApp (qualificação, SLA, scripts)
  - Sazonalidade e coleções
- Riscos e mitigação

4) `/proposta`
- Preços (de `docs/proposta-valor.md`):
  - **R$ 1.500,00 mensal**
  - **R$ 3.900,00 em 3x**
  - **R$ 6.000,00 em 6x**
- O que está incluso / não incluso
- Condições
- CTA final (botão para WhatsApp/email — sem integração)

5) `/anexos` (opcional)
- Área para prints/PNG dos anúncios e links

## 6) Componentes (design system mínimo)
Criar componentes reutilizáveis:
- `HeaderNav` (navegação)
- `KpiCard` (número + label + variação)
- `SectionHeader` (título + subtítulo curto)
- `ChartCard` (container + título + gráfico)
- `InsightBlock` (1 insight por bloco)
- `Tabs` (performance)
- `Callout` (metodologia / nota)

## 7) Regras de cálculo (sem inventar)
Os cálculos devem seguir exatamente os conceitos do Meta:
- CTR = cliques / impressões
- CPC = gasto / cliques
- CPM = gasto / (impressões/1000)
- Custo por visita = gasto / visitas ao perfil
- Custo por conversa = gasto / conversas iniciadas

Comparativos:
- Audiência: **Jul–Set vs Out–Dez**
- Mensagens: **Ago–Out vs Nov–Dez** (porque mensagens começam em agosto)

Os valores e séries devem ser lidos de `docs/dados_internos.md`.

## 8) Copy (padrão) e narrativa
Tom: executivo, direto, sem hype.

Templates:
- Hero (exemplo):
  - Headline: “Eficiência e previsibilidade para escalar demanda via Meta Ads”
  - Sub: “Últimos 6 meses: foco em visitas ao perfil, conversas no WhatsApp e construção de marca.”

Regras:
- Evitar adjetivos vazios.
- Sempre ligar ação → impacto.
- Orgânico é **indicador secundário** (não atribuição direta).

## 9) Assets de criativos (PNG dos anúncios)
- Colocar imagens em **`public/ads/`** (criar subpastas):
  - `public/ads/audiencia/`
  - `public/ads/mensagem/`
- Nomear com padrão: `YYYY-MM__campanha__anuncio.png`.

## 10) DevEx: scripts e comandos
A IA deve:
- Definir Node LTS (ex.: 20.x)
- Preferir `pnpm` (ou `npm`, mas padronizar)
- Incluir scripts usuais: `dev`, `build`, `start`, `lint`

## 11) Git: inicialização, commit e push
Repositório remoto:
- https://github.com/mateusolintof/proposta-mm.git

Instruções (executar no diretório do projeto):
1) `git init`
2) `git add .`
3) `git commit -m "chore: initial spec and docs"`
4) `git branch -M main`
5) `git remote add origin https://github.com/mateusolintof/proposta-mm.git`
6) `git push -u origin main`

Depois disso, commits devem ser pequenos e descritivos.

## 12) Definição de pronto (DoD)
O projeto só é considerado pronto quando:
- [x] Páginas `/`, `/performance`, `/plano`, `/proposta` estão implementadas
- [x] Layout mobile-first validado (sem overflow, textos legíveis)
- [x] Desktop responsivo (largura confortável, grids funcionais)
- [x] Dados exibidos batem com `docs/dados_internos.md`
- [x] Benchmarks exibidos batem com `docs/benchmarks_report.md`
- [x] Proposta exibida bate com `docs/proposta-valor.md`
- [x] Sem integrações externas

---

## 13) Status da Implementação (Dez/2025)

### Implementação Concluída
O projeto foi implementado seguindo este spec em 30/12/2025.

**Stack utilizada:**
- Next.js 16.1.1 (App Router)
- TypeScript 5.x
- Tailwind CSS 4.x
- Recharts 3.6.0
- Lucide React 0.562.0

**Arquivos criados:**
```
app/
├── layout.tsx              # Layout root com HeaderNav
├── page.tsx                # Visão Executiva
├── performance/page.tsx    # Performance com tabs
├── plano/page.tsx          # Roadmap 30/60/90
└── proposta/page.tsx       # Valores e CTAs

components/
├── ui/
│   ├── HeaderNav.tsx       # Navegação mobile-first
│   ├── KpiCard.tsx         # Cards de métricas
│   ├── ChartCard.tsx       # Container de gráficos
│   ├── SectionHeader.tsx   # Títulos de seção
│   ├── InsightBlock.tsx    # Blocos de insight
│   ├── Tabs.tsx            # Tabs de navegação
│   └── Callout.tsx         # Notas de metodologia
└── charts/
    ├── AudienciaChart.tsx  # Gráficos de audiência
    ├── MensagensChart.tsx  # Gráficos de mensagens
    └── OrganicoChart.tsx   # Gráficos orgânico

lib/
└── data.ts                 # Dados consolidados dos docs
```

**Decisões de implementação:**
- `/anexos` não foi implementada (decisão do cliente)
- Contato CTA: mateusolintof@gmail.com | (62) 99862-1000
- Conteúdo do roadmap criado com base no contexto do projeto

**Repositório:**
- https://github.com/mateusolintof/proposta-mm.git

---

**Nota para agentes:** respeitar o fluxo "por etapas" do Mateus. Se ele pedir apenas documentação/spec, **não avançar** para código. Se ele pedir implementação, seguir este spec ao pé da letra.
