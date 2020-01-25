import { eraser } from '../tools/eraser';
import { pencil } from '../tools/pencil';
import { picker } from '../tools/picker';
import { fillBucket } from '../tools/fillBucket';
import { hotkeyInit } from '../shortcut/hotkeyInit';
import { initShortcutModal } from '../shortcut/initShortcutModal';

export function initMain() {
  document.querySelector('#canvasSlider').value = localStorage.canvasSlider;

  switch (localStorage.currentTool) {
    case 'pencil':
      document.querySelector('#pencil').classList.add('active');
      pencil();
      break;
    case 'picker':
      document.querySelector('#picker').classList.add('active');
      picker();
      break;
    case 'fillBucket':
      document.querySelector('#fillBucket').classList.add('active');
      fillBucket();
      break;
    case 'stroke':
      document.querySelector('#stroke').classList.add('active');
      break;
    case 'eraser':
      document.querySelector('#eraser').classList.add('active');
      eraser();
      break;
    default:
      break;
  }

  switch (localStorage.pencilSize) {
    case '1':
      document.querySelector('#pencilSize0').classList.add('pencilSize-active');
      break;
    case '2':
      document.querySelector('#pencilSize1').classList.add('pencilSize-active');
      break;
    case '3':
      document.querySelector('#pencilSize2').classList.add('pencilSize-active');
      break;
    case '4':
      document.querySelector('#pencilSize3').classList.add('pencilSize-active');
      break;
    default:
      break;
  }
  hotkeyInit();
  initShortcutModal();
}
