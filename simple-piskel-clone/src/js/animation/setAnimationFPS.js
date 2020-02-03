import { drawAnimation } from './drawAnimation';

export function setAnimationFPS() {
  const FPS = document.querySelector('#animationFPS').value;
  const showFPS = document.querySelector('.animation-frequency p');
  showFPS.textContent = `${FPS} FPS`;
  localStorage.FPS = FPS;
  drawAnimation();
}
