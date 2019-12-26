export function eraser() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    localStorage.eraser = 'true';
    
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#eraser').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('pippete');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.add('eraser');
   
}