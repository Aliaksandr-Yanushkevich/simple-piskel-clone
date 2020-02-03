import { getAnimationList } from './getAnimationList';
import { setCanvasSize } from '../canvas/setCanvasSize';

export function drawAnimation() {
  const canvasSize = setCanvasSize();
  const frames = JSON.parse(localStorage.frames);
  const canvas = document.querySelector('#canvasAnimation');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = frames[1];

  image.onload = function () {
    ctx.drawImage(image, 0, 0);
  };
}
