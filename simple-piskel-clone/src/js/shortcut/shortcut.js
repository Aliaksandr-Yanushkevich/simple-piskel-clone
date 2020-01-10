export function shortcut(e) {
    if (e.target.id === 'keyboard') {
        document.querySelector('.modal-shortcuts').classList.remove('hide');
    }
    if (e.target.id === 'shortcuts-close') {
        document.querySelector('.modal-shortcuts').classList.add('hide');
    }
}