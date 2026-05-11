const listaItens = document.getElementById("listaItens");
const valorTotal = document.getElementById("valorTotal");
const btnDesconto = document.getElementById("btnDesconto");

function desconto() {
  const input = document.getElementById("code");

  const { valido, valor } = codigoValido(input.value);

  if (valido) {
    const novoTotal = total * (1 - valor);

    valorTotal.textContent = formatarMoeda(novoTotal);

    input.style.display = "none";
    btnDesconto.disabled = true;
    btnDesconto.textContent = "Desconto Aplicado";
    btnDesconto.style.background = "green";
  } else {
    alert("Código inválido");
    input.value = "";
    input.focus();
  }
}

carrinho.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("item");

  div.innerHTML = `
    <span>${item.nome}</span>
    <span>${formatarMoeda(item.preco)}</span>`;

  listaItens.appendChild(div);
});

const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

valorTotal.textContent = formatarMoeda(total);
