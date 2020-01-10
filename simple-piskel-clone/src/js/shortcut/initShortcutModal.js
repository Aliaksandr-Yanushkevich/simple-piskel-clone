export function initShortcutModal() {
    let shortCuts = {
        pencil: 'p',
        paintBucket: 'b',
        magicBucket: 'a',
        eraser: 'e',
        stroke: 'l',
        picker: 'o',
    }
    if (localStorage.shortCuts === undefined) {        
        localStorage.shortCuts = JSON.stringify(shortCuts);
    } else {
        shortCuts = JSON.parse(localStorage.shortCuts);
    }
    document.querySelector('.tool-key--bucket').textContent = shortCuts.paintBucket;
    document.querySelector('.tool-key--picker').textContent = shortCuts.picker;
    document.querySelector('.tool-key--pencil').textContent = shortCuts.pencil;
    document.querySelector('.tool-key--eraser').textContent = shortCuts.eraser;
    document.querySelector('.tool-key--stroke').textContent = shortCuts.stroke;
}