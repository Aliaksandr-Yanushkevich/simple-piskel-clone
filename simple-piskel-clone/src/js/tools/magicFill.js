import {canvas, ctx} from '../../app';
export function magicFill(e) {
    if (!((e.buttons & 1) || (e.buttons & 10))) {
        return;
    }
    // const canvas = document.querySelector('canvas');
    // const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
    if (e.buttons & 1) {
        ctx.fillStyle = localStorage.primaryColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (e.buttons & 10) {
        ctx.fillStyle = localStorage.secondaryColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}