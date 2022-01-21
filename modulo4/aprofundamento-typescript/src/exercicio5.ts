/* Exercício 5:

O que me chamou atenção a priori foi a quantidade de opções de configurações no arquivo original.
As configurações do "slide" são mais enxustas e setadas, acreito, para facilitarem o processo de testes, identificação de erro e build final.
Interessante a opção de explicitar o erro em variáveis com tipos diferentes do setado, isso ajuda demais na produção.
*/

// Desafio:

type InfoPacientes = { nome: string, idade: number, dataDaConsulta: string }

const consultas: InfoPacientes[] = [
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" }
]

const ordenarPacientes = (consultas: InfoPacientes[]): InfoPacientes[] => {
    const nomesOrdenados: InfoPacientes[] = consultas.sort((a: any, b: any): any => {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
    });
    return nomesOrdenados;
}

console.log(ordenarPacientes(consultas))