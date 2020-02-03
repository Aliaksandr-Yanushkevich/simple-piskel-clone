export function frameToCanvas() {
  const currentFrame = document.querySelector('.frameActive');
  const frame = currentFrame.querySelector('canvas');
  const frameContext = frame.getContext('2d');
  const imageData = frameContext.getImageData(0, 0, frame.width, frame.height);
  const mainCanvas = document.querySelector('#canvas');
  const mainContext = mainCanvas.getContext('2d');
  mainContext.putImageData(imageData, 0, 0);
}
