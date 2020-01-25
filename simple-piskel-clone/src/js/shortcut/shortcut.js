export function shortcut(e) {
  if (e.currentTarget.id === 'keyboard') {
    document.querySelector('.modal-shortcuts').classList.remove('hide');
  }
  if (e.currentTarget.id === 'shortcuts-close') {
    document.querySelector('.modal-shortcuts').classList.add('hide');
  }
}
