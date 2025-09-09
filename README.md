<p align="center" style="margin: 100px 0;">
  <img src="src/assets/img/logo.png" alt="Codessa logo" width="300">
</p>


**Codessa** é um Design System modular e escalável, criado para desenvolvedores e criativos que buscam agilidade, consistência e estilo. Com base em **Sass customizável**, **JavaScript dinâmico** e uma arquitetura pensada para **design atômico**, Codessa oferece uma estrutura leve e poderosa para construir interfaces responsivas com rapidez e controle total.

---

## 🧱 Estrutura técnica

- **Tokens Sass organizados** por tipo: cores, espaçamentos, tipografia, bordas  
- **Design atômico aplicado**: estrutura dividida em átomos, moléculas, organismos, templates e páginas  
- **Mixins reutilizáveis** para aplicar estilos como `card-light`, `section-fullscreen`, `header-center`, entre outros  
- **Componentes semânticos** como `.card-8`, `.gallery-4`, `.fullscreen-section`, que seguem uma lógica visual clara e modular  
- **Geração automática de conteúdo** via JavaScript, que lê pastas de imagens e monta galerias dinamicamente  
- **Sistema de seções** (`fullscreen-section`, `mid-section`, `short-section`, `dynamic-section`) para estruturar páginas com clareza visual e responsividade

---

## 🎨 Filosofia visual

Codessa nasce com uma base neutra e enxuta — escalas de cinza, tipografia padrão e espaçamentos básicos — permitindo que cada projeto ganhe sua própria identidade visual.  
A estrutura Sass permite personalização total, com tokens visuais que podem ser adaptados para qualquer estilo ou tema.

---

## 🚧 Em desenvolvimento

Codessa está em construção ativa. Futuramente, o projeto poderá incluir:

- Núcleos específicos para diferentes tipos de site (landing pages, sistemas, e-commerce, etc.)  
- Templates prontos com identidade visual aplicada  
- Ferramentas visuais para criação de páginas

---

## ⚙️ Como usar o Codessa

Para rodar e manter o projeto localmente, utilize os seguintes comandos via terminal:

**Preview do src**  
`npm run dev`

**Build para produção**  
`npm run build`

**Preview do build**  
`npm run preview`

---

## 🚀 Release automático

Codessa vem com um sistema de release integrado que cuida de tudo: versionamento, log, build, deploy, commit, criação de tag Git e atualização automática do changelog.

### 🔧 Comando único

Use o comando abaixo para criar uma nova versão e publicar automaticamente:

`npm run release patch "Adicionando sistema de navegação vertical" beta`

### 🧠 O que esse comando faz

1. Atualiza a versão no `package.json`
2. Registra o comentário em `version-log.json`
3. Gera o build com Vite
4. Copia o build para a pasta `docs/`
5. Atualiza o arquivo `CHANGELOG.md` com base no histórico
6. Faz `git add`, `commit`, `push`
7. Cria uma tag Git com a versão (`v0.4.4-beta`)
8. Faz `git push --tags`

### 📦 Tipos de versão

| Tipo | Quando usar |
|------|-------------|
| `patch` | Pequenas correções ou ajustes |
| `minor` | Novos recursos ou componentes |
| `major` | Mudanças estruturais ou quebra de compatibilidade |
| `alpha` | Versão instável, em testes iniciais |
| `beta` | Versão funcional, em validação |
| `rc.1` | Release candidate, pronto para produção |

### 📝 Histórico de versões

O histórico completo fica salvo em `version-log.json`, com data, versão e comentário.  
O arquivo `CHANGELOG.md` é gerado automaticamente após cada release. **Não edite manualmente.**

### ⚙️ Requisitos

- Node.js 18+
- Git configurado e com acesso ao repositório remoto
- GitHub Pages ativado para servir a pasta `/docs`

---

## 📬 Contribuições

Sugestões, melhorias e ideias são bem-vindas.  
Este projeto está sendo desenvolvido com foco em modularidade, clareza e liberdade criativa.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito por [Rafael Elyah](https://github.com/rafaelelyah)
