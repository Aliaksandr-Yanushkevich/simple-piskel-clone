import { canvas } from '../canvas/canvasEnv';
import { canvasToFrame } from './canvasToFrame';
import { drawAnimation } from '../animation/drawAnimation';

export function saveFrame() {
  const canvasData = canvas.toDataURL(); // save canvas data
  const currentFrame = document.querySelector('.frameActive');
  const frameNumber = [...currentFrame.parentElement.children].indexOf(currentFrame);
  const frames = JSON.parse(localStorage.frames);
  frames[frameNumber][0] = canvasData;
  localStorage.frames = JSON.stringify(frames);
  canvasToFrame();
  drawAnimation();
}
