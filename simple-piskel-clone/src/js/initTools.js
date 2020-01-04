export function initTools() {
    if (localStorage.canvasSlider === undefined) { // checking existence of properties and initialization tools
        localStorage.canvasSlider = '1';
    }
    if (localStorage.pencilSize === undefined) {
        localStorage.pencilSize = '0';
    }
    if (localStorage.primaryColor === undefined) {
        localStorage.primaryColor = 'black';
    }
    if (localStorage.secondaryColor === undefined) {
        localStorage.secondaryColor = 'blue';
    }

    if (localStorage.currentTool === undefined) {
        localStorage.currentTool = 'pencil';
    }
    // if (localStorage.chooseColor === undefined) {
    //     localStorage.chooseColor = 'false';
    // }
    // if (localStorage.fillBucket === undefined) {
    //     localStorage.fillBucket = 'false';
    // }

    // if (localStorage.eraser === undefined) {
    //     localStorage.eraser = 'false';
    // }

    // if (localStorage.stroke === undefined) {
    //     localStorage.stroke = 'false';
    // }
}