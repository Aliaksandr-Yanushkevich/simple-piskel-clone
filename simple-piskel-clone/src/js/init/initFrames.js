import { createFrame } from '../frames/createFrame';
// init frames after page refreshing
export function initFrames() {
  const frames = JSON.parse(localStorage.frames);
  const mainCanvas = document.querySelector('#canvas');
  const mainContext = mainCanvas.getContext('2d');
  frames.map((data) => createFrame(data));

  const DOMframes = document.querySelectorAll('.frame');
  DOMframes.forEach((element) => element.classList.remove('frameActive'));
  DOMframes[0].classList.add('frameActive');
  // drawing first frame on main canvas
  const image = new Image();
  image.src = frames[0][0];
  image.onload = function () {
    mainContext.drawImage(image, 0, 0);
  };
}
