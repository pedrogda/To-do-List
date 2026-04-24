📝 To Do List
Uma aplicação de lista de tarefas completa, desenvolvida com HTML, CSS e JavaScript puro, com persistência de dados via localStorage.
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black

📸 Preview

<img width="1918" height="911" alt="Captura de tela 2026-04-24 140350" src="https://github.com/user-attachments/assets/3916f1f8-763a-4962-8a5a-03ba0a07c065" />


✨ Funcionalidades

✅ Adicionar tarefas — Digite e salve novas tarefas com um clique
✔️ Marcar como concluída — Alterna o status da tarefa visualmente
✏️ Editar tarefas — Edite o texto de uma tarefa já criada
🗑️ Remover tarefas — Exclua tarefas individualmente
🔍 Buscar tarefas — Filtre tarefas em tempo real pelo nome
🎛️ Filtrar por status — Visualize todas, concluídas ou pendentes
💾 Persistência com localStorage — As tarefas são salvas no navegador e permanecem após recarregar a página


🗂️ Estrutura do Projeto
todo-list/
│
├── index.html          # Estrutura da página
├── css/
│   └── style.css       # Estilização da aplicação
├── js/
│   └── scripts.js      # Lógica e manipulação do DOM
└── img/
    └── background.png  # Imagem de fundo

🚀 Como usar

Clone o repositório:

bash   git clone https://github.com/seu-usuario/todo-list.git

Acesse a pasta do projeto:

bash   cd todo-list

Abra o arquivo index.html no navegador.


Não é necessário instalar nenhuma dependência — o projeto roda direto no navegador.


💡 Conceitos aplicados

Manipulação do DOM com createElement, appendChild e remove
Eventos com addEventListener (submit, click, keyup, change)
Arrow functions e destructuring
Armazenamento com localStorage (getItem, setItem)
Serialização de dados com JSON.parse e JSON.stringify
Alternância de classes CSS com classList.toggle, classList.add e classList.contains
Seletores CSS avançados com querySelector e querySelectorAll
Uso do método closest() para navegação no DOM


📋 Como funciona o localStorage
As tarefas são salvas como um array de objetos no formato:
json[
  { "text": "Estudar JavaScript", "done": false },
  { "text": "Fazer o projeto", "done": true }
]
A cada ação (adicionar, editar, remover ou concluir), o array é atualizado e salvo novamente com localStorage.setItem('todos', JSON.stringify(todos)).

🤝 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request

👨‍💻 Autor
Pedro Augusto Gomes de Araújo

## 📚 Origem do Projeto

Projeto desenvolvido como exercício prático durante o curso do canal 
[Matheus Battisti - Hora de Codar](https://www.youtube.com/@matheusbattisti) no YouTube.
