# Benchmarks (Brasil) — Joias premium (proxy) no Meta Ads (Jan/2026)

Este documento existe para **dar lastro** aos benchmarks usados no deck, sem depender do `docs/benchmarks_report.md`.

## Escopo usado no deck (Slide Resultados)

**Métrica:** CPC (custo por clique)  
**Objetivo/cenário:** campanhas de **Tráfego** com destino no **Instagram** (visitas ao perfil)  
**Geo:** Brasil  
**Moeda:** **R$ (BRL)** (sem conversão)  
**Nicho:** *joias premium* (ticket ~R$ 6k) → **proxy** disponível em fonte pública

### Por que “Consumer Goods” é proxy para joias premium?

Na fonte abaixo não existe recorte específico “jewelry/joias”. O melhor recorte público disponível para uma operação de joias premium (produto físico, compra por desejo, catálogo/coleções) é **Consumer Goods** dentro do Brasil.

## Fonte (Superads) + método de cálculo

**Fonte pública (página):**  
https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/consumer-goods/brazil/traffic/instagram

**Extração (API agregada do Superads):**
- Endpoint: `https://superads-meta-ads-tool.superside.dev/api/meta-aggregated/query`
- Filtros:
  - `accountCurrency = BRL`
  - `targetGeolocation = BR` (Brasil)
  - `publishedOnInstagram = true`
  - `campaignType = TRAFFIC`
  - `industry = Consumer Goods`
- Série: CPC mensal agregado (`costPerClick`) com bucket mensal (`dateStart` MONTHLY)

### Faixa usada no deck (período Jul–Dez/2025)

Valores retornados (Jul–Dez/2025):
- Jul/2025: `0.2760344828`
- Ago/2025: `0.2848834499`
- Set/2025: `0.2394444444`
- Out/2025: `0.1972696802`
- Nov/2025: `0.3789753556`
- Dez/2025: `0.2068458596`

**Faixa (mín–máx no período):** `0.1972696802` – `0.3789753556` (**R$**, sem conversão)  
No UI do deck, isso aparece arredondado para 2 casas (ex.: `R$ 0,20–R$ 0,38`).

