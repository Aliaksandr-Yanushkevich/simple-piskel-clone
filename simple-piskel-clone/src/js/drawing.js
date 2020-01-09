// import {chooseColor} from './chooseСolor';
// import {rgbToHex} from './rgbToHex';
import { setCellSize } from './setCellSize';
import { setPencilSize } from './setPencilSize';
import { pencilorEraser } from './pencilorEraser';



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
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const pencilSize = parseInt(localStorage.pencilSize);
let oldX = null;
let oldY = null;
const cellSize = setCellSize();


export function drawing() {
    // const cellSize = setCellSize();
    // const canvas = document.querySelector('canvas');
    // const ctx = canvas.getContext('2d');
    // const pencilSize = parseInt(localStorage.pencilSize);
    // let oldX = null;
    // let oldY = null;
    canvas.addEventListener('mousemove', pencilDrawing);
    canvas.addEventListener('mouseup', savePic);
    canvas.addEventListener('mousedown', pencilClick);
}


export function pencilDrawing(e) {
    ctx.globalCompositeOperation = pencilorEraser(); // switch pencil/eraser
    if (!((e.buttons & 1) || (e.buttons & 10))) {
        oldX = oldY = null;
        return;
    }

    if (e.buttons & 1) {
        ctx.fillStyle = localStorage.primaryColor;
    }

    if (e.buttons & 10) {
        ctx.fillStyle = localStorage.secondaryColor;
    }
    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);
    // ctx.fillRect(x, y, pencilSize, pencilSize);
    // ctx.fill();


    if (oldX !== null) {
        getLineCoord({ x, y }, { x: oldX, y: oldY }).forEach(({ x, y }) => {
            ctx.beginPath();
            ctx.fillRect(x, y, pencilSize, pencilSize);
            ctx.fill();
        });
    }

    oldX = x;
    oldY = y;
}


function getLineCoord(p0, p1) {
    let
        { x, y } = p0,
        dx = Math.abs(x - p1.x),
        dy = Math.abs(y - p1.y),
        sx = (x < p1.x) ? 1 : -1,
        sy = (y < p1.y) ? 1 : -1,
        error = dx - dy,
        coord = [];

    while (true) {
        coord.push({ x, y });

        if ((x === p1.x) && (y === p1.y)) {
            break;
        }

        const e2 = error * 2;
        if (e2 > -dy) {
            error -= dy;
            x += sx;
        }
        if (e2 < dx) {
            error += dx;
            y += sy;
        }
    }

    return coord;
}

export function savePic() {
    const canvasData = canvas.toDataURL(); // save canvas data
    localStorage.canvasData = canvasData;
};

export function pencilClick(e) {
    if (e.buttons & 1) {
        ctx.fillStyle = localStorage.primaryColor;
    }

    if (e.buttons & 10) {
        ctx.fillStyle = localStorage.secondaryColor;
    }
    const x = Math.floor(event.offsetX / cellSize);
    const y = Math.floor(event.offsetY / cellSize);
    ctx.fillRect(x, y, pencilSize, pencilSize);
    ctx.fill();
}
