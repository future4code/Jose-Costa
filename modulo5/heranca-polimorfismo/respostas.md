### Respostas

Exercício 1:
const client: Client = {
    name: "teste",
    registrationNumber: 123312,
    consumedEnergy: 123,
    calculateBill: () => { return 2 }
}
console.log(client, client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

Exercício 2:
const place = new Place("1231233-32123123");

Exercício 4:
a) A estrutura é semelhante a classe "ResidencialClient": propriedades herdadas da classe Client e métodos calculateBill.
b A diferença é no valor do  método calculateBill e na propriedade 'cnpj'.

Exercício 5: 
) Industry porque ela compartilha das informações de quantidade de máquinas.
) Client porque ela necessita dessas propriedades para realizar o calculo do consumo.
) As propriedades setadas são em outras classes, portanto, não precisa de setters.