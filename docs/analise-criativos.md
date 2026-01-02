# Analise de Criativos — Monica Metran (Jul-Dez/2025)

Este documento consolida toda a analise de criativos realizada para o projeto de renovacao de contrato.

## 1. Metodologia

### 1.1 Fontes de dados
| Fonte | Tipo | Periodo | Criativos |
|-------|------|---------|-----------|
| `meta-audiencia-mensal.xlsx` | Planilha Meta Ads | Jul-Dez/2025 | 42 unicos |
| `meta-mensagens-mensal.xlsx` | Planilha Meta Ads | Ago-Dez/2025 | 31 unicos *(no export atual)* |
| `instagram-organico-mensal.csv` | Export Instagram | Jul-Dez/2025 | 208 posts |
| Relatorios PDF mensais | Meta Ads Manager | Jul-Dez/2025 | Consolidado |

### 1.2 Criterios de selecao
- **Top performers audiencia:** Ordenados por CTR (click-through rate)
- **Top performers mensagens:** Ordenados por custo/conversa (menor = melhor)
- **Corte:** Top 10 de cada categoria para analise detalhada
- **Regra de leitura (amostra):** para entrar como “destaque principal” no deck, o criativo precisa ter volume suficiente (evita distorcao por gasto/conversas muito baixos)

### 1.3 Metricas analisadas
| Metrica | Formula | Uso |
|---------|---------|-----|
| CTR | cliques / impressoes | Eficiencia do criativo em gerar cliques |
| CPC | gasto / cliques | Custo por clique |
| Custo/Visita | gasto / visitas ao perfil | Eficiencia em trazer visitantes |
| Custo/Conversa | gasto / conversas iniciadas | Eficiencia em gerar leads WhatsApp |

### 1.4 Criterio de amostra (para destaque no deck)
Este criterio nao muda os dados (continua tudo listado), apenas muda **o que entra como “campeao”** no slide Top Performers.

- **Audiencia (CTR):** considerar como “amostra OK” quando **investido >= R$ 50**, **impressoes >= 2.000** e **cliques >= 100**
- **Mensagens (custo/conversa):** considerar como “amostra OK” quando **investido >= R$ 50** e **conversas >= 10**

Quando ficar abaixo disso, o criativo aparece como **baixa amostra** (referencia), nao como “melhor absoluto”.

### 1.5 Assets visuais (capas reais)
Os exports do Meta nao trazem a imagem do criativo. Para exibir capas reais no deck:

- o projeto mapeia `dd/mm` do nome do anuncio para o **link permanente** no `instagram-organico-mensal.csv`
- as thumbs sao baixadas via `og:image` e salvas em `public/ads/` no padrao `mm-ig-{shortcode}.jpg`
- scripts: `scripts/generate_creatives.py` e `scripts/download_instagram_thumbs.py`

---

## 2. Criativos de Audiencia (Top 10 por CTR)

Total analisado: **42 criativos unicos**

| # | Criativo | Campanha | Mes | Tipo | CTR | CPC | Visitas | Investido | Destaque |
|---|----------|----------|-----|------|-----|-----|---------|-----------|----------|
| 1 | Reels Layla Monteiro | Nova Colecao | Ago | Reel | 7,45% | R$ 0,09 | 2.361 | R$ 222,41 | Melhor CTR |
| 2 | Video Post 28/11 | AURA | Nov | Video | 6,52% | R$ 0,21 | 237 | R$ 51,00 | - |
| 3 | Video Post 04/12 | AURA | Dez | Video | 6,24% | R$ 0,18 | 1.802 | R$ 320,35 | Alta conversao |
| 4 | Video Post 12/11 | AURA | Nov | Video | 5,92% | R$ 0,41 | 160 | R$ 60,00 | - |
| 5 | Reels Isadora | New Collection | Set | Reel | 5,28% | R$ 0,27 | 441 | R$ 118,24 | - |
| 6 | Reels Colecao Primavera | Primavera | Ago | Reel | 5,10% | R$ 0,36 | 663 | R$ 222,41 | - |
| 7 | Video Post 21/11 | AURA | Nov | Video | 4,86% | R$ 0,35 | 654 | R$ 228,00 | - |
| 8 | Post Reels 04/10 | MM Diamonds | Out | Reel | 4,68% | R$ 0,20 | 2.034 | R$ 410,00 | Maior volume |
| 9 | Video Post 26/11 | AURA | Nov | Video | 4,53% | R$ 0,29 | 1.378 | R$ 379,12 | - |
| 10 | Reels Thassia AURA | Colecao AURA | Dez | Reel | 4,44% | R$ 0,33 | 1.306 | R$ 379,12 | - |

