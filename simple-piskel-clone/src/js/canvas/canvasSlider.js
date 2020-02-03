import { initCanvas } from './initCanvas';
import { pencil } from '../tools/pencil';
import { fillBucket } from '../tools/fillBucket';
import { magicBucket } from '../tools/magicBucket';
import { picker } from '../tools/picker';
import { eraser } from '../tools/eraser';
import { stroke } from '../tools/stroke';
import { updateFrameImage } from '../frames/updateFrameImage';
import { drawAnimation } from '../animation/drawAnimation';
import { getCanvasSize } from './getCanvasSize';

export function canvasSlider() {
  const canvasSlider = document.querySelector('#canvasSlider').value;
  localStorage.canvasSlider = canvasSlider;
  initCanvas();
  getCanvasSize();
  updateFrameImage();
  drawAnimation();


  switch (localStorage.currentTool) {
    case 'pencil':
      pencil();
      break;

    case 'fillBucket':
      fillBucket();
      break;
    case 'magicBucket':
      magicBucket();
      break;
    case 'picker':
      picker();
      break;
    case 'eraser':
      eraser();
      break;
    case 'stroke':
      stroke();
      break;
    default:
      break;
  }

}
