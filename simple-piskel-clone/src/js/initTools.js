export function initTools() {
    if (localStorage.canvasSlider === undefined) { // checking existence of properties and initialization tools
        localStorage.canvasSlider = '1';
    }
    if (localStorage.currColor === undefined) {
        localStorage.currColor = 'yellow';
    }
    if (localStorage.pencil === undefined) {
        localStorage.pencil = 'true';
    }
    if (localStorage.chooseColor === undefined) {
        localStorage.chooseColor = 'false';
    }
    if (localStorage.fillBucket === undefined) {
        localStorage.fillBucket = 'false';
    }

    if (localStorage.eraser === undefined) {
        localStorage.eraser = 'false';
    }

    if (localStorage.stroke === undefined) {
        localStorage.stroke = 'false';
    }
}