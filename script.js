// Seleciona os elementos HTML
const texto = document.querySelector('.letreiro-texto');
const container = document.querySelector('.letreiro-container');

// Variáveis de controle
let posicao = 0;           // posição inicial do texto
let direcao = 1;           // 1 = direita, -1 = esquerda
const velocidade = 2;      // controla a velocidade do movimento

// Função de animação
function animar() {
  const limiteDireita = container.clientWidth - texto.clientWidth;

  // Atualiza a posição do texto
  posicao += direcao * velocidade;

  // Inverte a direção ao atingir as bordas
  if (posicao >= limiteDireita || posicao <= 0) {
    direcao *= -1;
  }

  // Aplica a posição no CSS
  texto.style.left = posicao + 'px';

  // Chama novamente para criar animação contínua
  requestAnimationFrame(animar);
}

// Inicia o movimento
animar();
