SELECT * FROM Actor;
DESCRIBE Actor;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET name = "Romeo Santos", birth_date = "1991-12-03" WHERE id = "003";
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
UPDATE Actor SET name = "Alicia Munoz", salary = "100000", birth_date = "1988-05-30", gender = "female" WHERE id = "005";
UPDATE Actor SET name = "Batistuta Alvorez" WHERE id = "010";
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor ORDER by id DESC;

SELECT * FROM Actor ORDER by salary ASC;

SELECT * FROM Actor ORDER by salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP by gender;

ALTER TABLE Filmes ADD playing_limit_date DATE;
DESCRIBE Filmes;

ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;

UPDATE Filmes SET playing_limit_date = "2022-03-15" WHERE id = "001";

SELECT * FROM Filmes;

UPDATE Filmes SET playing_limit_date = "2013-01-6" WHERE id = "002";

DELETE FROM Filmes WHERE id = "003";
UPDATE Filmes SET sinopse = "Um jovem sonhador..." WHERE id = "003";