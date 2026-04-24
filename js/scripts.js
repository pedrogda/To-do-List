// SELEÇÃO DE ELEMENTOS
const todoForm = document.querySelector('#todo-form'); // querySelector é mais flexível, pois permite selecionar por qualquer seletor CSS, enquanto getElementById é específico para IDs. Além disso, querySelector retorna o primeiro elemento que corresponde ao seletor, enquanto getElementById retorna o elemento com o ID especificado.
const todoInput = document.querySelector('#todo-input'); // O querySelector é um método do DOM (Document Object Model) que permite selecionar o primeiro elemento que corresponde a um seletor CSS especificado. Ele é mais flexível do que métodos como getElementById, pois pode selecionar elementos com base em classes, atributos, hierarquia, etc. Por exemplo, você pode usar querySelector para selecionar um elemento com uma classe específica, um elemento dentro de outro elemento, ou até mesmo um elemento com um atributo específico.
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const todoList = document.querySelector('#todo-list');
const cancelEditBtn = document.querySelector('#cancel-btn');
const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-button');
const filterSelect = document.querySelector('#filter-select');

let oldInputValue; // A declaração let oldInputValue; é usada para declarar uma variável chamada oldInputValue sem atribuir um valor inicial a ela. Isso significa que a variável existe, mas seu valor é indefinido até que seja atribuído posteriormente no código. No contexto de uma aplicação de lista de tarefas, essa variável pode ser usada para armazenar o valor antigo do campo de entrada (input) antes de ser editado, permitindo que você compare o valor antigo com o novo valor após a edição ou para restaurar o valor antigo se o usuário cancelar a edição.



// FUNÇÕES

