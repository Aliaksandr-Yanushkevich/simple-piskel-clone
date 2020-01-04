import './scss/main.scss';
import './scss/cursor.scss';
import './scss/font.scss';
import './scss/buttons.scss';
import './scss/tips.scss';
import {drawLine} from './js/test2';
import {penHandler} from './js/floodFill/test3'
// import {initheader} from './js/initheader';
import {initMain} from './js/initMain';
import {canvas} from './js/canvas';
import {handlers} from './js/handlers';
import {initTools} from './js/initTools';
// import './js/floodFill';
import './js/floodFill/test1';


// SETUP BLOCK
// initheader();
initTools();
initMain();
canvas();
handlers();

document.getElementById('canvas').addEventListener('mouseenter', () => console.log('work!'))



    // drawLine(135, 220, 150, 200);
    drawLine(0, 0, 32, 128, {r:255, g:123, b: 84, a:255})


document.body.style.cursor = 'url("../assets/images/pencil.png"), auto';

// window.onload = function () { // doesn't work
//   const SavedImage = new Image();
//   SavedImage.src = localStorage.getItem('dataUrl');
//   SavedImage.onload = function () {
//     context.drawImage(SavedImage, 0, 0);
//   };
//   const buttonTools = document.getElementsByClassName('tools-button'); // tools handling
//   for (let i = 0; i < buttonTools.length; i += 1) {
//     buttonTools[i].classList.remove('active');
//   }

//   const fillBucket = localStorage.getItem('fillBucket');
//   const chooseColor = localStorage.getItem('chooseColor');
//   const pencil = localStorage.getItem('pencil');
//   const transform = localStorage.getItem('transform');
//   previvousColor = localStorage.getItem('previvousColor');
//   currentColor = localStorage.getItem('currentColor');

//   if (fillBucket === 'true') {
//     flags.fillBucket = true;
//     flags.chooseColor = false;
//     flags.pencil = false;
//     flags.transform = false;
//     document.querySelector('#fillBucket').classList.add('active');
//   }
//   if (chooseColor === 'true') {
//     flags.fillBucket = false;
//     flags.chooseColor = true;
//     flags.pencil = false;
//     flags.transform = false;
//     document.querySelector('#chooseColor').classList.add('active');
//   }
//   if (pencil === 'true') {
//     flags.fillBucket = false;
//     flags.chooseColor = false;
//     flags.pencil = true;
//     flags.transform = false;
//     document.querySelector('#pencil').classList.add('active');
//   }
//   if (transform === 'true') {
//     flags.fillBucket = false;
//     flags.chooseColor = false;
//     flags.pencil = false;
//     flags.transform = true;
//     document.querySelector('#transform').classList.add('active');
//   }
//   document.getElementById('previousColorCircle').style.backgroundColor = localStorage.getItem('previvousColor');
//   document.getElementById('currentColorCircle').style.backgroundColor = localStorage.getItem('currentColor');
// };


// // HANDLING COLORS & TOOLS

// canvas.onmousedown = function () {
//   if (flags.pencil === true) { // drawing with mouse movement
//     canvas.onmousemove = function (event) {
//       const x = Math.floor(event.offsetX / cellSize);
//       const y = Math.floor(event.offsetY / cellSize);
//       context.fillRect(x, y, 1, 1);
//       context.fillStyle = localStorage.currentColor1 !== 'undefined' ? localStorage.getItem('currentColor') : currentColor;
//       context.fill();
//     };
//   }

//   if (flags.pencil === true) { // drawing with click
//     canvas.onclick = function (event) {
//       context.fillStyle = localStorage.currentColor1 !== 'undefined' ? localStorage.getItem('currentColor') : currentColor;
//       const x = Math.floor(event.offsetX / cellSize);
//       const y = Math.floor(event.offsetY / cellSize);
//       context.fillRect(x, y, 1, 1);
//       context.fill();
//     };
//     canvas.onmouseup = function () {
//       canvas.onmousemove = null;
//     };
//   }

