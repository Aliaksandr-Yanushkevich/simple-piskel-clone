import { setCellSize } from './setCellSize';
import { canvas, ctx } from '../canvas/canvasEnv';
import { pencilorEraser } from './pencilOrEraser';

export function startCoord(e) {
    const cellSize = setCellSize();
    const x1 = Math.floor(e.offsetX / cellSize);
    const y1 = Math.floor(e.offsetY / cellSize);
    let x2;
    let y2;
    let color;
    ctx.globalCompositeOperation = pencilorEraser();
    if (e.buttons & 1) {
        color = localStorage.primaryColor;

    }
    if (e.buttons & 10) {
        color = localStorage.secondaryColor;
    }
    canvas.addEventListener('mouseup', finishCoord);

    function finishCoord(e) {
        function plot(x, y) { // кисточка - ставит пиксель своего цвета
            if (Number.isFinite(x) && Number.isFinite(y)) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, localStorage.pencilSize, localStorage.pencilSize);
            }
        }

        function drawLine(x1, y1, x2, y2) {
            const deltaX = Math.abs(x2 - x1);
            const deltaY = Math.abs(y2 - y1);
            const signX = x1 < x2 ? 1 : -1;
            const signY = y1 < y2 ? 1 : -1;
            //
            let error = deltaX - deltaY;
            //
            plot(x2, y2);
            while (x1 !== x2 || y1 !== y2) {
                plot(x1, y1);
                const error2 = error * 2;
                //
                if (error2 > -deltaY) {
                    error -= deltaY;
                    x1 += signX;
                }
                if (error2 < deltaX) {
                    error += deltaX;
                    y1 += signY;
                }
            }
        }
        x2 = Math.floor(e.offsetX / cellSize);
        y2 = Math.floor(e.offsetY / cellSize);
        drawLine(x1, y1, x2, y2, color);
        const canvasData = canvas.toDataURL(); // save canvas data
        localStorage.canvasData = canvasData;
        canvas.removeEventListener('mouseup', finishCoord);
    }
}
