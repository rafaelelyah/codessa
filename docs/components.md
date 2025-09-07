# Componentes

Os componentes do Codessa são blocos visuais reutilizáveis que seguem padrões semânticos e estilísticos definidos pelos tokens e mixins do sistema. Eles estão organizados por função para facilitar a manutenção e a escalabilidade.

---

## Componentes básicos

Elementos fundamentais da interface, usados em praticamente qualquer projeto.

### `buttons`

Botões com variantes visuais, tamanhos e estados interativos.

**Exemplos:**

- `.btn`  
- `.btn-primary`  
- `.btn-sm`, `.btn-lg`  
- `:hover`, `:disabled`, `:focus-visible`

---

### `inputs`

Campos de texto, selects e textareas com estilos consistentes.

**Exemplos:**

- `.input`  
- `.select`  
- `.textarea`  
- `.input-group`

---

### `forms`

Estrutura de formulário com grupos, labels e espaçamentos padronizados.

**Exemplos:**

- `.form-group`  
- `.form-label`  
- `.form-row`  
- `.form-error`

---

### `lists`

Listas ordenadas, não ordenadas e inline com reset visual.

**Exemplos:**

- `.list`  
- `.list-inline`  
- `.list-bulleted`  
- `.list-numbered`

---

### `tags`

Elementos informativos tipo pill, usados para categorias ou filtros.

**Exemplos:**

- `.tag`  
- `.tag-primary`  
- `.tag-removable`

---

### `badges`

Indicadores visuais pequenos, usados para contadores ou status.

**Exemplos:**

- `.badge`  
- `.badge-success`  
- `.badge-pill`

---

## Componentes de navegação

Estrutura e hierarquia de acesso entre páginas ou seções.

### `navs`

Menus horizontais, verticais, tabs e sidebars.

**Exemplos:**

- `.nav`  
- `.nav-tabs`  
- `.nav-vertical`  
- `.nav-sidebar`

---

### `breadcrumbs`

Navegação hierárquica entre páginas.

**Exemplos:**

- `.breadcrumb`  
- `.breadcrumb-item`  
- `.breadcrumb-separator`

---

### `pagination`

Controle de páginas em listas ou tabelas.

**Exemplos:**

- `.pagination`  
- `.page-item`  
- `.page-link`  
- `.page-active`

---

### `tabs`

Navegação por seções em uma mesma área.

**Exemplos:**

- `.tabs`  
- `.tab-item`  
- `.tab-content`

---

### `dropdowns`

Menus suspensos com interação e acessibilidade.

**Exemplos:**

- `.dropdown`  
- `.dropdown-toggle`  
- `.dropdown-menu`  
- `.dropdown-item`

---

## Componentes de layout

Blocos estruturais que definem a organização visual da página.

### `headers`

Cabeçalhos com variantes, responsividade e branding.

**Exemplos:**

- `.header`  
- `.header-logo`  
- `.header-nav`

---

### `footers`

Rodapés com links, informações e estrutura de encerramento.

**Exemplos:**

- `.footer`  
- `.footer-links`  
- `.footer-social`

---

### `sections`

Blocos estruturais como hero, content, divider, etc.

**Exemplos:**

- `.section`  
- `.section-hero`  
- `.section-divider`

---

### `asides`

Blocos laterais complementares, como filtros ou menus.

**Exemplos:**

- `.aside`  
- `.aside-sticky`  
- `.aside-right`

---

### `cards`

Blocos de conteúdo com borda, sombra e imagem.

**Exemplos:**

- `.card`  
- `.card-header`  
- `.card-body`  
- `.card-footer`

---

### `avatars`

Imagens de perfil com variantes de tamanho e forma.

**Exemplos:**

- `.avatar`  
- `.avatar-sm`, `.avatar-lg`  
- `.avatar-circle`, `.avatar-square`

---

## Componentes de interação

Elementos com comportamento dinâmico e feedback visual.

### `modals`

Janelas flutuantes com overlay e foco.

**Exemplos:**

- `.modal`  
- `.modal-header`  
- `.modal-body`  
- `.modal-footer`

---

### `accordions`

Conteúdo expansível e colapsável.

**Exemplos:**

- `.accordion`  
- `.accordion-item`  
- `.accordion-toggle`  
- `.accordion-content`

---

### `alerts`

Feedback visual para sucesso, erro, aviso e informação.

**Exemplos:**

- `.alert`  
- `.alert-success`, `.alert-error`  
- `.alert-dismissible`

---

### `galleries`

Exibição de imagens ou conteúdo visual em grid ou carrossel.

**Exemplos:**

- `.gallery`  
- `.gallery-item`  
- `.gallery-grid`

---

### `tables`

Tabelas com cabeçalho, zebra, responsividade e ordenação.

**Exemplos:**

- `.table`  
- `.table-striped`  
- `.table-responsive`

---

### `tooltips`

Dicas flutuantes exibidas em hover ou foco.

**Exemplos:**

- `.tooltip`  
- `.tooltip-top`, `.tooltip-bottom`  
- `data-tooltip="Texto"`

---

### `steppers`

Navegação em etapas, útil para formulários ou processos.

**Exemplos:**

- `.stepper`  
- `.step`  
- `.step-active`

---

### `loaders`

Indicadores de carregamento como spinner ou barra.

**Exemplos:**

- `.loader`  
- `.spinner`  
- `.progress-bar`

---

Todos os componentes do Codessa foram construídos com base nos tokens e mixins do sistema, garantindo consistência visual, acessibilidade e responsividade. Eles podem ser combinados livremente para criar interfaces completas e escaláveis.