export function initShortcutModal() {
    const shortCuts = JSON.parse(localStorage.shortCuts);
    document.querySelector('.tool-key--bucket').textContent = shortCuts.paintBucket;
    document.querySelector('.tool-key--magicBucket').textContent = shortCuts.magicBucket;
    document.querySelector('.tool-key--picker').textContent = shortCuts.picker;
    document.querySelector('.tool-key--pencil').textContent = shortCuts.pencil;
    document.querySelector('.tool-key--eraser').textContent = shortCuts.eraser;
    document.querySelector('.tool-key--stroke').textContent = shortCuts.stroke;
}