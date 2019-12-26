export function chooseColor() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'true';
    localStorage.pencil = 'false';
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#chooseColor').classList.add('active');
    document.querySelector('#pencil').classList.remove('active');

    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.add('pippete');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
}