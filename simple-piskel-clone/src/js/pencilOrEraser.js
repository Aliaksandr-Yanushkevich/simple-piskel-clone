export function pencilorEraser() {
    // const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d');
    let mode;
    switch (localStorage.currentTool) {
        case 'pencil':
            mode = 'source-over';
        break;
        case 'eraser':
            mode = 'destination-out';
        break;
        default:
        break;
    }
    return mode;
}