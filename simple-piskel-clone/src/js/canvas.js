
export function canvas() {    
    let canvasWidthHeight;
    const primaryColor = localStorage.primaryColor;
    const secondaryColor = localStorage.secondaryColor;
    // let previvousColor;
    switch (localStorage.canvasSlider) {
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
    
    document.querySelector('#primaryColorCircle').style.backgroundColor = primaryColor;
    document.querySelector('#secondaryColorCircle').style.backgroundColor = secondaryColor;
}