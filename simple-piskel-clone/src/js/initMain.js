import {createIconHTML} from './createIconHTML';
export function initMain() {
    const main = document.createElement('main');
    const mainSection = document.createElement('section');
    mainSection.className = 'main';
    const toolbox = document.createElement('div');
    toolbox.className = 'toolbox main-toolbox';
    const tool = document.createElement('div');
    tool.className = 'tools toolbox-tools';

    const fillBucket = document.createElement('button');
    fillBucket.id = 'fillBucket';
    fillBucket.className = 'button tools-button';
    fillBucket.innerHTML = `${createIconHTML('format_paint')} Fill bucket`;

    const chooseColor = document.createElement('button');
    chooseColor.id = 'chooseColor';
    chooseColor.className = 'button tools-button';
    chooseColor.className = 'button tools-button';
    chooseColor.innerHTML = `${createIconHTML('colorize')} Choose color`;

    const pencil = document.createElement('button');
    pencil.id = 'pencil';
    pencil.className = 'button tools-button';
    pencil.className = 'button tools-button';
    pencil.innerHTML = `${createIconHTML('edit')} Pencil`;
    // const transform = document.createElement('button');
    // toolbox.classList.add('toolbox main-toolbox');
    tool.appendChild(fillBucket);
    tool.appendChild(chooseColor);
    tool.appendChild(pencil);
    toolbox.appendChild(tool);
    mainSection.appendChild(toolbox);
    main.appendChild(mainSection);
    document.body.appendChild(main);
}
