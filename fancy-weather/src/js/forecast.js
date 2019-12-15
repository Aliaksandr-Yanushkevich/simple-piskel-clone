forecast = function(dayForecast1, dayForecast2, dayForecast3) {
    const timeZone = sessionStorage.getItem('timeZone');
    let timeOptions = {timeZone: timeZone, weekday: "long"};
    const day1 = new Date(dayForecast1.time*1000).toLocaleString('en', timeOptions);
    const day2 = new Date(dayForecast2.time*1000).toLocaleString('en', timeOptions);
    const day3 = new Date(dayForecast3.time*1000).toLocaleString('en', timeOptions);
    let avgTemp1 = (dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2;
    let avgTemp2 = (dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2;
    let avgTemp3 = (dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2;

    if (localStorage.getItem('celsium') === 'false') {
        avgTemp1 = avgTemp1 * 9/5 + 32;
        avgTemp2 = avgTemp2 * 9/5 + 32;
        avgTemp3 = avgTemp3 * 9/5 + 32;
    }
    document.getElementsByClassName('tommorow-weekday')[0].innerHTML = `${day1}`;
    document.getElementsByClassName('tommorow1-weekday')[0].innerHTML = `${day2}`;
    document.getElementsByClassName('tommorow2-weekday')[0].innerHTML = `${day3}`;

    document.getElementsByClassName('tommorowTemp')[0].innerHTML = `${Math.round(avgTemp1)}°`;
    document.getElementsByClassName('tommorow1Temp')[0].innerHTML = `${Math.round(avgTemp2)}°`;
    document.getElementsByClassName('tommorow2Temp')[0].innerHTML = `${Math.round(avgTemp3)}°`;

    const Skycons = require('../../node_modules/skycons/skycons')(window); //  Если работаем с node (локальный сервер и т.п.) то передаем global, а если с браузером то глобальный объект window
    //Эта анонимная функция, вызванная с глобальным объектом, уже возвращает наш класс Skycons
    let icons = new Skycons({"color": "white"});
    icons.add("weatherTommorow", dayForecast1.icon);
    icons.add("weatherTommorow1", dayForecast2.icon);
    icons.add("weatherTommorow2", dayForecast3.icon);
    icons.play();
};