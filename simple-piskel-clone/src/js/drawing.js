export function drawing() {
    const canvas = document.getElementById('codejam-canvas');
    const context = canvas.getContext('2d');
    let cellSize;
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
    } 

      if (localStorage.pencil === 'true') { // drawing with click
        document.body.style.cursor = 'url("../assets/images/pencil.png"), auto';
        canvas.onclick = function (event) {
          context.fillStyle = 'red';
          const x = Math.floor(event.offsetX / cellSize);
          const y = Math.floor(event.offsetY / cellSize);
          context.fillRect(x, y, 1, 1);
          context.fill();
        }    
          canvas.onmousedown = function (event) {
            if (event.which == 1) {
              console.log("left!");
              context.fillStyle = 'red';
            } 
            if (event.which == 3) {
              console.log("right!");
              context.fillStyle = 'yellow';
            } 
            canvas.onmousemove = function (event) {
              const x = Math.floor(event.offsetX / cellSize);
              const y = Math.floor(event.offsetY / cellSize);
              context.fillRect(x, y, 1, 1);
              // context.fillStyle = 'red';
              context.fill();
            }
            canvas.onmouseup = function () {
              canvas.onmousemove = null;
            };
          };
          canvas.oncontextmenu = function (event) {
            event.preventDefault();
            context.fillStyle = 'yellow';
            const x = Math.floor(event.offsetX / cellSize);
            const y = Math.floor(event.offsetY / cellSize);
            context.fillRect(x, y, 1, 1);
            context.fill();
          }    
        };
       
      }     

