// Função que adiciona uma tarefa
function addTarefa() {
  const inputTarefa = document.querySelector("#inputTarefa");

  const msgErroInpTarefa = document.querySelector("#msgErroInpTarefa");

  // Verifica se usuário não informou uma tarefa
  if (inputTarefa.value === "") {
    inputTarefa.classList.add("erro");

    msgErroInpTarefa.textContent = "Por favor, informe uma tarefa";
    msgErroInpTarefa.classList.add("ativo");
  } else {
    inputTarefa.classList.remove("erro");

    msgErroInpTarefa.textContent = "";
    msgErroInpTarefa.classList.remove("ativo");
  }

  const itemListaTarefas = document.createElement("li");

  itemListaTarefas.classList.add("item-lista-tarefas");
  itemListaTarefas.innerHTML = `<div class="box-selecao-tarefa">
                                    <i class="bi bi-circle"></i>
                                </div>
                                <div class="txt-tarefa">${inputTarefa.value}</div>
                                <div class="box-delecao-tarefa">
                                    <i class="bi bi-trash-fill"></i>
                                </div>`;

  const listaTarefas = document.querySelector("#listaTarefas");

  listaTarefas.classList.add("ativo");
  listaTarefas.appendChild(itemListaTarefas);

  inputTarefa.value = "";
  inputTarefa.focus();

  const iconeSelecaoTarefa = itemListaTarefas.querySelector(".bi-circle");

  iconeSelecaoTarefa.addEventListener("click", function () {
    marcarTarefa(this);
  });

  const iconeDelecaoTarefa = itemListaTarefas.querySelector(".bi-trash-fill");

  iconeDelecaoTarefa.addEventListener("click", function () {
    deletarTarefa(this, listaTarefas);
  });
}

// Função que marca uma tarefa
function marcarTarefa(iconeSelecTarefa) {
  // Verifica se ícone de seleção não está selecionado
  if (!iconeSelecTarefa.classList.contains("bi-check-circle-fill")) {
    iconeSelecTarefa.closest(".item-lista-tarefas").classList.add("concluida");

    iconeSelecTarefa.classList.remove("bi-circle");
    iconeSelecTarefa.classList.add("bi-check-circle-fill");
  } else {
    iconeSelecTarefa
      .closest(".item-lista-tarefas")
      .classList.remove("concluida");

    iconeSelecTarefa.classList.remove("bi-check-circle-fill");
    iconeSelecTarefa.classList.add("bi-circle");
  }
}

// Função que deleta uma tarefa
function deletarTarefa(iconeDelecTarefa, listaTarefas) {
  iconeDelecTarefa.closest(".item-lista-tarefas").remove(true);

  // Verifica se não existem mais tarefas
  if (listaTarefas.innerHTML === "") {
    listaTarefas.classList.remove("ativo");
  }
}

// Adicionando evento ao formulário
const formAddTarefas = document.querySelector("#formAddTarefas");

formAddTarefas.addEventListener("submit", function (e) {
  e.preventDefault();

  addTarefa();
});
