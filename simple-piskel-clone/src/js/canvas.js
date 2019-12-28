
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
    const SavedImage = new Image();
      SavedImage.src = localStorage.canvasData;
      SavedImage.onload = function () {
        context.drawImage(SavedImage, 0, 0);
      };
    // context.fillStyle = 'green';
    // context.fillRect(0, 0, canvasWidthHeight, canvasWidthHeight);
    
    document.querySelector('#primaryColorPalette').style.backgroundColor = primaryColor;
    document.querySelector('#secondaryColorPalette').style.backgroundColor = secondaryColor;
}