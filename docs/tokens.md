# Tokens

Os tokens são a base visual e estrutural do Codessa. Eles representam valores reutilizáveis que garantem consistência, escalabilidade e facilidade de manutenção em todo o sistema.

---

## Cores (`_colors.scss`)

Define a paleta principal, secundária, de fundo, texto e estados visuais.

**Exemplos:**

$color-primary: #0055ff  
$color-secondary: #ff5500  
$color-surface: #ffffff  
$color-text: #333333  
$color-success: #28a745  
$color-error: #dc3545

---

## Tipografia (`_typography.scss`)

Define fontes, tamanhos, pesos e alturas de linha para textos.

**Exemplos:**

$font-family-base: 'Inter', sans-serif  
$font-size-sm: 0.875rem  
$font-size-md: 1rem  
$font-size-lg: 1.25rem  
$font-weight-regular: 400  
$font-weight-bold: 700  
$line-height-base: 1.6

---

## Espaçamentos (`_spacings.scss`)

Define margens, paddings e gaps utilizados em layouts e componentes.

**Exemplos:**

$spacing-xs: 4px  
$spacing-sm: 8px  
$spacing-md: 16px  
$spacing-lg: 24px  
$spacing-xl: 32px

---

## Bordas (`_borders.scss`)

Define espessuras e estilos de borda para elementos visuais.

**Exemplos:**

$border-width-thin: 1px  
$border-width-thick: 2px  
$border-style-default: solid

---

## Radius (`_radius.scss`)

Define os valores de arredondamento aplicados em botões, cards e campos.

**Exemplos:**

$radius-sm: 4px  
$radius-md: 8px  
$radius-lg: 16px

---

## Opacidade (`_opacity.scss`)

Define níveis de transparência para estados como hover, disabled e overlays.

**Exemplos:**

$opacity-disabled: 0.5  
$opacity-hover: 0.85  
$opacity-overlay: 0.6

---

## Z-Index (`_zindex.scss`)

Define a hierarquia de empilhamento entre elementos da interface.

**Exemplos:**

$zindex-base: 1  
$zindex-dropdown: 100  
$zindex-modal: 1000  
$zindex-toast: 1100

---

## Breakpoints (`_breakpoints.scss`)

Define os tamanhos de tela utilizados para responsividade.

**Exemplos:**

$breakpoint-sm: 576px  
$breakpoint-md: 768px  
$breakpoint-lg: 992px  
$breakpoint-xl: 1200px

---

## Grid System (`_grid-systems.scss`)

Define colunas, espaçamentos e largura máxima de containers.

**Exemplos:**

$grid-columns: 12  
$grid-gutter: 16px  
$container-max-width: 1200px

---

## Shadows (`_shadows.scss`)

Define sombras reutilizáveis para elevação visual de componentes.

**Exemplos:**

$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1)  
$shadow-md: 0 2px 4px rgba(0, 0, 0, 0.15)  
$shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.2)

---

## Motion (`_motion.scss`)

Define duração e easing para transições e animações.

**Exemplos:**

$duration-fast: 150ms  
$duration-medium: 300ms  
$duration-slow: 500ms  
$easing-standard: ease-in-out

---

## Text Styles (`_text-styles.scss`)

Mapas semânticos que agrupam tipografia, cor e espaçamento para estilos de texto.

**Exemplos:**

$text-styles:  
  body:  
    font-size: $font-size-md  
    font-weight: $font-weight-regular  
    line-height: $line-height-base  
    color: $color-text  

  caption:  
    font-size: $font-size-sm  
    font-weight: $font-weight-regular  
    line-height: 1.4  
    color: $color-text-muted

---

## Functions (`_functions.scss`)

Funções Sass que acessam mapas e tokens dinamicamente.

**Exemplos:**

@function get-spacing($size)  
  @return map-get($spacings, $size)

---

Cada grupo de tokens pode ser consumido diretamente nos componentes e mixins do Codessa, garantindo consistência visual e facilidade de manutenção em qualquer escala de projeto.