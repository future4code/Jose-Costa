/* Exercícios de interpretação de código

Questão 1)
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

Questão 2)
A) As informações depois do const = tartaruga estão soltas no escopo, então, prevejo um erro ao rodar o comando, mas caso não dê isso o resultado será:

nome: "Juca", 
	idade: 3, 
	raca: "SRD"

 nome: "Juba", 
	idade: 3, 
	raca: "SRD"

nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

B) A sintaxe '...' faz a copia de um objeto ou array. Na questão, a sintaxe foi utilizada para criar cópias dos objetos 'cachorro' e 'gato'.

Questão 3)
A) false
  undefined

B) O undefined apareceu porque não existe a propriedade altura no objeto, diferente do ´backender´.

*/ 

// Exercícios de escrita de código:

// Questão 1)

// A)
const apelidos = { 
    nome: `Quintino`,
    apelidos: [`Januário`, `Tempestade`, `Curió`]
}

function verificarApelido(pessoa) {
    const nomeDoUsuario = pessoa.nome;
    const apelidoDoUsuario = pessoa.apelidos;
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

verificarApelido(apelidos);

// B)
const novosApelidos = {
    ...apelidos,
    apelidos: [`Carcará`, `Teteu`, `Corisco`]
}

verificarApelido(novosApelidos);

// Questão 2)

const primeiraInformacao = {
    nome: `Margarida`,
    idade: 42,
    profissao: `Professora`
}

const segundaInformacao = {
    nome: `Bromélia`,
    idade: 37,
    profissao: `Árbitra`
}

function verificarInfos(dados) {
    const nomeCaracteres = dados.nome.length;
    const profissaoCaracteres = dados.profissao.length;
    const listaInfo = [dados.nome, nomeCaracteres, dados.idade, dados.profissao, profissaoCaracteres];
    return listaInfo;
}

console.log(verificarInfos(primeiraInformacao));
console.log(verificarInfos(segundaInformacao));

// Questão 3)

const carrinho = [];

const goiaba = {
    nome: `Goiaba`,
    disponibilidade: true
}

const acerola = {
    nome: `Acerola`,
    disponibilidade: true
}

const maracuja = {
    nome: `Maracujá`,
    disponibilidade: true
}

function adicionarFruta(fruta) {
    const adicionarFruta = carrinho.push(fruta);
}

adicionarFruta(goiaba);
adicionarFruta(acerola);
adicionarFruta(maracuja);

console.log(carrinho);

// Desafio:

// Questão 1:

function buscarInformacoes() {
    const nomeDoUsuario = prompt(`Nome:`);
    const idadeDoUsuario = Number(prompt(`Idade:`));
    const profissaoDoUsuario = prompt(`Profissão:`);
    const novoUsuario = {
        nome: nomeDoUsuario,
        idade: idadeDoUsuario,
        profissao: profissaoDoUsuario
    }
    console.log(novoUsuario);
    console.log(typeof novoUsuario);
}

buscarInformacoes();

// Questão 2:

const filmes = {
    a: { 
        nome: `O Auto da Compadecida`,
        lancamento: 2000
    },
    b: { 
        nome: `Lisbela e o Prisioneiro`,
        lancamento: 2003
    }
}

const a = filmes.a;
const b = filmes.b;

function verificarFilme(a, b) {
    const anoLancamentoA = a.lancamento;
    const anoLancamentoB = b.lancamento;
    console.log(`O primeiro filme foi lançando antes do segundo? ${(anoLancamentoB > anoLancamentoA)}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${(anoLancamentoB === anoLancamentoA)}`);
}

verificarFilme(a, b);

// Questão 3:

function controlarDisponibilidade(fruta) {
    const controleEstoque = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade    
    }
    return controleEstoque;
}

controlarDisponibilidade(acerola);