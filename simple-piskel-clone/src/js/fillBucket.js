import {paintBucket} from './floodFill/test1';
export function fillBucket() {
  localStorage.currentTool = 'fillBucket';
  document.querySelectorAll('.tools-button').forEach(item => item.classList.remove('active'));
  console.log('work!');
  document.querySelector('#fillBucket').classList.add('active');
  document.querySelector('#canvas').className = '';
  document.querySelector('#canvas').classList.add('fillBucket');
    
    // document.querySelector('#eraser').classList.remove('active');
    // document.querySelector('#chooseColor').classList.remove('active');
    // document.querySelector('#pencil').classList.remove('active');
    // document.querySelector('#stroke').classList.remove('active');
    // document.querySelector('#fillBucket').classList.add('active');

    // document.querySelector('#canvas').classList.remove('eraser');
    // document.querySelector('#canvas').classList.remove('chooseColor');
    // document.querySelector('#canvas').classList.remove('pencil');
    // document.querySelector('#canvas').classList.remove('stroke');
    // document.querySelector('#canvas').classList.add('fillBucket');
    
    if (localStorage.fillBucket === 'true') {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        let cellSize;
    // let pencilSize;

    switch (localStorage.canvasSlider) {
      case '0':
        cellSize = 16;
      break;
      case '1':
        cellSize = 8;
      break;
      case '2':
        cellSize = 4;
      break;
      default:
      break;
    } 

        canvas.onclick = function (event) {
          paintBucket(event);
            
            
            // document.querySelector('#primaryColorPalette').style.backgroundColor = choosedColor;
        }
    }
}