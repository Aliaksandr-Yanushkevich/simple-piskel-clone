export function deleteFrame(currentFrame) {
  const frames = JSON.parse(localStorage.frames);
  const frameNumber = [...currentFrame.parentElement.children].indexOf(currentFrame);
  if (currentFrame.classList.contains('frameActive')) {
    document.querySelectorAll('.frame').forEach((element) => element.classList.remove('frameActive'));
    if (currentFrame.previousSibling !== null) {
      currentFrame.previousSibling.classList.add('frameActive');
    } else {
      currentFrame.nextSibling.classList.add('frameActive');
    }
  }
  currentFrame.parentNode.removeChild(currentFrame);
  frames.splice(frameNumber, 1);
  localStorage.frames = JSON.stringify(frames);
}
