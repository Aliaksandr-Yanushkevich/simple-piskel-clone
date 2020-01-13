import {ctx} from '../../app';
import {rgbToHex} from '../floodFill/rgbToHex';
import {setCellSize} from '../setCellSize';

export function colorPicker(e) {
    if (!((e.buttons & 1) || (e.buttons & 10))) {
        return
    }
    const cellSize = setCellSize();
    // const canvas = document.querySelector('canvas');
    // const ctx = canvas.getContext('2d');
    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);
    const targetColor = ctx.getImageData(x, y, 1, 1).data;
    const R = targetColor[0];
    const G = targetColor[1];
    const B = targetColor[2];
    if (e.buttons & 1) {
        localStorage.primaryColor = rgbToHex(R, G, B);
        document.querySelector('#primaryColorPalette').style.backgroundColor =  localStorage.primaryColor;
    }

    if (e.buttons & 10) {
        localStorage.secondaryColor = rgbToHex(R, G, B);
        document.querySelector('#secondaryColorPalette').style.backgroundColor =  localStorage.secondaryColor;
    }
}