/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function abrirJogo() {
   if (confirm(`Boas vindas ao jogo de Blackjack! :)
Quer iniciar uma rodada?`)) {
      iniciarJogo();
   }
   else {
      alert(`Jogo encerrado.`)
   }
}

abrirJogo();

function selecionarCartasIniciais() {
   let primeiraCarta = comprarCarta();
   let segundaCarta = comprarCarta();
   if (primeiraCarta.valor === 11 && segundaCarta.valor === 11) {
      while (primeiraCarta.valor === 11 && segundaCarta.valor === 11) {
         primeiraCarta = comprarCarta();
         segundaCarta = comprarCarta();
      }
   }
   const pontosDaRodada = primeiraCarta.valor + segundaCarta.valor;
   return {
      cartas: [primeiraCarta.texto, segundaCarta.texto],
      pontos: pontosDaRodada,
   }
}

function adicionarNovaCarta(jogador) {
   let novaCarta = comprarCarta();
   jogador.cartas.push(novaCarta.texto);
   let novosPontos = jogador.pontos + novaCarta.valor;
   return {
      cartas: jogador.cartas,
      pontos: novosPontos,
   }
}

function finalizarJogo(usuario, computador) {
   if ((usuario.pontos > computador.pontos && usuario.pontos <= 21) || (computador.pontos > usuario.pontos && computador.pontos > 21)) {
      alert(`Usuário » cartas: ${usuario.cartas} - pontos: ${usuario.pontos}.
Computador » cartas: ${computador.cartas} - pontos: ${computador.pontos}.
Resultado » Você venceu!`);
   } else if ((computador.pontos > usuario.pontos && computador.pontos <= 21) || (usuario.pontos > computador.pontos && usuario.pontos > 21)) {
      alert(`Usuário » cartas: ${usuario.cartas} - pontos: ${usuario.pontos}.
Computador » cartas: ${computador.cartas} - pontos: ${computador.pontos}.
Resultado » O computador venceu!`);
   } else {
      alert(`Usuário » cartas: ${usuario.cartas} - pontos: ${usuario.pontos}.
Computador » cartas: ${computador.cartas} - pontos: ${computador.pontos}.
Resultado » Jogo empatado!`);
   }
   abrirJogo();
}

function iniciarJogo() {
   let usuario = selecionarCartasIniciais();
   let computador = selecionarCartasIniciais();
   let turnoEncerrado = true;
   let confirmaCompraCarta = confirm(`Suas cartas são: ${usuario.cartas}. 
A carta revelada do computador é: ${computador.cartas[0]}.
Deseja comprar mais uma carta?`);
   for (let i = 0; confirmaCompraCarta === true; i++) {
      usuario = adicionarNovaCarta(usuario);
      if (usuario.pontos > 21) {
         finalizarJogo(usuario, computador);
         confirmaCompraCarta = false;
         turnoEncerrado = false;
      } else {
         confirmaCompraCarta = confirm(`Suas cartas são: ${usuario.cartas}. 
A carta revelada do computador é: ${computador.cartas[0]}.
Deseja comprar mais uma carta?`);
      }
   }
   if (turnoEncerrado === true) {
      for (let i = 0; computador.pontos <= usuario.pontos; i++) {
         computador = adicionarNovaCarta(computador);
      }
      finalizarJogo(usuario, computador);
   }
}