CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating VALUES ("001", "Muito massa", 9, "001"), ("002", "Não gostei muito", 5, "002"),
("003", "Razoável", 7, "004"),("005", "Gostei!", 8, "001");

INSERT INTO Rating VALUES ("004", "Muito massa", 9, "003");

SELECT * FROM Filmes;

ALTER TABLE Filmes DROP COLUMN avaliacao;

DELETE FROM Filmes WHERE id = "001";

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES 
("001", "003"), ("001", "004"), ("002", "003"), ("002", "005"), ("004", "004"), ("004", "005")
;

INSERT INTO MovieCast VALUES ("003", "001");

DELETE FROM Actor WHERE id = "003";

SELECT * FROM Actor;

SELECT Filmes.nome, Filmes.id, Rating.rate FROM Filmes INNER JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT Filmes.nome, Filmes.id, Rating.rate, Rating.comment FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT Filmes.id, Filmes.nome, MovieCast.actor_id FROM Filmes JOIN MovieCast ON Filmes.id = MovieCast.movie_id;

SELECT Filmes.id, Filmes.nome, AVG(Rating.rate) FROM Filmes JOIN Rating ON Filmes.id = Rating.movie_id GROUP BY Filmes.id;

SELECT * FROM Filmes
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;