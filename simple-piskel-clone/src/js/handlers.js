import { drawing } from './tools/drawing';
import { pencil } from './tools/pencil';
import { picker } from './tools/picker';
import { fillBucket } from './tools/fillBucket';
import { magicBucket } from './tools/magicBucket';
import { primaryColor } from './tools/primaryColor';
import { secondaryColor } from './tools/secondaryColor';
import { eraser } from './tools/eraser';
import { stroke } from './tools/stroke';
import { canvasSlider } from './canvas/canvasSlider';
import { setPencilSize } from './tools/setPencilSize';
import { signIn } from './authorization/signIn';
import { signOut } from './authorization/signOut';
import { shortcut } from './shortcut/shortcut';
import { hotkey } from './shortcut/hotkey';
import { defaultShortCuts } from './shortcut/defaultShortСuts';
import { createFrame } from './frames/createFrame';
import { frameHandler } from './frames/frameHandler';
import { setAnimationFPS } from './animation/setAnimationFPS';

export function handlers() {
  document.querySelector('#fillBucket').addEventListener('click', fillBucket);
  document.querySelector('#magicBucket').addEventListener('click', magicBucket);
  document.querySelector('#picker').addEventListener('click', picker);
  document.querySelector('#pencil').addEventListener('click', pencil);
  document
    .querySelector('#canvasSlider')
    .addEventListener('change', canvasSlider);
  document
    .querySelector('#primaryColorButton')
    .addEventListener('click', primaryColor);
  document
    .querySelector('#secondaryColorButton')
    .addEventListener('click', secondaryColor);
  document.querySelector('#eraser').addEventListener('click', eraser);
  document.querySelector('#stroke').addEventListener('click', stroke);
  document.querySelector('#sign-in').addEventListener('click', signIn);
  document.querySelector('#sign-out').addEventListener('click', signOut);
  document.querySelector('#keyboard').addEventListener('click', shortcut);
  document
    .querySelector('#shortcuts-close')
    .addEventListener('click', shortcut);
  document
    .querySelector('#defaultShortcuts')
    .addEventListener('click', defaultShortCuts);
  document.querySelector('#addNewFrame').addEventListener('click', createFrame);
  document
    .querySelectorAll('.tool-shortcuts')
    .forEach((item) => item.addEventListener('click', hotkey));
  document.querySelector('.frameContainer').addEventListener('click', frameHandler);
  document.querySelector('#animationFPS').addEventListener('change', setAnimationFPS);

  const pencilList = document.querySelectorAll('.pencilSize');
  Array.from(pencilList).forEach((item) => {
    item.addEventListener('click', (e) => {
      setPencilSize(e.target.id);
      drawing();
    });
  });
}
