import { pencilDrawing, pencilClick } from './drawing';
import { floodFill } from '../floodFill/floodFill';
import { colorPicker } from './colorPicker';
import { magicFill } from './magicFill';
import { canvas } from '../canvas/canvasEnv';
import { saveFrame } from '../frames/saveFrame';

export function picker() {
  localStorage.currentTool = 'picker';
  document.querySelectorAll('.tools-button').forEach((item) => item.classList.remove('active'));

  document.querySelector('#picker').classList.add('active');
  canvas.className = '';
  canvas.classList.add('picker');

  canvas.removeEventListener('mousemove', pencilDrawing);
  canvas.removeEventListener('mousedown', pencilClick);
  canvas.removeEventListener('mousedown', floodFill);
  canvas.removeEventListener('mousedown', magicFill);
  canvas.removeEventListener('mouseup', saveFrame);


  canvas.addEventListener('mousedown', colorPicker);
}
