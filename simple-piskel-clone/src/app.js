import './scss/main.scss';
import './scss/cursor.scss';
import './scss/font.scss';
import './scss/buttons.scss';
import './scss/tips.scss';
import './scss/modal.scss';
import '../src/favicon.ico';
// import {initheader} from './js/initheader';
import { initMain } from './js/initMain';
import { initCanvas } from './js/canvas/initCanvas';
import { handlers } from './js/handlers';
import { initTools } from './js/initTools';
// import './js/floodFill';
import './js/floodFill/floodFill';
import { auth } from './js/authorization/auth';
import { hotkeyhandler } from './js/shortcut/hotkeyhandler';
// SETUP BLOCK
export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
initTools();
initMain();
initCanvas();
handlers();
auth();

window.addEventListener('keydown', hotkeyhandler)
window.onclick = function (event) {
    let modal = document.querySelector('.modal-shortcuts');
    if (event.target == modal) {
        modal.classList.add('hide');
    }
}

document.body.style.cursor = 'url("../assets/images/pencil.png"), auto';
