import './scss/main.scss';
import './scss/cursor.scss';
import './scss/buttons.scss';
import './scss/tips.scss';
import './scss/modal.scss';
import { initMain } from './js/initMain';
import { initCanvas } from './js/canvas/initCanvas';
import { handlers } from './js/handlers';
import { initTools } from './js/initTools';
import { auth } from './js/authorization/auth';
import { hotkeyhandler } from './js/shortcut/hotkeyhandler';
import { canvasDefault } from './js/canvas/canvasDefault';
// SETUP BLOCK

initTools();
initMain();
canvasDefault();
initCanvas();
handlers();
auth();

window.addEventListener('keydown', hotkeyhandler);
window.onclick = function (event) {
    const modal = document.querySelector('.modal-shortcuts');
    if (event.target === modal) {
        modal.classList.add('hide');
    }
};
