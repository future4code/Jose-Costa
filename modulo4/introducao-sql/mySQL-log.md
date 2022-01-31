CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Ariosvaldo",
  200000,
  "1970-07-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Valadarez",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid";
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
SELECT id, name FROM Actor WHERE id = "002";

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 3500000;

SELECT * FROM Actor WHERE name LIKE "%G%" OR "%g%";
SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN "350000" AND "900000";

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
	sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "004",
  "Bacurau",
  "No sertão brasileiro, a comunidade de Bacurau acaba de perder dona Carmelita, uma moradora respeitada por todos. Na cidade para o velório, Teresa (Bárbara Colen) encontra Domingas (Sônia Braga), Acácio (Thomas Aquino) e outros moradores de quem é próxima. Logo, estranhos episódios começam a acontecer e o povoado desaparece dos mapas online. O fora da lei Lunga (Silvero Pereira) então é chamado para ajudar seus conterrâneos a protegerem sua terra. Indicado à Palma de Ouro no Festival de Cannes. Dirigido por Kleber Mendonça Filho e Juliano Dornelles.",
  "2019-08-23", 
  8
);

SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
SELECT * FROM Filmes WHERE nome = "Bacurau";
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

SELECT * FROM Filmes WHERE nome LIKE "%vida%";
 SELECT * FROM Filmes WHERE nome LIKE "%Se Eu Fosse Você%" OR sinopse LIKE "%Se Eu Fosse Você%";
SELECT * FROM Filmes WHERE (lancamento < "2022-01-31") AND (nome LIKE "%flor%" OR sinopse LIKE "%flor%") AND (avaliacao > 7);
