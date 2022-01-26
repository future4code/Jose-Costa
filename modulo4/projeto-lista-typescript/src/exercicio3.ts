enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Catalogo = {
    nome: string,
    anoLancamento: number,
    genero: string,
    pontuacao?: number
}

const organizarFilmes = (nome: string, anoLancamento: number, genero: string, pontuacao?: number): Catalogo => {
    let infoFilmes: Catalogo = { nome, anoLancamento, genero };
    pontuacao && (infoFilmes = { ...infoFilmes, pontuacao });
    return infoFilmes;
}

console.log(organizarFilmes("Uma alegria triste", 1998, GENERO.COMEDIA, 12))
console.log(organizarFilmes("Uma triste alegria", 1999, GENERO.COMEDIA))