import {createIconHTML} from './createIconHTML';
export function initheader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const menuButton = document.createElement('button');
    menuButton.className = 'button header-button';
    menuButton.innerHTML = createIconHTML('keyboard_arrow_down');

    const title = document.createElement('div');
    title.className = 'header-title';
    const titleLink = document.createElement('a');
    titleLink.className = 'header-link';
    const linkText = document.createElement('h1');
    linkText.textContent = 'Piskel-clone';
    linkText.className = 'header-link--text';

    const menuProp = document.createElement('button');
    menuProp.className = 'button header-button';
    menuProp.innerHTML = createIconHTML('more_vert');
    titleLink.appendChild(linkText);
    title.appendChild(titleLink);
    header.appendChild(menuButton, title, menuProp);
    header.appendChild(title);
    header.appendChild(menuProp);
    document.body.appendChild(header);
}