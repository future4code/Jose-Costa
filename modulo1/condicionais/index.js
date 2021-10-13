/* Exercícios de interpretação de código:

Questão 1)

a) O código recebe um número do usuário e através de uma condicional faz uma verificação se o resto da divisão por 2 é 0, respondendo com uma mensagem no console de conclusão.
O teste verifica a paridade da variável número através do resto da divisão.

b) O código imprime no console "Passou no teste" para todos os números pares inseridos pelo usuário.

c) A mensagem "Não passou no teste" é recebida sempre que o usuário inserir um número ímpar no prompt.

Questão 2)

a) Identificar o preço de uma determinada fruta.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5.

Questão 3)

a) A primeira linha está solicitando que o usuário insira um número. O valor já será convertido para o tipo number e salvo na variável 'numero'.
b) É bem provável que o comando dê erro devido ao uso da variável 'mensagem', mas caso isso não aconteça teremos a seguinte situação:

Caso o usuário insira o número 10, a mensagem será: "Esse número passou no teste".
Se o número inserido for -10 não aparecerá nenhuma mensagem no console.
c) Creio que haverá um erro sim. A variável 'mensagem' foi declarada dentro de um escopo de bloco e está sendo solicitado fora dele, sendo que no escopo global ela não foi declarada, portanto: erro. */

// Exercícios de escrita de código:

// Questão 1:

let idadeUsuario = prompt(`Qual sua idade?`);
idadeUsuario = Number(idadeUsuario);

if (idadeUsuario >= 18) {
    console.log(`Você pode dirigir.`);
} else {
    console.log(`Você não pode dirigir.`)
}

// Questão 2:

const turnoAulaUsuario = prompt(`Você estuda em qual turno? Responda com: M (matutino) ou V (Vespertino) ou N (Noturno)`).toLowerCase();

if (turnoAulaUsuario === `m`) {
    console.log(`Bom dia! :D`)
} else if (turnoAulaUsuario === `v`) {
    console.log(`Boa tarde! :}`);
} else if (turnoAulaUsuario === `n`) {
    console.log(`Boa noite! :)`)
} else {
    console.log(`Turno inválido, mas de qualquer forma: ótimo dia para você.`)
}

// Questão 3:
const turnoAulaSwitch = prompt(`Você estuda em qual turno? Responda com: M (matutino) ou V (Vespertino) ou N (Noturno)`).toLowerCase();

switch (turnoAulaSwitch) {
    case `m`:
        console.log(`Bom dia! :D`);
        break
    case `v`:
        console.log(`Boa tarde! :`);
        break
    case `n`:
        console.log(`Boa noite! :)`);
        break
    default:
        console.log(`Turno inválido.`);
        break
}

// Questão 4 + Desafio:

const tabelaPrecos = {
    sf: {
        etapa: `Semifinal`,
        categoria1: 1320,
        categoria2: 880,
        categoria3: 550,
        categoria4: 220,
    },
    dt: {
        etapa: `Disputa do 3º lugar`,
        categoria1: 660,
        categoria2: 440,
        categoria3: 330,
        categoria4: 170,
    },
    fi: {
        etapa: `Final`,
        categoria1: 1980,
        categoria2: 1320,
        categoria3: 880,
        categoria4: 330,
    }
}

function solicitarInfosUsuario() {
    const nomeCompleto = prompt(`Nome completo:`);
    const tipoDoJogo = prompt(`Tipo do jogo: IN ou DO?`).toLowerCase();
    const etapaDoJogo = prompt(`Etapa do jogo: SF, DT ou FI?`).toLowerCase();
    const categoriaDoJogo = Number(prompt(`Categoria: 1, 2, 3 ou 4?`));
    const quantidadeDeIngressos = Number(prompt(`Quantidade de ingressos:`));
    if (tipoDoJogo != `in` && tipoDoJogo != `do`) {
        console.log(`Tipo de Jogo inválido, digite: IN para jogo internacional ou DO para jogo doméstico.`);
    } else if (etapaDoJogo != `sf` && etapaDoJogo != `dt` && etapaDoJogo != `fi`) {
        console.log(`Etapa do jogo inválida, digite: SF para semi-final, DT para decisão de terceiro lugar ou FI para final.`);
    } else if (categoriaDoJogo >= 1 && (categoriaDoJogo > 4)) {
        console.log(`Categoria inválida, digite um número entre 1 e 4.`)
    } else {
        const infosUsuario = [nomeCompleto, tipoDoJogo, etapaDoJogo, categoriaDoJogo, quantidadeDeIngressos];
        return infosUsuario;
    }
}

function verificarPrecoUnitario(etapa, categoria) {
    if (categoria === 1) {
        return tabelaPrecos[etapa].categoria1;
    } else if (categoria === 2) {
        return tabelaPrecos[etapa].categoria2;
    } else if (categoria === 3) {
        return tabelaPrecos[etapa].categoria3;
    } else if (categoria === 4) {
        return tabelaPrecos[etapa].categoria4;
    }
}

function venderIngresso(dadosParaVenda) {
    const nome = dadosParaVenda[0];
    const tipo = dadosParaVenda[1];
    const etapa = dadosParaVenda[2];
    const categoria = dadosParaVenda[3];
    const quantidade = dadosParaVenda[4];
    const precoIngressoUnidade = verificarPrecoUnitario(etapa, categoria);
    if (tipo === `in`) {
        const precoInternacionalUn = precoIngressoUnidade * 4.10;
        const precoInternacionalFinal = precoInternacionalUn * quantidade;
        console.log(`--- Dados da compra ---
Nome do cliente: ${nome}
Tipo do jogo: Internacional
Etapa do jogo: ${tabelaPrecos[etapa].etapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidade} ingresso(s)
--- Valores ---
Valor do ingresso: U$ ${precoInternacionalUn}
Valor total: U$ ${precoInternacionalFinal}`)
    }
    else {
        const precoNacionalFinal = precoIngressoUnidade * quantidade;
        console.log(`--- Dados da compra ---
Nome do cliente: ${nome}
Tipo do jogo: Nacional
Etapa do jogo: ${tabelaPrecos[etapa].etapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidade} ingresso(s)
--- Valores ---
Valor do ingresso: R$ ${precoIngressoUnidade}
Valor total: R$ ${precoNacionalFinal}`)
    }
}

const dadosParaVenda = solicitarInfosUsuario();
venderIngresso(dadosParaVenda);