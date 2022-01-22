const meses: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Março", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

type Data = { [input: string]: string }

const apresentarNomeDataNasc = (nome: string, dataNascimento: string): string => {
    const dataString: string[] = dataNascimento.split("/");
    const mesString: string = meses[Number(dataString[1]) - 1];
    const data: Data = { dia: dataString[0], mes: mesString, ano: dataString[2] }
    return `Olá, me chamo ${nome}, nasci no dia ${data.dia} do mês de ${data.mes} do ano de ${data.ano}.`
}

console.log(apresentarNomeDataNasc("Valadares", "03/01/1991"))