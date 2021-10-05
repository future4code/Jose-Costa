/* » Exercícios de interpretação de código:

~ Questão 1:
 10 
 10 5

~ Questão 2:
10 10 10

~ Questão 3:
   let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
   let salarioDia = prompt("Quanto você recebe por dia?")
   alert(`Voce recebe ${horasTrabalhadasDia/salarioDia} por hora`)
*/

// » Exercícios de escrita de código:
// ~ Questão 1:
let nome
let idade

console.log(typeof nome, typeof idade)

// Tipos: undefined undefined. Porque não foi atribuído nenhum valor nas variáveis.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)

// Tipos: string string. Por se tratar de dois textos(indicado pelas aspas).

console.log("Olá", nome,", você tem", idade, "anos. :)")

// ~ Questão 2:
let statusSono = prompt("Você teve uma boa noite de sono? (Sim/Não)")
let statusExercicio = prompt("Pratica exercício físico com regularidade? (Sim/Não)")
let statusAgua = prompt("Bebe água com frequência? (Sim/Não)")

console.log("Você teve uma boa noite de sono?", statusSono)
console.log("Pratica exercício físico com regularidade?", statusExercicio)
console.log("Bebe água com frequência?", statusAgua)

// ~ Questão 3:
let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// ~ Desafio:
let primeiroNumero = prompt("Qual o primeiro número?")
let segundoNumero = prompt("Insira o segundo número.")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero + segundoNumero)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero * segundoNumero)