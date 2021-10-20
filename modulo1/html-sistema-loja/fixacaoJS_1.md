### Treino de JavaScript 1

```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000;
  const comissaoPorCarro = qtdeCarrosVendidos * 100;
  const porcentagemPorVendas = valorTotalVendas * 0.05;
  const salarioFinal = salarioFixo + comissaoPorCarro + porcentagemPorVendas;
  return salarioFinal;
}
```