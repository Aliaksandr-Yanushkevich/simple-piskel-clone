const ipInfo = require("ipinfo");
const ipInfoToken = '5a82c3c01a87ab';
createIconHTML = function (icon_name) { // create icon for button
    return `<i class="material-icons ${icon_name}">${icon_name}</i>`;
};
initHeader = function () {
    let mainWrapper = document.createElement('div');
    mainWrapper.classList.add('wrapper');
    let copyright = document.createElement('div');
    copyright.classList.add('copyright');
    let developer = document.createElement('h1');
    developer.innerHTML = 'Fancy-Weather. Created by Aliaksandr Yanushkevich RS Schooll 2019Q3';
    let header = document.createElement('header');// create header
    let control = document.createElement('section');
    control.classList.add('control');

    let buttBlock = document.createElement('div');
    buttBlock.className = 'buttBlock';
    control.appendChild(buttBlock);

    const changeBackground = document.createElement('button'); // create button for random bg
    changeBackground.classList.add("button");
    changeBackground.classList.add("button-changeBackground");
    changeBackground.innerHTML = createIconHTML('autorenew');

    buttBlock.appendChild(changeBackground);

    const lang = document.createElement('select'); // create lang list
    const langArr = ['EN', 'BE', 'RU'];
    lang.classList.add("language");

    for (let i = 0; i < langArr.length; i++) {
        let option = document.createElement('option');
        option.value = langArr[i];
        option.text = langArr[i];
        lang.appendChild(option);
    }
    buttBlock.appendChild(lang);

    const tempCels = document.createElement('button'); // create temperature buttons
    tempCels.innerText = '℃';
    tempCels.classList.add('temp');
    buttBlock.appendChild(tempCels);

    const tempFar = document.createElement('button');
    tempFar.innerText = '℉';
    tempFar.classList.add('temp');
    buttBlock.appendChild(tempFar);

    const searchForm = document.createElement('form'); // create search form
    searchForm.classList.add('searchForm');
    const searchField = document.createElement('input');
    searchField.setAttribute('type', 'search');
    searchField.classList.add('searchField');
    searchField.placeholder = "Search city or ZIP";
    const searchSubmit = document.createElement('button');
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.classList.add('searchSubmit');
    searchSubmit.innerHTML = createIconHTML('search');
    searchForm.appendChild(searchField);
    searchForm.appendChild(searchSubmit);
    control.appendChild(searchForm);
    header.appendChild(control);
    copyright.appendChild(developer);
    mainWrapper.appendChild(copyright);
    mainWrapper.appendChild(header);
    document.body.appendChild(mainWrapper)
}

initWeather = function () {
    let main = document.createElement('main');
    let weatherWrapper = document.createElement('div');
    weatherWrapper.classList.add('weatherWrapper');
    let weather = document.createElement('section');
    weather.classList.add('weather');

    let location = document.createElement('h2');
    location.classList.add('location');
    location.classList.add('weather-location');
    let locationData = sessionStorage.getItem('location');
    console.log(locationData.city);
    location.insertAdjacentHTML('afterbegin', locationData.city);
        
    ipInfo('country', ipInfoToken, (err,Loc) => { // send request on ipinfo and extract country
        if (err) { throw err; };
            fetch(`https://cors-anywhere.herokuapp.com/http://country.io/names.json`) // get full name and avoid cors mode with https://cors-anywhere.herokuapp.com/
            .then((data) => data.json())
            .then((val) => {
                location.insertAdjacentHTML('beforeend', `${val[Loc.trim()]}`);
            })
    })
    
    weather.appendChild(location);

    let dateTime = document.createElement('h3');
    dateTime.classList.add('dateTime');
    dateTime.innerHTML = 'Mon 28 October 10:49';
    weather.appendChild(dateTime);

    let weatherProp = document.createElement('div');
    weatherProp.classList.add('weatherProp');

    let weatherPropTemp = document.createElement('div');
    weatherPropTemp.classList.add('weatherPropTemp');
    weatherPropTemp.innerHTML = '10';
    weatherProp.appendChild(weatherPropTemp);

    let weatherPropDetails = document.createElement('div');
    weatherPropDetails.classList.add('weatherPropDetails');
    weatherProp.appendChild(weatherPropDetails);

    let weatherPropDetailsImage = document.createElement('div');
    weatherPropDetailsImage.classList.add('weatherPropDetailsImage');
    weatherPropDetailsImage.innerHTML = createIconHTML('cloud_queue');
    weatherPropDetails.appendChild(weatherPropDetailsImage);

    let weatherList = document.createElement('ul');
    weatherList.classList.add('weatherdescription');
    let weatherArr = ['overcast', 'Feels like: 7°', 'Wind: 2 m/s', 'Humidity: 83%']
    for (let i = 0; i < weatherArr.length; i++) {
        let li = document.createElement("li");
        li.classList.add('li-item');
        li.appendChild(document.createTextNode(weatherArr[i]));
        weatherList.appendChild(li);
    }
    weather.appendChild(dateTime);
    weather.appendChild(weatherProp);
    weatherPropDetails.appendChild(weatherList);
    weatherWrapper.appendChild(weather);
    main.appendChild(weatherWrapper);
    document.getElementsByClassName('wrapper')[0].appendChild(main);
}

