const dataNascimento = process.argv[2];
const dataEmissaoRG = process.argv[3];

const promptUsuario = (): void => {
    const dataNasc = prompt(`Insira sua data de nascimento:`);
    const dataEmissaoRG = prompt(`Insira a data de emissão do seu RG:`);
    verificarValidadeRG(dataNasc, dataEmissaoRG);
}

const obterData = (data: string): Date => {
    let padraoData: string[] = data.split(`/`);
    const novaData: string = `${padraoData[2]}/${padraoData[1]}/${padraoData[0]}`
    return new Date(novaData);
}

const verificarValidadeRG = (dataNascimento: string, dataEmissaoRG: string): boolean => {
    const dataNasc: Date = obterData(dataNascimento);
    const dataRG: Date = obterData(dataEmissaoRG);
    const dataAtual: Date = new Date();
    const idade: number = Number(((dataAtual.getTime() - dataNasc.getTime()) / 31536000000).toFixed(0));
    const tempoEmissao: number = Number(((dataAtual.getTime() - dataRG.getTime()) / 31536000000).toFixed(0));
    if (idade <= 20 && tempoEmissao >= 5) { return true; }
    else if ((idade >= 20 && idade <= 50) && tempoEmissao >= 10) { return true; }
    else if (idade > 50 && tempoEmissao >= 15) { return true; }
    else { return false; }
}