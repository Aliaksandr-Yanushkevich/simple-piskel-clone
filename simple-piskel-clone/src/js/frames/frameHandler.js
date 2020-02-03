import { updateFrameNumber } from './updateFrameNumber';
import { copyFrame } from './copyFrame';
import { frameToCanvas } from './frameToCanvas';
import { deleteFrame } from './deleteFrame';
import { getAnimationList } from '../animation/getAnimationList';
import { drawAnimation } from '../animation/drawAnimation';

export function frameHandler(e) {
  const currentFrame = e.target.closest('.frame');
  const animationArray = JSON.parse(localStorage.frames);
  const frameNumber = [...currentFrame.parentElement.children].indexOf(currentFrame);
  switch (e.target.closest('div').classList[0]) {
    case ('frameNumber'):
      animationArray[frameNumber][1] = !animationArray[frameNumber][1];
      localStorage.frames = JSON.stringify(animationArray);
      drawAnimation();
      e.target.classList.toggle('visibleFrame');
      e.target.classList.toggle('hiddenFrame');
      break;
    case ('frameDelete'):
      deleteFrame(currentFrame);
      updateFrameNumber();
      drawAnimation();
      break;
    case ('copyFrame'):
      copyFrame(currentFrame);
      updateFrameNumber();
      drawAnimation();
      break;
    case ('canvas'):
    case ('frame'):
      document.querySelectorAll('.frame').forEach((element) => element.classList.remove('frameActive'));
      currentFrame.classList.add('frameActive');
      frameToCanvas();
      drawAnimation();
      break;
    default:
      break;
  }
}
