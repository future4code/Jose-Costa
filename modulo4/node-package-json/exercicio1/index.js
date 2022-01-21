/* Exercício 1:
a) Para acessar os parâmetros de entrada na linha de comando utilizamos o process.argv[2]. Precisamos acessar a partir do índice 2  porque o 0 e 1 fazem parte do comando: node [diretório]

b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
c) Altere o programa acima para que mostre também a sua idade daqui a sete anos. */

const cor = {
    mar: "\x1b[36m",
    white: "\x1b[37m",
}

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);
const idadeMaisSete = idade + 7;

if (process.argv.length !== 4) {
    console.log(`Erro: Esperava 2 parâmetros, porém só recebi ${process.argv.length - 2}.`);
} else if (isNaN(idade)) {
    console.log(`A idade precisa ser um número válido.`);
} else {
    console.log(`${cor.mar}Olá, ${cor.white}${nome}${cor.mar}! Você tem ${cor.white}${idade}${cor.mar} anos. Em sete anos você terá ${idadeMaisSete}.`);
}