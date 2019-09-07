function inserir(tabela, dados) {
  const jaInseridos = buscar(tabela) || [];
  jaInseridos.push(dados);
  localStorage.setItem(tabela, JSON.stringify(jaInseridos));
}

function buscar(tabela) {
  const encontrados = localStorage.getItem(tabela);
  return JSON.parse(encontrados);
}
