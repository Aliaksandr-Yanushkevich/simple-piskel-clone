handlers = function (city) {
    let imgRefresh = document.getElementsByClassName('button-changeBackground')[0];
    imgRefresh.addEventListener('click', () => {
        getBackground(city)
})
}
// document.getElementById('square').addEventListener('click', () => {
//     small();
// });
