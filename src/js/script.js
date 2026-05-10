const listaProdutos = [
 {nome: "HOMEM DE FERRO", descricao: "Boneco ilustrativo do superheroi Homem de ferro",preco: 4500,imagem: ""},
 {nome: "SUPERMAN",descricao: "Boneco ilustrativo do superheroi Superman",preco: 2200,imagem: ""},
 {nome: "BATMAN",descricao: "Boneco ilustrativo do superheroi Batman",preco: 350,imagem: ""},
 {nome: "FLASH",descricao: "Boneco ilustrativo do superheroi Flash",preco: 180,imagem: ""},
 {nome: "HULK",descricao: "Boneco ilustrativo do superheroi Hulk",preco: 420,imagem: ""}
];

const container = document.getElementById("produtos");
listaProdutos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <p class="preco">R$ ${produto.preco}</p>`;
container.appendChild(card);
});