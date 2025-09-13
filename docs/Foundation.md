# Codessa Ecosystem — Foundation Documentation

Este documento descreve os fundamentos estruturais do Codessa Ecosystem. A fundação representa o ponto de partida técnico e semântico da interface — ela define comportamentos universais, neutraliza inconsistências entre navegadores e garante acessibilidade mínima para todos os usuários.

A fundação não aplica estilos visuais. Ela prepara o terreno para que scenes, sprouts e trunks componham a interface com elegância e intenção.

## Índice da Fundação

- [Estrutura Base](#estrutura-base)
- [Normalização Cross-Browser](#normalização-cross-browser)
- [Acessibilidade Global](#acessibilidade-global)
- [Boas Práticas](#boas-práticas)

## Estrutura Base

Define o comportamento mínimo do HTML e do `body`, além da organização estrutural de elementos semânticos como `main`, `header`, `nav`, `section`, `article` e `aside`.

### Propósitos

- Estabelecer uma base neutra para tipografia, layout e comportamento
- Garantir consistência estrutural entre navegadores
- Preparar o terreno para aplicação de scenes e composição visual

### Destaques

- `html` com `box-sizing: border-box` e `scroll-behavior: smooth`
- `body` com variáveis semânticas de fonte, cor e fundo
- Containers centrais com `max-width` e `padding-inline`
- Elementos semânticos com `display: flex` e espaçamento controlado

## Normalização Cross-Browser

Remove inconsistências entre navegadores e garante que todos os elementos comecem de uma base neutra. A normalização não aplica estilos visuais — apenas neutraliza comportamentos nativos que interferem na composição semântica.

### Propósitos

- Eliminar margens padrão de elementos tipográficos e estruturais
- Garantir que mídias sejam responsivas por padrão
- Remover estilos nativos de inputs, botões, listas e tabelas
- Unificar comportamento de elementos interativos e semânticos

### Destaques

- `box-sizing: border-box` aplicado globalmente
- Inputs e botões com `font: inherit` e `background: none`
- Listas e tabelas sem estilo nativo
- Links sem decoração e com herança de cor
- Elementos como `fieldset`, `legend`, `strong`, `em`, `small` tratados com neutralidade semântica

## Acessibilidade Global

Define comportamentos mínimos para garantir que a interface seja navegável, legível e funcional para todos os usuários — incluindo leitores de tela, navegação por teclado e dispositivos assistivos.

### Propósitos

- Garantir foco visível em elementos interativos
- Permitir navegação por skip links
- Ocultar elementos visualmente sem comprometer a leitura por assistentes
- Declarar landmarks semânticos para leitores de tela

### Destaques

- `:focus-visible` com contorno semântico (`--focus-ring`)
- `.visually-hidden` para elementos acessíveis fora do fluxo visual
- `.skip-link` com transição e foco visível
- Landmarks com `role` declarados como blocos visuais

## Boas Práticas

- A fundação deve permanecer neutra — não define estilos visuais, apenas comportamentos estruturais
- Evite sobrescrever variáveis diretamente na fundação — use scenes para compor visualmente
- A fundação é o ponto de partida técnico — não deve conter lógica condicional, media queries ou variações contextuais
- Mantenha os comentários estruturados e sem emojis para facilitar leitura e manutenção
- Se novos comportamentos forem adicionados (ex: impressão, grid base, motion estrutural), considere expandir a fundação com arquivos dedicados
