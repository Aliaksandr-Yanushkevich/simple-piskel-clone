import { floodFill } from '../floodFill/floodFill';
import { pencilDrawing, pencilClick } from './drawing';
import { canvas } from '../canvas/canvasEnv';
import { saveFrame } from '../frames/saveFrame';

export function fillBucket() {
  localStorage.currentTool = 'fillBucket';
  document.querySelectorAll('.tools-button').forEach((item) => item.classList.remove('active'));
  document.querySelector('#fillBucket').classList.add('active');
  canvas.className = '';
  canvas.classList.add('fillBucket');

  canvas.removeEventListener('mousemove', pencilDrawing);
  canvas.removeEventListener('mousedown', pencilClick);
  canvas.addEventListener('mousedown', floodFill);
  canvas.addEventListener('mouseup', saveFrame);

}
