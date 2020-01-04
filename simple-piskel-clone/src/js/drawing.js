// import {chooseColor} from './chooseСolor';
// import {rgbToHex} from './rgbToHex';
// import {setCellSize} from './setCellSize';
// import {setPencilSize} from './setPencilSize';
// import {pencilorEraser} from './pencilorEraser';

// const cellSize = setCellSize();
// const pencilSize = parseInt(localStorage.pencilSize);
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// export function drawing() {    
//   canvas.addEventListener('mousedown', clickDraw);
//   canvas.addEventListener('mousemove', moveDraw);
//   canvas.addEventListener('mouseup', stopDraw);
//   // canvas.addEventListener('contextmenu', moveDraw)
//   canvas.oncontextmenu = function (event) {
//     event.preventDefault();
//     const x = Math.floor(event.offsetX / cellSize);
//     const y = Math.floor(event.offsetY / cellSize);
//     ctx.fillRect(x, y, pencilSize, pencilSize);
//     ctx.fill();
//   }    
// };
//   export function clickDraw(event) {
//     // drawing with left/right click
//     // event.preventDefault();
//     if (event.which == 1) { //left click
//       ctx.fillStyle = localStorage.primaryColor;
//     } 
//     if (event.which == 3) { // right click
//       ctx.fillStyle = localStorage.secondaryColor;
//     } 
//     ctx.globalCompositeOperation = pencilorEraser(); // switch pencil/eraser
    
//     const x = Math.round((event.offsetX - 8) / cellSize);
//     const y = Math.floor((event.offsetY + 8) / cellSize);
    
//     ctx.fillRect(x, y, pencilSize, pencilSize);
//     ctx.fill();
//   }

//   function moveDraw(event) { // drawing with left/right mouse movement
//     const x = Math.round((event.offsetX - 8) / cellSize);
//     const y = Math.floor((event.offsetY + 8) / cellSize);
//     ctx.fillRect(x, y, pencilSize, pencilSize);
//     ctx.fill();
//   }

//   function stopDraw() {
//     canvas.removeEventListener('mousemove', moveDraw);
//     drawing();
//     console.log('work!')
//     const canvasData = canvas.toDataURL(); // save canvas data
//     localStorage.canvasData = canvasData; 
//   };

