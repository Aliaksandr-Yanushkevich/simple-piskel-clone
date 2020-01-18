export function primaryColor() {
    const primaryColor = document.querySelector('#primaryColor');
    primaryColor.click();
    primaryColor.addEventListener('change', () => {
        localStorage.primaryColor = primaryColor.value;
        document.querySelector('#primaryColorPalette').style.backgroundColor = primaryColor.value;
    });
}
