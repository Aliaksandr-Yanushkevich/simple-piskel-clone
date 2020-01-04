import {drawing} from './drawing'
export function pencil() {
    localStorage.currentTool = 'pencil';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    // console.log('work!');
    document.querySelector('#pencil').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('pencil');
    
    document.querySelector('#canvas').addEventListener('mouseenter', drawing);
}