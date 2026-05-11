const listaItens = document.getElementById("listaItens");
const valorTotal = document.getElementById("valorTotal");
const btnDesconto = document.getElementById("btnDesconto");

carrinho.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("item");

  div.innerHTML = `
    <span>${item.nome}</span>
    <span>${formatarMoeda(item.preco)}</span>`;

  listaItens.appendChild(div);
});

let total = carrinho.reduce((soma, item) => soma + item.preco, 0);

valorTotal.textContent = formatarMoeda(total);

btnDesconto.addEventListener("click", () => {
  total = total - total * 0.1;
  valorTotal.textContent = formatarMoeda(total);
  btnDesconto.disabled = true;
  btnDesconto.textContent = "Desconto Aplicado";
  btnDesconto.style.background = "green";
});
