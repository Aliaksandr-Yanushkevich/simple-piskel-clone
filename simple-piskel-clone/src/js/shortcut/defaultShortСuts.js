import { initShortcutModal } from './initShortcutModal';

export function defaultShortCuts() {
  // set up default options
  const defaultShortCuts = {
    pencil: 'p',
    paintBucket: 'b',
    magicBucket: 'a',
    eraser: 'e',
    stroke: 'l',
    picker: 'o',
  };
  localStorage.shortCuts = JSON.stringify(defaultShortCuts);

  document.querySelector('.paintBucket-hotkey').textContent = '(b)';

  document.querySelector('.magicBucket-hotkey').textContent = '(a)';

  document.querySelector('.picker-hotkey').textContent = '(o)';

  document.querySelector('.pencil-hotkey').textContent = '(p)';

  document.querySelector('.eraser-hotkey').textContent = '(e)';

  document.querySelector('.stroke-hotkey').textContent = '(l)';
  document.querySelectorAll('.tool-key').forEach((item) => item.classList.remove('blink'));
  document.querySelector('.info-msg').textContent = '';
  initShortcutModal(); // rerender window
}
