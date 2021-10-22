### Treino de JavaScript 2

```
function calculaPrecoTotal(quantidade) {
  let custoTotal;
  if (quantidade < 6) {
    custoTotal = quantidade * 1.30;
  } else {
    custoTotal = quantidade * 1;
  }
  return custoTotal;
}

```