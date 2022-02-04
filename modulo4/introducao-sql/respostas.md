### Respostas das questões abertas:

1) a) PRIMARY KEY = é o identificador dos itens e precisa ser um dado único;
VARCHAR(n) = representa uma string com no máximo "n" caracteres;
DATE = representa um data no formato internacional (YYYY-MM-AA);
NOT NULL = é uma restrição que indica que aquele campo não pode ficar sem ser preenchido;

b) SHOW DATABASES = aparentemente mostra uma tabela contendo a lista de databases (schemas) criados;
SHOW TABLES = exibe uma tabela com todos as tabelas criadas no schema selecionado;
DESCRIBE = mostra os detalhes da tabela: nome dos campos, tipos, primary key e restrições.

2) b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY';
O erro aconteceu porque tentamos adicionar um elemento com uma primary key (id) já existente e esse dado necessita ser único.

c) Error Code: 1136. Column count doesn't match value count at row 1;
As colunas estavam incompletas, correção: (id, name, salary, birth_date, gender);

d) Error Code: 1364. Field 'name' doesn't have a default value;
O campo "name" é NOT NULL, ou seja, precisa estar especificado na linha de comando e o comando deve existir.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
O tipo DATE precisa estar entre aspas.

3) a) SELECT * FROM Actor WHERE gender = "female";
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) Nenhum resultado porque não foi adicionado nenhum item com esse valor.
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;
e) Error Code: 1054. Unknown column 'nome' in 'field list'
O campo do nome está em inglês: name e não "nome";

4) a)```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
``` 
 Através dos operadores condicionais podemos filtrar detalhadamente uma tabela. A condição LIKE permite procurar strings que contenham aquela valor antes ou depois (utilizamos o % para especificar). Dessa forma, podemos restringir os filtros para que, como no comando, busque apenas os nomes que começam com a letra A (% está depois do valor) ou (com o operador OR) nomes que iniciam com a letra J; bem como, definir uma quantidade máxima do salário utilizando o operando AND e o maior que.

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 3500000;
c) SELECT * FROM Actor WHERE name LIKE "%G%" OR "%g%";
d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN "350000" AND "900000";

5) a) CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
	sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao INT NOT NULL)
Criado com seus respectivos tipos, sendo a sinopse do tipo TEXT, que contém uma configuração de armazenamento diferente da VARCHAR(n).

b) INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

c) INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

d) INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

e) INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
  "004",
  "Bacurau",
  "No sertão brasileiro, a comunidade de Bacurau acaba de perder dona Carmelita, uma moradora respeitada por todos. Na cidade para o velório, Teresa (Bárbara Colen) encontra Domingas (Sônia Braga), Acácio (Thomas Aquino) e outros moradores de quem é próxima. Logo, estranhos episódios começam a acontecer e o povoado desaparece dos mapas online. O fora da lei Lunga (Silvero Pereira) então é chamado para ajudar seus conterrâneos a protegerem sua terra. Indicado à Palma de Ouro no Festival de Cannes. Dirigido por Kleber Mendonça Filho e Juliano Dornelles.",
  "2019-08-23", 
  8
);

6) a) SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
b) SELECT * FROM Filmes WHERE nome = "Bacurau";
c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

7) a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";
b) SELECT * FROM Filmes WHERE nome LIKE "%Se Eu Fosse Você%" OR sinopse LIKE "%Se Eu Fosse Você%";
c) SELECT * FROM Filmes WHERE lancamento < "2022-01-31";
d) SELECT * FROM Filmes WHERE (lancamento < "2022-01-31") AND (nome LIKE "%flor%" OR sinopse LIKE "%flor%") AND (avaliacao > 7);
