const listaProdutos = [
  {
    nome: "HOMEM DE FERRO",
    descricao: "Boneco ilustrativo do super-herói Homem de ferro",
    preco: 250,
    imagem: "https://imgs.search.brave.com/hyC2C2kBJXL3oeAWI9kHyOyxxXoAwG7XmnqFutPbRio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJoZXJvdG95/c3RvcmUuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzFfZTVhOGI0MWEt/NjA1OS00YzQxLTlh/ZjEtYjM5NjJhYjNm/YTY0XzIwMDB4Lmpw/Zz92PTE3NTMxMDA5/MTA",
  },
  {
    nome: "SUPERMAN",
    descricao: "Boneco ilustrativo do super-herói Superman",
    preco: 200,
    imagem: "https://imgs.search.brave.com/AfmtICEAjfHT3WFrLEcnuWb8IbFygfVhoB6NmpSvXxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJoZXJvdG95/c3RvcmUuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzFfYTBlZTQ4ODct/N2JhZC00MTgyLWE1/YmMtMTI5OTcxN2I2/NDZlLmpwZz92PTE3/NjE0MTU0ODImd2lk/dGg9MTYwMA",
  },
  {
    nome: "BATMAN",
    descricao: "Boneco ilustrativo do super-herói Batman",
    preco: 300,
    imagem: "https://imgs.search.brave.com/ucZHMEcAjHrbaMelVG_8vCDoAmI5-bCO-ypfHF_-W6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFWeUh2dEItS0wu/anBn",
  },
  {
    nome: "FLASH",
    descricao: "Boneco ilustrativo do super-herói Flash",
    preco: 150,
    imagem: "https://imgs.search.brave.com/q2UbGoqKO18GqXsjMoy3ovy88inKfgNPFj846kbj_Vg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vREMt/Q29taWNzLU11bHRp/dmVyc2UtSnVzdGlj/ZS1MZWFndWUtVGhl/LUZsYXNoLUFjdGlv/bi1GaWd1cmVfOWMz/YmNjOTMtNzQzZC00/YmNiLWFkNjctMDJi/MDQ3YzM1NzQ0XzEu/ODM2Njg2YTZkMjU5/YWI0OTRlNjRhNmM4/MmQxNWQ3OTguanBl/Zz9vZG5IZWlnaHQ9/NTc2Jm9kbldpZHRo/PTU3NiZvZG5CZz1G/RkZGRkY",
  },
  {
    nome: "HULK",
    descricao: "Boneco ilustrativo do super-herói Hulk",
    preco: 200,
    imagem: "https://imgs.search.brave.com/90ZTHB5nWqnsmxxyc5oNfRRBKMsnafANVsA-yoD4jjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb2dn/ZXJzLmNvbS9jZG4v/c2hvcC9maWxlcy9N/YXJ2ZWwtSHVsay1B/Y3Rpb24tRmlndXJl/LTRfNS1IYXNicm8t/TWFydmVsLVVuaXZl/cnNlLVNlcmllcy00/LTAwOS0yXzUxMng1/MTIud2VicD92PTE3/NTkzMjI0NzI",
  },
];

const container = document.getElementById("produtos");

function adicionarCarrinho(item) {
  // TODO
  alert(item.nome)
}


listaProdutos.forEach((produto) => {
  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <p class="preco">${formatarMoeda(produto.preco)}</p>
    <button onclick="adicionarCarrinho({nome: '${produto.nome}', preco: ${produto.preco}})">Adicionar ao carrinho</button>`;
  
  container.appendChild(card);
});
