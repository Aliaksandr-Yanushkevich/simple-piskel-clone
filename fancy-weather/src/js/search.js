// import './APIClock';
search = function() {
    const searchButton = document.getElementsByClassName('searchSubmit')[0];
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        getDataFromCity();
    })
}

getDataFromCity = async function() {
    const apiKey = '685337f4b9c34a078fcd9a0da5516122';
    const place = document.getElementsByClassName('searchField')[0].value;
    const lang = 'en';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}&language=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    const gps = data.results[0].geometry;
    const latitude = gps.lat;
    const longitude = gps.lng;
    const location = data.results[0].formatted;
    const weather = await darksky(latitude, longitude);
    const APItimeZone = weather.timezone;
    const currentlyIcon = weather.currently.icon;
    const temp = weather.currently.temperature;
    const summary = weather.currently.summary;
    const apparentTemperature = weather.currently.apparentTemperature;
    const windSpeed = weather.currently.windSpeed;
    const humidity = weather.currently.humidity;
    const dayForecast1 = weather.daily.data[1];
    const dayForecast2 = weather.daily.data[2];
    const dayForecast3 = weather.daily.data[3];
    const avgTemp1 = (dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2;
    const avgTemp2 = (dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2;
    const avgTemp3 = (dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2;
    const celsium = localStorage.getItem('celsium');

    // initWeather(apparentTemperature, fullName, city, temp, celsium, summary, windSpeed, humidity);
    initForecast(celsium, dayForecast1, dayForecast2, dayForecast3, APItimeZone);
    initLocation(latitude, longitude);
    initMap(latitude, longitude);
    getBackground(city);
    canvasIcon(currentlyIcon, dayForecast1, dayForecast2, dayForecast3);
    tempUnit(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3);
   
    displayLocation(location);
    displayGPS(latitude, longitude);
    clearTimeout(MyClock);
    clock(APItimeZone);
 }

 