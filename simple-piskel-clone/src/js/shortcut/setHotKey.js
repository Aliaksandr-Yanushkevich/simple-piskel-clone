export function setHotKey(e) {
    document.querySelector('.blink').textContent = e.key;
    const shortCuts = JSON.parse(localStorage.shortCuts);
    switch (document.querySelector('.blink').parentNode.id) {
        case 'fillbucket-shortcut':
            shortCuts.paintBucket = e.key;
        break;
        case 'picker-shortcut':
            shortCuts.picker = e.key;
        break;
        case 'pencil-shortcut':
            shortCuts.pencil = e.key;
        break;
        case 'eraser-shortcut':
            shortCuts.eraser = e.key;
        break;
        case 'stroke-shortcut':
            shortCuts.stroke = e.key;
        break;
        default:
        break;
    }
    document.querySelectorAll('.tool-key').forEach(item => item.classList.remove('blink'));
    localStorage.shortCuts = JSON.stringify(shortCuts);
}