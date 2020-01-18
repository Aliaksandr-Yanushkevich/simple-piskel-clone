import { initShortcutModal } from './initShortcutModal';

export function defaultShortCuts() {
    // set up default options
    const defaultShortCuts = {
        pencil: 'p',
        paintBucket: 'b',
        magicBucket: 'a',
        eraser: 'e',
        stroke: 'l',
        picker: 'o',
    };
    localStorage.shortCuts = JSON.stringify(defaultShortCuts);
    document.querySelectorAll('.tool-key').forEach((item) => item.classList.remove('blink'));
    document.querySelector('.info-msg').textContent = '';
    initShortcutModal(); // rerender window
}
