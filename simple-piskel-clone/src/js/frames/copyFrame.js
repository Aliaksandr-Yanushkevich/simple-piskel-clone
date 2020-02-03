export function copyFrame(currentFrame) {
  const canvas = currentFrame.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // const savedImage = canvas.toDataURL();
  const copiedCurrentFrame = currentFrame.cloneNode(true);
  const copiedCanvas = copiedCurrentFrame.querySelector('canvas');
  const copiedCtx = copiedCanvas.getContext('2d');
  const frames = JSON.parse(localStorage.frames);
  const frameNumber = [...currentFrame.parentElement.children].indexOf(currentFrame);
  currentFrame.after(copiedCurrentFrame);
  document.querySelectorAll('.frame').forEach((element) => element.classList.remove('frameActive'));
  copiedCurrentFrame.classList.add('frameActive');
  copiedCtx.putImageData(imageData, 0, 0);
  frames.splice(frameNumber + 1, 0, imageData);
  localStorage.frames = JSON.stringify(frames);
}
