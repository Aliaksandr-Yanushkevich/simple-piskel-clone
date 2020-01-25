export function initFrameContainer() {
  // create frameContainer
  const mainToolbox = document.querySelector('.main-toolbox');
  const frameContainer = document.createElement('div');
  frameContainer.classList.add('frameContainer');
  mainToolbox.after(frameContainer);

  // create button for adding frame
  const newFrame = document.createElement('button');
  newFrame.id = 'newFrame';
  newFrame.className = 'button newFrame';
  frameContainer.append(newFrame);

  // style button
  const newFramePlus = document.createElement('p');
  const newFrameTitle = document.createElement('p');
  newFramePlus.innerHTML = '<i class="fas fa-plus"></i>';
  newFrameTitle.textContent = 'Add new frame';
  newFramePlus.className = 'button-newFramePlus';
  newFrameTitle.className = 'button-newFrameTitle';
  newFrame.append(newFramePlus);
  newFrame.append(newFrameTitle);
}
