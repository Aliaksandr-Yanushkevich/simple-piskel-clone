import {setCellSize} from '../setCellSize';
import {rgbToHex} from '../rgbToHex';
import {hexToRGB} from '../hexToRGB';
import {matchStartColor} from '../matchStartColor';
import {colorPixel} from './colorPixel';
    export function paintBucket(event) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      let cellSize = setCellSize();
      // const CssCanvasSize = 512;
      const startX = Math.floor((event.offsetX) / cellSize);
      const startY = Math.floor((event.offsetY) / cellSize);
      // console.log(startX);
      // console.log(startY);
      const pixelStack = [[startX, startY]];
      // console.log(pixelStack.length)
      const colorLayer = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // console.log(colorLayer.data);
      const startColorRGB = ctx.getImageData(startX, startY, 1, 1).data;
      // console.log(startColorRGB);
      // console.log(localStorage.primaryColor);
      const fillColor = hexToRGB(localStorage.primaryColor);
      // console.log(fillColor);
    //   console.log(rgbToHex(startColorRGB[0], startColorRGB[1], startColorRGB[2]) === localStorage.primaryColor)
      if (rgbToHex(startColorRGB[0], startColorRGB[1], startColorRGB[2]) === localStorage.primaryColor) {
          return;
      }
      while (pixelStack.length) {
        // console.log(pixelStack)
          let reachLeft = false;
          let reachRight = false;
          const newPos = pixelStack.pop();
          const x = newPos[0];
          let y = newPos[1];
          let pixelPos = (y * canvas.height + x) * 4;
          // console.log(pixelPos)
          // console.log(matchStartColor(pixelPos, colorLayer, startColorRGB))
          while (y-- >= 0 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
              pixelPos -= canvas.height * 4;
              // console.log(y)
          }
          pixelPos += canvas.height * 4;
          ++y;
          while (y++ < canvas.height - 1 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
              colorPixel(pixelPos, fillColor, colorLayer);
            //   console.log(colorPixel(pixelPos, fillColor, colorLayer))
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
      // console.log(colorLayer.data);
      ctx.putImageData(colorLayer, 0, 0);
  
      // document.querySelector('.current-color').style.backgroundColor = currentStage.currentColor;
      // localStorage.setItem('currentStage', JSON.stringify(currentStage));
  
  }