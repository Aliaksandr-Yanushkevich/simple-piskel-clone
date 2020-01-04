import {setCellSize} from '../setCellSize';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

export function penHandler(event) {
	const cellSize = setCellSize();
  
	let lastX = event.offsetX  / cellSize;
    let lastY = event.offsetY / cellSize;

	// let xCell = Math.floor(lastX / cellSize);
	// let yCell = Math.floor(lastY / cellSize);
  
	ctx.fillStyle = localStorage.currentColor;
	ctx.fillRect(lastX, lastY, 1, 1);
  
	function drawing(e) {
	  const currX = e.offsetX;
	  const currY = e.offsetY;
  
	  const deltaX = Math.abs(currX - lastX);
	  const deltaY = Math.abs(currY - lastY);
	  let error = deltaX - deltaY;
  
	  const stepX = lastX < currX ? 1 : -1;
	  const stepY = lastY < currY ? 1 : -1;
  
	  while (lastX !== currX || lastY !== currY) {
		if (error * 2 > -deltaY) {
		  error -= deltaY;
		  lastX += stepX;
		} else if (error * 2 < deltaX) {
		  error += deltaX;
		  lastY += stepY;
		}
		lastX = event.offsetX  / cellSize;
        lastY = event.offsetY / cellSize;
		ctx.fillRect(lastX, lastY, 1, 1);
	  }
	}
  
	function removeListeners() {
	  canvas.removeEventListener("mousemove", drawing);
	  canvas.removeEventListener("mouseout", removeListeners);
	  canvas.removeEventListener("mouseup", removeListeners);
	}
  
	canvas.addEventListener("mousemove", drawing);
	canvas.addEventListener("mouseout", removeListeners);
	canvas.addEventListener("mouseup", removeListeners);
  }

//   export default penHandler;