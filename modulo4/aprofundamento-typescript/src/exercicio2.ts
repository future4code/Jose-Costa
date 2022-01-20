/* Exercício 2:
a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas:
c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: */

type Dados = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): object {
    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas: Dados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

type Amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => void,
}

const amostraDeIdades: Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros) => { console.log(numeros) }
}