### Observacoes audiencia
- **8 de 10** top performers sao videos/reels (80%)
- **Layla Monteiro** teve o melhor CTR do periodo (7,45%)
- **Colecao AURA** domina o top 10 (5 criativos)
- **CPC medio** dos top 10: R$ 0,27 (muito abaixo do benchmark R$ 2,17-6,51)

---

## 3. Criativos de Mensagens (Top 10 por Custo/Conversa)

Total analisado: **31 criativos unicos** *(no export atual)*

| # | Criativo | Campanha | Mes | Tipo | CTR | Custo/Conv | Conversas | Investido | Destaque |
|---|----------|----------|-----|------|-----|------------|-----------|-----------|----------|
| 1 | Carrossel Origem (stories) | Colecao Origem | Dez | Carrossel | 1,32% | R$ 3,14 | 3 | R$ 9,42 | Melhor custo |
| 2 | Video Colecao AURA | Colecao AURA | Dez | Video | 2,08% | R$ 3,38 | 10 | R$ 33,80 | Melhor CTR |
| 3 | Video Colecao AURA [2] | Colecao AURA | Dez | Video | 1,89% | R$ 4,66 | 27 | R$ 125,82 | - |
| 4 | Video MM Diamonds Especial | MM Diamonds | Dez | Video | 0,74% | R$ 4,73 | 3 | R$ 14,19 | - |
| 5 | Carrossel Colecao AURA | Colecao AURA | Dez | Carrossel | 1,48% | R$ 7,45 | 86 | R$ 640,70 | Mais conversas |
| 6 | Video Colecao AURA [3] | Colecao AURA | Dez | Video | 1,55% | R$ 10,25 | 29 | R$ 297,25 | - |
| 7 | Carrossel New Collection | Remarketing | Nov | Carrossel | 1,36% | R$ 12,68 | 34 | R$ 431,12 | - |
| 8 | Post Reels Isadora | Influenciador | Set | Reel | 2,01% | R$ 14,20 | 20 | R$ 284,00 | - |
| 9 | Carrossel MM Diamond | MM Diamonds | Set | Carrossel | 1,39% | R$ 14,70 | 23 | R$ 338,10 | - |
| 10 | Post Reels Evento Aurora | Evento | Set | Reel | 0,94% | R$ 15,28 | 25 | R$ 382,00 | - |

### Observacoes mensagens
- **Colecao AURA** domina completamente (6 de 10 top performers)
- **Videos AURA** tem custo/conversa 50% menor que media
- **Dezembro** concentra os melhores resultados (6 de 10)
- **Carrossel AURA** gerou o maior volume absoluto (86 conversas)

---

## 4. Padroes Identificados

### 4.1 Padrao de Formato

| Aspecto | Dado | Implicacao |
|---------|------|------------|
| Top 10 audiencia | 8 de 10 sao Reels/Videos | Formato video performa melhor |
| CTR medio Reels | 5,5% | 72% acima de carrosseis |
| CTR medio Carrossel | 3,2% | Baseline |
| Custo/conversa video AURA | R$ 3-10 | 50% menor que media geral |

**Recomendacao:** Priorizar formato video/reels para ambas campanhas

### 4.2 Padrao de Colecao

| Colecao | Performance Audiencia | Performance Mensagens |
|---------|----------------------|----------------------|
| **AURA Viva** | 5 criativos no top 10 | Custo/conversa R$ 3-10 (melhor) |
| **Origem** | - | R$ 3,14/conversa em stories (excelente) |
| **MM Diamonds** | Bom para awareness | Volume alto, custo medio |
| **Primavera** | CTR 5,10% | - |

**Recomendacao:** Manter AURA como principal, Origem para stories

### 4.3 Padrao de Influenciadores

| Influenciador | CTR | CPC | Campanhas | Observacao |
|---------------|-----|-----|-----------|------------|
| **Layla Monteiro** | 7,45% | R$ 0,09 | 2 | Melhor performance absoluta |
| **Isadora** | 5,28% | R$ 0,27 | 4 | Consistente em multiplas campanhas |
| **Thassia** | 4,50% | R$ 0,31 | 3 | Boa performance, colecao AURA |

**Recomendacao:** Renovar parceria Layla, expandir com Isadora

### 4.4 Padrao de Timing

| Periodo | Custo/Conversa | Observacao |
|---------|----------------|------------|
| Ago-Out/2025 | R$ 24,42 | Fase inicial, otimizacao |
| Nov-Dez/2025 | R$ 12,99 | Pico de eficiencia |
| **Dezembro** | R$ 8,22 | Melhor mes do ano |

**Reducao:** 56% menor que media do periodo

**Recomendacao:** Aumentar investimento em Nov/Dez para 2026

---

## 5. Performance por Regiao (Dezembro/2025)

