import { createFrame } from '../frames/createFrame';
// init frames after page refreshing
export function initFrames() {
  const frames = JSON.parse(localStorage.frames);
  frames.map((data) => createFrame(data));
}
