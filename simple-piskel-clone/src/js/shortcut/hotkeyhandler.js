import { pencil } from '../tools/pencil';
import { fillBucket } from '../tools/fillBucket';
import { magicBucket } from '../tools/magicBucket';
import { eraser } from '../tools/eraser';
import { picker } from '../tools/picker';
import { stroke } from '../tools/stroke';

export function hotkeyhandler(e) {
  const keyShortcuts = JSON.parse(localStorage.shortCuts);
  const keysInUse = Object.values(keyShortcuts);
  if (keysInUse.indexOf(e.key) === -1) {
    return;
  }
  switch (getKeyByValue(keysInUse, e.key)) {
    case '0':
      pencil();
      break;
    case '1':
      fillBucket();
      break;
    case '2':
      magicBucket();
      break;
    case '3':
      eraser();
      break;
    case '4':
      stroke();
      break;
    case '5':
      picker();
      break;
    default:
      break;
  }

}

function getKeyByValue(object, value) { return Object.keys(object).find((key) => object[key] === value); }
