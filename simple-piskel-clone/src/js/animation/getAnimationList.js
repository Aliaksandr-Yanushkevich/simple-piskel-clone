export function getAnimationList() {
  const frameList = [];
  document.querySelectorAll('.visibleFrame').forEach((el) => {
    const canvas = el.parentNode.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    frameList.push(image);
  });
  //   console.log(frameList[0]);
  return frameList;
}
