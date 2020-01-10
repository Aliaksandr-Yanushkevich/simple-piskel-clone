import { setCellSize } from '../setCellSize';
import { rgbToHex } from './rgbToHex';
import { hexToRGB } from './hexToRGB';
import { matchStartColor } from './matchStartColor';
import { colorPixel } from './colorPixel';
export function floodFill(event) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let cellSize = setCellSize();
    const startX = Math.floor((event.offsetX) / cellSize);
    const startY = Math.floor((event.offsetY) / cellSize);
    const pixelStack = [[startX, startY]];
    const colorLayer = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const startColorRGB = ctx.getImageData(startX, startY, 1, 1).data;
    let fillColor = hexToRGB(localStorage.primaryColor);
    if (event.buttons & 1) {
       fillColor = hexToRGB(localStorage.primaryColor);
    } else if (event.buttons & 10){
        fillColor = hexToRGB(localStorage.secondaryColor);
    }
   
    if (rgbToHex(startColorRGB[0], startColorRGB[1], startColorRGB[2]) === fillColor) {
        return;
    }
    while (pixelStack.length) {
        let reachLeft = false;
        let reachRight = false;
        const newPos = pixelStack.pop();
        const x = newPos[0];
        let y = newPos[1];
        let pixelPos = (y * canvas.height + x) * 4;
        while (y-- >= 0 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
            pixelPos -= canvas.height * 4;
        }
        pixelPos += canvas.height * 4;
        ++y;
        while (y++ < canvas.height - 1 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
            colorPixel(pixelPos, fillColor, colorLayer);
            if (x > 0) {
                if (matchStartColor(pixelPos - 4, colorLayer, startColorRGB)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < canvas.width - 1) {
                if (matchStartColor(pixelPos + 4, colorLayer, startColorRGB)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }
            pixelPos += canvas.width * 4;
        }
    }
    ctx.putImageData(colorLayer, 0, 0);
}