import { floodFill } from '../floodFill/floodFill';
import { pencilDrawing, pencilClick } from './drawing';
import { magicFill } from './magicFill';
import { canvas } from '../canvas/canvasEnv';
import { saveFrame } from '../frames/saveFrame';

export function magicBucket() {
  localStorage.currentTool = 'magicBucket';
  document.querySelectorAll('.tools-button').forEach((item) => item.classList.remove('active'));
  document.querySelector('#magicBucket').classList.add('active');
  canvas.className = '';
  canvas.classList.add('fillBucket');

  canvas.removeEventListener('mousemove', pencilDrawing);
  canvas.removeEventListener('mousedown', pencilClick);
  canvas.removeEventListener('mousedown', floodFill);

  canvas.addEventListener('mouseup', saveFrame);
  canvas.addEventListener('mousedown', magicFill);
}
