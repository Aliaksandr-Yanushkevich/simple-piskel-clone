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
import './js/darksky';
import './js/canvasIcon';
import './js/buttonHandler';
// import './js/time';
import './js/tets'


async function renderPage(){
    const data = await getIpinfo();
    const city = data.city;
    const country = data.country;
    const fullName = await countryName(country);
    const latitude = data.loc.split(',')[0];
    const longitude = data.loc.split(',')[1];
    const weather = await darksky(latitude, longitude);
   
    const timeAPI = new Date(weather.currently.time * 1000);
    const APItimeZone = weather.timezone
    console.log(APItimeZone);
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
    let timeOptions = {timeZone: weather.timezone, weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false};
    let timeOptionsShort = {timeZone: weather.timezone, weekday: "long"};
    // console.log( weather);
    // console.log(dayForecast1.time)
    // console.log(dayForecast1);
    // console.log(Date(dayForecast3.time))
    initHeader();
    const celsium = localStorage.getItem('celsium');
    // console.log(unit);
    initWeather(apparentTemperature, fullName, city, timeAPI, timeOptions, temp, celsium, summary, windSpeed, humidity);
    initForecast(celsium, dayForecast1, dayForecast2, dayForecast3, timeOptionsShort);
    initLocation(latitude, longitude);
    initMap(latitude, longitude);
    getBackground(city);
    canvasIcon(currentlyIcon, dayForecast1, dayForecast2, dayForecast3);
    imgRefresh(city);
    tempUnit(apparentTemperature, temp, avgTemp1, avgTemp2, avgTemp3);
   
  clock(APItimeZone);
  
}


  
renderPage();
// clock(time);

