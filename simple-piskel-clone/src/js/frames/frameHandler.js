import { updateFrameNumber } from './updateFrameNumber';
import { copyFrame } from './copyFrame';
import { frameToCanvas } from './frameToCanvas';
import { deleteFrame } from './deleteFrame';

export function frameHandler(e) {
  const currentFrame = e.target.closest('.frame');
  switch (e.target.closest('div').classList[0]) {
    case ('frameNumber'):
      e.target.classList.toggle('visibleFrame');
      e.target.classList.toggle('hiddenFrame');
      break;
    case ('frameDelete'):
      deleteFrame(currentFrame);
      updateFrameNumber();
      break;
    case ('copyFrame'):
      copyFrame(currentFrame);
      updateFrameNumber();
      break;
    case ('canvas'):
    case ('frame'):
      document.querySelectorAll('.frame').forEach((element) => element.classList.remove('frameActive'));
      currentFrame.classList.add('frameActive');
      frameToCanvas(currentFrame);
      break;
    default:
      break;
  }
}
