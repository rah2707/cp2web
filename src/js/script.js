const container = document.getElementById("produtos");

listaProdutos.forEach((produto) => {
  const noCarrinho =
    carrinho.find((item) => item.nome === produto.nome) !== undefined;

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <p class="preco">${formatarMoeda(produto.preco)}</p>

    <button 
      id="add-${produto.nome}" 
      onclick="adicionarCarrinho({nome: '${produto.nome}', preco: ${produto.preco}})"
      class="add ${noCarrinho ? 'hidden' : ""}"
    >
      Adicionar ao carrinho
    </button>
    
    <button 
      id="rm-${produto.nome}" 
      onclick="removerCarrinho('${produto.nome}')" 
      class="rm ${noCarrinho ? "" : 'hidden'}"
    >
      Remover do carrinho
    </button>`;

  container.appendChild(card);
});
