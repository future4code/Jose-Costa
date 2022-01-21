// Exercício 7:
type Classes = { [index: string]: number} 

type Produtos = {
    nome: string,
    preco: number,
    classificao: string,
    desconto?: number 
}

const classesRoupas: Classes = {
    "Verão": 5,
    "Inverno": 10,
    "Banho": 4,
    "Intimas": 7,
}

const produtos: Produtos[] = [
    { nome: "Calça Moletom", preco: 80, classificao: "Inverno" },
    { nome: "Boné", preco: 20, classificao: "Verão" },
    { nome: "Toalha", preco: 15, classificao: "Banho" },
];

const setarDescontos = (produtos: Produtos[]): Produtos[] => {
    const descontos: Produtos[] = produtos.map((item: Produtos): Produtos => {
        const calcPorcentagem: number = item.preco - ((classesRoupas[item.classificao] / 100) * item.preco);
        return {...item, desconto: calcPorcentagem};
    })
    return descontos;
}

console.table(setarDescontos(produtos))

