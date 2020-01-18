import { canvas, ctx } from '../canvas/canvasEnv';

export function magicFill(e) {
    if (!((e.buttons & 1) || (e.buttons & 10))) {
        return;
    }
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
