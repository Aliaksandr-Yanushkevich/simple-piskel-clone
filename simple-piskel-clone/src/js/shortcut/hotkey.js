import { setHotKey } from './setHotKey';

export function hotkey(e) {
    document.querySelectorAll('.tool-key').forEach((item) => item.classList.remove('blink'));
    switch (e.currentTarget.id) {
        case 'fillbucket-shortcut':
            document.querySelector('.tool-key--bucket').classList.add('blink');
            break;
        case 'magicbucket-shortcut':
            document.querySelector('.tool-key--magicBucket').classList.add('blink');
            break;
        case 'picker-shortcut':
            document.querySelector('.tool-key--picker').classList.add('blink');
            break;
        case 'pencil-shortcut':
            document.querySelector('.tool-key--pencil').classList.add('blink');
            break;
        case 'eraser-shortcut':
            document.querySelector('.tool-key--eraser').classList.add('blink');
            break;
        case 'stroke-shortcut':
            document.querySelector('.tool-key--stroke').classList.add('blink');
            break;
        default:
            break;
    }
    window.addEventListener('keyup', setHotKey);
}
