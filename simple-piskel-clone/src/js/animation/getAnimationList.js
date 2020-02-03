export function getAnimationList() {
  const frameList = [];
  const frameSource = JSON.parse(localStorage.frames);
  frameSource.map((el) => {
    if (el[1] === true) {
      frameList.push(el);
    }
    return frameList;
  });
  return frameList;
}
