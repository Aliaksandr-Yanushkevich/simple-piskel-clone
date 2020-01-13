import {startCoord} from './strokeDrawing';
import {pencilDrawing, savePic, pencilClick} from './drawing';
import {floodFill} from '../floodFill/floodFill';
import {magicFill} from './magicFill';
import {colorPicker} from './colorPicker';
export function stroke() {
    localStorage.currentTool = 'stroke';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    // console.log('work!');
    document.querySelector('#stroke').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('stroke');
    
    canvas.removeEventListener('mousemove', pencilDrawing);
    canvas.removeEventListener('mouseup', savePic);
    canvas.removeEventListener('mousedown', floodFill);
    canvas.removeEventListener('mousedown', magicFill);
    canvas.removeEventListener('mousedown', colorPicker);

    
    canvas.addEventListener('mousedown', pencilClick);

    canvas.addEventListener('mousedown', startCoord);
    
}