import { setCanvasSize } from '../canvas/setCanvasSize';

export function createFrame(data) {
  const frameContainer = document.querySelector('.frameContainer');
  // create div
  const frame = document.createElement('div');
  frame.className = 'frame';
  const frameAmount = document.querySelectorAll('.frame').length + 1;
  // add buttons into frame
  const frameNumber = document.createElement('div');
  if (data && data[1] === false) {
    frameNumber.className = 'frameNumber hiddenFrame'; // 'frameNumber visibleFrame'
  } else {
    frameNumber.className = 'frameNumber visibleFrame';
  }

  frameNumber.textContent = frameAmount;
  const frameDelete = document.createElement('div');
  frameDelete.className = 'frameDelete';
  frameDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  const copyFrame = document.createElement('div');
  copyFrame.className = 'copyFrame';
  copyFrame.innerHTML = '<i class="far fa-clone"></i>';
  const frameMove = document.createElement('div');
  frameMove.className = 'frameMove';
  frameMove.innerHTML = '<i class="fas fa-arrows-alt"></i>';
  frame.append(frameNumber);
  frame.append(frameDelete);
  frame.append(copyFrame);
  frame.append(frameMove);

  // add canvas into frame
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const canvasWidthHeight = setCanvasSize();
  const frames = JSON.parse(localStorage.frames);
  canvas.className = 'canvas';
  canvas.width = canvasWidthHeight;
  canvas.height = canvasWidthHeight;
  canvas.style.width = '128px';
  canvas.style.height = '128px';
  if (Array.isArray(data)) { // if frame is created with add new frame button => data is object
    const SavedImage = new Image();
    SavedImage.src = data[0];
    SavedImage.onload = function () {
      ctx.drawImage(SavedImage, 0, 0);
    };

  } else {
    frames.push(['', true]);
  }

  localStorage.frames = JSON.stringify(frames);
  const mainCanvas = document.querySelector('#canvas');
  const mainContext = mainCanvas.getContext('2d');
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  frame.append(canvas);
  frameContainer.append(frame);
  document.querySelectorAll('.frame').forEach((element) => element.classList.remove('frameActive'));
  frame.classList.add('frameActive');
}