| UF | Estado | CTR | CPC | Impressoes | Cliques | Status |
|----|--------|-----|-----|------------|---------|--------|
| SP | Sao Paulo | 5,64% | R$ 0,28 | 41.913 | 2.364 | Top |
| SC | Santa Catarina | 5,24% | R$ 0,27 | 8.988 | 471 | Top |
| PR | Parana | 5,14% | R$ 0,27 | 11.811 | 607 | Top |
| GO | Goias | 2,30% | R$ 0,57 | 96.112 | 2.211 | Baseline |

### Observacoes regionais
- **SP, SC, PR:** CTR 5%+ (2x acima de GO)
- **Goias:** Maior volume de impressoes, mas CTR baixo
- **Oportunidade:** Realocar budget de GO para estados top performers

---

## 6. Insights Consolidados

### 6.1 O que funcionou

| Insight | Metrica | Contexto | Impacto |
|---------|---------|----------|---------|
| Reels com influenciadoras | CTR 7,45% | vs benchmark 0,7-1,2% | 6x acima do mercado |
| Colecao AURA em videos | R$ 3,38/conversa | vs media R$ 18,73 | 82% mais eficiente |
| Dezembro otimizado | R$ 8,22/conversa | melhor mes do ano | 173 conversas geradas |
| CPC consistente | R$ 0,34 | vs benchmark R$ 2,17-6,51 | 84% abaixo do mercado |

### 6.2 Recomendacoes para 2026

| Prioridade | Area | Acao | Justificativa |
|------------|------|------|---------------|
| **Alta** | Criativos | Dobrar investimento em Reels com influenciadoras | Formato com CTR 5-7% vs 3% de carrosseis |
| **Alta** | Colecoes | Lancar campanhas AURA em formato video | Melhor custo/conversa do portfolio |
| **Media** | Sazonalidade | Aumentar budget em 30% para Nov/Dez | Historico de eficiencia 56% maior |
| **Media** | Regioes | Manter foco em SP, SC, PR | CTR 5%+ vs 2,3% em outras regioes |

### 6.3 Oportunidades a explorar

| Oportunidade | Potencial | Acao Sugerida |
|--------------|-----------|---------------|
| Stories da colecao Origem | R$ 3,14/conversa (melhor do periodo) | Escalar formato com mais budget |
| Mix video + carrossel AURA | Carrossel gerou 86 conversas (maior volume) | Combinar awareness + conversao |
| Novos influenciadores | Layla e Isadora provaram o modelo | Buscar 2-3 novas parcerias no mesmo perfil |

---

## 7. Estatisticas Consolidadas

### 7.1 Totais do periodo

| Metrica | Valor |
|---------|-------|
| Investimento total | R$ 18.082,57 |
| Visitas ao perfil | 26.339 |
| Conversas WhatsApp | 494 |
| CTR medio | 3,33% |
| Reducao custo/conversa | 47% |
| Criativos analisados | 73 *(42 audiencia + 31 mensagens no export atual)* |
| Meses analisados | 6 |

### 7.2 Comparativo com benchmarks

| Metrica | Monica Metran | Benchmark Mercado | Diferenca |
|---------|---------------|-------------------|-----------|
| CTR | 3,33% | 0,7-1,2% | **+178% acima** |
| CPC | R$ 0,34 | R$ 2,17-6,51 | **84% abaixo** |
| CPM | R$ 11,42 | R$ 18,77 | **39% abaixo** |
| Custo/Conversa (Dez) | R$ 8,22 | R$ 8,14-32,55 | **No limite inferior** |

---

## 8. Limitacoes da Analise

1. **Atribuicao organico:** Metricas de Instagram organico sao indicadores secundarios, nao ha atribuicao direta a vendas
2. **Sazonalidade:** Dezembro tem comportamento atipico (presentes, fim de ano)
3. **Volume de amostra:** Alguns criativos top tem baixo volume (ex: Carrossel Origem com 3 conversas)
4. **Dados de vendas:** Analise nao inclui conversao conversa → venda (dado do cliente)

---

## 9. Arquivos de Referencia

| Arquivo | Localizacao | Conteudo |
|---------|-------------|----------|
| Dados brutos audiencia | `data/meta-audiencia-mensal.xlsx` | 42 criativos |
| Dados brutos mensagens | `data/meta-mensagens-mensal.xlsx` | 31 criativos *(unicos no export atual)* |
| Dados organico | `data/instagram-organico-mensal.csv` | 208 posts |
| Relatorios PDF | `data/relatorio-meta-2025-*.pdf` | 6 meses |
| Dados consolidados | `lib/data.ts` | Arrays TypeScript |
| Benchmarks | `docs/benchmarks_report.md` | Fontes citadas |

---

*Documento gerado em: 02/01/2026*
*Ultima atualizacao: 02/01/2026*
