![Status](https://img.shields.io/badge/status-planning-blue.svg)

# Codessa

## Sumário
- [Visão Geral](#visão-geral)
- [Módulos do Ecossistema](#módulos-do-ecossistema)
  - [Growing](#codessa-growing)
  - [Flow](#codessa-flow)
  - [Bloom](#codessa-bloom)
  - [Canopy](#codessa-canopy)
  - [Meadow](#codessa-meadow)
  - [Nest](#codessa-nest)
- [Documentação por Módulo](#documentação-por-módulo)
- [Autor](#autor)
- [Licença](#licença)
- [Contribuições](#contribuições)

## Visão geral

Codessa é um ecossistema modular e altamente personalizável para projetos criativos, integrando ferramentas visuais, de gestão, publicação e distribuição. Cada módulo pode ser utilizado separadamente ou em conjunto, e o sistema foi projetado para permitir integração pontual entre funcionalidades dos módulos conforme a necessidade do usuário.

O usuário pode ativar apenas os recursos que deseja, como por exemplo:
- Usar o Bloom para portfólio e ativar o submódulo de vendas do Canopy para comercializar obras.
- Usar o Meadow para cursos e ativar o checkout do Canopy para vender acesso.
- Integrar wiki do Meadow ao Bloom para tutoriais.

Todos os módulos expõem APIs, componentes e funcionalidades que podem ser integradas em outros módulos, mantendo identidade visual via Growing e orquestração central via Flow. O Nest serve como hub de assets e integrações externas para todo o ecossistema.

## Módulos do ecossistema

### Em desenvolvimento

- **Codessa Growing**  
  Design System modular — base Sass, componentes semânticos e arquitetura atômica. Growing serve de base visual para todos os outros módulos.

### Em planejamento

- **Codessa Flow**  
  Gestor visual e funcional de projetos criativos — quadros, timelines, escopos, documentação, versionamento e orquestração de integrações entre módulos.

- **Codessa Bloom**  
  Plataforma de portfólio multimídia — publicação de projetos, obras, blogs, artigos, narrativas visuais, com possibilidade de integrar módulos de venda do Canopy.

- **Codessa Canopy**  
  Plataforma de e-commerce modular — lojas, vitrines digitais, checkout, pagamentos, podendo ser integrado pontualmente em outros módulos.

- **Codessa Meadow**  
  Plataforma de biblioteca, wiki e cursos — documentação, tutoriais, ensino online, podendo integrar módulos de venda ou portfólio.

- **Codessa Nest**  
  Hub de assets e integrações externas — distribuição e gestão de imagens, vídeos, documentos, além de conectar o ecossistema a serviços externos.

## Documentação por módulo

Cada módulo possui seu próprio `README.md` com instruções específicas de uso, estrutura técnica e visão funcional.  
As ferramentas podem utilizar diferentes stacks (Vite, Node, Sass, Python, etc.), e os comandos variam conforme o módulo.

## Autor
Desenvolvido por Rafael Elyah.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contribuições

Sugestões, melhorias e correções são bem-vindas.  
Você pode abrir uma issue ou enviar um pull request com suas propostas.