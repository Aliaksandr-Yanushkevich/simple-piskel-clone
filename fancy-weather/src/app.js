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



async function renderPage(){
    const data = await getIpinfo();
    const city = data.city;
    const country = data.country;
    const fullName = await countryName(country);
    const latitude = data.loc.split(',')[0];
    const longitude = data.loc.split(',')[1];
    initHeader();
    initWeather(fullName, city);
    initForecast();
    initLocation(latitude, longitude);
    getBackground(city);   
}
renderPage();
