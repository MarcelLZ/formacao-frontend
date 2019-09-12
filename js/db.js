/**
 * Database instance.
 */
const API_KEY = "5d797a4fb5eedc635380d9bd";
const URL = "https://mecanica-3d6d.restdb.io/rest";

function insert(table, data) {
  const configs = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "x-apikey": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch(`${URL}/${table}`, configs)
    .then(() => console.log("Inserido com sucesso!"))
    .catch(err => console.log("Houve um erro!", err));
}

async function find(table) {
  const configs = {
    method: "GET",
    headers: {
      "x-apikey": API_KEY
    }
  };

  const response = await fetch(`${URL}/${table}`, configs);
  const data = await response.json();
  return data;
}
