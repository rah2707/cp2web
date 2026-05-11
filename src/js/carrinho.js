let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
localStorage.setItem("carrinho", JSON.stringify(carrinho));

function adicionarCarrinho(item) {
  carrinho.push(item);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  document.getElementById(`add-${item.nome}`).classList.add("hidden");
  document.getElementById(`rm-${item.nome}`).classList.remove("hidden");
}

function removerCarrinho(nome) {
  carrinho = carrinho.filter((item) => item.nome !== nome);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  document.getElementById(`add-${nome}`).classList.remove("hidden");
  document.getElementById(`rm-${nome}`).classList.add("hidden");
}
