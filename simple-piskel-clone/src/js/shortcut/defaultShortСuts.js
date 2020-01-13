import {initShortcutModal} from './initShortcutModal';
export function defaultShortCuts() {
    //set up default options
    let defaultShortCuts = {
        pencil: 'p',
        paintBucket: 'b',
        magicBucket: 'a',
        eraser: 'e',
        stroke: 'l',
        picker: 'o',
    }     
    localStorage.shortCuts = JSON.stringify(defaultShortCuts);
    initShortcutModal(); // rerender window
}