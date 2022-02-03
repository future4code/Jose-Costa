### Exercício de interpreteção de código:

- Exercício 1:
a) A chave estrangeira é o elemento que faz menção a tabela na qual será estabelecido uma relação. Ela indica qual elemento da tabela atual se liga com o da outra tabela.

b) INSERT INTO Rating VALUES ("001", "Muito massa", 9, "001"), ("002", "Não gostei muito", 5, "002"),
("003", "Razoável", 7, "004"),("005", "Gostei!", 8, "001");

c) INSERT INTO Rating VALUES ("004", "Muito massa", 9, "003");
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-jose-rodolfo-valerio-costa`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
A query informa que deu falha na ligação da Foreign Key justamente por não encontrar o ID "003".

d) ALTER TABLE Filmes DROP COLUMN avaliacao;

e) DELETE FROM Filmes WHERE id = "001";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-jose-rodolfo-valerio-costa`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
Não conseguimos deletar porque existe uma ligação entre as duas tabelas. A solução seria deletar os elementos da outra tabela para posteriormente deletar da tabela de Filmes.

- Exercício 2:
a) A tabela MovieCast possui duas colunas onde cada uma delas faz relação com um elemento diferente. A primeira "movie_id" faz relação através da Foreign Key com o elemento "id" da tabela Movie e a segunda com a tabela de Actor (elemento "id").

b) INSERT INTO MovieCast VALUES ("001", "003"), ("001", "004"), ("002", "003"), ("002", "005"), ("004", "004"), ("004", "005");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-jose-rodolfo-valerio-costa`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
Não conseguimos criar relação com elementos que não existam.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-jose-rodolfo-valerio-costa`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Só conseguimos deletar atores que não estão em relação com nenhuma tabela. Precisamos deletar primeiro os elementos da tabela relacionada para depois deletar o ator.

- Exercício 3:

a) A query agrupa as duas tabelas relacionando as informações passadas através do operador ON.
b) SELECT Filmes.nome, Filmes.id, Rating.rate FROM Filmes INNER JOIN Rating ON Filmes.id = Rating.movie_id;

- Exercício 4:

a) SELECT Filmes.nome, Filmes.id, Rating.rate, Rating.comment FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;
b) SELECT Filmes.id, Filmes.nome, MovieCast.actor_id FROM Filmes RIGHT JOIN MovieCast ON Filmes.id = MovieCast.movie_id;
c) SELECT Filmes.id, Filmes.nome, AVG(Rating.rate) FROM Filmes JOIN Rating ON Filmes.id = Rating.movie_id GROUP BY Filmes.id;