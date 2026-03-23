# Todo

- [x] Confirmar a estrutura atual do app e o ponto de entrada do roteamento
- [x] Migrar o projeto para roteamento baseado em arquivos usando `src/pages`
- [x] Garantir fallback de rota para caminhos inexistentes dentro do app
- [x] Validar com `build` e `lint`
- [x] Revisar a divisao de responsabilidades entre `main.tsx` e `App.tsx`
- [x] Corrigir o layout global para as paginas ocuparem toda a viewport
- [x] Validar visualmente e com `build`
- [x] Corrigir especificamente a altura da pagina principal `/home`
- [x] Revalidar o build apos o ajuste do layout da `/home`
- [x] Centralizar um tema global do Ant Design com tokens e overrides por componente
- [x] Conectar o tema no bootstrap da aplicacao com `ConfigProvider`
- [x] Ajustar as paginas para consumir o tema sem overrides visuais locais
- [x] Alinhar o CSS base para o papel do Tailwind e do Ant Design
- [x] Validar com `build` e `lint`

# Assumptions

- [x] Assumindo que "pages-router" significa roteamento baseado em páginas/arquivos dentro de `src/pages`, compatível com React + Vite
- [x] O tema deve ser claro, moderno, com consumo direto de componentes de `antd` e estrutura pronta para futuro dark mode

# Review

- `vite-plugin-pages` configurado com `resolver: "react"` para gerar rotas automaticamente a partir de `src/pages`
- `BrowserRouter` passou a envolver a aplicação, e `App` agora consome as rotas geradas por `~react-pages`
- Criadas rotas explícitas para `/` e fallback `404`
- `pnpm build` e `pnpm lint` executados com sucesso
- `html`, `body` e `#root` passaram a ocupar a viewport, e as paginas usam `Layout` com `min-h-screen` para manter largura e altura totais
- A `/home` agora usa classes CSS explicitas para layout vertical completo, com `Content` expansivel e viewport garantida pela cadeia `html > body > #root`
- O tema global do Ant Design foi centralizado em `src/theme/antd.ts` e conectado no bootstrap via `ConfigProvider`
- A home, o `ModalCounter`, o `MadeBy` e a rota `404` passaram a consumir os componentes com aparencia guiada por tema, sem cores locais em `Typography` e `Button`
- O CSS base agora importa Tailwind, mas deixa o papel visual principal com o tema do Ant Design e usa CSS proprio para estrutura de pagina

## Publicacao do repositorio

- [x] Verificar se o projeto esta pronto para versionamento publico
- [x] Inicializar o repositório Git local com branch principal
- [x] Revisar os arquivos versionados antes do primeiro commit
- [x] Criar o commit inicial
- [x] Criar o repositório publico remoto e enviar o codigo
- [x] Registrar o resultado e validacoes nesta tarefa

## Review da publicacao

- Repositório Git local inicializado com branch `main`
- Revisado o staging para garantir exclusao de `node_modules/` e `dist/` via `.gitignore`
- `pnpm build` falhou inicialmente por import nao usado em `src/hooks/useLocalStorage.ts`; o import foi removido antes da publicacao
- `pnpm build` executado com sucesso apos a correcao
- `pnpm lint` executado com sucesso
- O build gerou apenas warning de chunk acima de 500 kB no bundle principal, sem impedir a publicacao
- O remoto `origin` foi configurado manualmente para `https://github.com/vittordeaguiar/tentos-studies.git`
- `git push -u origin main` executado com sucesso
- Assumicao usada: o owner do repositório criado por `gh repo create tentos-studies --public` era `vittordeaguiar`; a suposicao estava correta
