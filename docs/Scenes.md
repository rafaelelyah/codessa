# Codessa Ecosystem — Scenes Documentation
Este documento descreve a arquitetura visual do Codessa Ecosystem a partir das scenes. Scenes representam contextos visuais compostos por tokens semânticos derivados dos seeds. Elas definem como a interface se comporta em diferentes temas, densidades e ambientes, garantindo consistência, adaptabilidade e elegância.

---

## Índice de Scenes

- [Base](#base)
- [Temas](#temas)
- [Densidades](#densidades)
- [Composição](#composição)
- [Importação](#importação)
- [Boas Práticas](#boas-práticas)

## Base
A scene.base define o contrato semântico principal do sistema. Ela organiza os tokens visuais derivados dos seeds em categorias como cor, tipografia, espaçamento, borda, motion, layout e hierarquia. Todas as variantes de scene herdam e sobrescrevem a partir dela.

## Temas
Scenes temáticas definem o comportamento visual da interface em contextos claros ou escuros. Elas sobrescrevem tokens como bg-*, text-*, border-*, interactive-* e gradient-*.

#### `scene.base.light`
Visual claro, com fundo neutro claro e texto escuro. Ideal para ambientes com alta luminosidade ou interfaces tradicionais.
### Aplicação:
```html
<body data-theme="light">
```
#### `scene.base.dark`
Visual escuro, com fundo neutro escuro e texto claro. Ideal para ambientes noturnos, interfaces focadas ou contextos de contraste elevado.
### Aplicação:
```html
<body data-theme="light">
```
## Densidades
Scenes de densidade definem o espaçamento e tamanho tipográfico da interface. Elas sobrescrevem tokens como padding-*, margin-*, gap-*, text-*, leading-* e container-*.

#### `scene.base.compact`
Interface densa, com espaçamentos reduzidos e tipografia menor. Indicada para dashboards, ambientes produtivos ou contextos com alta concentração de informação.

### Aplicação:
```html
<body data-density="compact">
```
#### `scene.base.spacious`
Interface ampla, com espaçamentos generosos e tipografia relaxada. Indicada para ambientes de leitura, interfaces desktop ou experiências visuais abertas.

### Aplicação:
```html
<body data-density="spacious">
```

## Composição
Scenes podem ser combinadas dinamicamente para adaptar a interface ao contexto do usuário:
```html
<body data-theme="dark" data-density="compact">
```
## Importação
Todas as scenes são encaminhadas via base.scenes/index.scss:
```scss
@forward 'base.scene';
@forward 'base.scene.dark';
@forward 'base.scene.light';
@forward 'base.scene.compact';
@forward 'base.scene.spacious';
```
Para consumir em sprouts ou trunks:
```scss
@use 'base.scenes' as *;
```
## Boas Práticas
- Scenes são contextos visuais compostos — não devem ser alteradas diretamente, mas sim estendidas ou combinadas conforme a necessidade
- Use atributos como data-theme e data-density para aplicar variantes sem modificar a estrutura dos componentes
- Crie novas scenes a partir da base.scene quando precisar de variações específicas para produtos, marcas ou ambientes
- Evite duplicar variáveis — prefira compor a partir das definições já existentes na base.scene e suas variantes
- Mantenha nomes semânticos e consistentes para facilitar leitura, manutenção e escalabilidade
- Scenes devem ser tratadas como camadas de contexto — não como estilos isolados ou sobrescritas pontuais