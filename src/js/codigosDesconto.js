const codigosDesconto = [
  { codigo: "COLOSYS10", valor: 0.1 },
  { codigo: "COLOSYS30", valor: 0.3 },
  { codigo: "COLOSYS50", valor: 0.5 },
];

function codigoValido(codigo) {
  const desconto = codigosDesconto.find((code) => code.codigo === codigo);

  return desconto !== undefined
    ? { valido: true, valor: desconto.valor }
    : { valido: false, valor: 0 };
}
