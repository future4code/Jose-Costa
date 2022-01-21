// Exercício 8:
const fs = require("fs");

type Produto = {
    nome: string,
    custo: number,
    valor: number,
    ingredientes: string[],
}

// A)
const cadastrarProduto = (nome: string, custo: number, valor: number, ingredientes: string[]): void => {
    let produtos: Produto[];
    const novoProduto: Produto = {
        nome,
        custo,
        valor,
        ingredientes
    }
    try {
        produtos = JSON.parse(fs.readFileSync("src/data/produtos.json"));
    } catch {
        produtos = []
    }
    produtos.push(novoProduto);
    fs.writeFileSync("src/data/produtos.json", JSON.stringify(produtos, null, '\t'))
    console.log("Produto adicionado")
}

cadastrarProduto("Pizza de Calabresa", 20, 35, ["Muçarela", "Calabresa", "Cebola"]);

// B)
const buscarProduto = (filtro: string): void => {
    let listaProdutos: Produto[];
    try {
        listaProdutos = JSON.parse(fs.readFileSync("src/data/produtos.json"));
    } catch {
        listaProdutos = [];
    }
    console.log(`Buscando itens:`)
    const busca = listaProdutos.filter((item) => {
        return item.nome.includes(filtro);
    }).map((item) => {
        console.log(`${item.nome} - R$ ${item.valor}`)
    })
    busca.length === 0 && console.log("Nenhum item encontrado.")
}

buscarProduto("Calabresa");