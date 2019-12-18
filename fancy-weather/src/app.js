import 'babel-polyfill';
import _ from 'lodash';
import './scss/style.scss';
import './scss/reset.scss';
import { getIpinfo } from './js/getIpinfo';
// import './js/createIconHTML';
import { initHeader } from './js/initHeader';
import { initWeather } from './js/initWeather';
import { clock } from './js/clock';
import { initForecast } from './js/initForecast';
import { initLocation } from './js/initLocation';
import { displayLocation } from './js/displayLocation';
import { getBackground } from './js/getBackground';
import { initMap } from './js/initMap';
import { darksky } from './js/darksky';
import { backgroundRefresh, tempUnit, changeLang } from './js/buttonHandler';
import { search } from './js/search';
import { getDayTime } from './js/getDayTime';
import { getSeason } from './js/getSeason';
import { getCityData } from './js/getCityData';
import { voiceRecognition } from './js/speechrecognition';
import { dayMonth } from './js/dayMonth';

async function renderPage() {
    initHeader();
    initWeather();
    initForecast();
    initLocation();
    await getIpinfo(); // send request and recieve gps from IP
    await getCityData(); // send gps coordinates and recieve city, country, date and time
    clock(); // display date, month, weekday and time
    dayMonth();
    const darkskyData = await darksky(); //  send request and recieve currently weather from gps
    const currentlytemp = darkskyData.currently.temperature;
    const apparentTemperature = darkskyData.currently.apparentTemperature;
    const currentlyIcon = darkskyData.currently.icon;
    const dayForecast1 = darkskyData.daily.data[1];
    const dayForecast2 = darkskyData.daily.data[2];
    const dayForecast3 = darkskyData.daily.data[3];
    displayLocation(); // display target gps coordinate
    initMap(); // init map
    const dayTime = getDayTime();
    const season = getSeason();
    getBackground(season, dayTime, currentlyIcon); // display bg
    backgroundRefresh(season, dayTime, currentlyIcon);
    tempUnit(currentlytemp, apparentTemperature, dayForecast1, dayForecast2, dayForecast3);
    search();
    changeLang();
    voiceRecognition();
}
renderPage();
