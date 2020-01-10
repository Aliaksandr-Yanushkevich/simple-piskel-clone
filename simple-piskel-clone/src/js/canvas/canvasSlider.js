import { canvas } from "./canvas";

export function canvasSlider() {
    localStorage.canvasSlider = document.querySelector('#canvasSlider').value;
    canvas();
}