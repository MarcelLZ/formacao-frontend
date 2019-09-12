// Campos da tela
const $name = document.getElementById("name");
const $cep = document.getElementById("cep");
const $state = document.getElementById("state");
const $city = document.getElementById("city");
const $street = document.getElementById("street");
const $neighborhood = document.getElementById("neighborhood");
const $number = document.getElementById("number");

/**
 * Função para consulta de CEP.
 */
function searchCEP() {
  if (!$cep.value) {
    alert("Para pesquisar pelo CEP, você precisa informá-lo!");
  } else {
    fetch(`http://viacep.com.br/ws/${$cep.value}/json`)
      .then(function(resultado) {
        return resultado.json();
      })
      .then(function(dadosEndereco) {
        $state.value = dadosEndereco.uf;
        $state.disabled = true;

        $city.value = dadosEndereco.localidade;
        $city.disabled = true;

        $street.value = dadosEndereco.logradouro;
        $street.disabled = true;

        $neighborhood.value = dadosEndereco.bairro;
        $neighborhood.disabled = true;
      })
      .catch(function(erro) {
        alert("O CEP que você informou é inválido!");
        $cep.focus();
      });
  }
}

/**
 * Função para salvar os dados do cliente.
 */
function save() {
  const dataToSave = {
    name: $name.value,
    cep: $cep.value,
    state: $state.value,
    city: $city.value,
    street: $street.value,
    neighborhood: $neighborhood.value,
    number: $number.value
  };

  if (!validate(dataToSave)) {
    alert("Os dados devem ser preenchidos corretamente!");
    return;
  }

  insert("customer", dataToSave);
}

/**
 * Valida os dados do formulário antes de salvar.
 */
function validate(dataToValidate) {
  if (
    !dataToValidate.name ||
    !dataToValidate.cep ||
    !dataToValidate.state ||
    !dataToValidate.city ||
    !dataToValidate.street ||
    !dataToValidate.neighborhood ||
    !dataToValidate.number
  ) {
    return false;
  }

  return true;
}
