import { floodFill } from '../floodFill/floodFill';
import { pencilDrawing, pencilClick, savePic } from './drawing';
export function fillBucket() {
  localStorage.currentTool = 'fillBucket';
  document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
  console.log('fillbucket work!');
  document.querySelector('#fillBucket').classList.add('active');
  canvas.className = '';
  canvas.classList.add('fillBucket');

  canvas.removeEventListener('mousemove', pencilDrawing);
  canvas.removeEventListener('mousedown', pencilClick);
  canvas.addEventListener('mousedown', floodFill);
  canvas.addEventListener('mouseup', savePic);
}