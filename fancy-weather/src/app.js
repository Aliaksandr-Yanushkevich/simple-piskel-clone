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
import './js/speechrecognition';

async function renderPage(){
  initHeader();
  initWeather();
  initForecast();
  initLocation();
  await getIpinfo(); // send request and recieve gps from IP
  await getCityData(); // send gps coordinates and recieve city, country, date and time
  clock(); // display date, month, weekday and time
  const darkskyData = await darksky(); //  send request and recieve currently weather from gps
  const currentlytemp = darkskyData.currently.temperature;
  const currentlyIcon = darkskyData.currently.icon;   
  const dayForecast1 = darkskyData.daily.data[1];
  const dayForecast2 = darkskyData.daily.data[2];
  const dayForecast3 = darkskyData.daily.data[3];
  displayLocation() // display target gps coordinate 
  initMap(); // init map
  const dayTime = getDayTime();
  const season = getSeason();
  getBackground(season, dayTime, currentlyIcon); // display bg
  backgroundRefresh(season, dayTime, currentlyIcon);
  tempUnit(currentlytemp, dayForecast1, dayForecast2, dayForecast3);
  search();
  changeLang();
  voiceRecognition();
}
renderPage();


