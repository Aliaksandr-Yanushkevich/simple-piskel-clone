export function setCellSize() {
  let cellSize;
  switch (localStorage.canvasSlider) {
    case "0":
      cellSize = 16;
      break;
    case "1":
      cellSize = 8;
      break;
    case "2":
      cellSize = 4;
      break;
    default:
      cellSize = 8;
      break;
  }
  return cellSize;
}