const saveTodo = (text, done = 0, save = 1) => { // A função saveTodo é uma função de seta (arrow function) que recebe um parâmetro chamado text. O propósito dessa função é criar um novo elemento de tarefa (todo) com o texto fornecido e adicioná-lo à lista de tarefas no DOM (Document Object Model). A implementação específica da função não foi fornecida, mas geralmente ela incluiria a criação de um novo elemento HTML para a tarefa, definição do conteúdo do elemento com o valor do parâmetro text e adição desse elemento à estrutura da lista de tarefas existente.
    const todo = document.createElement('div'); // O método document.createElement('div') é usado para criar um novo elemento HTML do tipo 'div'. Ele retorna uma referência ao novo elemento criado, que pode ser manipulado e adicionado ao DOM (Document Object Model) posteriormente. No contexto de uma aplicação de lista de tarefas, esse novo elemento 'div' provavelmente será usado para representar uma nova tarefa na lista, onde o conteúdo do elemento pode ser definido com o texto da tarefa e outros elementos, como botões de ação, podem ser adicionados dentro desse 'div'.
    todo.classList.add('todo'); // O método classList.add('todo') é uma classe 'todo' no arquivo CSS. Ao adicionar essa classe, o elemento pode ser estilizado de acordo com as regras definidas para a classe 'todo', permitindo que ele se destaque visualmente como uma taresado para adicionar a classe CSS 'todo' ao elemento HTML representado pela variável todo. Isso é útil para aplicar estilos específicos a esse elemento, como formatação, cores, margens, etc., com base na definição dfa na lista de tarefas.
    const todoTitle = document.createElement('h3'); // O método document.createElement('h3') é usado para criar um novo elemento HTML do tipo 'h3'. Ele retorna uma referência ao novo elemento criado, que pode ser manipulado e adicionado ao DOM (Document Object Model) posteriormente. No contexto de uma aplicação de lista de tarefas, esse novo elemento 'h3' provavelmente será usado para representar o título ou o texto da tarefa dentro do elemento 'div' que representa a tarefa. O conteúdo do elemento 'h3' pode ser definido com o texto da tarefa, permitindo que ele seja exibido como parte da estrutura da tarefa na lista de tarefas.
    todoTitle.innerText = text;
    todo.appendChild(todoTitle); // O método appendChild(todoTitle) é usado para adicionar o elemento todoTitle como um filho do elemento todo. Isso significa que o elemento todoTitle será inserido dentro do elemento todo na estrutura do DOM (Document Object Model). No contexto de uma aplicação de lista de tarefas, isso é útil para organizar a estrutura da tarefa, onde o título da tarefa (representado por todoTitle) é adicionado como parte do conteúdo do elemento que representa a tarefa (todo). Dessa forma, o título da tarefa será exibido dentro do elemento da tarefa na interface do usuário.
    const doneBtn = document.createElement('button'); // O método document.createElement('button') é usado para criar um novo elemento HTML do tipo 'button'. Ele retorna uma referência ao novo elemento criado, que pode ser manipulado e adicionado ao DOM (Document Object Model) posteriormente. No contexto de uma aplicação de lista de tarefas, esse novo elemento 'button' provavelmente será usado para representar um botão de ação, como um botão para marcar a tarefa como concluída ou para excluir a tarefa. O conteúdo do botão pode ser definido com um ícone ou texto, e ele pode ser adicionado como um filho do elemento que representa a tarefa para permitir que os usuários interajam com a tarefa na interface do usuário.
    doneBtn.classList.add('finish-todo'); // O método classList.add('finish-todo') é usado para adicionar a classe CSS 'finish-todo' ao elemento HTML representado pela variável doneBtn. Isso é útil para aplicar estilos específicos a esse botão, como formatação, cores, margens, etc., com base na definição da classe 'finish-todo' no arquivo CSS. Ao adicionar essa classe, o botão pode ser estilizado de acordo com as regras definidas para a classe 'finish-todo', permitindo que ele se destaque visualmente como um botão de ação para marcar a tarefa como concluída na lista de tarefas.
    //A função saveTodo é responsável por criar um novo elemento de tarefa (todo) que corresponde aos estilos CSS aplicados. Ao criar o elemento HTML para a tarefa e adicionar a classe CSS 'finish-todo' ao botão associado, a função está garantindo que o novo elemento de tarefa seja estilizado de acordo com as regras definidas para essa classe no arquivo CSS. Dessa forma, quando a tarefa for exibida na interface do usuário, ela terá a aparência e o comportamento visual definidos pelos estilos CSS aplicados à classe 'finish-todo'.
    const doneIcon = document.createElement('i'); // O método document.createElement('i') é usado para criar um novo elemento HTML do tipo 'i'. Ele retorna uma referência ao novo elemento criado, que pode ser manipulado e adicionado ao DOM (Document Object Model) posteriormente. No contexto de uma aplicação de lista de tarefas, esse novo elemento 'i' provavelmente será usado para representar um ícone dentro do botão de ação (doneBtn) que marca a tarefa como concluída. O conteúdo do elemento 'i' pode ser definido com uma classe de ícone específica, como 'fa-solid fa-check', para exibir um ícone de marca de seleção, indicando visualmente que a tarefa foi concluída. O elemento 'i' pode ser adicionado como um filho do botão de ação para que o ícone seja exibido dentro do botão na interface do usuário.
    doneIcon.classList.add('fa-solid', 'fa-check'); // O método classList.add('fa-solid', 'fa-check') é usado para adicionar as classes CSS 'fa-solid' e 'fa-check' ao elemento HTML representado pela variável doneIcon. Essas classes são geralmente associadas a bibliotecas de ícones, como Font Awesome, e são usadas para exibir um ícone específico. No contexto de uma aplicação de lista de tarefas, essas classes provavelmente estão sendo usadas para exibir um ícone de marca de seleção (check) dentro do botão de ação (doneBtn) que marca a tarefa como concluída. Ao adicionar essas classes, o elemento doneIcon será estilizado de acordo com as regras definidas para as classes 'fa-solid' e 'fa-check' no arquivo CSS, permitindo que o ícone
    todo.appendChild(doneBtn) // O método appendChild(doneBtn) é usado para adicionar o elemento doneBtn como um filho do elemento todo. Isso significa que o elemento doneBtn será inserido dentro do elemento todo na estrutura do DOM (Document Object Model). No contexto de uma aplicação de lista de tarefas, isso é útil para organizar a estrutura da tarefa, onde o botão de ação (representado por doneBtn) é adicionado como parte do conteúdo do elemento que representa a tarefa (todo). Dessa forma, o botão de ação estará disponível dentro do elemento da tarefa na interface do usuário, permitindo que os usuários interajam com a tarefa, como marcar a tarefa como concluída ou excluir a tarefa.
    doneBtn.appendChild(doneIcon); // O método appendChild(doneIcon) é usado para adicionar o elemento doneIcon como um filho do elemento doneBtn. Isso significa que o elemento doneIcon será inserido dentro do elemento doneBtn na estrutura do DOM (Document Object Model). No contexto de uma aplicação de lista de tarefas, isso é útil para organizar a estrutura do botão de ação, onde o ícone (representado por doneIcon) é adicionado como parte do conteúdo do botão (doneBtn). Dessa forma, o ícone estará disponível dentro do botão na interface do usuário, permitindo que os usuários visualizem o ícone associado à ação de marcar a tarefa como concluída.

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen');
    todo.appendChild(editBtn)
    editBtn.appendChild(editIcon);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-todo');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid', 'fa-trash');
    todo.appendChild(removeBtn);
    removeBtn.appendChild(removeIcon);

    //Utilizando dados da localStorage para marcar tarefas como concluídas
    if(done){
        todo.classList.add('done');
    }

    if(save){
        saveTodoLocalStorage({text, done: 0}); // A função saveTodoLocalStorage({title: text, done: done}) é chamada para salvar os dados da tarefa na localStorage do navegador. O objeto passado como argumento contém as propriedades title e done, que representam o título da tarefa e seu status de conclusão, respectivamente. A implementação específica da função saveTodoLocalStorage não foi fornecida, mas geralmente ela seria responsável por armazenar esses dados na localStorage usando métodos como localStorage.setItem() para que as tarefas possam ser persistidas mesmo após a página ser recarregada ou o navegador ser fechado. Dessa forma, os usuários podem manter suas tarefas salvas e acessá-las posteriormente.
    }

    todoList.appendChild(todo); // O método appendChild(todo) é usado para adicionar o elemento todo como um filho do elemento todoList. Isso significa que o elemento todo será inserido dentro do elemento todoList na estrutura do DOM (Document Object Model). No contexto de uma aplicação de lista de tarefas, isso é útil para organizar a estrutura da lista de tarefas, onde cada tarefa (representada por todo) é adicionada como um item dentro da lista de tarefas (todoList). Dessa forma, a nova tarefa será exibida na interface do usuário como parte da lista de tarefas, permitindo que os usuários visualizem e interajam com ela.

    todoInput.value = ''; // O código todoInput.value = ''; é usado para limpar o valor do campo de entrada (input) com o ID "todo-input". Isso é útil para resetar o campo de entrada após o usuário adicionar uma nova tarefa à lista de tarefas. Ao definir o valor do campo de entrada como uma string vazia (''), o campo será limpo, permitindo que o usuário digite uma nova tarefa sem precisar apagar manualmente o texto anterior. Essa prática melhora a experiência do usuário, tornando mais fácil e eficiente adicionar várias tarefas consecutivas à lista de tarefas.

    todoInput.focus(); // O método focus() é usado para definir o foco em um elemento específico, como um campo de entrada (input). No contexto de uma aplicação de lista de tarefas, chamar todoInput.focus() após adicionar uma nova tarefa é útil para garantir que o campo de entrada esteja ativo e pronto para receber a próxima tarefa que o usuário deseja adicionar. Isso melhora a experiência do usuário, permitindo que ele continue digitando novas tarefas sem precisar clicar manualmente no campo de entrada para ativá-lo novamente.


}

