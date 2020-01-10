// import {chooseColor} from './chooseСolor';
// import {rgbToHex} from './rgbToHex';
import { setCellSize } from '../setCellSize';
// import { setPencilSize } from '../setPencilSize';
import { pencilorEraser } from './pencilOrEraser';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let oldX = null;
let oldY = null;
const cellSize = setCellSize();


export function drawing() {
    canvas.addEventListener('mousemove', pencilDrawing);
    canvas.addEventListener('mouseup', savePic);
    canvas.addEventListener('mousedown', pencilClick);
}

export function pencilDrawing(e) {
    const pencilSize = parseInt(localStorage.pencilSize);
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
    const pencilSize = parseInt(localStorage.pencilSize);
    const canvasData = canvas.toDataURL(); // save canvas data
    localStorage.canvasData = canvasData;
};

export function pencilClick(e) {
    const pencilSize = parseInt(localStorage.pencilSize);
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
