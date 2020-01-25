import { canvas, ctx } from '../canvas/canvasEnv';
import { setCellSize } from './setCellSize';
import { pencilorEraser } from './pencilOrEraser';

let oldX = null;
let oldY = null;
let cellSize = setCellSize();

export function drawing() {
  oldX = null;
  oldY = null;
  cellSize = setCellSize();
  canvas.addEventListener('mousemove', pencilDrawing);
  canvas.addEventListener('mouseup', savePic);
  canvas.addEventListener('mousedown', pencilClick);
}

export function pencilDrawing(e) {
  const pencilSize = parseInt(localStorage.pencilSize, 0);
  ctx.globalCompositeOperation = pencilorEraser(); // switch pencil/eraser
  if (!((e.buttons & 1) || (e.buttons & 10))) {
    oldX = null;
    oldY = null;
    return;
  }

  if (e.buttons & 1) {
    ctx.fillStyle = localStorage.primaryColor;
  }

  if (e.buttons & 10) {
    ctx.fillStyle = localStorage.secondaryColor;
  }
  const x = Math.floor(e.offsetX / cellSize);
  const y = Math.floor(e.offsetY / cellSize);

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
    { x, y } = p0;
  const dx = Math.abs(x - p1.x);
  const dy = Math.abs(y - p1.y);
  const sx = (x < p1.x) ? 1 : -1;
  const sy = (y < p1.y) ? 1 : -1;
  let error = dx - dy;
  const coord = [];

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
  localStorage.frame1 = canvasData;
}

export function pencilClick(e) {
  const pencilSize = parseInt(localStorage.pencilSize, 0);
  if (e.buttons & 1) {
    ctx.fillStyle = localStorage.primaryColor;
  }

  if (e.buttons & 10) {
    ctx.fillStyle = localStorage.secondaryColor;
  }
  const x = Math.floor(e.offsetX / cellSize);
  const y = Math.floor(e.offsetY / cellSize);
  ctx.fillRect(x, y, pencilSize, pencilSize);
  ctx.fill();
}
