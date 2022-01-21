// Exercício 4:
/* b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

R: A transpilação pode ser feita com o comando "tsc". O Typescript já identifica e faz o procedimento automático lançando a versão JavaScript para a pasta build.
Para que tudo ocorra dessa forma é necessário, também, configurar o tsconfig.json.
Esse comando também transpila todos os arquivos .ts em .js
*/

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}