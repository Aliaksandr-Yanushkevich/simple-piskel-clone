import { setCanvasSize } from '../canvas/setCanvasSize';
import { frameToCanvas } from './frameToCanvas';

export function updateFrameImage() {
  let frameCount = 0;
  const frameList = document.querySelectorAll('.frame');
  const frames = JSON.parse(localStorage.frames);
  frameList.forEach((element) => {
    const canvas = element.querySelector('canvas');
    const canvasNumber = [...element.parentElement.children].indexOf(element);
    const ctx = canvas.getContext('2d');
    const canvasSize = setCanvasSize();
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const image = new Image();
    image.src = frames[canvasNumber][0];
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
      frameCount++;
      if (frameCount === frameList.length) {
        frameToCanvas();
      }
    };
  });
}
