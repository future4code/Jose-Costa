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
    let arrayNumerosPares = [];
    for (let i of array) {
        if (i % 2 === 0) {
            arrayNumerosPares.push(i);
        }
    }
    return arrayNumerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const listaNumerosParesElevadosADois = [];
    let numerosParesElevadosADois = array.filter((elemento) => {
        if (elemento % 2 === 0) {
            let numeroParElevado = elemento * elemento;
            listaNumerosParesElevadosADois.push(numeroParElevado);
        }
    });
    array = listaNumerosParesElevadosADois;
    return array;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0;
    for (let numero of array) {
        if (numero > numeroMaior) {
            numeroMaior = numero;
        }
    }
    return numeroMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMaior;
    if (num1 > num2) {
        numeroMaior = num1;
        numeroMenor = num2;
    } else {
        numeroMaior = num2;
        numeroMenor = num1;
    }
    return objetoEntreDoisNumeros = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: (numeroMaior % numeroMenor === 0),
        diferenca: (numeroMaior - numeroMenor),
    }
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numero = n;
    n = [];
    let numeroVerificado = 0;
    for (let i = 0; i !== numero; numeroVerificado++) {
        if (numeroVerificado % 2 === 0) {
            i++;
            n.push(numeroVerificado);
        }
    }
    return n;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        return `Equilátero`;
    } else if (ladoA == ladoB || ladoC == ladoA || ladoB == ladoC) {
        return `Isósceles`;
    } else if (ladoA !== ladoB !== ladoC !== ladoA) {
        return `Escaleno`;
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let numeroMenor = Infinity;
    function pegarMenorNumero(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < numeroMenor) {
                numeroMenor = array[i];
            }
        }
        return numeroMenor;
    }
    let numeroMaior = 0;
    function pegarMaiorNumero(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > numeroMaior) {
                numeroMaior = array[i];
            }
        }
        return numeroMaior;
    }
    numeroMenor = pegarMenorNumero(array);
    numeroMaior = pegarMaiorNumero(array);
    let segundoMenorNumero = Infinity;
    let segundoMaiorNumero = 0;
    function pegarSegundoMenorNumero(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < segundoMenorNumero && array[i] > numeroMenor) {
                segundoMenorNumero = array[i];
            }
        }
        return segundoMenorNumero;
    }
    function pegarSegundoMaiorNumero(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > segundoMaiorNumero && array[i] < numeroMaior) {
                segundoMaiorNumero = array[i];
            }
        }
        return segundoMaiorNumero;
    }
    segundoMenorNumero = pegarSegundoMenorNumero(array);
    segundoMaiorNumero = pegarSegundoMaiorNumero(array);
    return [segundoMaiorNumero, segundoMenorNumero];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    function adicionarEspacoNosAteres(filme) {
        for (let i = 0; i < filme.atores.length; i++) {
            filme.atores[i] = ` ${filme.atores[i]}`;
        }
    }
    adicionarEspacoNosAteres(filme);
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const objetoAnonimo = {
        ...pessoa,
        nome: `ANÔNIMO`,
    }
    return objetoAnonimo;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            return pessoa;
        }
    })
    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            return pessoa;
        }
    })
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        let indiceCliente = i;
        let saldoCliente = contas[i].saldoTotal;
        for (let i = 0; i < contas[indiceCliente].compras.length; i++) {
            saldoCliente -= contas[indiceCliente].compras[i];
        }
        contas[indiceCliente].saldoTotal = saldoCliente;
        contas[indiceCliente].compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}