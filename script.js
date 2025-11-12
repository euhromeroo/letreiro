// Seleciona elementos
const texto = document.querySelector('.letreiro-texto');
const container = document.querySelector('.letreiro-container');

// Posição inicial à esquerda
let posicao = -texto.clientWidth;

// Velocidade de movimento (ajustável)
const velocidade = 2; // nem muito rápido, nem muito lento

function animar() {
  // Atualiza a posição
  posicao += velocidade;

  // Se o texto saiu totalmente da tela, reinicia da esquerda
  if (posicao > container.clientWidth) {
    posicao = -texto.clientWidth;
  }

  // Aplica o movimento
  texto.style.left = posicao + 'px';

  // Continua a animação
  requestAnimationFrame(animar);
}

// Inicia o letreiro
animar();
