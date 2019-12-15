currentlyWeather = function(currentlytemp, currentlyIcon, currentlysummary, apparentTemperature, windSpeed, humidity) {
    const Skycons = require('../../node_modules/skycons/skycons')(window); //  Если работаем с node (локальный сервер и т.п.) то передаем global, а если с браузером то глобальный объект window
    //Эта анонимная функция, вызванная с глобальным объектом, уже возвращает наш класс Skycons
    if (localStorage.getItem('celsium') === 'false') { // check temp unit
        currentlytemp =  (currentlytemp * 9/5) + 32;
        apparentTemperature = apparentTemperature = (apparentTemperature* 9/5) + 32;
    }

    document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${Math.round(currentlytemp)}°`;

    let icons = new Skycons({"color": "white"}); //create and run icon animation
    icons.add("currentlyWeather", currentlyIcon);
    icons.play();

    document.getElementsByClassName('li-item')[0].innerHTML = `${currentlysummary}`; 
    document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${Math.round(apparentTemperature)}°`; 
    document.getElementsByClassName('li-item')[2].innerHTML = `Wind: ${Math.round(windSpeed)}m/s`;
    document.getElementsByClassName('li-item')[3].innerHTML = `Humidity: ${Math.round(humidity*100)}%`;
}

