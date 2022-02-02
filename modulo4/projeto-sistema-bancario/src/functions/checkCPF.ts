import data from "../data/data.json";

const checkDV = (cpf: string[], verifiedNumbers: number): number => {
    let sequence: number = verifiedNumbers;
    let totalVerified: number = 0;
    for (let i = 0; i < (verifiedNumbers - 1); i++) {
        totalVerified = totalVerified + (Number(cpf[i]) * sequence);
        sequence--;
    }
    const moduleEleven = 11 - (totalVerified % 11);
    let dV: number;
    moduleEleven >= 10 ? dV = 0 : dV = moduleEleven;
    return dV;
}

const validateCPF = (cpf: string): boolean => {
    const cpfArray: string[] = cpf.replace(/[.-]/g, "").split("");
    const dVs: number[] = [checkDV(cpfArray, 10), checkDV(cpfArray, 11)];
    const result: boolean = Number(cpf[12]) === dVs[0] && Number(cpf[13]) === dVs[1];
    return result;
}

export const checkDuplicateCPF = (cpf: string): boolean => {
    let thirdCheck: boolean = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].cpf === cpf) {
                thirdCheck = true;
            }
        }
    return thirdCheck;
}

export const checkCPF = (cpf: string): boolean => {
    const cpfRegEx = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    let firstCheck = cpfRegEx.test(cpf);
    let secondCheck = validateCPF(cpf);
    let thirdCheck = checkDuplicateCPF(cpf);
    const result = firstCheck && secondCheck && thirdCheck;
    return result;
}
