import { drawing } from './drawing';
import { floodFill } from '../floodFill/floodFill';
export function pencil() {
    localStorage.currentTool = 'pencil';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    // console.log('work!');
    document.querySelector('#pencil').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('pencil');
    canvas.removeEventListener('mousedown', floodFill);
    drawing();
}