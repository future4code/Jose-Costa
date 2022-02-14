import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = []

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        Transaction;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public setName(name: string): void {
        this.name = name
    }

    public setAge(age: number): void {
       this.age = age;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }
    public setTransaction(transactions: Transaction): void {
        this.transactions.push(transactions);
    }
}