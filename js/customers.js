// Buscar os clientes
const table = document.getElementById("customers-table");
const tbody = table.getElementsByTagName("tbody")[0];

// Buscar clientes
function buscarClientes() {
  const encontrados = buscar("cliente");
  return encontrados;
}

function listarClientes() {
  const clientes = buscarClientes();

  for (let i = 0; i < clientes.length; i++) {
    const clienteAtual = clientes[i];
    const linhaTabela = `
        <tr>
          <td>${clienteAtual.name}</td>
          <td>${moment(clienteAtual.created).format("DD/MM/YYYY")}</td>
          <td>
            <a href="#">
              <i class="fa fa-pen edit-customer"></i>
            </a>

            <a href="#" onclick="removerCliente(${i})">
              <i class="fa fa-user-times remove-customer"></i>
            </a>
          </td>
        </tr>
      `;

    tbody.insertAdjacentHTML("beforeend", linhaTabela);
  }
}

/**
 * Remove o cliente com base no índice.
 */
function removerCliente(indice) {
  console.log({ indice });
}

listarClientes();
