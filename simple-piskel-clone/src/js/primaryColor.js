export function primaryColor() {
    const primaryColor = document.querySelector('#primaryColor');
    primaryColor.click();
    primaryColor.addEventListener('change', (e) => {
        localStorage.primaryColor = primaryColor.value;
        document.querySelector('#primaryColorPalette').style.backgroundColor = primaryColor.value;
    })
}