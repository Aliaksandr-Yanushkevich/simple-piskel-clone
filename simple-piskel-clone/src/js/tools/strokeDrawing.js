import {setCellSize} from '../setCellSize';
import {canvas, ctx} from '../../app';
import {pencilorEraser} from '../tools/pencilOrEraser';
let color;

export function startCoord(e) {
    const cellSize = setCellSize();
    let x1 = Math.floor(e.offsetX / cellSize);
    let y1 = Math.floor(e.offsetY / cellSize);
    let x2;
    let y2;
    let color;
    ctx.globalCompositeOperation = pencilorEraser();
    if(e.buttons & 1) {
        color = localStorage.primaryColor;
                 
    }
    if(e.buttons & 10) {
        color = localStorage.secondaryColor;
    }
   canvas.addEventListener('mouseup', finishCoord);

   function finishCoord(e) {
    function plot(x, y) { //кисточка - ставит пиксель своего цвета
        if(isFinite(x) && isFinite(y)){
            ctx.fillStyle = color;
            ctx.fillRect(x, y, localStorage.pencilSize, localStorage.pencilSize);
        }
    };

   function drawLine(x1, y1, x2, y2) {
        var deltaX = Math.abs(x2 - x1);
        var deltaY = Math.abs(y2 - y1);
        var signX = x1 < x2 ? 1 : -1;
        var signY = y1 < y2 ? 1 : -1;
        //
        var error = deltaX - deltaY;
        //
        plot(x2, y2);
        while(x1 != x2 || y1 != y2) 
       {
            plot(x1, y1);
            var error2 = error * 2;
            //
            if(error2 > -deltaY) 
            {
                error -= deltaY;
                x1 += signX;
            }
            if(error2 < deltaX) 
            {
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

  