//   if (flags.fillBucket === true) { // filling
//     context.fillStyle = localStorage.currentColor1 !== 'undefined' ? localStorage.getItem('currentColor') : currentColor;
//     context.fillRect(0, 0, canvasWidth, canvasHeight);
//   }

//   if (flags.chooseColor === true) { // choose color - when click
//     canvas.onclick = function (event) {
//       const x = Math.floor(event.offsetX);
//       const y = Math.floor(event.offsetY);
//       const pipette = context.getImageData(x, y, 1, 1);
//       const pipetteColor = pipette.data;
//       this.previvousColor = currentColor;
//       localStorage.setItem('previvousColor', currentColor);
//       document.getElementById('previousColorCircle').style.backgroundColor = localStorage.getItem('previvousColor');
//       currentColor = `rgba(${pipetteColor[0]},${pipetteColor[1]},${pipetteColor[2]},${pipetteColor[3]})`;
//       localStorage.setItem('currentColor', currentColor);
//       document.getElementById('currentColorCircle').style.backgroundColor = currentColor;
//     };
//   }
//   canvas.onmouseup = function () {
//     canvas.onmousemove = null;
//   };
// };

// const buttonTools = document.getElementsByClassName('tools-button'); // tools handling
// for (let i = 0; i < buttonTools.length; i += 1) {
//   buttonTools[i].addEventListener('click', (event) => {
//     document.querySelectorAll('.tools-button').forEach((element) => {
//       element.classList.remove('active');
//     });
//     switch (event.target.id) {
//       case ('fillBucket'):
//         flags.fillBucket = true;
//         flags.chooseColor = false;
//         flags.pencil = false;
//         flags.transform = false;
//         localStorage.setItem('fillBucket', flags.fillBucket);
//         localStorage.setItem('chooseColor', flags.chooseColor);
//         localStorage.setItem('pencil', flags.pencil);
//         localStorage.setItem('transform', flags.transform);
//         document.querySelector('#fillBucket').classList.add('active');

//         break;

//       case ('chooseColor'):
//         flags.fillBucket = false;
//         flags.chooseColor = true;
//         flags.pencil = false;
//         flags.transform = false;
//         localStorage.setItem('fillBucket', flags.fillBucket);
//         localStorage.setItem('chooseColor', flags.chooseColor);
//         localStorage.setItem('pencil', flags.pencil);
//         localStorage.setItem('transform', flags.transform);
//         document.querySelector('#chooseColor').classList.add('active');

//         break;

//       case ('pencil'):
//         flags.fillBucket = false;
//         flags.chooseColor = false;
//         flags.pencil = true;
//         flags.transform = false;
//         localStorage.setItem('fillBucket', flags.fillBucket);
//         localStorage.setItem('chooseColor', flags.chooseColor);
//         localStorage.setItem('pencil', flags.pencil);
//         localStorage.setItem('transform', flags.transform);
//         document.querySelector('#pencil').classList.add('active');

//         break;

//       case ('transform'):
//         flags.fillBucket = false;
//         flags.chooseColor = false;
//         flags.pencil = false;
//         flags.transform = true;
//         localStorage.setItem('fillBucket', flags.fillBucket);
//         localStorage.setItem('chooseColor', flags.chooseColor);
//         localStorage.setItem('pencil', flags.pencil);
//         localStorage.setItem('transform', flags.transform);
//         document.querySelector('#transform').classList.add('active');

//         break;

//       default:

//         break;
//     }
//   });
// }

// const buttonColor = document.getElementsByClassName('colors-button');
// for (let i = 0; i < buttonColor.length; i += 1) {
//   buttonColor[i].addEventListener('click', (event) => {
//     document.querySelectorAll('.colors-button').forEach((element) => {
//       element.classList.remove('active');
//     });
//     switch (event.target.id) { // call color input
//       case ('currentColor'):
//         document.getElementById('color').click();
//         document.querySelector('#currentColor').classList.add('active');

