export function initMain() {

    document.querySelector('#canvasSlider').value = localStorage.canvasSlider;
    if (localStorage.fillBucket === 'true') {
        document.querySelector('#fillBucket').classList.add('active');
        document.querySelector('#codejam-canvas').classList.add('fillBucket');
    }
    if (localStorage.chooseColor === 'true') {
        document.querySelector('#chooseColor').classList.add('active');
        document.querySelector('#codejam-canvas').classList.add('chooseColor');
    }
    if (localStorage.pencil === 'true') {
        document.querySelector('#pencil').classList.add('active');
        document.querySelector('#codejam-canvas').classList.add('pencil');
    }
    if (localStorage.eraser === 'true') {
        document.querySelector('#eraser').classList.add('active');
        document.querySelector('#codejam-canvas').classList.add('eraser');
    }

    if (localStorage.stroke === 'true') {
        document.querySelector('#stroke').classList.add('active');
        document.querySelector('#codejam-canvas').classList.add('stroke');
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
