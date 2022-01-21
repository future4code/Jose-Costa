// Exercício 8: Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba".

const inverterLetras = (palavra: string): string => {
    const letrasInvertidas: string = palavra.split("").reverse().join("");
    return letrasInvertidas;
}

console.log(inverterLetras("abcd"));