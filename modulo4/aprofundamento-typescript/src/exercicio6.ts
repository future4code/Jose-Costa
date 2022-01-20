// Exercício 6:

/* 
4000 < Pré-história
4000 AC - escrita e início da Idade Antiga
476 DC - queda do império Romano e início da Idade Média
1453 DC - tomada de Constantinopla pelo império turco e início da Idade Moderna
1789 DC - Revolução Francesa e início da Idade Contemporânea
*/

const determinarIdadeHistorica = (ano: number, siglaAno?: string): void => {
    if (typeof ano !== "number" || ano < 0) { console.log("Erro: Verifique o ano digitado.") }
    else if (siglaAno && (siglaAno !== "AC" && siglaAno !== "DC")) { console.log(`Erro: Verifique a sigla digitada. Use "DC" ou "AC".`) }
    else {
        const sigla: string = siglaAno || "DC";
        let idade: string;
        if (sigla === "DC") {
            if (ano >= 0 && ano < 476) { idade = "Idade Antiga"; }
            else if (ano >= 476 && ano < 1453) { idade = "Idade Média"; }
            else if (ano >= 1453 && ano < 1789) { idade = "Idade Moderna"; }
            else if (ano >= 1789) { idade = "Idade Contemporânea"; }
        }
        else if (sigla === "AC") {
            if (ano >= 0 && ano < 4000) { idade = "Pré-história" }
        } else if (ano >= 4000) { idade = "Idade Antiga" }
        console.log(`O ano ${ano} pertence a ${idade}.`)
    }
}
console.log(determinarIdadeHistorica(2000, "DC"))
