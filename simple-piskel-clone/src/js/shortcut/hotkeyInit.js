import { defaultShortCuts } from './defaultShortСuts';

export function hotkeyInit() {
  if (localStorage.shortCuts === undefined) {
    defaultShortCuts();
  }
  const shortCuts = JSON.parse(localStorage.shortCuts);
  document.querySelector('.paintBucket-hotkey').textContent = `(${shortCuts.paintBucket})`;
  document.querySelector('.magicBucket-hotkey').textContent = `(${shortCuts.magicBucket})`;
  document.querySelector('.picker-hotkey').textContent = `(${shortCuts.picker})`;
  document.querySelector('.pencil-hotkey').textContent = `(${shortCuts.pencil})`;
  document.querySelector('.eraser-hotkey').textContent = `(${shortCuts.eraser})`;
  document.querySelector('.stroke-hotkey').textContent = `(${shortCuts.stroke})`;
}