const toggleForms = () => { // A função toggleForms é uma função de seta (arrow function) que provavelmente é usada para alternar a visibilidade dos formulários de edição e adição de tarefas em uma aplicação de lista de tarefas. A implementação específica da função não foi fornecida, mas geralmente ela manipularia as classes CSS ou estilos dos formulários para mostrar um formulário e ocultar o outro, permitindo que o usuário edite uma tarefa existente ou adicione uma nova tarefa à lista de tarefas. Essa funcionalidade é útil para melhorar a experiência do usuário, permitindo que ele alterne facilmente entre os modos de edição e adição de tarefas na interface do usuário.
    editForm.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
}

const updateTodo = (text) => { // A função updateTodo é uma função de seta (arrow function) que recebe um parâmetro chamado text. O propósito dessa função é atualizar o título ou o texto de uma tarefa existente na lista de tarefas com o novo valor fornecido. A implementação específica da função não foi fornecida, mas geralmente ela incluiria a localização do elemento que representa a tarefa a ser editada, atualização do conteúdo do elemento com o valor do parâmetro text e reflexão das mudanças na interface do usuário para mostrar o título atualizado da tarefa.
    const todos = document.querySelectorAll('.todo'); // O método document.querySelectorAll('.todo') é usado para selecionar todos os elementos do DOM (Document Object Model) que possuem a classe CSS 'todo'. Ele retorna uma NodeList contendo todos os elementos correspondentes. No contexto de uma aplicação de lista de tarefas, isso é útil para obter uma coleção de todas as tarefas atualmente exibidas na interface do usuário, permitindo que você percorra essa coleção e encontre a tarefa específica que deseja atualizar com o novo título ou texto fornecido.
    todos.forEach((todo) => { // O método forEach() é usado para iterar sobre cada elemento da NodeList retornada por document.querySelectorAll('.todo'). Ele executa a função de callback fornecida para cada elemento da coleção, permitindo que você acesse e manipule cada tarefa individualmente. No contexto de uma aplicação de lista de tarefas, isso é útil para percorrer todas as tarefas exibidas na interface do usuário e encontrar a tarefa específica que corresponde ao título antigo (oldInputValue) para atualizar seu título com o novo valor (text) fornecido.
        let todoTitle = todo.querySelector('h3'); // O método querySelector('h3') é usado para selecionar o primeiro elemento 'h3' dentro do elemento todo. Ele retorna uma referência ao elemento 'h3' encontrado, que pode ser manipulado posteriormente. No contexto de uma aplicação de lista de tarefas, isso é útil para acessar o título ou o texto da tarefa representada pelo
        if (todoTitle.innerText === oldInputValue) { // A condição if(todoTitle.innerText === oldInputValue) é usada para verificar se o texto contido no elemento 'h3' (representado por todoTitle) é igual ao valor armazenado na variável oldInputValue. Isso é útil para identificar a tarefa específica que corresponde ao título antigo (oldInputValue) que o usuário deseja editar. Se a condição for verdadeira, significa que a tarefa encontrada é a tarefa que deve ser atualizada com o novo título ou texto fornecido.
            todoTitle.innerText = text; // O código todoTitle.innerText = text; é usado para atualizar o texto contido no elemento 'h3' (representado por todoTitle) com o novo valor fornecido no parâmetro text. Isso é útil para refletir as mudanças na interface do usuário, mostrando o título atualizado da tarefa que foi editada. Ao atribuir o novo valor ao innerText do elemento 'h3', a tarefa exibida na lista de tarefas será atualizada com o novo título ou texto fornecido pelo usuário.
            updateTodoLocalStorage(oldInputValue, text); // A função updateTodoLocalStorage(oldInputValue, text) é chamada para atualizar os dados da tarefa na localStorage do navegador. O argumento oldInputValue representa o título antigo da tarefa que está sendo editada, enquanto o argumento text representa o novo título ou texto que deve ser atualizado. A implementação específica da função updateTodoLocalStorage não foi fornecida, mas geralmente ela seria responsável por localizar a tarefa correspondente na localStorage usando o título antigo (oldInputValue) e atualizar seu valor com o novo título ou texto (text) fornecido. Dessa forma, as mudanças feitas pelo usuário na interface do usuário também serão refletidas nos dados armazenados na localStorage, garantindo que as tarefas editadas sejam persistidas mesmo após a página ser recarregada ou o navegador ser fechado.
        }
    })
}


