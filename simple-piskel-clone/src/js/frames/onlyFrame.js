export function onlyFrame(e) {
  const currentFrame = e.target.closest('.frame');
  const frameCount = [...currentFrame.parentElement.children].length;
  if (frameCount === 1 && e.type === 'mouseenter') {
    currentFrame.classList.add('onlyFrame');
  }
  if (e.type === 'mouseleave') {
    currentFrame.classList.remove('onlyFrame');
  }
}
