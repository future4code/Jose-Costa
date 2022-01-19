// Exercício 2: Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operacao = process.argv[2];
const inputA = Number(process.argv[3]);
const inputB = Number(process.argv[4])

if (process.argv.length !== 5) {
    console.log(`Erro: Esperava 3 parâmetros, porém só recebi ${process.argv.length - 2}.`);
} else if (isNaN(inputA) || isNaN(inputB)) {
    console.log(`O parâmetro precisa ser um número.`);
} else {
    if (operacao === "add") {
        console.log(`Resultado: ${inputA + inputB}`);
    } else if (operacao === "sub") {
        console.log(`Resultado: ${inputA - inputB}`);
    } else if (operacao === "mult") {
        console.log(`Resultado: ${inputA * inputB}`);
    } else if (operacao === "div") {
        console.log(`Resultado: ${inputA / inputB}`);
    } else {
        console.log("Digite uma operação válida: add, sub, mult ou div. :)")
    }
}