/* Exercícios de interpretação de código:

~ Questão 1:
a. false
b. false
c. true
d. boolean

~ Questão 2:
Os valores das variáveis estão vindo do prompt como strings, então a soma está sendo uma concatenação.

Da forma que está, se inserimos como primeiroNumero o 1 e o segundoNumero o 4, no console aparecerá:
14

~ Questão 3:
Para solucionar teríamos que transformar os strings em numbers com o Number(primeiroNumero) e o Number(segundoNumero).
Da seguinte forma:

const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

// Exercícios de escrita de código:
console.log("- Exercícios de escrita de código:")

// Questão 1:
console.log("- Questão 1");

const idadeDoUsuario = prompt("Qual a sua idade?");
const idadeDoAmigo = prompt("Qual a idade da/do sua/seu melhor amiga/o?");

    let verificaIdadeMaior = idadeDoUsuario > idadeDoAmigo;
    console.log("Sua idade é maior do que a do seu melhor amigo?", verificaIdadeMaior);

    let diferencaIdade = idadeDoUsuario - idadeDoAmigo;
    console.log("A diferença de idade entre vocês é de", diferencaIdade,"anos.")

// Questão 2:
console.log("- Questão 2:")

const numeroPar = prompt("Insira um número PAR:");
    let restoDaDivisaoPor2 = Number(numeroPar) % 2;
    console.log("O resto da divisão por 2 é", restoDaDivisaoPor2)

// c) Sempre que insiri um número par o console retornou o número 0.
// d) Ao inserir um número ímpar recebi a resposta do console sempre com o número 1.

// Questão 3:
console.log("- Questão 3:")

const idadeDoUser = prompt("Digite novamente sua idade:");
    let idadeUserMes = Number(idadeDoUser) * 12;
    let idadeUserDias = Number(idadeDoUser) * 365;
    let idadeUserHoras = Number(idadeDoUser) * 8760;
    console.log("Olá, ao término desse ano você terá vivido", idadeUserMes,"meses,", idadeUserDias,"dias e", idadeUserHoras,"horas.");

// Questão 4:
console.log("- Questão 4:")

let primeiroNumero = prompt("Insira um número:");
let segundoNumero = prompt("Insira outro número:");
    primeiroNumero = Number(primeiroNumero);
    segundoNumero = Number(segundoNumero);

let resultado = primeiroNumero > segundoNumero;
    console.log("Olá, os números escolhidos foram:", primeiroNumero,"e", segundoNumero);
    console.log("O primeiro numero é maior que segundo?", resultado);

resultado = primeiroNumero === segundoNumero;
    console.log("O primeiro numero é igual ao segundo?", resultado);

resultado = primeiroNumero % segundoNumero;
    resultado = resultado === 0;
    console.log("O primeiro numero é divisível pelo segundo?", resultado);

resultado = segundoNumero % primeiroNumero;
    resultado = resultado === 0;
    console.log("O segundo numero é divisível pelo primeiro?", resultado);

// Desafio:

// Questão 1:
console.log("- Desafio/Questão 1:")

// Convertendo 77°F em K:
let grausF = 77;
let grausResultado = (grausF - 32)*(5/9) + 273.15;
    console.log("Convertendo 77°F em K, total de:", grausResultado,"K.");

// Convertendo 80°C em °F:
let grausC = 80;
    grausResultado = grausC*(9/5) + 32;
    console.log("Convertendo 80°C em °F, total de:", grausResultado,"°F.")

// Convertendo 30°C em °F e K:
grausC = 30;
    grausF = grausC*(9/5) + 32;
    grausK = (grausF - 32)*(5/9) + 273.15;
    console.log("Convertendo 30°C em °F e K, resultados:", grausF,"°F e", grausK,"K.")

// Usuário insere a quantidade de graus Celsius:
grausC = prompt("Insira o valor em graus Celsius para conversão em °F e K:");
    grausC = Number(grausC);
    grausF = grausC*(9/5) + 32;
    grausK = (grausF - 32)*(5/9) + 273.15;
    console.log("Convertendo", grausC,"°C em °F e K, resultados:", grausF,"°F e", grausK,"K.")

// Questão 2:
console.log("- Desafio/Questão 2:");

let consumoEnergia = prompt("Insira a quantidade de quilowatts consumida na sua residência:")
    consumoEnergia = Number(consumoEnergia)

    resultadoConsumoDe280 = 280 * 0.05;
    console.log("Uma residência que consome 280 quilowatt-hora pagará R$", resultadoConsumoDe280,".");

// Recebendo o valor do usuário e aplicando o desconto:
let consumoEmReais = (consumoEnergia * 0.05) 
    let resultadoComDesconto = (15 / 100) * consumoEmReais;
    resultadoComDesconto = consumoEmReais - resultadoComDesconto;
    console.log("O consumo de", consumoEnergia,"quilowatt-hora custará R$", consumoEmReais,".");
    console.log("Aplicando o desconto de 15%, o total a ser pago será de R$", resultadoComDesconto);

// Questão 3:
console.log("- Desafio/Questão 3:");

// Convertendo lb para kg:
let conversao = 20 * 0.453592;
    console.log("Convertendo 20lb para kg, total de:", conversao,"kg.");

// Convertendo onça (oz) para quilograma (kg):
conversao = 10.05 * 0.0283495;
    console.log("Convertendo 10.5oz para kg, total de:", conversao,"kg.");

// Convertendo milha (mi) para metro (m):
conversao = 100 * 1609.34;
    console.log("Convertendo 100mi para m, total de:", conversao,"m."); 

// Convertendo pés (ft) para metro (m);
conversao = 50 * 0.3048;
    console.log("Convertendo 50ft para m, total de:", conversao,"m."); 

// Convertendo galão (gal) para litro (l):
conversao =  103.56 * 3.78541;
    console.log("Convertendo 103.56gal para l, total de:", conversao,"l."); 

// Convertendo xícara (xic) para litro (l):
conversao =  450 * 0.284131;
    console.log("Convertendo 450xic para l, total de:", conversao,"l."); 

// Usuário inserindo o valor:
conversao = prompt("Insira o valor em libras para ser convertido em quilograma:")
    conversao = Number(conversao);
    conversaoUsuario = conversao * 0.453592;
    console.log("Convertendo", conversao,"libras (lb) em quilograma (kg), total de:", conversaoUsuario,"kg.")