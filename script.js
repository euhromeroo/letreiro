const texto = document.querySelector('.letreiro-texto');
const container = document.querySelector('.letreiro-container');

let posicao = -texto.clientWidth;
const velocidade = 2.5; // ajustada para velocidade agradável

function animar() {
  posicao += velocidade;

  if (posicao > container.clientWidth) {
    posicao = -texto.clientWidth;
  }

  texto.style.left = posicao + 'px';

  requestAnimationFrame(animar);
}

animar();
