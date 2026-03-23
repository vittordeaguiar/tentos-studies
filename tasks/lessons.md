# Lessons

- Em `vite-plugin-pages`, para React o ajuste correto e estavel e `resolver: "react"`; `routeStyle` controla somente convencoes de caminho como `next`, `nuxt` e `remix`.
- Quando o app usa `Layout` por rota, o preenchimento da viewport precisa ser resolvido no CSS global (`html`, `body`, `#root`) e no container da pagina (`min-h-screen`/`min-height: 100vh`), nao apenas dentro do componente visual.
- Para layout full-height com Ant Design, prefira classes CSS explicitas no `Layout` e no `Content` (`display: flex`, `flex-direction: column`, `flex: 1`) em vez de depender apenas de utilitarios avulsos.
- Para DX consistente com Ant Design, concentre cor, tipografia e superfices em `ConfigProvider theme`; deixe Tailwind ou CSS proprio apenas para composicao e estrutura de pagina.
- Antes de publicar um projeto, rode `pnpm build` mesmo em mudancas de infraestrutura; imports nao usados podem quebrar o TypeScript e bloquear o primeiro commit publico.
