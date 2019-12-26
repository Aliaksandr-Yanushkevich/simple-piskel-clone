export function stroke() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    localStorage.eraser = 'false';
    localStorage.stroke = 'true';
    
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#eraser').classList.remove('active');
    document.querySelector('#stroke').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('chooseColor');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('eraser');
    document.querySelector('#codejam-canvas').classList.add('stroke');
}