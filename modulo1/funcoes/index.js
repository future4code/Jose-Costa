/* Exercícios de interpretação de código:

~ Questão 1:
a) 10
50

b) Caso fosse retirado o console.log não seria impresso nenhum resultado no console, porém a função iria continuar fazendo o trabalho de retornar o valor.

~ Questão 2:

a) Primeiro a função deixa o texto inserido pelo usuário minúsculo e depois verifica se na frase tem a palavra "cenoura".
b) true
true
true
*/

// Exercícios de escrita de código:

// Questão 1:
// a)
console.log(`Questão 1/A:)`);

function imprimirMinhasInfos() {
    console.log(`Eu sou o José Rodolfo, tenho 29 anos, moro em Campina Grande-PB e sou estudante.`);
}

imprimirMinhasInfos();

// b)
console.log(`Questão 1/B:`);

function imprimirInfos(nome, idade, cidade, profissao) {
    const informacoesUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
    return informacoesUsuario;
}
const imprimirInfosUsuario = imprimirInfos(`Lis`, 19,`Campina Grande`, `Atleta`);
console.log(imprimirInfosUsuario);

// Questão 2:
// a)
console.log(`Questão 2/A:`);

function somarParametros(primeiroNumero, segundoNumero) {
    const somaParametros = primeiroNumero + segundoNumero;
    return somaParametros;
}

const resultadoSoma = somarParametros(4, 2);

console.log(`Resultado da soma: ${resultadoSoma}`);

// b)
console.log(`Questão 2/B:`);

function verificarNumeroMaior(numeroA, numeroB) {
    const numeroMaior = numeroA > numeroB;
    return numeroMaior;
}

const resultadoNumeroMaior = verificarNumeroMaior(2, 4);
console.log(`Resultado da verificação do número maior: ${resultadoNumeroMaior}`);

// c)
console.log(`Questão 2/C:`);

function verificarPar(numero) {
    const verificaPar = (numero % 2) == 0;
    return verificaPar;
}

const resultadoVerificaPar = verificarPar(14);
console.log(`O número inserido é par? ${resultadoVerificaPar}`);

// d)
console.log(`Questão 2/D:`)

function verificarTamanhoMsg(mensagem) {
    const tamanhoMsg = mensagem.length;
    const msgMaiscula = mensagem.toUpperCase();
    console.log(`Mensagem: ${mensagem}
Tamanho: ${tamanhoMsg}.
Mensagem em maiúsculo: ${msgMaiscula}`);
}

verificarTamanhoMsg(`Bora, bora artilheiro!`);

// Questão 3:
console.log(`Questão 3:`)

function somar(somaA, somaB) {
    const resultadoSomaAB = (somaA) + somaB;
    return resultadoSomaAB;
}

function subtrair(subtracaoA, subtracaoB) {
    const resultadoSubtracaoAB = subtracaoA - subtracaoB;
    return resultadoSubtracaoAB;
}

function multiplicar(multiplicacaoA, multiplicacaoB) {
    const resultadoMultiplicacaoAB = multiplicacaoA * multiplicacaoB;
    return resultadoMultiplicacaoAB;
}

function dividir(divisaoA, divisaoB) {
    const resultadoDivisaoAB = divisaoA / divisaoB;
    return resultadoDivisaoAB;
}

let numeroUsuarioA = prompt(`Escolha o PRIMEIRO número:`);
let numeroUsuarioB = prompt(`Escolha o SEGUNDO número:`);
numeroUsuarioA = Number(numeroUsuarioA);
numeroUsuarioB = Number(numeroUsuarioB);

console.log(`Números inseridos: ${numeroUsuarioA} e ${numeroUsuarioB}
Soma: ${somar(numeroUsuarioA, numeroUsuarioB)}
Diferença: ${subtrair(numeroUsuarioA, numeroUsuarioB)}
Multiplicação: ${multiplicar(numeroUsuarioA, numeroUsuarioB)}
Divisão: ${dividir(numeroUsuarioA, numeroUsuarioB)}`);

// Desafio/Questão 1::
console.log(`Desafio/Questão 1:`)

// a)
const imprimirConsole = (mensagem) => {
    console.log(mensagem);
}

// b)
const somarDesafio = (valorA, valorB) => {
    const somaDesafio = valorA + valorB;
    imprimirConsole(somaDesafio);
}

somarDesafio(4, 2);

// Desafio/Questão 2:

function executarTeoremaPitagoras(a, b) {
    const catetosAoQuadrado = (a * a) + (b * b);
    const hip = Math.sqrt(catetosAoQuadrado);
    return hip;
}

const resultadoHip = executarTeoremaPitagoras(4, 2);
console.log(`O resultado da hipotenusa é: ${resultadoHip}.`)