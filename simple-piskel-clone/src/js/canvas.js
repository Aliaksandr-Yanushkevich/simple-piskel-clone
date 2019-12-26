export function canvas() {
    if (localStorage.canvasSlider === undefined) { // checking existence of properties and initialization tools
        localStorage.canvasSlider = document.querySelector('.canvasSlider').value;
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
    let canvasWidthHeight;
    const currentColor = localStorage.currColor;
    // let previvousColor;
    switch (document.querySelector('.canvasSlider').value) {
        case '0': 
            canvasWidthHeight = 32;
            localStorage.canvasSlider = 0;
        break;
        case '1': 
            canvasWidthHeight = 64;
            localStorage.canvasSlider = 1;
        break;
        case '2': 
            canvasWidthHeight = 128;
            localStorage.canvasSlider = 2;
        break;
    }       
    const canvasSize = 512;
    // const cellSize = canvasSize / canvasWidthHeight;
    const canvas = document.querySelector('#codejam-canvas');
    canvas.width = canvasWidthHeight;
    canvas.height = canvasWidthHeight;
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;
    const context = canvas.getContext('2d');
    // context.fillStyle = 'green';
    // context.fillRect(0, 0, canvasWidthHeight, canvasWidthHeight);
    
    document.querySelector('#currentColorCircle').style.backgroundColor = currentColor;
}