const getSearchedTodos = (search) => {
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        const todoTitle = todo.querySelector('h3').innerText.toLowerCase();
        if (!todoTitle.includes(search.toLowerCase())) {
            todo.style.display = 'none';
        } else {
            todo.style.display = 'flex'; // ← isso estava faltando
        }
    });
}

const filterTodos = (filterValue) => {
    const todos = document.querySelectorAll('.todo');
    switch(filterValue){
        case 'all':
            todos.forEach((todo) => todo.style.display = 'flex');
            break;
        case 'completed':
            todos.forEach((todo) => todo.classList.contains('done') ? todo.style.display = 'flex' : todo.style.display = 'none');
            break;
        case 'pending':
            todos.forEach((todo) => !todo.classList.contains('done') ? todo.style.display = 'flex' : todo.style.display = 'none');
            break;
        default:
            break;
    }
}




// EVENTOS

todoForm.addEventListener('submit', (e) => { // O método addEventListener é usado para adicionar um ouvinte de eventos a um elemento do DOM (Document Object Model). Ele permite que você especifique o tipo de evento que deseja ouvir (como 'click', 'submit', 'mouseover', etc.) e uma função de callback que será executada quando o evento ocorrer. No exemplo fornecido, o evento 'submit' é adicionado ao formulário de tarefas, e a função de callback é executada quando o formulário é enviado. O parâmetro 'e' representa o objeto do evento, que contém informações sobre o evento ocorrido.
    e.preventDefault(); // O método preventDefault() é usado para impedir o comportamento padrão de um evento. No contexto de um formulário, quando o evento 'submit' é acionado, o comportamento padrão é enviar os dados do formulário e recarregar a página. Ao chamar e.preventDefault(), você está impedindo que isso aconteça, permitindo que você controle o que acontece quando o formulário é enviado, como validar os dados ou realizar outras ações antes de enviar os dados para o servidor.
    const inputValue = todoInput.value; // O código const inputValue = todoInput.value; é usado para obter o valor atual do campo de entrada (input) com o ID "todo-input". O método .value é uma propriedade dos elementos de formulário que retorna o valor atual do campo de entrada. Neste caso, a variável inputValue armazenará o texto que o usuário digitou no campo de entrada, permitindo que você use esse valor posteriormente, como para salvar uma nova tarefa na lista de tarefas.
    if (inputValue) { // A condição if (inputValue) é usada para verificar se a variável inputValue contém um valor que é considerado "truthy" em JavaScript. Em JavaScript, os valores "falsy" incluem: false, 0, "", null, undefined e NaN. Portanto, se inputValue for uma string vazia (""), null, undefined ou qualquer outro valor "falsy", a condição será avaliada como falsa e o bloco de código dentro do if não será executado. Por outro lado, se inputValue contiver uma string não vazia ou qualquer outro valor "truthy", a condição será avaliada como verdadeira e o código dentro do if será executado. Isso é útil para garantir que apenas valores válidos sejam processados, como no caso de adicionar uma nova tarefa à lista de tarefas.
        saveTodo(inputValue); // A função saveTodo(inputValue) é chamada para salvar a nova tarefa na lista de tarefas. O argumento inputValue é passado para a função, que provavelmente irá criar um novo elemento de tarefa com o texto fornecido e adicioná-lo à lista de tarefas no DOM (Document Object Model). A implementação específica da função saveTodo não foi fornecida, mas geralmente ela seria responsável por criar um novo elemento HTML para a tarefa, definir seu conteúdo com o valor de inputValue e adicioná-lo à estrutura da lista de tarefas existente.
    }

});

