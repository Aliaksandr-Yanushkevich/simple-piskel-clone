import { drawing } from "./tools/drawing";
import { eraser } from "./tools/eraser";

export function setPencilSize(id) {
    document.querySelectorAll('.pencilSize').forEach(item => item.classList.remove('pencilSize-active'));

    switch (id) {
        case 'pencilSize0':
        case 'pencil0':
            localStorage.pencilSize = 1;
            document.querySelector(`#pencilSize0`).classList.add('pencilSize-active');
            break;
        case 'pencilSize1':
        case 'pencil1':
            localStorage.pencilSize = 2;
            document.querySelector(`#pencilSize1`).classList.add('pencilSize-active');
            break;
        case 'pencilSize2':
        case 'pencil2':
            localStorage.pencilSize = 3;
            document.querySelector(`#pencilSize2`).classList.add('pencilSize-active');
            break;
        case 'pencilSize3':
        case 'pencil3':
            localStorage.pencilSize = 4;
            document.querySelector(`#pencilSize3`).classList.add('pencilSize-active');
            break;
        default:
            break;
    }
    console.log(localStorage.currentTool);
    switch (localStorage.currentTool) {
        case 'pencil':
            console.log('pencil work!')
            drawing();
        break;
        case 'eraser':
            console.log('eraser work!')
            eraser();
        break;
    }
}