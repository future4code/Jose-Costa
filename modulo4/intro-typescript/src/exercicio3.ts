// Exercício 3:  A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições. Refatore a função para o Typescript:

function checaAnoBissexto(ano: number): boolean {
    const cond1: boolean = ano % 400 === 0;
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
 }

console.log(checaAnoBissexto(1991));