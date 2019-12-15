darksky = async function() {
    let latitude = sessionStorage.getItem('latitude');
    let longitude = sessionStorage.getItem('longitude');
    const Skycons = require('../../node_modules/skycons/skycons')(window); //  Если работаем с node (локальный сервер и т.п.) то передаем global, а если с браузером то глобальный объект window
    //Эта анонимная функция, вызванная с глобальным объектом, уже возвращает наш класс Skycons
    const lang = localStorage.getItem('lang').toLowerCase();
    const key = '8c9668e919cbdfe759fda91c7498ad66';
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si&lang=${lang}`;
    let response = await fetch(url);
    let data = await response.json();
    const currentlytemp = data.currently.temperature;
    const currentlyIcon = data.currently.icon;
    const currentlysummary = data.currently.summary;
    const apparentTemperature = data.currently.apparentTemperature;
    const windSpeed = data.currently.windSpeed;
    const humidity = data.currently.humidity;
    // console.log(data);
    if (localStorage.getItem('celsium') === 'false') { // check temp unit
        currentlytemp =  (currentlytemp * 9/5) + 32;
        apparentTemperature = apparentTemperature = (apparentTemperature* 9/5) + 32;
    }

    document.getElementsByClassName('weatherPropTemp')[0].innerHTML = `${Math.round(currentlytemp)}°`;

    let icons = new Skycons({"color": "white"}); //create and run icon animation
    icons.add("currentlyWeather", currentlyIcon);
    icons.play();

    document.getElementsByClassName('li-item')[0].innerHTML = `${currentlysummary}`;
    if (localStorage.getItem('lang')==='EN') {
        document.getElementsByClassName('li-item')[1].innerHTML = `Feels like: ${Math.round(apparentTemperature)}°`; 
        document.getElementsByClassName('li-item')[2].innerHTML = `Wind: ${Math.round(windSpeed)}m/s`;
        document.getElementsByClassName('li-item')[3].innerHTML = `Humidity: ${Math.round(humidity*100)}%`;
    }

    if (localStorage.getItem('lang')==='BE') {
        document.getElementsByClassName('li-item')[1].innerHTML = `Адчуваецца як: ${Math.round(apparentTemperature)}°`; 
        document.getElementsByClassName('li-item')[2].innerHTML = `Вецер: ${Math.round(windSpeed)}м/с`;
        document.getElementsByClassName('li-item')[3].innerHTML = `Вільготнасць: ${Math.round(humidity*100)}%`;
    }

    if (localStorage.getItem('lang')==='RU') {
        document.getElementsByClassName('li-item')[1].innerHTML = `Ощущается как: ${Math.round(apparentTemperature)}°`; 
        document.getElementsByClassName('li-item')[2].innerHTML = `Ветер: ${Math.round(windSpeed)}м/с`;
        document.getElementsByClassName('li-item')[3].innerHTML = `Влажность: ${Math.round(humidity*100)}%`;
    }
   
    return data

    
}