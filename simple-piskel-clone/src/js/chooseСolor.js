export function chooseColor() {
    localStorage.fillBucket = 'false';
    localStorage.eraser = 'false';
    localStorage.pencil = 'false';
    localStorage.chooseColor = 'true';
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#eraser').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');
    document.querySelector('#chooseColor').classList.add('active');

    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('eraser');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
    document.querySelector('#codejam-canvas').classList.add('pippete');
}


