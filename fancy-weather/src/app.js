import 'babel-polyfill';
import _ from 'lodash';

import './scss/style.scss';

import './js/getIpinfo';
import './js/createIconHTML';
import './js/initHeader';
import './js/initWeather';
import './js/myLocation';
import './js/clock';
import './js/currentlyWeather';
import './js/initForecast';
import './js/getCountryFullName';
import './js/forecast';
import './js/initLocation';
import './js/displayLocation';
import './js/getBackground';
import './js/initMap';
import './js/darksky';
import './js/buttonHandler';
import './js/search';
import './js/getDayTime'
import'./js/getSeason'

async function renderPage(){
  initHeader();
  initWeather();
  initForecast();
  initLocation();
  const data = await getIpinfo(); // send request and recieve gps from IP
  const city = data.city;
  const country = data.country;
  const countryFullName = await getCountryFullName(country); // transform short coontry name to full

  myLocation(city, countryFullName); // display city and full country name

  const latitude = data.loc.split(',')[0];
  const longitude = data.loc.split(',')[1];
  const darkskyData = await darksky(latitude, longitude); //  send request and recieve currently weather from gps
  const APItimeZone = darkskyData.timezone;

  clock(APItimeZone); // display date, month, weekday and time
   
  const currentlytemp = darkskyData.currently.temperature;
  const currentlyIcon = darkskyData.currently.icon;
  const currentlysummary = darkskyData.currently.summary;
  const apparentTemperature = darkskyData.currently.apparentTemperature;
  const windSpeed = darkskyData.currently.windSpeed;
  const humidity = darkskyData.currently.humidity;

  currentlyWeather(currentlytemp, currentlyIcon, currentlysummary, apparentTemperature, windSpeed, humidity); // display currently weather
    
  const dayForecast1 = darkskyData.daily.data[1];
  const dayForecast2 = darkskyData.daily.data[2];
  const dayForecast3 = darkskyData.daily.data[3];

  forecast(dayForecast1, dayForecast2, dayForecast3, APItimeZone); // display 3 days forecast


  displayLocation(latitude, longitude) // display target gps coordinate 
  initMap(latitude, longitude); // init map
  const dayTime = getDayTime(APItimeZone);
  const season = getSeason(APItimeZone);
  getBackground(season, dayTime, currentlyIcon); // display bg
  backgroundRefresh(season, dayTime, currentlyIcon);
  tempUnit(currentlytemp, dayForecast1, dayForecast2, dayForecast3);
  search();
  changeLang();
}
renderPage();


