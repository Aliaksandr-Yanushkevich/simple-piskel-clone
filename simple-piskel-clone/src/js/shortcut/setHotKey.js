export function setHotKey(e) {
  e.preventDefault();
  const shortCuts = JSON.parse(localStorage.shortCuts);
  const keyInUse = Object.values(shortCuts);
  if (!/^[a-z]{1}$/.test(e.key)) {
    document.querySelector('.info-msg').textContent = 'Only latin letters are allowed.';
    return;
  }
  if (keyInUse.includes(e.key)) {
    document.querySelector('.info-msg').textContent = `Key ${e.key} is already in use.`;
    return;
  }
  document.querySelector('.blink').textContent = e.key;
  document.querySelector('.info-msg').textContent = '';
  switch (document.querySelector('.blink').parentNode.id) {
    case 'fillbucket-shortcut':
      shortCuts.paintBucket = e.key;
      document.querySelector('.paintBucket-hotkey').textContent = `(${e.key})`;
      break;
    case 'magicbucket-shortcut':
      shortCuts.magicBucket = e.key;
      document.querySelector('.magicBucket-hotkey').textContent = `(${e.key})`;
      break;
    case 'picker-shortcut':
      shortCuts.picker = e.key;
      document.querySelector('.picker-hotkey').textContent = `(${e.key})`;
      break;
    case 'pencil-shortcut':
      shortCuts.pencil = e.key;
      document.querySelector('.pencil-hotkey').textContent = `(${e.key})`;
      break;
    case 'eraser-shortcut':
      shortCuts.eraser = e.key;
      document.querySelector('.eraser-hotkey').textContent = `(${e.key})`;
      break;
    case 'stroke-shortcut':
      shortCuts.stroke = e.key;
      document.querySelector('.stroke-hotkey').textContent = `(${e.key})`;
      break;
    default:
      break;
  }
  document.querySelectorAll('.tool-key').forEach((item) => item.classList.remove('blink'));
  localStorage.shortCuts = JSON.stringify(shortCuts);
}
