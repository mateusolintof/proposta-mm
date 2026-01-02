# Criativos — Assets Visuais (Capas Reais)

## Por que isso existe
Os exports do Meta Ads (`data/meta-audiencia-mensal.xlsx` e `data/meta-mensagens-mensal.xlsx`) **nao incluem** a imagem/capa do criativo.

Para o slide **Top Performers** ficar fiel ao que o cliente realmente viu, o projeto:
- consolida os criativos em `lib/creatives.generated.ts` (a partir dos exports)
- encontra o **link permanente** do post quando possivel via `data/instagram-organico-mensal.csv`
- baixa a thumb do post via `og:image` e salva em `public/ads/`

## Padrao de arquivos
- Thumbs baixadas: `public/ads/mm-ig-{shortcode}.jpg`
- O `thumbSrc` ja sai preenchido no `lib/creatives.generated.ts` quando existe mapeamento por data.

## Como atualizar (pipeline offline, sem integracao no app)
1) Regenerar a lista de criativos + mapeamento por data:
   - `python3 scripts/generate_creatives.py`
2) Baixar as thumbs reais:
   - `python3 scripts/download_instagram_thumbs.py`

## Regras de mapeamento (como o link e encontrado)
O mapeamento usa o que existe no projeto hoje:
- muitos anuncios possuem `dd/mm` no nome (ex.: `Vídeo Post 26/11`)
- o CSV organico usa data no formato `mm/dd/yyyy`
- o script converte `dd/mm` + ano do periodo do relatorio para buscar o post daquele dia

Quando nao existe `dd/mm` no nome do anuncio, o mapeamento pode ficar sem URL e o card usa placeholder (sem capa generica).

