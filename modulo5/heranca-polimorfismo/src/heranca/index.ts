// Exercício 1:
// a) 

import { Customer } from "./Customer";
import { User } from "./User";
const { randomUUID } = require("crypto");

// Exercício 1:
// a) Não é póssível acessar a propriedade 'password' diretamente porque ela está em modo 'private'. A forma de acessar seria invocando a nova classe por completo (exemplo: user).
// b) Apenas uma mensagem.

// const zeUser = new User(randomUUID(), "rodolfo@joganada.com.br", "Zé", "ae098")
// console.log(zeUser.password)

// Exercício 2: 
// a) Uma vez.
// b) Uma vez, porque a classe Customer é uma subclasse da classe 'User' e para ser instanciada é necessário utilizar propriedades da classe pai e para isso executa o constructor.
const lisCustomer = new Customer(randomUUID(), "lilis@joganada.com.br", "Lis", "lis145", "1233219804359983223-21");

// Exercício 3:
// a) Não é possível imprimir a senha porque ela está como 'private' na classe pai.
// console.log(lisCustomer.password)

//  Exercício 4:
lisCustomer.introduceYourself();




