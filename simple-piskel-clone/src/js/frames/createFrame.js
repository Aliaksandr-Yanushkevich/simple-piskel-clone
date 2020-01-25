export function createFrame() {
  const newFrame = document.querySelector('#newFrame');
  // create div
  const frame = document.createElement('div');
  frame.className = 'frame';
  const frameAmount = document.querySelectorAll('.frame').length + 1;
  // add buttons into frame
  const frameNumber = document.createElement('div');
  frameNumber.className = 'frameNumber';
  frameNumber.textContent = frameAmount;
  const frameDelete = document.createElement('div');
  frameDelete.className = 'frameDelete';
  frameDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  const frameCopy = document.createElement('div');
  frameCopy.className = 'frameCopy';
  frameCopy.innerHTML = '<i class="far fa-clone"></i>';
  const frameMove = document.createElement('div');
  frameMove.className = 'frameMove';
  frameMove.innerHTML = '<i class="fas fa-arrows-alt"></i>';
  frame.append(frameNumber);
  frame.append(frameDelete);
  frame.append(frameCopy);
  frame.append(frameMove);

  // add canvas into frame
  const canvas = document.createElement('canvas');

  let canvasWidthHeight;

  canvas.id = `canvas${frameAmount}`;
  canvas.className = 'canvas';
  switch (
    localStorage.canvasSlider // setup canvas dimension
  ) {
    case '0':
      canvasWidthHeight = 32;
      // localStorage.canvasSlider = 0;
      break;
    case '1':
      canvasWidthHeight = 64;
      // localStorage.canvasSlider = 1;
      break;
    case '2':
      canvasWidthHeight = 128;
      // localStorage.canvasSlider = 2;
      break;
    default:
      break;
  }
  canvas.width = canvasWidthHeight;
  canvas.height = canvasWidthHeight;
  canvas.style.width = '128px';
  canvas.style.height = '128px';
  if (canvas.id !== 'canvas1') {
    localStorage.setItem(`frame${frameAmount}`, '');
    const mainCanvas = document.querySelector('#canvas');
    const mainContext = mainCanvas.getContext('2d');
    mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  }

  frame.append(canvas);

  newFrame.before(frame);
}

export function createFirstFrame() {
  createFrame();
  const canvas = document.querySelector('#canvas1');
  const ctx = canvas.getContext('2d');
  const SavedImage = new Image();
  SavedImage.src = localStorage.frame1;
  SavedImage.onload = function () {
    ctx.drawImage(SavedImage, 0, 0);
  };
}

export function updateMainCanvas() { }
