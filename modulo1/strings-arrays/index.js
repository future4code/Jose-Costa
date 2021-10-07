/* Exercícios de interpretação de código:

~ Questão 1:
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9 

Na "e" e no "f" precisei conferir no console para compreender.
e) Altera o valor do índice 1 da array para 19.
f) i+6=6, então o índice 6 é o 9.

~ Questão 2:
SUBA NUM ÔNIBUS EM MIRROCOS, 27. 

*/

// Exercícios de escrita de código:

// Questão 1:
console.log(`Questão 1:`);
    const nomeDoUsuario = prompt(`Nome:`);
    const emailDoUsuario = prompt(`E-mail:`);
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// Questão 2:
console.log(`Questão 2:`);
    const comidasPreferidas = [`Rubacão`, `Queijo coalho`, `Bolo de caco`, `Arroz de leite`, `Arrumadinho`];
    console.log(comidasPreferidas);
    console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`);

// Questão 2/continuação:
    const comidaUsuario = prompt(`Informe uma comida preferida:`);
    const comidaNumero2 = comidasPreferidas[1];
    comidasPreferidas.splice(1, 0, comidaUsuario);
    console.log(`${comidaUsuario} foi adicionado a lista das comidas no lugar de ${comidaNumero2}.`);
    console.log(`Lista atualizada: ${comidasPreferidas}`);

// Questão 3:
console.log(`Questão 3:`);
    const listaDeTarefas = [];
    const tarefaUm = prompt(`Informe uma tarefa que você realiza no seu dia a dia: (1/3)`);
        listaDeTarefas.push(tarefaUm);
    const tarefaDois = prompt(`Informe outra tarefa (2/3)`);
        listaDeTarefas.push(tarefaDois);
    const tarefaTres = prompt(`Informe a última tarefa (3/3)`);
    listaDeTarefas.push(tarefaTres);
    console.log(`Lista de tarefas diárias: ${listaDeTarefas}.`);

    const tarefaRealizada = prompt(`Selecione uma tarefa já realizada através do índice: (0, 1 ou 2)`);
    listaDeTarefas.splice(tarefaRealizada,tarefaRealizada);
    console.log(`Tarefa realizada com sucesso!`);
    console.log(`Lista de tarefas atualizada: ${listaDeTarefas}.`);


// Desafio:
// Precisei pesquisar na internet para resolver os desafios.
// Encontrei o método "split" no seguinte site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// E o método "indexOf" no site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#usando_indexof

// Questão 1:
console.log(`Desafio/Questão 1:`);

const fraseUsuario = prompt(`Digite uma frase de bom dia:`);
    const arrayUsuario = fraseUsuario.split(` `, 99);
    console.log(arrayUsuario);

//Questão 2:
console.log(`Desafio/Questão 2:`)

    const listaFrutas = [`Banana`, `Morango`, `Abacaxi`, `Laranja`, `Ameixa`];
    const indiceAbacaxi = listaFrutas.indexOf(`Abacaxi`);
    console.log(`O índice da palavra Abacaxi é ${indiceAbacaxi} e o tamanho da array é ${listaFrutas.length}. :)`)