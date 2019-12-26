export function eraser() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    localStorage.stroke = 'false';
    localStorage.eraser = 'true';
    
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#stroke').classList.remove('active');
    document.querySelector('#eraser').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('chooseColor');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('stroke');
    document.querySelector('#codejam-canvas').classList.add('eraser');
   
}