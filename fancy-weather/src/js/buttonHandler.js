imgRefresh = function (city) {
    let imgRefresh = document.getElementsByClassName('button-changeBackground')[0];
    imgRefresh.addEventListener('click', () => {
        getBackground(city)
})
}
tempUnit = function (apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3) {
    let cel = document.getElementsByClassName('temp-celsium')[0];
    let far = document.getElementsByClassName('temp-fahrenheit')[0];
    cel.addEventListener('click', () => cels(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3) );
    far.addEventListener('click', () => fahr(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3) );

    fahr = function(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3) {
        localStorage.setItem('celsium', false);
        cel.classList.remove('active');
        far.classList.add('active');
        let apparentTemperatureFahr = Math.round((apparentTemperature * 9/5) + 32);
        let tempFahr =  Math.round((temp * 9/5) + 32);
        let avgTemp1Fahr = Math.round((avgTemp1 * 9/5) + 32);
        let avgTemp2Fahr = Math.round((avgTemp2 * 9/5) + 32);
        let avgTemp3Fahr = Math.round((avgTemp3 * 9/5) + 32);
        document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${tempFahr}°`;
        document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${apparentTemperatureFahr}°`;
        document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${avgTemp1Fahr}°`;
        document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${avgTemp2Fahr}°`;
        document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${avgTemp3Fahr}°`;
    }
    cels = function(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3) {
        localStorage.setItem('celsium', true);
        far.classList.remove('active');
        cel.classList.add('active');
        let apparentTemperatureCels = Math.round(apparentTemperature);
        let tempCels =  Math.round(temp);
        let avgTemp1Cels = Math.round(avgTemp1);
        let avgTemp2Cels = Math.round(avgTemp2);
        let avgTemp3Cels = Math.round(avgTemp3);

        document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${tempCels}°`;
        document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${apparentTemperatureCels}°`;
        document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${avgTemp1Cels}°`;
        document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${avgTemp2Cels}°`;
        document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${avgTemp3Cels}°`;
    }
}
// document.getElementById('square').addEventListener('click', () => {
//     small();
// });
