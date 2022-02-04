### Respostas

1) a) Deleta a coluna "salary da tabela "Actor".
b) Altera o nome da coluna "gender" para "sex" e indica que os valores precisam ter ser uma string com no máximo 6 caracteres.
c) Altera o tipo da coluna "gender" para texto com máximo caracteres de 255.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2) a) UPDATE Actor SET name = "Romeo Santos", birth_date = "1991-12-03" WHERE id = "003";
b) UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
c) UPDATE Actor SET name = "Alicia Munoz", salary = "100000", birth_date = "1988-05-30", gender = "female" WHERE id = "005";
d) O workbench retorna com um "OK", porém informando que nenhuma linha foi afetada, provavelmente porque não existe.

3) a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

4) a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor;
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

5) a) A query contabilizou a quantidade de elementos em cada "gender" e organizou os dados numa nova tabela.
b) SELECT id, name FROM Actor ORDER by id DESC;
c) SELECT * FROM Actor ORDER by salary ASC;
d) SELECT * FROM Actor ORDER by salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP by gender;

6) a) ALTER TABLE Filmes ADD playing_limit_date DATE;
b) ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;
c)UPDATE Filmes SET playing_limit_date = "2022-03-15" WHERE id = "001";
UPDATE Filmes SET playing_limit_date = "2013-01-6" WHERE id = "002";
d) DELETE FROM Filmes WHERE id = "003";
UPDATE Filmes SET sinopse = "Um jovem sonhador..." WHERE id = "003";
O workbench retorna a ação como positiva, porém na messagem diz que nenhuma linha ou coluna foi alterada.
