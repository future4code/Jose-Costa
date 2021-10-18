// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i > -1; i--) {
        arrayInvertido.push(array[i])
    }
    array = arrayInvertido;
    return array;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayOrdenado = [];
    let indiceTotalArray = array.length;
    for (let i = 0; i < indiceTotalArray; i++) {
        let indiceNumeroMenor;
        let numeroMenor = Infinity;
        function pegarMenorNumero(array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] < numeroMenor) {
                    numeroMenor = array[i];
                    indiceNumeroMenor = i;
                }
            }
            arrayOrdenado.push(numeroMenor);
            array.splice(indiceNumeroMenor, 1);
        }
        pegarMenorNumero(array);
    }
    return arrayOrdenado;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}