import {setCellSize} from '../setCellSize';
import { pencilDrawing, pencilClick, savePic } from './drawing';
import { floodFill } from '../floodFill/floodFill';
import { colorPicker } from './colorPicker';
import { magicFill } from '../tools/magicFill';
export function picker() {
    localStorage.currentTool = 'picker';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    
    document.querySelector('#picker').classList.add('active');
    canvas.className = '';
    canvas.classList.add('picker');

    canvas.removeEventListener('mousemove', pencilDrawing);
    canvas.removeEventListener('mousedown', pencilClick);
    canvas.removeEventListener('mousedown', floodFill);
    canvas.removeEventListener('mousedown', magicFill);
    canvas.removeEventListener('mouseup', savePic);

    canvas.addEventListener('mousedown', colorPicker);
}


