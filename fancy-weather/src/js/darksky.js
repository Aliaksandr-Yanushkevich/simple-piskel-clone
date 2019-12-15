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
    const dayForecast1 = data.daily.data[1];
    const dayForecast2 = data.daily.data[2];
    const dayForecast3 = data.daily.data[3];
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

    // display forecast
    const timeZone = sessionStorage.getItem('timeZone');
    let timeOptions = {timeZone: timeZone, weekday: "long"};

    const day1 = new Date(dayForecast1.time*1000).toLocaleString(lang, timeOptions);
    const day2 = new Date(dayForecast2.time*1000).toLocaleString(lang, timeOptions);
    const day3 = new Date(dayForecast3.time*1000).toLocaleString(lang, timeOptions);

    let avgTemp1 = (dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2;
    let avgTemp2 = (dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2;
    let avgTemp3 = (dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2;

    if (localStorage.getItem('celsium') === 'false') {
        avgTemp1 = avgTemp1 * 9/5 + 32;
        avgTemp2 = avgTemp2 * 9/5 + 32;
        avgTemp3 = avgTemp3 * 9/5 + 32;
    }
    if (lang === 'be') {
        const byWeekDayLong = {
            'Sunday': 'Нядзеля',
            'Monday': 'Панядзелак',
            'Tuesday': 'Аўторак',
            'Wednesday': 'Серада',
            'Thursday': 'Чацьвер',
            'Friday': 'Пятніца',
            'Saturday': 'Субота',
        };
        document.getElementsByClassName('tommorow-weekday')[0].innerHTML = `${byWeekDayLong[day1]}`;
        document.getElementsByClassName('tommorow1-weekday')[0].innerHTML = `${byWeekDayLong[day2]}`;
        document.getElementsByClassName('tommorow2-weekday')[0].innerHTML = `${byWeekDayLong[day3]}`;
        console.log(byWeekDayLong[day1])
    } else {
        document.getElementsByClassName('tommorow-weekday')[0].innerHTML = `${day1}`;
        document.getElementsByClassName('tommorow1-weekday')[0].innerHTML = `${day2}`;
        document.getElementsByClassName('tommorow2-weekday')[0].innerHTML = `${day3}`;
    }
    

    document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${Math.round(avgTemp1)}°`;
    document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${Math.round(avgTemp2)}°`;
    document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${Math.round(avgTemp3)}°`;

    icons.add("weatherTommorow", dayForecast1.icon);
    icons.add("weatherTommorow1", dayForecast2.icon);
    icons.add("weatherTommorow2", dayForecast3.icon);
    icons.play();

   
    return data

    
}