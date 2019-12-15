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
    console.log(data);
    const gps = data.results[0].geometry;
    const latitude = gps.lat.toFixed(4);
    const longitude = gps.lng.toFixed(4);

    document.getElementsByClassName('latitude')[0].innerHTML = `latitude: ${latitude}`; // refresh gps coordinates
    document.getElementsByClassName('longitude')[0].innerHTML = `latitude: ${longitude}`;

    const searchLocation = data.results[0].formatted;
    const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village || data.results[0].components.county || data.results[0].components.state;
    const country = data.results[0].components.country;
    myLocation(city, country);// refresh location
      
    const searchDarkskyData = await darksky(latitude, longitude); // send new request to darksky 
    const searchAPItimeZone = searchDarkskyData.timezone;
    clearTimeout(MyClock); // remove prev clock and execute target clock from search
    clock(searchAPItimeZone);

    const searchCurrentlytemp = searchDarkskyData.currently.temperature;
    const searchCurrentlyIcon = searchDarkskyData.currently.icon;
    const searchCurrentlysummary = searchDarkskyData.currently.summary;
    const searchApparentTemperature = searchDarkskyData.currently.apparentTemperature;
    const searchWindSpeed = searchDarkskyData.currently.windSpeed;
    const searchHumidity = searchDarkskyData.currently.humidity;

    currentlyWeather(searchCurrentlytemp, searchCurrentlyIcon, searchCurrentlysummary, searchApparentTemperature, searchWindSpeed, searchHumidity) 

    const searchDayForecast1 = searchDarkskyData.daily.data[1];
    const searchDayForecast2 = searchDarkskyData.daily.data[2];
    const searchDayForecast3 = searchDarkskyData.daily.data[3];
    
    forecast(searchDayForecast1, searchDayForecast2, searchDayForecast3, searchAPItimeZone); // display 3 days forecast
    
    initMap(latitude, longitude);
    // getBackground(city);
 }

 