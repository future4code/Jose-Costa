### Treino de Javascript 4

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let numeroOcorrencias = 0;
    if (arrayDeNumeros.indexOf(numeroEscolhido) !== -1) {
        const arrayOcorrencias = arrayDeNumeros.filter((elemento) => {
            if (elemento === numeroEscolhido) {
                numeroOcorrencias++
            }
        })
        return `O número ${numeroEscolhido} aparece ${numeroOcorrencias}x`;
    } else {
        return `Número não encontrado`;
    }
}
```