document.addEventListener('click', (e) => { // O método addEventListener é usado para adicionar um ouvinte de eventos a um elemento do DOM (Document Object Model). Ele permite que você especifique o tipo de evento que deseja ouvir (como 'click', 'submit', 'mouseover', etc.) e uma função de callback que será executada quando o evento ocorrer. No exemplo fornecido, o evento 'click' é adicionado ao objeto document, o que significa que a função de callback será executada sempre que um clique ocorrer em qualquer parte do documento. O parâmetro 'e' representa o objeto do evento, que contém informações sobre o evento ocorrido, como o elemento clicado, as coordenadas do clique, etc. Isso é útil para implementar funcionalidades que dependem de cliques em elementos específicos, como marcar uma tarefa como concluída, editar uma tarefa ou excluir uma tarefa na lista de tarefas.
    const targetElement = e.target; // O código const targetElement = e.target; é usado para obter o elemento específico que foi clicado durante um evento de clique. O objeto do evento (e) contém uma propriedade chamada target, que se refere ao elemento DOM (Document Object Model) que disparou o evento. Ao atribuir e.target à variável targetElement, você pode acessar e manipular o elemento específico que foi clicado, permitindo que você implemente funcionalidades específicas com base no elemento clicado, como marcar uma tarefa como concluída, editar uma tarefa ou excluir uma tarefa na lista de tarefas.
    const parentElement = targetElement.closest('div'); // O método closest('div') é usado para encontrar o ancestral mais próximo do elemento targetElement que corresponde ao seletor 'div'. Ele percorre a hierarquia do DOM (Document Object Model) a partir do elemento targetElement e retorna o primeiro elemento ancestral que é uma 'div'. Se nenhum elemento ancestral correspondente for encontrado, ele retornará null. No contexto de uma aplicação de lista de tarefas, isso pode ser útil para identificar o contêiner da tarefa (representado por uma 'div') que contém o elemento clicado, permitindo que você manipule ou acesse informações relacionadas à tarefa específica associada ao elemento clicado.
    let todoTitle; // A declaração let todoTitle; é usada para declarar uma variável chamada todoTitle sem atribuir um valor inicial a ela. Isso significa que a variável existe, mas seu valor é indefinido até que seja atribuído posteriormente no código. No contexto de uma aplicação de lista de tarefas, essa variável pode ser usada para armazenar o título ou o texto de uma tarefa específica, permitindo que você acesse e manipule esse valor em outras partes do código, como ao editar uma tarefa ou exibir detalhes da tarefa na interface do usuário.
    if (parentElement && parentElement.querySelector('h3')) { // A condição if(parentElement && parentElement.querySelector('h3')) é usada para verificar se o elemento parentElement existe e se ele contém um elemento 'h3' dentro dele. O método querySelector('h3') é usado para procurar um elemento 'h3' dentro do elemento parentElement. Se ambos os elementos existirem, a condição será avaliada como verdadeira e o código dentro do if será executado. Isso é útil para garantir que você está trabalhando com um contêiner de tarefa válido que contém um título (representado por 'h3') antes de tentar acessar ou manipular o título da tarefa.
        todoTitle = parentElement.querySelector('h3').innerText; // O código todoTitle = parentElement.querySelector('h3').innerText; é usado para obter o texto do elemento 'h3' que está dentro do elemento parentElement. O método querySelector('h3') é usado para encontrar o primeiro elemento 'h3' dentro do elemento parentElement, e a propriedade innerText é usada para obter o texto contido nesse elemento 'h3'. O valor obtido é então atribuído à variável todoTitle, permitindo que você acesse e manipule o título ou o texto da tarefa específica associada ao elemento clicado na lista de tarefas.
    }
    if (targetElement.classList.contains('finish-todo')) { // O método classList.contains('finish-todo') é usado para verificar se o elemento targetElement possui a classe CSS 'finish-todo'. Ele retorna true se a classe estiver presente no elemento e false caso contrário. No contexto de uma aplicação de lista de tarefas, essa verificação é útil para determinar se o elemento clicado é um botão de ação para marcar a tarefa como concluída. Se a classe 'finish-todo' estiver presente, isso indica que o usuário clicou no botão de ação para concluir a tarefa, e você pode implementar a lógica necessária para marcar a tarefa como concluída na interface do usuário.
        parentElement.classList.toggle('done'); // O método classList.toggle('done') é usado para alternar a presença da classe CSS 'done' no elemento parentElement. Se a classe 'done' estiver presente no elemento, ela será removida; se não estiver presente, ela será adicionada. No contexto de uma aplicação de lista de tarefas, isso é útil para marcar uma tarefa como concluída ou não concluída. Quando o usuário clica no botão de ação para marcar a tarefa como concluída, a classe 'done' é adicionada ao elemento que representa a tarefa, o que pode alterar sua aparência visual (por exemplo, riscar o texto ou mudar a cor). Se o usuário clicar novamente para desmarcar a tarefa como concluída, a classe 'done' será removida, revertendo a aparência visual da tarefa para indicar que ela não está mais concluída.
        updateTodoStatusLocalStorage(todoTitle); // A função updateTodoStatusLocalStorage(todoTitle) é chamada para atualizar o status da tarefa na localStorage do navegador. O argumento todoTitle representa o título ou o texto da tarefa que está sendo marcada como concluída ou desmarcada. A implementação específica da função updateTodoStatusLocalStorage não foi fornecida, mas geralmente ela seria responsável por localizar a tarefa correspondente na localStorage usando o título (todoTitle) e atualizar seu status de conclusão (por exemplo, alterando um valor booleano ou uma propriedade associada à tarefa). Dessa forma, as mudanças feitas pelo usuário na interface do usuário para marcar uma tarefa como concluída ou desmarcada também serão refletidas nos dados armazenados na localStorage, garantindo que o status das tarefas seja persistido mesmo após a página ser recarregada ou o navegador ser fechado.
    } else if (targetElement.classList.contains('edit-todo')) {
        toggleForms(); // A função toggleForms() é chamada para alternar a visibilidade dos formulários de edição e adição de tarefas. Essa função provavelmente manipula as classes CSS ou estilos dos formulários para mostrar um formulário e ocultar o outro, permitindo que o usuário edite uma tarefa existente ou adicione uma nova tarefa à lista de tarefas. A implementação específica da função toggleForms() não foi fornecida, mas geralmente ela seria responsável por alternar a exibição dos formulários com base na interação do usuário, como clicar em um botão de edição ou um botão de adição.
        
        editInput.value = todoTitle; // O código editInput.value = todoTitle; é usado para definir o valor do campo de entrada (input) com o ID "edit-input" para o valor armazenado na variável todoTitle. Isso é útil para preencher o campo de edição com o título ou texto da tarefa que o usuário deseja editar. Ao atribuir o valor de todoTitle ao campo de entrada, o usuário pode ver o título atual da tarefa e fazer as alterações desejadas antes de salvar as modificações.    
        oldInputValue = todoTitle; // O código oldInputValue = todoTitle; é usado para armazenar o valor atual do título da tarefa (todoTitle) na variável oldInputValue. Isso é útil para manter uma referência ao valor original do título da tarefa antes de ser editado, permitindo que você compare o valor antigo com o novo valor após a edição ou para restaurar o valor antigo se o usuário cancelar a edição. Dessa forma, você pode garantir que as alterações feitas pelo usuário sejam tratadas corretamente, seja salvando as modificações ou revertendo para o valor original se necessário.


    } else if (targetElement.classList.contains('remove-todo')) {
        parentElement.remove(); // O método remove() é usado para remover um elemento do DOM (Document Object Model). No contexto de uma aplicação de lista de tarefas, quando o usuário clica no botão de ação para excluir uma tarefa, o método parentElement.remove() é chamado para remover o elemento que representa a tarefa do DOM. Isso significa que a tarefa será removida da interface do usuário, e os usuários não poderão mais visualizá-la ou interagir com ela. Essa funcionalidade é útil para permitir que os usuários gerenciem suas tarefas, excluindo aquelas que não são mais necessárias ou relevantes.
        removeTodoLocalStorage(todoTitle); // A função removeTodoLocalStorage(todoTitle) é chamada para remover os dados da tarefa correspondente da localStorage do navegador. O argumento todoTitle representa o título ou o texto da tarefa que está sendo excluída. A implementação específica da função removeTodoLocalStorage não foi fornecida, mas geralmente ela seria responsável por localizar a tarefa correspondente na localStorage usando o título (todoTitle) e removê-la dos dados armazenados. Dessa forma, quando uma tarefa é excluída da interface do usuário, ela também é removida dos dados persistidos na localStorage, garantindo que a tarefa não seja mais acessível mesmo após a página ser recarregada ou o navegador ser fechado.
    }
});

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editInputValue = editInput.value; // O código const editInputValue = editInput.value; é usado para obter o valor atual do campo de entrada (input) com o ID "edit-input". O método .value é uma propriedade dos elementos de formulário que retorna o valor atual do campo de entrada. Neste caso, a variável editInputValue armazenará o texto que o usuário digitou no campo de entrada durante a edição de uma tarefa, permitindo que você use esse valor posteriormente, como para atualizar o título da tarefa na lista de tarefas.
    if (editInputValue) {
        updateTodo(editInputValue); // A função updateTodo(editInputValue) é chamada para atualizar o título da tarefa na lista de tarefas. O argumento editInputValue é passado para a função, que provavelmente irá localizar a tarefa correspondente e atualizar seu título com o novo valor fornecido. A implementação específica da função updateTodo não foi fornecida, mas geralmente ela seria responsável por encontrar o elemento que representa a tarefa a ser editada, atualizar seu conteúdo com o valor de editInputValue e refletir as mudanças na interface do usuário.
    }

