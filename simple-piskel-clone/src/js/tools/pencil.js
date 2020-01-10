import { drawing } from './drawing';
import { floodFill } from '../floodFill/floodFill';
import { colorPicker } from '../tools/colorPicker';
import { magicFill } from '../tools/magicFill';
export function pencil() {
    localStorage.currentTool = 'pencil';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    document.querySelector('#pencil').classList.add('active');
    canvas.className = '';
    canvas.classList.add('pencil');
    canvas.removeEventListener('mousedown', floodFill);
    canvas.removeEventListener('mousedown', colorPicker);
    canvas.removeEventListener('mousedown', magicFill);
    drawing();
}