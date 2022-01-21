// Exercício 5: A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios. Refatore a função para o Tyupescript.

function checaRenovacaoRG(): boolean {
    const anoAtual: number = Number(prompt("Digite o ano atual"))
    const anoNascimento: number = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao: number = Number(prompt("Digite o ano de emissão do documento"))
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 