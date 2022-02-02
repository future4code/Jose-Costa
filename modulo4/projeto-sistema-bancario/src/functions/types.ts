export type Account  = {
    name: string,
    cpf: string,
    birthDate: string | Date,
    accountBalance: number,
    bankStatement: BankStat[],
}

export type BankStat = {
    value: number,
    date: Date | string,
    desc: string
}