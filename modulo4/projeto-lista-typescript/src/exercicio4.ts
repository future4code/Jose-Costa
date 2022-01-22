enum SETOR {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro",
}

type Pessoas = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const colobadoresEmpresa: Pessoas[] = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
]

const listarPessoasMarketPresencial = () => {
    const listaMarketPresencial: Pessoas[] = colobadoresEmpresa.filter((pessoa) => { 
        return pessoa.setor === "marketing" && pessoa.presencial === true;
    })
    return listaMarketPresencial;
}

console.table(listarPessoasMarketPresencial())