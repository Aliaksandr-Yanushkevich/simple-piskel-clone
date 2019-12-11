import 'babel-polyfill';
import _ from 'lodash';

import './scss/style.scss';

import './js/getIpinfo';
import './js/countryName';
import './js/createIconHTML';
import './js/initHeader';
import './js/initWeather';
import './js/initForecast';
import './js/initLocation';
import './js/getBackground';
import './js/initMap';
import './js/darksky'



async function renderPage(){
    const data = await getIpinfo();
    const city = data.city;
    const country = data.country;
    const fullName = await countryName(country);
    const latitude = data.loc.split(',')[0];
    const longitude = data.loc.split(',')[1];
    const weather = await darksky(latitude, longitude);
    const time = new Date(weather.currently.time * 1000);
    const temp = weather.currently.temperature;
    const summary = weather.currently.summary;
    const apparentTemperature = weather.currently.apparentTemperature;
    const windSpeed = weather.currently.windSpeed;
    const humidity = weather.currently.humidity;
    console.log(weather);
    let timeOptions = {timeZone: darksky.timezone, weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false};

    // console.log(time.toLocaleString('en', timeOptions))
    initHeader();
    initWeather(fullName, city, time, timeOptions, temp, summary, apparentTemperature, windSpeed, humidity);
    initForecast();
    initLocation(latitude, longitude);
    initMap(latitude, longitude);
    getBackground(city);
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Ваше текущее метоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
renderPage();
