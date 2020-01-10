export function stroke() {
    localStorage.currentTool = 'stroke';
    document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
    console.log('work!');
    document.querySelector('#stroke').classList.add('active');
    document.querySelector('#canvas').className = '';
    document.querySelector('#canvas').classList.add('stroke');
}