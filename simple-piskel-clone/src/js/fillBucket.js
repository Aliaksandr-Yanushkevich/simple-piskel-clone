export function fillBucket() {
    localStorage.eraser = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    localStorage.fillBucket = 'true';
    document.querySelector('#eraser').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#fillBucket').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('eraser');
    document.querySelector('#codejam-canvas').classList.remove('pippete');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.add('fillBucket');
   
}