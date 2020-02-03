export function setCanvasSize() {
  let canvasWidthHeight;
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
    default:
      break;
  }
  return canvasWidthHeight;
}
