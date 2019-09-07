(function() {
  const table = document.getElementById("customers-table");
  const tbody = table.getElementsByTagName("tbody")[0];

  // Buscar clientes
  function buscarClientes() {
    return [
      { id: 1, nome: "Adrina", dataCadastro: "01/09/2019" },
      { id: 2, nome: "Nícolas", dataCadastro: "02/09/2019" },
      { id: 3, nome: "Thiago", dataCadastro: "03/09/2019" },
      { id: 4, nome: "Nilson", dataCadastro: "04/09/2019" }
    ];
  }

  function listarClientes() {
    const clientes = buscarClientes();

    for (let i = 0; i < clientes.length; i++) {
      const clienteAtual = clientes[i];
      const linhaTabela = `
        <tr>
          <td>${clienteAtual.nome}</td>
          <td>${clienteAtual.dataCadastro}</td>
          <td>
            <a href="#">
              <i class="fa fa-pen edit-customer"></i>
            </a>

            <a href="#">
              <i class="fa fa-user-times remove-customer"></i>
            </a>
          </td>
        </tr>
      `;

      tbody.insertAdjacentHTML("beforeend", linhaTabela);
    }
  }

  listarClientes();
})();
