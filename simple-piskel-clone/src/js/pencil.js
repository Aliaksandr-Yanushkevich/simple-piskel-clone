export function pencil() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'false';
    localStorage.eraser = 'false';
    localStorage.stroke = 'false';
    localStorage.pencil = 'true';
    
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#eraser').classList.remove('active');
    document.querySelector('#stroke').classList.remove('active');
    document.querySelector('#pencil').classList.add('active');
    
    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('chooseColor');
    document.querySelector('#codejam-canvas').classList.remove('eraser');
    document.querySelector('#codejam-canvas').classList.remove('stroke');
    document.querySelector('#codejam-canvas').classList.add('pencil');
}