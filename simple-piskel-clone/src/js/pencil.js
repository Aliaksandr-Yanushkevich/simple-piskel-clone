export function pencil() {
    localStorage.fillBucket = 'false';
    localStorage.chooseColor = 'false';
    localStorage.pencil = 'true';
    
    document.querySelector('#fillBucket').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
    document.querySelector('#pencil').classList.add('active');
    
    document.querySelector('#codejam-canvas').classList.remove('fillBucket');
    document.querySelector('#codejam-canvas').classList.remove('pippete');
    document.querySelector('#codejam-canvas').classList.add('pencil');
}