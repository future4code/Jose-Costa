/* Exercícios de interpretação de código:

- Questão 1:

O código está somando o valor de i (que cresce em toda repetição) ao valor já acumulado na variável 'valor'.
De forma mais direta, o código realiza essas operações: 1+2+3+4 imprimindo no console o valor: 10.

- Questão 2:

a) Será impresso no console todos os números da array que forem maiores que 18.
b) Uma opção para acessar o índice de cada elemento da lista seria com o: lista.indexOf(numero)

- Questão 3:

Precisei verificar no pytutor para entender o funcionamento do código. O resultado no console foi?
*
**
***
****

O for ficou responsável por adicionar os * em cada linha e o while de contabilizar a quantidade de linhas de acordo com a entrada do usuário.
*/

// Exercícios de escrita de código:

// Questão 1:

let quantidadePets = prompt(`Quantos bichos de estimação você possui?`);
let listaPets = [];

if (quantidadePets === 0) {
    console.log(`Que pena! Você pode adotar um pet!`)
} else {
    for (let i = 0; i < quantidadePets; i++) {
        adicionaPets = prompt(`Adicione o nome do ${i + 1}º pet:`);
        listaPets.push(adicionaPets);
    }
    console.log(listaPets);
}

// Questão 2:

let arrayOriginal = [2, 4, 7, 14, 15];

// a)
for (let listaDoArrayOriginal of arrayOriginal) {
    console.log(listaDoArrayOriginal);
}

// b)
for (let listaDoArrayOriginal of arrayOriginal) {
    console.log(listaDoArrayOriginal / 10);
}

// c)
let novaArrayOriginal = [];
for (let listaDoArrayOriginal of arrayOriginal) {
    if (listaDoArrayOriginal % 2 === 0) {
        novaArrayOriginal.push(listaDoArrayOriginal);
    }
}

console.log(novaArrayOriginal);

// d)
let arrayOriginal = [2, 4, 7, 14, 15];

let novaArrayOriginalComIndice = [];
for (let listaDoArrayOriginal of arrayOriginal) {
    let indiceAtual = arrayOriginal.indexOf(listaDoArrayOriginal);
    novaArrayOriginalComIndice.push(`O elemento do index ${indiceAtual} é: ${listaDoArrayOriginal}`);
}

console.log(novaArrayOriginalComIndice);

// e)

let numeroMaior = 0;
let numeroMenor = 99;
for (let numeroDoArray of arrayOriginal) {
    if (numeroDoArray > numeroMaior) {
        numeroMaior = numeroDoArray;
    } if (numeroDoArray < numeroMenor) {
        numeroMenor = numeroDoArray;
    }
}

console.log(`O maior número da array original é: ${numeroMaior} e o menor é: ${numeroMenor}.`)

// Desafio:
// Questão 1:

// let numeroPensado = Number(prompt(`[Início de jogo] Insira um número entre 1 e 20:`));
// alert(`Vamos jogar!`); 

// if (numeroPensado < 1 || numeroPensado > 20) {
//     console.log(`Número inválido, escolha um número entre 1 ou 20.`)
// }

// function verificarNumero() {
//     let tentativas = 1;
//     let numeroInserido = Number(prompt(`Insira um número entre 1 e 20:`));
//     if (numeroInserido === numeroPensado) {
//         alert(`Parabéns, você acertou!
// Número de tentativas: ${tentativas}`)
//     } else {
//          while (numeroInserido !== numeroPensado) {
//             if (numeroInserido > numeroPensado) {
//                 alert(`Tente um número menor.
// O número chutado foi: ${numeroInserido}.`);
//                 tentativas++;
//               numeroInserido = Number(prompt(`Insira um número entre 1 e 20:`));
//             } else {
//                 alert(`Tente um número maior.
// O número chutado foi: ${numeroInserido}.`);
//                 tentativas++;
//               numeroInserido = Number(prompt(`Insira um número entre 1 e 20:`));
//             }
//         }
//         if (numeroInserido == numeroPensado) {
//             alert(`Parabéns, você acertou!
// Número de tentativas: ${tentativas}`) }
//     }
// }

// verificarNumero();

// Desafio:
// Questão 2:

/* Comentário: A dificuldade foi estabelecer um método que sorteasse um número entre 1 e 100.
Tentei criar uma funcão, mas sem êxito. Depois de algumas tentativas encontrei na documentação da 
w3schools o método clareado. Com ele em mãos apenas alterei a parte do prompt inicial. :) */

let numeroPensado = Math.floor(Math.random() * 101);
alert(`Iniciando um novo jogo contra o computador. :)`)

function verificarNumero() {
    let tentativas = 1;
    let numeroInserido = Number(prompt(`Insira um número entre 1 e 100:`));
    if (numeroInserido === numeroPensado) {
        alert(`Parabéns, você acertou!
Número de tentativas: ${tentativas}`)
    } else {
         while (numeroInserido !== numeroPensado) {
            if (numeroInserido > numeroPensado) {
                alert(`Tente um número menor.
O número chutado foi: ${numeroInserido}.`);
                tentativas++;
              numeroInserido = Number(prompt(`Insira um número entre 1 e 100:`));
            } else {
                alert(`Tente um número maior.
O número chutado foi: ${numeroInserido}.`);
                tentativas++;
              numeroInserido = Number(prompt(`Insira um número entre 1 e 100:`));
            }
        }
        if (numeroInserido == numeroPensado) {
            alert(`Parabéns, você acertou!
Número de tentativas: ${tentativas}`) }
    }
}

verificarNumero();