import { canvas } from './canvasEnv';
import { setCanvasSize } from './setCanvasSize';

export function initCanvas() {
  const canvasWidthHeight = setCanvasSize(); // canvas dimension in inner cells
  const primaryColor = localStorage.primaryColor;
  const secondaryColor = localStorage.secondaryColor;

  const canvasSize = 512; // canvas size in pixels
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.width = canvasWidthHeight;
  canvas.height = canvasWidthHeight;
  canvas.style.width = `${canvasSize}px`;
  canvas.style.height = `${canvasSize}px`;

  document.querySelector('#primaryColorPalette').style.backgroundColor = primaryColor;
  document.querySelector('#secondaryColorPalette').style.backgroundColor = secondaryColor;
}
