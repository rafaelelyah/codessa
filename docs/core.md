# Core

A pasta `core/` concentra os arquivos JavaScript centrais do Codessa. Ela é responsável por inicializar comportamentos, aplicar interações e agrupar funções reutilizáveis que afetam o projeto como um todo.

---

## Estrutura atual

core/  
├── main.js          → Ponto de entrada da aplicação  
├── (futuros arquivos)  
│   ├── utils.js     → Funções utilitárias globais  
│   ├── api.js       → Integrações com serviços externos  
│   ├── config.js    → Configurações globais e constantes

---

## `main.js`

Este arquivo é o ponto de entrada principal do projeto. Ele pode conter:

- Inicialização de componentes interativos  
- Aplicação de eventos globais  
- Importação de módulos JS  
- Execução de scripts relacionados à interface

**Exemplo de uso:**

import { initDropdowns } from './utils.js'  
initDropdowns()

document.querySelectorAll('.modal-toggle').forEach(btn => {  
 btn.addEventListener('click', () => {  
  document.querySelector('.modal').classList.toggle('open')  
 })  
})

---

## Boas práticas

- Mantenha o `main.js` limpo e modular, importando funções de outros arquivos conforme o projeto cresce  
- Evite lógica duplicada — centralize comportamentos reutilizáveis em `utils.js` ou módulos específicos  
- Use nomes semânticos para funções e variáveis, alinhados com os componentes do Codessa  
- Se necessário, crie uma pasta `modules/` dentro de `core/` para agrupar funcionalidades específicas

---

## Integração com o Vite

O `main.js` é referenciado no `index.html` e compilado pelo Vite.  
Você pode usar `import`/`export` nativamente, e o Vite cuidará do bundling e hot reload.

**Exemplo no HTML:**

<script type="module" src="/src/core/main.js"></script>

---

A pasta `core/` é onde o Codessa ganha vida — conectando os estilos visuais com os comportamentos interativos. Ela foi pensada para crescer junto com o projeto, sem perder clareza ou modularidade.