initForecast = function () {
    let forecast = document.createElement('div');
    forecast.classList.add('forecast');
    document.getElementsByClassName('weatherWrapper')[0].appendChild(forecast);

    let today = document.createElement('div'); // create today forecast block
    today.classList.add('day');
    let todayTitle = document.createElement('h3');
    todayTitle.innerHTML = 'Tuesday';
    let todayTemp = document.createElement('div');
    todayTemp.innerHTML = '7°';
    let todayImg = document.createElement('div');
    todayImg.innerHTML = createIconHTML('cloud_queue');
    today.appendChild(todayTitle);
    today.appendChild(todayTemp);
    today.appendChild(todayImg);
    document.getElementsByClassName('forecast')[0].appendChild(today);

    let tommorow = document.createElement('div'); // create tommorow forecast block
    tommorow.classList.add('day');
    let tommorowTitle = document.createElement('h3');
    tommorowTitle.innerHTML = 'Wednesday';
    let tommorowTemp = document.createElement('div');
    tommorowTemp.innerHTML = '6°';
    let tommorowImg = document.createElement('div');
    tommorowImg.innerHTML = createIconHTML('cloud_queue');
    tommorow.appendChild(tommorowTitle);
    tommorow.appendChild(tommorowTemp);
    tommorow.appendChild(tommorowImg);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow);

    let dayAfterTomorrow = document.createElement('div');
    dayAfterTomorrow.classList.add('day');
    let dayAfterTomorrowTitle = document.createElement('h3');
    dayAfterTomorrowTitle.innerHTML = 'Thursday';
    let dayAfterTomorrowTemp = document.createElement('div');
    dayAfterTomorrowTemp.innerHTML = '3°';
    let dayAfterTomorrowImg = document.createElement('div');
    dayAfterTomorrowImg.innerHTML = createIconHTML('cloud_queue');
    dayAfterTomorrow.appendChild(dayAfterTomorrowTitle);
    dayAfterTomorrow.appendChild(dayAfterTomorrowTemp);
    dayAfterTomorrow.appendChild(dayAfterTomorrowImg);
    document.getElementsByClassName('forecast')[0].appendChild(dayAfterTomorrow);
}

initLocation = function () { //create location block
    let locationWrapper = document.createElement('div');
    locationWrapper.classList.add('locationWrapper');

    let map = document.createElement('div');
    map.classList.add('map');

    let gps = document.createElement('div');
    gps.classList.add('gps');
    
   ipInfo('loc', ipInfoToken, (err,Loc) => { // send request on ipinfo and extract location
            if (err) { throw err; };
           gps.innerHTML = `Latitude: ${Loc.split(",")[0]} <br> Longitude: ${Loc.split(",")[1]}`;
        })

    locationWrapper.appendChild(map);
    locationWrapper.appendChild(gps);
    document.getElementsByTagName('main')[0].appendChild(locationWrapper);
}

getBackground = function () {
    const myAccessKey = 'afffcf1ba9d09bbf9c8e8cd906017aa648eebfb7c897450305d5060f57c89497'; // developer api key
    ipInfo('city', ipInfoToken, (err,Loc) => { // send request on ipinfo and extract location
        if (err) { throw err; };
        const url = `https://api.unsplash.com/photos/random?query=${Loc}&client_id=${myAccessKey}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            const backgroundImage = new Image();
            backgroundImage.crossOrigin = 'Anonymous';
            backgroundImage.src = data.urls.regular;
            backgroundImage.onload = function () {
                document.getElementsByClassName('wrapper')[0].style.background = `#f3f3f3 url(${backgroundImage.src}) no-repeat`;
                document.getElementsByClassName('wrapper')[0].style.backgroundSize = 'cover';
            }
        })
    })
    
}
getIpinfo = function() {
    const ipInfoToken = '5a82c3c01a87ab';
    const url = `https://ipinfo.io/json?token=${ipInfoToken}`
    fetch(url)
        .then((response) => response.json())
        .then((toString) => JSON.stringify(toString))
        .then((data) => sessionStorage.setItem('location', data))
}
async function myOrder() {
   const data = await getLocation();
//    console.log(data)
    // initHeader();
    // initWeather();
    // initForecast();
    // initLocation();
    // getBackground();
}    
// myOrder();
// getLocation();
// initHeader();
// initWeather();
// initForecast();
// initLocation();
// getBackground();
// export { initHeader, initWeather, initForecast, initLocation, getBackground };



