export function initFrameContainer() {
  // create frameContainer
  const mainToolbox = document.querySelector('.main-toolbox');
  const frames = document.createElement('div');
  const frameContainer = document.createElement('div');
  frames.classList.add('frames');
  frameContainer.classList.add('frameContainer');
  frames.append(frameContainer);
  mainToolbox.after(frames);


  // create button for adding frame
  const addNewFrameWrapper = document.createElement('div');
  const addNewFrame = document.createElement('button');
  addNewFrameWrapper.className = 'addNewFrameWrapper';
  addNewFrame.id = 'addNewFrame';
  addNewFrame.className = 'button addNewFrame';
  addNewFrameWrapper.append(addNewFrame);
  frames.append(addNewFrameWrapper);

  // style button
  const newFramePlus = document.createElement('p');
  const newFrameTitle = document.createElement('p');
  newFramePlus.innerHTML = '<i class="fas fa-plus"></i>';
  newFrameTitle.textContent = 'Add new frame';
  newFramePlus.className = 'button-newFramePlus';
  newFrameTitle.className = 'button-newFrameTitle';
  addNewFrame.append(newFramePlus);
  addNewFrame.append(newFrameTitle);
}
