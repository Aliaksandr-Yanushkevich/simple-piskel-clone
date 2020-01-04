import {rgbToHex} from './rgbToHex';
import {setCellSize} from './setCellSize';
import {drawing} from './drawing';
import {clickDraw} from './drawing';
export function chooseColor() {
    localStorage.currentTool = 'chooseColor';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    
    document.querySelector('#chooseColor').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('chooseColor');

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    let cellSize = setCellSize();

    // if (localStorage.chooseColor === 'true') {
    //   canvas.onclick = function (event) {
    //     const x = Math.floor(event.offsetX / cellSize);
    //     const y = Math.floor(event.offsetY / cellSize);
    //     const pipette = ctx.getImageData(x, y, 1, 1);
    //     const choosedColor = rgbToHex(pipette.data);
    //     localStorage.primaryColor = choosedColor;
    //     document.querySelector('#primaryColorPalette').style.backgroundColor = choosedColor;
    // };

    // canvas.onctxmenu = function (event) {
    //     event.preventDefault();
    //     const x = Math.floor(event.offsetX / cellSize);
    //     const y = Math.floor(event.offsetY / cellSize);
    //     const pipette = ctx.getImageData(x, y, 1, 1);
    //     const choosedColor = rgbToHex(pipette.data);
    //     localStorage.secondaryColor = choosedColor;
    //     document.querySelector('#secondaryColorPalette').style.backgroundColor = choosedColor;
    // };
    // } 
    document.querySelector('#canvas').removeEventListener('mouseenter', drawing);
    document.querySelector('#canvas').removeEventListener('mousedown', clickDraw);
    console.log('work!');
    
    // document.querySelector('#canvas').removeEventListener('mouseenter', drawing);
    // document.querySelector('#canvas').removeEventListener('mouseenter', drawing);
}


