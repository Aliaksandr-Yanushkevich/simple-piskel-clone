import { drawing } from './drawing';
import { pencil } from './pencil';
import { chooseColor } from './chooseСolor';
import { fillBucket } from './fillBucket';
// import {canvas} from './canvas';
import { primaryColor } from './primaryColor';
import { secondaryColor } from './secondaryColor';
import { eraser } from './eraser';
import { stroke } from './stroke';
import { canvasSlider } from './canvasSlider';
import { setPencilSize } from './setPencilSize';
import { signIn } from './authorization/signIn';
import { signOut } from './authorization/signOut';
import { shortcut } from './shortcut/shortcut';
import { hotkey } from './shortcut/hotkey';
export function handlers() {
   // document.querySelector('#canvas').addEventListener('mouseenter', drawing);
   document.querySelector('#fillBucket').addEventListener('click', fillBucket);
   document.querySelector('#chooseColor').addEventListener('click', chooseColor);
   document.querySelector('#pencil').addEventListener('click', pencil);
   document.querySelector('#canvasSlider').addEventListener('change', canvasSlider);
   document.querySelector('#primaryColorButton').addEventListener('click', primaryColor);
   document.querySelector('#secondaryColorButton').addEventListener('click', secondaryColor);
   document.querySelector('#eraser').addEventListener('click', eraser);
   document.querySelector('#stroke').addEventListener('click', stroke);
   document.querySelector('#sign-in').addEventListener('click', signIn);
   document.querySelector('#sign-out').addEventListener('click', signOut);
   document.querySelector('#keyboard').addEventListener('click', shortcut);
   document.querySelector('#shortcuts-close').addEventListener('click', shortcut);
   document.querySelector('#fillbucket-shortcut').addEventListener('click', hotkey, true);


   const pencilList = document.querySelectorAll('.pencilSize');
   Array.from(pencilList).forEach(item => {
      item.addEventListener('click', (e) => {
         setPencilSize(e.target.id);
         drawing();
      });
   })



   // const shortcutList = document.querySelectorAll('.tool-shortcuts');
   // Array.from(shortcutList).forEach(item => item.addEventListener('click', e => {
   //    hotkey(e.target.id)
   // }))
}