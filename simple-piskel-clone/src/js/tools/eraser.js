import { drawing } from './drawing';
import { floodFill } from '../floodFill/floodFill';
import { magicFill } from './magicFill';
export function eraser() {
    localStorage.currentTool = 'eraser';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    document.querySelector('#eraser').classList.add('active');
    canvas.className = '';
    canvas.classList.add('eraser');
    canvas.removeEventListener('mousedown', floodFill);
    canvas.removeEventListener('mousedown', magicFill);
    drawing();
}