export function drawing() {
    const canvas = document.getElementById('codejam-canvas');
    const context = canvas.getContext('2d');
    let cellSize;
    let pencilSize;

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

    switch (localStorage.pencilSize) {
      case '0':
        pencilSize = 1;
      break;
      case '1':
        pencilSize = 2;
      break;
      case '2':
        pencilSize = 3;
      break;
      case '3':
        pencilSize = 4;
      break;
      default:
      break;
    } 

      if (localStorage.pencil === 'true' || localStorage.eraser === 'true') { // drawing with left click
        if (localStorage.pencil === 'true') {
          context.globalCompositeOperation = "source-over"; // switching between pencil/eraser
        } else {
          context.globalCompositeOperation = 'destination-out';
        }
          canvas.onmousedown = function (event) { // drawing with left/right click
            if (event.which == 1) {
              console.log("left!");
              context.fillStyle = localStorage.primaryColor;
            } 
            if (event.which == 3) {
              console.log("right!");
              context.fillStyle = localStorage.secondaryColor;
            } 

            const x = Math.floor(event.offsetX / cellSize);
            const y = Math.floor(event.offsetY / cellSize);
            context.fillRect(x, y, pencilSize, pencilSize);
            context.fill();

            canvas.onmousemove = function (event) { // drawing with left/right mouse movement
              const x = Math.floor(event.offsetX / cellSize);
              const y = Math.floor(event.offsetY / cellSize);
              context.fillRect(x, y, pencilSize, pencilSize);
              // context.fillStyle = 'red';
              context.fill();
            }
            canvas.onmouseup = function () {
              canvas.onmousemove = null;
              const canvasData = canvas.toDataURL(); // save canvas data
              localStorage.canvasData = canvasData; 
            };
          };
          canvas.oncontextmenu = function (event) {
            event.preventDefault();
            // context.fillStyle = 'yellow';
            const x = Math.floor(event.offsetX / cellSize);
            const y = Math.floor(event.offsetY / cellSize);
            context.fillRect(x, y, pencilSize, pencilSize);
            context.fill();
          }    
        };
      }     

