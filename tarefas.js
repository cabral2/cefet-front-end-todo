let tarefas = [];

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-tarefas');

function insereTarefaNaPagina(tarefa) {
  // 1. cria o elemento
  let tarefaLiEl = document.createElement('li');
  // 2. configura
  tarefaLiEl.innerHTML = tarefa.nome;
  tarefaLiEl.classList.add('item-tarefa');
  if (tarefa.marcado) {
    tarefaLiEl.classList.add('marcado');
  }
  // 3. insere na árvore
  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
}

// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);




// Exercício 2: incluir uma nova tarefa
// -----------
//
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
let nomeInputEl = document.querySelector('#nova-tarefa-nome');
botaoIncluirEl.addEventListener('click', function() {
  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: 'outros',
    marcado: false
  };

  // coloca-o no vetor 'tarefas'
  tarefas.push(novaTarefa);
  // cria o <li> referente a essa tarefa e o
  // insere na página
  insereTarefaNaPagina(novaTarefa);

  // limpar o input e devolver o foco pra ele
  nomeInputEl.value = '';
  nomeInputEl.focus();
});


// Exercício 3: salvar e carregar o nome do usuário dono da lista
let carregarEl = document.querySelector('#carregar');
let salvarEl = document.querySelector('#salvar');
let nomeUsuarioEl = document.querySelector('#nome-usuario');
// salva quem é o dono da lista no localStorage
salvarEl.addEventListener('click', function(e) {
  localStorage.setItem('dono-da-lista', nomeUsuarioEl.value);
});
// carrega o dono da lista e coloca no input
carregarEl.addEventListener('click', function(e) {
  nomeUsuarioEl.value = localStorage.getItem('dono-da-lista');
});
