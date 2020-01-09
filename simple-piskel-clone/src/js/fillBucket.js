import { paintBucket } from './floodFill/floodFill';
import { pencilDrawing, pencilClick, savePic } from './drawing';
export function fillBucket() {
  localStorage.currentTool = 'fillBucket';
  document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
  console.log('fillbucket work!');
  document.querySelector('#fillBucket').classList.add('active');
  document.querySelector('#canvas').className = '';
  document.querySelector('#canvas').classList.add('fillBucket');

  document.querySelector('#canvas').removeEventListener('mousemove', pencilDrawing);
  document.querySelector('#canvas').removeEventListener('mouseup', savePic);
  document.querySelector('#canvas').removeEventListener('mousedown', pencilClick);

  canvas.onclick = function (event) {
    paintBucket(event);
  }
}