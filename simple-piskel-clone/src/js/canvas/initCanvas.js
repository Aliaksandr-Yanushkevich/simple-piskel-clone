import {canvas, ctx} from '../../app';
export function initCanvas() {
    // canvasEnv();
    let canvasWidthHeight; // canvas dimension in inner cells
    const primaryColor = localStorage.primaryColor;
    const secondaryColor = localStorage.secondaryColor;
    switch (localStorage.canvasSlider) { // setup canvas dimension
        case '0':
            canvasWidthHeight = 32;
            localStorage.canvasSlider = 0;
            break;
        case '1':
            canvasWidthHeight = 64;
            localStorage.canvasSlider = 1;
            break;
        case '2':
            canvasWidthHeight = 128;
            localStorage.canvasSlider = 2;
            break;
    }
    const canvasSize = 512; // canvas size in pixels
    // const canvas = document.querySelector('#canvas');
    // const ctx = canvas.getContext('2d');
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    canvas.width = canvasWidthHeight;
    canvas.height = canvasWidthHeight;
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;

    const SavedImage = new Image(); // drawing canvas from localStorage 
    SavedImage.src = localStorage.canvasData;
    SavedImage.onload = function () {
        ctx.drawImage(SavedImage, 0, 0);
    };

    document.querySelector('#primaryColorPalette').style.backgroundColor = primaryColor;
    document.querySelector('#secondaryColorPalette').style.backgroundColor = secondaryColor;
}