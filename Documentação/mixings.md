# Mixins

Os mixins do Codessa são agrupados por função e organizados em arquivos Sass modulares. Eles consomem tokens visuais e estruturais para aplicar estilos reutilizáveis com consistência e flexibilidade.

---

## Mixins visuais

Aplicam estilos baseados diretamente nos tokens visuais do sistema.

### `border-radius`

Define valores padronizados de arredondamento para bordas.

**Exemplo:**

@include border-radius($radius-md)

---

### `elevations`

Aplica sombras e profundidade visual com base nos tokens de sombra.

**Exemplo:**

@include elevation($shadow-md)

---

### `theme-color`

Aplica cores baseadas em variantes e temas definidos no projeto.

**Exemplo:**

@include theme-color('primary')

---

### `fluid-typography`

Define tipografia responsiva usando `clamp()` para adaptação entre breakpoints.

**Exemplo:**

@include fluid-typography(1rem, 1.25rem, 1.5rem)

---

## Mixins tipográficos

Estilos semânticos para textos, títulos e links.

### `typography`

Aplica estilos de texto com base em mapas semânticos (`body`, `caption`, etc.).

**Exemplo:**

@include typography('body')

---

### `headings`

Define hierarquia visual para títulos e subtítulos.

**Exemplo:**

@include heading-style(h2)

---

### `links`

Estiliza links com comportamento de hover, foco e acessibilidade.

**Exemplo:**

@include link-style

---

## Mixins de componentes

Aplicam estilos reutilizáveis em blocos visuais como botões, campos e formulários.

### `buttons`

Define estilos para botões com variantes, tamanhos e estados.

**Exemplo:**

@include button-variant('primary')

---

### `fields`

Aplica estilos em inputs, selects e textareas com consistência visual.

**Exemplo:**

@include field-style('input')

---

### `forms`

Define estrutura de formulário: grupos, labels, espaçamentos.

**Exemplo:**

@include form-group

---

### `lists`

Remove estilos padrão de listas e aplica estrutura visual.

**Exemplo:**

@include reset-list  
@include horizontal-list($spacing-sm)

---

## Mixins estruturais

Controlam layout, grid e responsividade.

### `containers`

Define largura máxima, centralização e padding lateral.

**Exemplo:**

@include container

---

### `grids`

Cria grid flexível com colunas e espaçamento baseado nos tokens.

**Exemplo:**

@include grid-columns(3)

---

### `media`

Aplica media queries com base nos breakpoints definidos.

**Exemplo:**

@include media-up('md') { ... }

---

### `responsive`

Aplica estilos que se adaptam ao viewport com lógica condicional.

**Exemplo:**

@include responsive('padding', $spacing-md)

---

## Mixins funcionais

Utilitários e comportamentos interativos.

### `utils`

Inclui funções como `truncate`, `center`, `clearfix`, entre outros.

**Exemplo:**

@include truncate  
@include center

---

### `animations`

Define transições, fades e keyframes reutilizáveis.

**Exemplo:**

@include fade-in($duration-fast)

---

### `states`

Aplica estilos para estados como hover, focus, disabled e active.

**Exemplo:**

@include state-hover { background-color: $color-hover }

---

### `accessibility`

Estilos para foco visível, leitura de tela e contraste.

**Exemplo:**

@include sr-only  
@include focus-visible

---

Todos os mixins do Codessa foram criados para consumir os tokens visuais e garantir consistência em todos os componentes. Eles podem ser combinados e estendidos conforme a necessidade do projeto.