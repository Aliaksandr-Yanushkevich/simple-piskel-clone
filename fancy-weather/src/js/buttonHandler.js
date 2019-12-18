backgroundRefresh = function (season, dayTime, currentlyIcon) {
    let imgRefresh = document.getElementsByClassName('button-changeBackground')[0];
    imgRefresh.addEventListener('click', () => getBackground(season, dayTime, currentlyIcon));
}

tempUnit = function (currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3) {
    let cel = document.getElementsByClassName('temp-celsium')[0];
    let far = document.getElementsByClassName('temp-fahrenheit')[0];
    cel.addEventListener('click', () => cels(currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3) );
    far.addEventListener('click', () => fahr(currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3) );

    fahr = function(currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3) {
        localStorage.setItem('celsium', false);
        cel.classList.remove('active');
        far.classList.add('active');
        currentlytemp = Math.round(currentlytemp * 9/5 + 32);
        apparentTemperature = Math.round(apparentTemperature * 9/5 + 32);
        let avgTemp1 = Math.round((dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2 * 9 / 5 + 32);
        let avgTemp2 = Math.round((dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2 * 9 / 5 + 32);
        let avgTemp3 = Math.round((dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2 * 9 / 5 + 32);
        document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${currentlytemp}°`;

        if (localStorage.getItem('lang')==='en') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${apparentTemperature}°`; 
        }
    
        if (localStorage.getItem('lang')==='be') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Адчуваецца як: ${apparentTemperature}°`; 
        }
    
        if (localStorage.getItem('lang')==='ru') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Ощущается как: ${apparentTemperature}°`; 
        }

        document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${avgTemp1}°`;
        document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${avgTemp2}°`;
        document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${avgTemp3}°`;
    }
    cels = function(currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3) {
        localStorage.setItem('celsium', true);
        far.classList.remove('active');
        cel.classList.add('active');
        apparentTemperature = Math.round(apparentTemperature);
        let avgTemp1 = Math.round((dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2);
        let avgTemp2 = Math.round((dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2);
        let avgTemp3 = Math.round((dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2);

        if (localStorage.getItem('lang')==='en') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${apparentTemperature}°`; 
        }
    
        if (localStorage.getItem('lang')==='be') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Адчуваецца як: ${apparentTemperature}°`; 
        }
    
        if (localStorage.getItem('lang')==='ru') {
            document.getElementsByClassName('li-item')[1].innerHTML = `Ощущается как: ${apparentTemperature}°`; 
        }

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
        
        if (localStorage.getItem('lang') === 'en') {
            document.getElementsByClassName('searchField')[0].placeholder = "Search city or ZIP";
        }
    
        if (localStorage.getItem('lang') === 'be') {
            document.getElementsByClassName('searchField')[0].placeholder = "Шукаць горад ці індэкс";
        }
    
        if (localStorage.getItem('lang') === 'ru') {
            document.getElementsByClassName('searchField')[0].placeholder = "Искать город или индекс";
        }
        darksky();
        getCityData();
        displayLocation();
        dayMonth();
    }
}
