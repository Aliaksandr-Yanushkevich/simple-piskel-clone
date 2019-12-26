import {drawing} from './drawing';
import {pencil} from './pencil';
import {chooseColor} from './chooseСolor';
import {fillBucket} from './fillBucket';
import {canvas} from './canvas';
import {primaryColor} from './primaryColor';
import {secondaryColor} from './secondaryColor';
import {eraser} from './eraser';
import {stroke} from './stroke';
import {canvasSlider} from './canvasSlider';

export function handlers() {
   document.querySelector('#codejam-canvas').addEventListener('mouseenter', (e) => drawing());
   document.querySelector('#fillBucket').addEventListener('click', (e) => fillBucket());
   document.querySelector('#chooseColor').addEventListener('click', (e) => chooseColor());
   document.querySelector('#pencil').addEventListener('click', (e) => pencil());
   document.querySelector('#canvasSlider').addEventListener('change', (e) => canvasSlider());
   document.querySelector('#primaryColorCircle').addEventListener('click', (e) => primaryColor());
   document.querySelector('#secondaryColorCircle').addEventListener('click', (e) => secondaryColor());
   document.querySelector('#eraser').addEventListener('click', (e) => eraser());
   document.querySelector('#stroke').addEventListener('click', (e) => stroke());
}