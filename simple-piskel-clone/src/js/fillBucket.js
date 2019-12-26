export function fillBucket() {
    localStorage.eraser = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    localStorage.stroke = 'false';
    localStorage.fillBucket = 'true';
    
    document.querySelector('#eraser').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#stroke').classList.remove('active');
    document.querySelector('#fillBucket').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('eraser');
    document.querySelector('#codejam-canvas').classList.remove('chooseColor');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.remove('stroke');
    document.querySelector('#codejam-canvas').classList.add('fillBucket');
    
   
}