let tarefas = [
  {
    nome: "Comprar leite",
    categoria: "compras",
    marcado: false,
  },
  {
    nome: "Escutar chimbinha",
    categoria: "lazer",
    marcado: true,
  },
];

function insereTarefaNaPagina(tarefa) {
  if (!tarefa.nome) return;

  const novoEl = document.createElement("li");
  novoEl.innerHTML = tarefa ? tarefa.nome : "";
  novoEl.classList.add("item-tarefa");
  novoEl.classList.add(tarefa ? "categoria-" + tarefa.categoria : "");

  if (tarefa && tarefa.marcado) novoEl.classList.add("marcado");

  const listaTarefas = document.querySelector("ul#lista-tarefas");

  const primeiroEl = listaTarefas.querySelector(":first-child");

  if (primeiroEl) listaTarefas.insertBefore(novoEl, primeiroEl);
  else listaTarefas.appendChild(novoEl);
}

function limpaReescreveLista() {
  const listaTarefas = document.querySelector("ul#lista-tarefas");
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa) => {
    insereTarefaNaPagina(tarefa);
  });
}

function adicionaTarefa() {
  const campoNome = document.querySelector("#nova-tarefa-nome");
  const campoCategoria = document.querySelector("#nova-tarefa-categoria");
  const tarefa = {
    nome: campoNome.value,
    categoria: campoCategoria.value,
    marcado: false,
  };
  campoNome.value = "";
  campoNome.focus();
  insereTarefaNaPagina(tarefa);
}

function handleEnterClick(ev) {
  if (ev.key == "Enter") adicionaTarefa();
}

limpaReescreveLista();

const botaoEl = document.querySelector("#incluir-nova-tarefa");
botaoEl.addEventListener("click", adicionaTarefa);

const inputNome = document.querySelector("#nova-tarefa-nome");
inputNome.addEventListener("keyup", handleEnterClick);
