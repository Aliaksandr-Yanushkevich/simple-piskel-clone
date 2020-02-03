export function updateFrameNumber() {
  const frameContainer = document.querySelector('.frameContainer');
  const frames = frameContainer.children;
  for (let i = 0; i < frames.length; i++) {
    frames[i].children[0].textContent = i + 1;
  }
}
