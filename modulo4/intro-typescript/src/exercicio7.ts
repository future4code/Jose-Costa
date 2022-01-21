// Exercício 6: a) Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria `"ATTGCTGCGCATTAACGACGCGTA"` e a saída `"UAACGACGCGUAAUUGCUGCGCAU"`.

type Types = {
    [index: string]: string;
  };

const converterDNAparaRNA = (dna: string): string => {
    const rna: string = dna.replace(/[ATCG]/g, (x: string): string => {
           const alteracoes: Types = {
            A: "U",
            T: "A",
            C: "G",
            G: "C",
        }
      return alteracoes[x];
    })
    return rna;
}

console.log(converterDNAparaRNA("ATTGCTGCGCATTAACGACGCGTA"))