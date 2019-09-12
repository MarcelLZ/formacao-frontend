const $table = document.getElementById("customers-table");
const $tbody = $table.getElementsByTagName("tbody")[0];

async function getCustomersFromDB() {
  const foundCustomers = (await find("customer")) || [];
  return foundCustomers;
}

async function printTableLine() {
  const customers = await getCustomersFromDB();

  const tableLine = [];
  for (let i = 0; i < customers.length; i++) {
    const line = `
      <tr>
        <td>${customers[i].name}</td>
        <td>09/09/2019</td>
        <td>
          <a href="#">
            <i class="fa fa-pen edit-customer"></i>
          </a>

          <a href="#" onclick="removeCustomer(${i})">
            <i class="fa fa-user-times remove-customer"></i>
          </a>
        </td>
      </tr>
    `;

    tableLine.push(line);
  }

  $tbody.insertAdjacentHTML("beforeend", tableLine.join(""));
}

printTableLine();

/**
 * Remove o cliente com base no índice.
 */
function removeCustomer(indice) {
  console.log({ indice });
}
