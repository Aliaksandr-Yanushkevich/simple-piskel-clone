export function stroke() {
    localStorage.currentTool = 'stroke';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    console.log('work!');
    document.querySelector('#stroke').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('stroke');
    
    // document.querySelector('#chooseColor').classList.remove('active');
    // document.querySelector('#pencil').classList.remove('active');
    // document.querySelector('#fillBucket').classList.remove('active');
    // document.querySelector('#eraser').classList.remove('active');
    // document.querySelector('#stroke').classList.add('active');

    // document.querySelector('#canvas').classList.remove('chooseColor');
    // document.querySelector('#canvas').classList.remove('pencil');
    // document.querySelector('#canvas').classList.remove('fillBucket');
    // document.querySelector('#canvas').classList.remove('eraser');
    // document.querySelector('#canvas').classList.add('stroke');
}