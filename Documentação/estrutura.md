# Estrutura do Projeto

O Codessa foi projetado com uma arquitetura modular e semântica, facilitando manutenção, escalabilidade e reutilização. A estrutura de pastas separa claramente os estilos, scripts, dados, páginas e ativos visuais.

---

## Estrutura principal

src/  
├── assets/              → Imagens e ícones usados no projeto  
│   ├── icons/  
│   ├── img/  
├── core/                → Scripts JS centrais e lógica compartilhada  
├── data/                → Arquivos de dados, JSONs ou mocks  
├── pages/               → Páginas HTML individuais prontas para uso  
├── previews/            → Imagens de demonstração das páginas  
├── UI/                  → Estilos Sass organizados por função  
│   ├── base/            → Estilos globais: reset, body, acessibilidade  
│   ├── components/      → Estilos de componentes visuais e funcionais  
│   ├── mixings/         → Mixins Sass reutilizáveis agrupados por função  
│   ├── pages/           → Estilos específicos por página  
│   ├── themes/          → Temas visuais e variações de cor  
│   ├── tokens/          → Valores base: cores, tipografia, espaçamentos, etc.  
│   ├── _index.scss      → Arquivo que centraliza os imports Sass  
│   ├── main.scss        → Arquivo principal compilado pelo Vite  
├── index.html           → Entrada principal da aplicação

---

## Detalhamento das pastas

### `/assets`

Contém imagens e ícones utilizados nos templates e componentes.

### `/core`

Scripts JavaScript centrais, utilitários e lógica compartilhada.

### `/data`

Arquivos de dados estáticos, como JSONs, mocks ou configurações.

### `/pages`

Páginas HTML prontas para uso individual, como `landing.html`, `login.html`, `dashboard.html`, etc.

### `/previews`

Imagens de demonstração das páginas e templates, usadas para documentação e vitrine.

### `/UI`

Pasta principal de estilos Sass, dividida por função:

- `base/` — Reset, estilos globais e acessibilidade  
- `components/` — Estilos de componentes visuais e funcionais  
- `mixings/` — Mixins Sass reutilizáveis agrupados por função  
- `pages/` — Estilos específicos por página  
- `themes/` — Variações visuais e temas customizados  
- `tokens/` — Valores base do design system  
- `_index.scss` — Centraliza os imports de todos os módulos  
- `main.scss` — Arquivo principal que será compilado pelo Vite

---

## Fluxo de uso

1. Os **tokens** definem os valores visuais e estruturais base.  
2. Os **mixins** consomem esses tokens para gerar estilos reutilizáveis.  
3. Os **componentes** aplicam os mixins e tokens em blocos visuais.  
4. Os **estilos de página** personalizam layouts específicos.  
5. As **páginas HTML** usam os componentes para formar interfaces completas.  
6. Os **templates** (em breve) agrupam páginas em soluções completas.

---

Essa estrutura permite que o Codessa seja usado como design system, framework CSS ou base para produtos prontos.
