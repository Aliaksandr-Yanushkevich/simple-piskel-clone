backgroundRefresh = function (season, dayTime, currentlyIcon) {
    let imgRefresh = document.getElementsByClassName('button-changeBackground')[0];
    imgRefresh.addEventListener('click', () => getBackground(season, dayTime, currentlyIcon));
}

tempUnit = function (currentlytemp, dayForecast1, dayForecast2, dayForecast3) {
    let cel = document.getElementsByClassName('temp-celsium')[0];
    let far = document.getElementsByClassName('temp-fahrenheit')[0];
    cel.addEventListener('click', () => cels(currentlytemp, dayForecast1, dayForecast2, dayForecast3) );
    far.addEventListener('click', () => fahr(currentlytemp, dayForecast1, dayForecast2, dayForecast3) );

    fahr = function(currentlytemp, dayForecast1, dayForecast2, dayForecast3) {
        localStorage.setItem('celsium', false);
        cel.classList.remove('active');
        far.classList.add('active');
        currentlytemp = Math.round(currentlytemp * 9/5 + 32);
        let avgTemp1 = Math.round((dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2 * 9 / 5 + 32);
        let avgTemp2 = Math.round((dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2 * 9 / 5 + 32);
        let avgTemp3 = Math.round((dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2 * 9 / 5 + 32);
        document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${currentlytemp}°`;
        document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${avgTemp1}°`;
        document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${avgTemp2}°`;
        document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${avgTemp3}°`;
    }
    cels = function(currentlytemp, dayForecast1, dayForecast2, dayForecast3) {
        localStorage.setItem('celsium', true);
        far.classList.remove('active');
        cel.classList.add('active');
        let avgTemp1 = Math.round((dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2);
        let avgTemp2 = Math.round((dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2);
        let avgTemp3 = Math.round((dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2);
        document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${Math.round(currentlytemp)}°`;
        document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${avgTemp1}°`;
        document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${avgTemp2}°`;
        document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${avgTemp3}°`;
    }
}

changeLang = function() {
    let lang = document.getElementsByClassName('language')[0];
    lang.addEventListener('change', () => translate());

    translate = async function () {
        localStorage.setItem('lang', document.getElementsByClassName('language')[0].value);
        const apiKey = '685337f4b9c34a078fcd9a0da5516122';
        const place = sessionStorage.getItem('city');
        const lang = localStorage.getItem('lang').toLocaleLowerCase();
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}&language=${lang}`;
        const response = await fetch(url);
        const data = await response.json();
        const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village || data.results[0].components.county || data.results[0].components.state;
        const country = data.results[0].components.country;
        document.getElementsByClassName('weather-location')[0].innerHTML = `${city}, ${country}`
    }
}
