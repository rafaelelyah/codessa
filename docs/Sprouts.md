# Codessa Ecosystem — Sprouts Documentation

Este documento descreve os arquivos de composição semântica do Codessa Ecosystem.  
Os sprouts representam estruturas funcionais que orientam a construção de interfaces modulares, responsivas e elegantes.  
Cada sprout define um conjunto de mixins organizados por propósito visual e estrutural.

---

## Índice

- [Structures](#structures)
- [Navigation](#navigation)
- [Textual](#textual)
- [Fields](#fields)
- [Media](#media)
- [Behaviors](#behaviors)
- [Interactions](#interactions)
- [Utils](#utils)

---

## Structures

**Arquivo:** `structures.scss`  
Sprout voltado para composição estrutural da interface. Define containers, seções, grids, alinhamentos, colunas, espaçamentos e helpers utilitários.

**Blocos:**
- Containers
- Sections
- Grids
- Alignments
- Columns
- Spacings
- Helpers

**Variáveis envolvidas:**
- `width.container.*`
- `height.container.*`
- `space.layout.*`
- `grid-gap.*`
- `container-padding`

---

## Navigation

**Arquivo:** `navigation.scss`  
Sprout voltado para composição de elementos de navegação. Define menus, breadcrumbs, tabs, paginação, grupos, divisores e navegação scrollável.

**Blocos:**
- Menus & Lists
- Breadcrumbs
- Tabs
- Pagination
- Navigation Groups
- Navigation Dividers
- Navigation Scrollable

**Variáveis envolvidas:**
- `space.layout.*`
- `height.container.*`
- `width.container.*`
- `breakpoint.*`
- `font-size.*`
- `font-weight.bold`
- `border-muted`
- `size.icon.*`

---

## Textual

**Arquivo:** `textual.scss`  
Sprout voltado para composição textual da interface. Define estilos para headings, parágrafos, links, truncamento, tipografia fluida e blocos de código.

**Blocos:**
- Headings
- Paragraphs
- Links
- Fluid Type
- Truncation
- Text Helpers
- Code Blocks

**Variáveis envolvidas:**
- `font-size.*`
- `font-weight.*`
- `line-height.*`
- `letter-spacing.*`
- `space.layout.*`
- `color.text-muted`
- `color.link.*`
- `color.surface-code`
- `motion.transition.fast`
- `shadow.focus`
- `radius.sm`, `radius.xs`
- `font-family.mono`

---

## Fields

**Arquivo:** `fields.scss`  
Sprout voltado para composição de campos de formulário. Define estilos base para inputs, labels, hints, estados visuais e agrupamentos semânticos.

**Blocos:**
- Field Base
- Field Sizes
- Field States
- Labels & Hints
- Field Groups

**Variáveis envolvidas:**
- `color.bg`, `color.text`, `color.border`
- `color.error.*`, `color.success.*`, `color.text-alt`, `color.bg-alt`, `color.muted`
- `font-base`, `font-weight.medium`
- `font-size.*`, `line-height.base`
- `spacing.*`
- `radius.sm`
- `motion.transition.base`
- `shadow.focus`, `shadow.none`
- `opacity.60`
- `border-thin`, `border-style`, `border-color-focus`

---

## Media

**Arquivo:** `media.scss`  
Sprout voltado para composição responsiva e elementos de mídia. Define breakpoints semânticos, containers fluidos e proporções visuais.

**Blocos:**
- Breakpoints
- Media Containers
- Aspect Ratios

**Variáveis envolvidas:**
- `breakpoint.*`
- `width.container.*`
- `space.layout.md`

---

## Behaviors

**Arquivo:** `behaviors.scss`  
Sprout voltado para transições, animações e efeitos visuais. Define comportamentos que dão fluidez e expressão à interface.

**Blocos:**
- Transitions
- Animations
- Effects

**Variáveis envolvidas:**
- `motion-duration.base`
- `motion-duration.fast`
- `motion-duration.slow`
- `ease-in-out`
- `opacity`
- `filter.blur`

---

## Interactions

**Arquivo:** `interactions.scss`  
Sprout voltado para elementos interativos da interface. Define estilos para botões, campos com feedback visual e estados de navegação.

**Blocos:**
- Buttons
- Interactive Fields
- Navigation States

**Variáveis envolvidas:**
- `color.primary`, `color.primary-hover`, `color.on-primary`
- `color.disabled-bg`, `color.disabled-text`
- `color.border-hover`, `color.border-focus`
- `font-weight.medium`, `font-weight.bold`
- `text.md`
- `spacing.sm`, `spacing.md`
- `radius.sm`
- `motion.transition.fast`
- `shadow.focus`
- `opacity.60`
- `border.thick`


---

## Utils

**Arquivo:** `utils.scss`  
Sprout voltado para resets, elementos não estilizados e helpers funcionais. Define utilitários que sustentam a base semântica da interface.

**Blocos:**
- Resets
- Unstyled Elements
- Accessibility Helpers
- Debug Helpers

**Variáveis envolvidas:**
- `color.inherit`
- `font.inherit`
- `text-decoration.none`
- `opacity.0`
- `outline`

