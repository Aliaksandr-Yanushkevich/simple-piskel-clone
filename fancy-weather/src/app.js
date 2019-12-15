import 'babel-polyfill';
import _ from 'lodash';

import './scss/style.scss';

import './js/getIpinfo';
import './js/createIconHTML';
import './js/initHeader';
import './js/initWeather';
import './js/clock';
import './js/initForecast';
import './js/initLocation';
import './js/displayLocation';
import './js/getBackground';
import './js/initMap';
import './js/darksky';
import './js/buttonHandler';
import './js/search';
import './js/getDayTime'
import'./js/getSeason';
import './js/getCityData';

async function renderPage(){
  initHeader();
  initWeather();
  initForecast();
  initLocation();
  getIpinfo(); // send request and recieve gps from IP
  getCityData(); // send gps coordinates and recieve city, country, date and time
  clock(); // display date, month, weekday and time
  const darkskyData = await darksky(); //  send request and recieve currently weather from gps
  console.log(darkskyData);
  const currentlyIcon = darkskyData.currently.icon;

    
  const dayForecast1 = darkskyData.daily.data[1];
  const dayForecast2 = darkskyData.daily.data[2];
  const dayForecast3 = darkskyData.daily.data[3];

  // forecast(dayForecast1, dayForecast2, dayForecast3); // display 3 days forecast


  displayLocation() // display target gps coordinate 
  initMap(); // init map
  const dayTime = getDayTime();
  const season = getSeason();
  // getBackground(season, dayTime, currentlyIcon); // display bg
  // backgroundRefresh(season, dayTime, currentlyIcon);
  // tempUnit(currentlytemp, dayForecast1, dayForecast2, dayForecast3);
  search();
  changeLang();
}
renderPage();


