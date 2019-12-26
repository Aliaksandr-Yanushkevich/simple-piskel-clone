export function fillBucket() {
    localStorage.fillBucket = 'true';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'false';
    document.querySelector('#fillBucket').classList.add('active');
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.remove('active');

    document.querySelector('#codejam-canvas').classList.add('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('pippete');
    document.querySelector('#codejam-canvas').classList.remove('pencil');
   
}