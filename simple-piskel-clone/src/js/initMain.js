export function initMain() {

    document.querySelector('#canvasSlider').value = localStorage.canvasSlider;

    switch (localStorage.currentTool) {
        case 'pencil':
            document.querySelector(`#pencil`).classList.add('active'); 
        break;
        case 'chooseColor':
            document.querySelector(`#chooseColor`).classList.add('active'); 
        break;
        case 'fillBucket':
            document.querySelector(`#fillBucket`).classList.add('active'); 
        break;
        case 'stroke':
            document.querySelector(`#stroke`).classList.add('active'); 
        break;
        case 'eraser':
            document.querySelector(`#eraser`).classList.add('active'); 
        break;
    }

    switch (localStorage.pencilSize) {
        case '0':
            document.querySelector(`#pencilSize0`).classList.add('pencilSize-active'); 
        break;
        case '1':
            document.querySelector(`#pencilSize1`).classList.add('pencilSize-active'); 
        break;
        case '2':
            document.querySelector(`#pencilSize2`).classList.add('pencilSize-active'); 
        break;
        case '3':
            document.querySelector(`#pencilSize3`).classList.add('pencilSize-active'); 
        break;
    }

    
}
