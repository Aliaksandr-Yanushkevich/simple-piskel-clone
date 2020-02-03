import { canvas, ctx } from '../canvas/canvasEnv';
import { canvasToFrame } from './canvasToFrame';

export function saveFrame() {
  const canvasData = canvas.toDataURL(); // save canvas data
  const currentFrame = document.querySelector('.frameActive');
  const frameNumber = [...currentFrame.parentElement.children].indexOf(currentFrame);
  const frames = JSON.parse(localStorage.frames);
  frames[frameNumber] = canvasData;
  localStorage.frames = JSON.stringify(frames);
  canvasToFrame();
}
