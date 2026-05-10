// ARRAY DO CARRINHO
    const carrinho = [
 {nome: "HOMEM DE FERRO", preco: 250,imagem: ""},
 {nome: "SUPERMAN",preco: 200,imagem: ""},
 {nome: "BATMAN",preco: 300,imagem: ""},
 {nome: "FLASH",preco: 150,imagem: ""},
 {nome: "HULK",preco: 200,imagem: ""}
];

const listaItens = document.getElementById("listaItens");
const valorTotal = document.getElementById("valorTotal");
const btnDesconto = document.getElementById("btnDesconto");

    // MOSTRAR ITENS NA TELA USANDO DOM
carrinho.forEach(item => {

    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <span>${item.nome}</span>
        <span>
          ${item.preco.toLocaleString("pt-BR", {
            style: "currency", currency: "BRL"
          })}
        </span>
    `;
    listaItens.appendChild(div);
});

let total = carrinho.reduce((soma, item) => {
    return soma + item.preco;
}, 0);

function formatarMoeda(valor){
    return valor.toLocaleString("pt-BR", {
      style: "currency", currency: "BRL"
    });
}
valorTotal.textContent = formatarMoeda(total);
btnDesconto.addEventListener("click", () => {
    total = total - (total * 0.10);
    valorTotal.textContent = formatarMoeda(total);
    btnDesconto.disabled = true;
    btnDesconto.textContent = "Desconto Aplicado";
    btnDesconto.style.background = "green";
});