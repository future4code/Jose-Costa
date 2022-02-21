### REspostas

1) a) Usar strings para representar ids aumenta a possibilidade de uso e dificulta a repetição matendo um tamanho de caracteres legal, por isso acho interessante o uso de strings como IDs.

2) a) A primeira constante seta a variável que será utilizada na última função (de adicionar um novo usuário no banco).
A função seguinte estabele conexão do knex com o banco de dados, utilizando as variáveis de ambiente armazenadas no .env.
E por fim, a função assícrona "createUser" envia a query para o banco de dados criar um novo usuário com os valores de: id, email e password.

b) CREATE TABLE User_exercicio (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

3) a) A linha 'as string' indica que aquele dado será uma string e precisamos utiliza-la nesse caso porque o JWT espera o dado em string e para grantir isso utilizamos essa sintaxe.
