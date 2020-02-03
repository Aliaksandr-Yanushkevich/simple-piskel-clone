export function getCanvasSize() {
  const canvasSlider = document.querySelector('#canvasSlider').value;
  const showSize = document.querySelector('.canvasSize');
  let canvasSize;
  switch (Number(canvasSlider)) {
    case 0:
      canvasSize = 'Canvas size 32x32';
      break;
    case 1:
      canvasSize = 'Canvas size 64x64';
      break;
    case 2:
      canvasSize = 'Canvas size 128x128';
      break;
    default:
      canvasSize = 'Canvas is broken';
      break;
  }
  showSize.textContent = canvasSize;
}
