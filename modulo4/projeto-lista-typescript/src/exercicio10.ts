const verificarDV = (cpf: string[], qtdNumerosVerificados: number) => {
    let sequencia: number = qtdNumerosVerificados;
    let totalVerificacao: number = 0;
    for (let i = 0; i < (qtdNumerosVerificados - 1); i++) {
            totalVerificacao = totalVerificacao + (Number(cpf[i]) * sequencia);
             sequencia--;
    }
    const moduloOnze = 11 - (totalVerificacao % 11);
    let dV: number;
    moduloOnze >= 10 ? dV = 0 : dV = moduloOnze;
    return dV;
}

const validarCPF = (cpf: string) => {
    const cpfArray: string[] = cpf.replace(/[.-]/g, "").split("");
    const dVs: number[] = [ verificarDV(cpfArray, 10), verificarDV(cpfArray, 11) ]
    const resultado: boolean = Number(cpf[12]) === dVs[0] && Number(cpf[13]) === dVs[1]
    return resultado;
}

console.log(validarCPF("145.382.206-20"))