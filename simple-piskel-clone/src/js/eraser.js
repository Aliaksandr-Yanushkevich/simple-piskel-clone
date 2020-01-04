import { drawing } from './drawing';
export function eraser() {
    localStorage.currentTool = 'eraser';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    document.querySelector('#eraser').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('eraser');

    drawing();
}