//         break;

//       case ('previousColor'):
//         currentColor = this.previvousColor;
//         localStorage.setItem('currentColor', previvousColor);
//         document.querySelector('#previousColor').classList.add('active');

//         break;

//       case ('red'):
//         this.previvousColor = currentColor;
//         localStorage.setItem('previvousColor', currentColor);
//         currentColor = 'red';
//         localStorage.setItem('currentColor', 'red');
//         document.getElementById('previousColorCircle').style.backgroundColor = this.previvousColor;
//         document.getElementById('currentColorCircle').style.backgroundColor = currentColor;
//         document.querySelector('#red').classList.add('active');

//         break;

//       case ('white'):
//         this.previvousColor = currentColor;
//         localStorage.setItem('previvousColor', currentColor);
//         currentColor = 'white';
//         localStorage.setItem('currentColor', 'white');
//         document.getElementById('previousColorCircle').style.backgroundColor = this.previvousColor;
//         document.getElementById('currentColorCircle').style.backgroundColor = currentColor;
//         document.querySelector('#white').classList.add('active');

//         break;

//       default:

//         break;
//     }
//   });
// }

// document.getElementById('color').addEventListener('change', (event) => { // color input handling
//   previvousColor = currentColor;
//   localStorage.setItem('previvousColor', previvousColor);
//   document.getElementById('previousColorCircle').style.backgroundColor = localStorage.getItem('previvousColor');
//   currentColor = event.target.value;
//   localStorage.setItem('currentColor', currentColor);
//   document.getElementById('currentColorCircle').style.backgroundColor = localStorage.getItem('currentColor');
// });

// document.addEventListener('keydown', (event) => { // hot keys handling
//   switch (event.code) {
//     case 'KeyB':
//       document.getElementById('fillBucket').click();

//       break;

//     case 'KeyP':
//       document.getElementById('pencil').click();

//       break;

//     case 'KeyC':
//       document.getElementById('chooseColor').click();

//       break;

//     default:

//       break;
//   }
// });

// function getLinkToImage() {
//   const myAccessKey = 'afffcf1ba9d09bbf9c8e8cd906017aa648eebfb7c897450305d5060f57c89497'; // developer api key
//   const searchField = document.getElementsByClassName('search-field')[0].value;
//   const url = `https://api.unsplash.com/photos/random?query=${searchField}&client_id=${myAccessKey}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const canvasImage = new Image();
//       canvasImage.crossOrigin = 'Anonymous';
//       canvasImage.src = data.urls.small;
//       canvasImage.onload = function () {
//         const scale = canvasWidth / Math.max(this.width, this.height); // scaling&positioning image
//         const x = this.width >= this.height ? 0 : (canvasWidth - this.width * scale) / 2;
//         const y = this.height >= this.width ? 0 : (canvasHeight - this.height * scale) / 2;
//         context.drawImage(canvasImage, x, y, this.width * scale, this.height * scale);
//         const canvasData = canvas.toDataURL();
//         localStorage.setItem('dataUrl', canvasData);
//       };
//     });
// }

// function drawImage(e) {
//   e.preventDefault();
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   // let canvasImage = new Image();
//   getLinkToImage();
// }

// function grayscale() {
//   const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//   const { data } = imageData;
//   for (let i = 0; i < data.length; i += 4) {
//     const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//     data[i] = avg; // red
//     data[i + 1] = avg; // green
//     data[i + 2] = avg; // blue
//   }
//   context.putImageData(imageData, 0, 0);
// }


// const searchButton = document.getElementsByClassName('search-button')[0];
// searchButton.addEventListener('click', drawImage);

// const backInBlack = document.getElementsByClassName('grayscale-button')[0];
// backInBlack.addEventListener('click', grayscale);

// function canvasURL() { // saving canvas in localstorage
//   const canvasData = canvas.toDataURL();
//   localStorage.setItem('dataUrl', canvasData);
// }

// window.addEventListener('click', canvasURL);
