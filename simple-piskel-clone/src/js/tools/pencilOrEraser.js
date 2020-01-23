export function pencilorEraser() {
  let mode;
  switch (localStorage.currentTool) {
    case "pencil":
      mode = "source-over";
      break;
    case "eraser":
      mode = "destination-out";
      break;
    default:
      mode = "source-over";
      break;
  }
  return mode;
}
