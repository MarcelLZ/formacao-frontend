// Adicionar um novo cliente
function salvar() {
  const name = document.getElementById("name").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const number = document.getElementById("number").value;

  const dadosParaGuardar = {
    name,
    state,
    city,
    street,
    neighborhood,
    number,
    created: new Date()
  };

  if (!validarDados(dadosParaGuardar)) {
    alert("Você precisa preencher todos os dados!!!");
    return;
  }

  inserir("cliente", dadosParaGuardar);
}

// Validar os dados digitados pelo usuário
function validarDados(dados) {
  if (
    !dados.name ||
    !dados.state ||
    !dados.city ||
    !dados.street ||
    !dados.neighborhood ||
    !dados.number
  ) {
    return false;
  }
}
