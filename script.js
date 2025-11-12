const texto = document.querySelector('.letreiro-texto');
const container = document.querySelector('.letreiro-container');

// Posição inicial: fora da tela à direita
let posicao = container.clientWidth;

// Velocidade (positiva = movimento para a esquerda)
const velocidade = 2.5;

function animar() {
  posicao -= velocidade; // subtrai para mover para a esquerda

  // Se o texto saiu totalmente à esquerda, reinicia à direita
  if (posicao < -texto.clientWidth) {
    posicao = container.clientWidth;
  }

  texto.style.left = posicao + 'px';

  requestAnimationFrame(animar);
}

animar();
