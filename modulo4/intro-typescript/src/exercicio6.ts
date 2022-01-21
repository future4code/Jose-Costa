/* Exercício 6: Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
a) A soma desses números
b) A subtração desses números
c) A multiplicação desses números
d) Qual deles é o maior */

const realizarOperacoes = (numA: number, numB: number): void => {
    const soma: number = numA + numB;
    const sub: number = numA - numB;
    const mult: number = numA * numB;
    let numMaior: any = numA;
    if (numB > numA) { numMaior = numB; }
    if (numA === numB) { numMaior = "São iguais" }
    console.log(`Números: ${numA} e ${numB}.
    Soma: ${soma}
    Subtração: ${sub}
    Multiplicação: ${mult}
    Número maior: ${numMaior}`);
}

realizarOperacoes(5, 10);