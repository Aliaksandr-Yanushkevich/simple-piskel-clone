import { ctx } from '../canvas/canvasEnv';
import { rgbToHex } from '../floodFill/rgbToHex';
import { setCellSize } from './setCellSize';

export function colorPicker(e) {
  if (!((e.buttons & 1) || (e.buttons & 10))) {
    return;
  }
  const cellSize = setCellSize();
  const x = Math.floor(e.offsetX / cellSize);
  const y = Math.floor(e.offsetY / cellSize);
  const targetColor = ctx.getImageData(x, y, 1, 1).data;
  const R = targetColor[0];
  const G = targetColor[1];
  const B = targetColor[2];
  if (e.buttons & 1) {
    localStorage.primaryColor = rgbToHex(R, G, B);
    document.querySelector('#primaryColorPalette').style.backgroundColor = localStorage.primaryColor;
  }

  if (e.buttons & 10) {
    localStorage.secondaryColor = rgbToHex(R, G, B);
    document.querySelector('#secondaryColorPalette').style.backgroundColor = localStorage.secondaryColor;
  }
}
