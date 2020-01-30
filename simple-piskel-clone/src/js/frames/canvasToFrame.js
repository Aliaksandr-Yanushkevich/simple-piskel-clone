import { canvas, ctx } from '../canvas/canvasEnv';

export function canvasToFrame() {
  const currentFrame = document.querySelector('.frameActive');
  const currentFrameCanvas = currentFrame.querySelector('canvas');
  const currentFrameContext = currentFrameCanvas.getContext('2d');
  const ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  currentFrameContext.putImageData(ImageData, 0, 0);
}
