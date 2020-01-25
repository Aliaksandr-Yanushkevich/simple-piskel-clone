import './scss/main.scss';
import './scss/cursor.scss';
import './scss/buttons.scss';
import './scss/tips.scss';
import './scss/modal.scss';
import './scss/frames.scss';
import { initMain } from './js/init/initMain';
import { initCanvas } from './js/canvas/initCanvas';
import { handlers } from './js/handlers';
import { initTools } from './js/init/initTools';
import { auth } from './js/authorization/auth';
import { hotkeyhandler } from './js/shortcut/hotkeyhandler';
import { canvasDefault } from './js/canvas/canvasDefault';
import { initFrameContainer } from './js/init/initFrameContainer';
import { createFrame, createFirstFrame } from './js/frames/createFrame';
// SETUP BLOCK

initTools();
initMain();
canvasDefault();
initCanvas();
initFrameContainer();
createFirstFrame();
handlers();
auth();


window.addEventListener('keydown', hotkeyhandler);
window.onclick = function (event) {
  const modal = document.querySelector('.modal-shortcuts');
  if (event.target === modal) {
    modal.classList.add('hide');
  }
};