toggleForms();

});


searchInput.addEventListener('keyup', (e) => {
    const search = e.target.value
    getSearchedTodos(search);
});

eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('keyup')); // O código searchInput.dispatchEvent(new Event('keyup')); é usado para disparar um evento de teclado 'keyup' no elemento searchInput. Isso é útil para simular a ação de soltar uma tecla após limpar o campo de pesquisa (searchInput.value = ''). Ao disparar o evento 'keyup', você pode acionar qualquer lógica associada a esse evento, como filtrar a lista de tarefas com base no valor do campo de pesquisa. Dessa forma, mesmo que o campo de pesquisa seja limpo programaticamente, a funcionalidade de filtragem ainda será acionada, garantindo que a lista de tarefas seja atualizada corretamente com base no valor vazio do campo de pesquisa.
});


filterSelect.addEventListener('change', () => {
    const filterValue = filterSelect.value;
    filterTodos(filterValue);
});

const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
}

const loadTodos = () => {
    const todos = getTodosLocalStorage();
    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, false);
    });
}

const saveTodoLocalStorage = (todo) => {
    const todos = getTodosLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const removeTodoLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
    const filteredTodos = todos.filter((todo) => todo.text !== todoText);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
}

const updateTodoStatusLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
    todos.map((todo) => todo.text === todoText ? todo.done = !todo.done : todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const updateTodoLocalStorage = (todoOldText, todoNewText) => {
    const todos = getTodosLocalStorage();
    todos.map((todo) => todo.text === todoOldText ? todo.text = todoNewText : todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

loadTodos();
