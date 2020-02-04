export function initTools() {
  if (localStorage.canvasSlider === undefined) { // checking existence of properties and initialization tools
    localStorage.canvasSlider = '1';
  }
  if (localStorage.pencilSize === undefined) {
    localStorage.pencilSize = '1';
  }
  if (localStorage.primaryColor === undefined) {
    localStorage.primaryColor = '#E1B935';
  }
  if (localStorage.secondaryColor === undefined) {
    localStorage.secondaryColor = '#7573E1';
  }

  if (localStorage.currentTool === undefined) {
    localStorage.currentTool = 'pencil';
  }

  if (localStorage.FPS === undefined) {
    localStorage.FPS = '12';
  }
}
