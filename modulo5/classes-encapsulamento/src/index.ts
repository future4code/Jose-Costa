import { UserAccount } from "./UserAccount";
import { Transaction } from "./Transaction";
import { Bank } from "./Bank";

// Exercício 1:
// a) O construtor é um método chamado logo na inicialização da classe apra referenciar os métodos ou atributos logo no início.
// b) O console foi impresso uma vez.
// c) Criando métodos de setters.

const user = new UserAccount("000.000.000-14", "José", 16);

user.setTransaction(new Transaction("Transferência", 100, "14-12-2022"));
console.log(user.getTransactions())

const foBank = new Bank([user]);
console.log(foBank)
