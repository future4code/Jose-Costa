### Treino de Javascript 3

```
function calculaNota(ex, p1, p2) {
  const pesoExercicio = ex * 1 
  const pesoPrimeiraProva = p1 * 2;
  const pesoSegundaProva = p2 * 3;
  const mediaPonderada = (pesoExercicio + pesoPrimeiraProva + pesoSegundaProva) / 6;
  if (mediaPonderada >= 9) {
    return `A`;
  } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return `B`;
  } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
    return `C`;
  } else {
    return `D`;
  }
}
```