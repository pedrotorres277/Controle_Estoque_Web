document.getElementById('form-produto').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const categoria = document.getElementById('categoria').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const valor = parseFloat(document.getElementById('valor').value);

  const produto = { nome, categoria, quantidade, valor };

  console.log("Produto a salvar:", produto);

});

async function carregarProdutos() {
  const res = await fetch('/api/produtos');
  const produtos = await res.json();
  const tabela = document.getElementById('tabela-produtos');
  tabela.innerHTML = '';
  produtos.forEach(prod => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${prod.nome}</td>
      <td>${prod.categoria}</td>
      <td>${prod.quantidade}</td>
      <td>R$ ${prod.valor.toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deletarProduto('${prod.id}')">Excluir</button></td>
    `;
    tabela.appendChild(tr);
  });
}

async function salvarProduto(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const categoria = document.getElementById('categoria').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const valor = parseFloat(document.getElementById('valor').value);

  await fetch('/api/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, categoria, quantidade, valor })
  });

  document.getElementById('form-produto').reset();
  carregarProdutos();
}

async function deletarProduto(id) {
  await fetch(`/api/produtos/${id}`, { method: 'DELETE' });
  carregarProdutos();
}

document.getElementById('form-produto').addEventListener('submit', salvarProduto);
carregarProdutos();
