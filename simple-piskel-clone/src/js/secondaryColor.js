export function secondaryColor() {
    const secondaryColor = document.querySelector('#secondaryColor');
    secondaryColor.click();
    secondaryColor.addEventListener('change', (e) => {
        localStorage.secondaryColor = secondaryColor.value;
        document.querySelector('#secondaryColorCircle').style.backgroundColor = secondaryColor.value;
    })
}