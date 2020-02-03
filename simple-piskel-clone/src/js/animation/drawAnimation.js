import { getAnimationList } from './getAnimationList';
import { setCanvasSize } from '../canvas/setCanvasSize';

let timer;
export function drawAnimation() {
  const canvasSize = setCanvasSize();
  const frames = getAnimationList();
  const canvas = document.querySelector('#canvasAnimation');
  const ctx = canvas.getContext('2d');
  const activeFrame = document.querySelector('.frameActive');
  const activeFrameNumber = [...activeFrame.parentElement.children].indexOf(activeFrame);
  const FPS = localStorage.FPS;
  let count = 0;
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  clearTimeout(timer);

  if (Number(FPS) === 0) {
    const image = new Image();
    image.src = frames[activeFrameNumber][0];
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    return;
  }

  start();
  function start() {
    const image = new Image();
    image.src = frames[count % frames.length][0];
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    count++;
    timer = setTimeout(start, 1000 / FPS);
  }


}
