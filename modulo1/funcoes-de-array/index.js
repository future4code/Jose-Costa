/* Exercícios de interpretação de código: 

- Questão 1:
a) Será impresso no console uma repetição mostrando o primeiro objeto, o seu número de índice e o array completo em seguida.
Isso seria repetido até que todos os elementos da array fossem mostrados, alterando as duas primeiras partes (o objeto e o número do índice).

- Questão 2:
a) Será impresso no console a array 'novoArrayB´:
Amanda Rangel, Laís Petra, Letícia Chijo.

- Questão 2:
a) Será impresso uma cópia da array 'usuarios' sem a linha que tem os dados da "Letícia Chijo".

*/

// Exercícios de escrita de código:

// Questão 1: Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter.

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos.
const nomesDosPets = pets.map((pets) => {
    return pets.nome;
});

// b) Crie um novo array apenas com os cachorros salsicha.
const petsSalsichas = pets.filter((pets) => {
    if (pets.raca === `Salsicha`) {
        return pets.raca;
    }
});

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const petsPoodles = pets.filter((pets) => {
    if (pets.raca === `Poodle`) {
        return pets.raca;
    }
});

const mensagemDeDescontoPoodles = petsPoodles.map((animal, index) => {
    const nomeDoPet = animal.nome;
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDoPet}`;
});

// Questão 2: Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categgitoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item.
const listaDeProdutos = produtos.map((produto) => {
    return produto.nome;
});

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.
const descontoCincoPorcento = produtos.map((produto) => {
    produto.preco = (produto.preco - (produto.preco * 0.05)).toFixed(2);
    return {nome: produto.nome, preco: Number(produto.preco)}
});

// c) c) Crie um novo array que contenha apenas os objetos da categoria Bebidas.
const listaBebidas = produtos.filter((produto) => {
    if (produto.categoria === `Bebidas`) {
    return produto;
    }
});

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê".
const produtosYpe = produtos.filter((produto) => {
    if (produto.nome.includes(`Ypê`)) {
        return produto;
    }
});

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê".
const fraseProdutosYpe = produtosYpe.map((produtos) => {
    return `Compre ${produtos.nome} por R$ ${produtos.preco}.`
});

fraseProdutosYpe;

// Desafio: Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética.
const pokemonsEmOrdemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome;
});

pokemonsEmOrdemAlfabetica.sort();

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição:
const tiposPokemon = pokemons.map((pokemon) => {
    return pokemon.tipo;
});

listaTipos = [];

for (let tipo of tiposPokemon) {
    if (listaTipos.includes(tipo) === false) {
        listaTipos.push(tipo)
    }
}