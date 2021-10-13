// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRetangulo = prompt(`Informe a altura do retângulo:`);
  const larguraRetangulo = prompt(`Informe a largura do retângulo:`);
  const areaRetangulo = alturaRetangulo * larguraRetangulo;
  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt(`Ano atual:`);
  const anoNascimento = prompt(`Ano de nascimento:`);
  const idade = anoAtual - anoNascimento;
  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt(`Nome:`);
  const idadeUsuario = prompt(`Idade:`);
  const emailUsuario = prompt(`E-mail:`);
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt(`Cor favorita: (1/3)`);
  const corDois = prompt(`Cor favorita: (2/3)`);
  const corTres = prompt(`Cor favorita: (3/3)`);
  let coresFavoritas = [];
  coresFavoritas.push(corUm, corDois, corTres);
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressoEspetaculo = custo / valorIngresso;
  return ingressoEspetaculo;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoStrings = string1.length === string2.length;
  return tamanhoStrings;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0];
  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   const indiceUltimoElemento = [array.length-1];
   const ultimoElemento = array[indiceUltimoElemento];
  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elementoA = array[0];
  const iUltimoElemento = [array.length-1];
  const elementoB = array[iUltimoElemento];
  array[0] = elementoB;
  array[iUltimoElemento] = elementoA;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string1Adaptado = string1.toLowerCase();
  const string2Adaptado = string2.toLowerCase();
  const checaIgualdade = string1Adaptado === string2Adaptado;
  return checaIgualdade;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtualUsuario = Number(prompt(`Ano atual:`));
  const anoNascimentoUsuario = Number(prompt(`Ano de nascimento:`));
  const anoRG = Number(prompt(`Ano da emissão do RG:`));
  const idadePessoa = anoAtualUsuario - anoNascimentoUsuario;
  const idadeRG = anoAtualUsuario - anoRG;  
  const menosVinte = (idadePessoa <= 20) && (idadeRG >= 5);
  const idadeVinteACinquenta = (idadePessoa > 20) && (idadePessoa <= 50) && (idadeRG >= 10);
  const idadeCinquentaMais = (idadePessoa > 50) && (idadeRG >= 15);
  const resultadoFinalRG = menosVinte || idadeVinteACinquenta || idadeCinquentaMais;
  console.log(resultadoFinalRG);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const primeiraCondicao = ano % 400 === 0;
  const segundaCondicao = ano % 4 == 0;
  const terceiraCondicao = ano % 100 === 0;
  let resultadoBi = primeiraCondicao || (segundaCondicao != terceiraCondicao);
  return resultadoBi;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt(`Você tem mais de 18 anos?`);
  const escolaridade = prompt(`Você possui ensino médio completo?`);
  const disponibiliadeHorario = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`);
  const verificaIdade = idade && escolaridade && disponibiliadeHorario == `sim`;
  const verificaEscolaridade = escolaridade === `sim`;
  const verificaDisponibiliade = disponibiliadeHorario === `sim`;
  const validadeInscricao = verificaIdade && verificaEscolaridade && verificaDisponibiliade;
  console.log(validadeInscricao);
}