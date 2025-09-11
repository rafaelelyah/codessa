![Release](https://img.shields.io/badge/release-0.9.37--alpha-orange.svg)

## 📚 Sumário

- [📚 Sumário](#sumário)
- [Estrutura técnica](#estrutura-técnica)
- [Estrutura da documentação](#estrutura-da-documentação)
- [Como começar](#como-começar)
- [Licença](#licença)
- [Contribuições](#contribuições)


## Estrutura técnica

- **Tokens Sass organizados** por tipo: cores, espaçamentos, tipografia, bordas, sombras  
- **Design atômico aplicado**: átomos, moléculas, organismos, templates e páginas  
- **Mixins reutilizáveis** como `card-light`, `section-fullscreen`, `header-center`  
- **Componentes semânticos** como `.card-8`, `.gallery-4`, `.fullscreen-section`  
- **Sistema de seções** (`fullscreen-section`, `mid-section`, `short-section`, `dynamic-section`) para estruturar páginas com clareza visual  
- **JavaScript leve e dinâmico**, com geração automática de conteúdo e lógica modular

---

# Filosofia visual

Codessa Interface parte de uma **base de cores neutras e tipografia clara**, permitindo que cada projeto ganhe sua própria identidade visual.

A estrutura Sass permite personalização total, com tokens visuais adaptáveis para qualquer estilo ou tema.

---

## Estrutura da documentação

Esta documentação está organizada em seções para facilitar o entendimento e a navegação:

### 1. [Tokens](docs/tokens.md)  
Guia completo dos valores base do sistema: cores, tipografia, espaçamentos, radius, sombras, etc.

### 2. [Mixins](docs/mixins.md)  
Lista de mixins reutilizáveis com exemplos práticos: botões, listas, animações, responsividade.

### 3. [Componentes](docs/components.md)  
Estilos aplicáveis a blocos visuais como cards, modais, formulários, tabelas, navegação e muito mais.

### 4. [Pages](docs/pages.md)  
Páginas HTML individuais prontas para uso, como landing, login, dashboard, checkout, etc.

### 5. [Templates](docs/templates.md)  
Conjuntos completos de páginas agrupadas por propósito (ex: E-Commerce, SaaS, Portfolio). São vendidos separadamente e não fazem parte do pacote gratuito.

### 6. [Core](docs/core.md)  
Scripts JavaScript centrais do projeto, incluindo o ponto de entrada e lógica compartilhada.

### 7. [Estrutura do Projeto](docs/estrutura.md)  
Explicação da organização de pastas, arquivos Sass e boas práticas de arquitetura.

---

## Como começar

1. Instale as dependências do projeto com `npm install`
2. Inicie o ambiente de desenvolvimento com `npm run dev`
3. Os estilos são escritos em **Sass** e compilados automaticamente pelo **Vite**
4. O projeto utiliza **JavaScript puro**, sem frameworks, para garantir leveza e flexibilidade
5. Explore os tokens, mixins e componentes para construir interfaces consistentes
6. Utilize as páginas prontas ou adquira templates completos para acelerar seu projeto

> O build final será gerado na pasta `public/`, pronta para deploy via GitHub Pages, Firebase Hosting ou outro serviço.

---

## Licença

Este módulo segue a licença definida no repositório principal do [Codessa Studio](https://github.com/rafaelelyah/codessa-studio).  
As páginas incluídas em `/src/pages` e os templates em `/src/templates` são produtos premium e requerem licença para uso.

---

## Contribuições

Sugestões, melhorias e correções são bem-vindas.  
Você pode abrir uma issue ou enviar um pull request com suas propostas.