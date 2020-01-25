export function secondaryColor() {
  const secondaryColor = document.querySelector('#secondaryColor');
  secondaryColor.click();
  secondaryColor.addEventListener('change', () => {
    localStorage.secondaryColor = secondaryColor.value;
    document.querySelector('#secondaryColorPalette').style.backgroundColor = secondaryColor.value;
  });
}
