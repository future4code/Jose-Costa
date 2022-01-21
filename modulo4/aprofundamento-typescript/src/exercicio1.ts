// Exercício 1: O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

/* a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    
    const minhaString: string = 0;
    Caso a variável seja tipada como string e o valor inserido seja um número o TypeScript acusa o erro informando que não é possível setar um número nessa variável.

b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

    const meuNumero: number | string = "Jogador";
    Conseguimos atribuir mais de um tipo na variável utilizando o Union Types com o operador loógico "|".

c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades: `nome`, que é uma string; `idade`, que é um número; `corFavorita`, que é uma string.
d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.
*/

enum coresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

const pessoaA: Pessoa = {
    nome: "Albuquerque",
    idade: 25,
    corFavorita: coresArcoIris.AMARELO
}

const pessoaB: Pessoa = {
    nome: "Marinalva",
    idade: 22,
    corFavorita: coresArcoIris.VERDE
}

const pessoaC: Pessoa = {
    nome: "Marinês",
    idade: 32,
    corFavorita: coresArcoIris.LARANJA
}