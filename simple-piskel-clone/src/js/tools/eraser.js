import { drawing } from './drawing';
import { floodFill } from '../floodFill/floodFill';
export function eraser() {
    localStorage.currentTool = 'eraser';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    document.querySelector('#eraser').classList.add('active');
    canvas.className = '';
    canvas.classList.add('eraser');
    canvas.removeEventListener('click', floodFill);
    drawing();
}