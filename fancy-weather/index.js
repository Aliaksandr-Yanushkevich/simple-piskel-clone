const createIconHTML = function (icon_name) { // create icon for button
    return `<i class="material-icons">${icon_name}</i>`;
};
function initHeader() {
    let control = document.createElement('section'); // create header
    control.classList.add('control');

    let buttBlock = document.createElement('div');
    buttBlock.className = 'buttBlock';
    control.appendChild(buttBlock);

    // const createIconHTML = function (icon_name) { // create icon for button
    //     return `<i class="material-icons">${icon_name}</i>`;
    // };

    const changeBackground = document.createElement('button'); // create button for random bg
    changeBackground.classList.add("button");
    changeBackground.classList.add("button-changeBackground");
    changeBackground.innerHTML = createIconHTML('autorenew');

    buttBlock.appendChild(changeBackground);

    const lang = document.createElement('select'); // create lang list
    const langArr = ['EN', 'BE', 'RUS'];
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
    searchField.setAttribute('type', 'text');
    searchField.classList.add('searchField');
    searchField.placeholder = "Search city or ZIP";
    const searchSubmit = document.createElement('input')
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.classList.add('searchSubmit');
    searchSubmit.value = "SEARCH";
    searchForm.appendChild(searchField);
    searchForm.appendChild(searchSubmit);
    control.appendChild(searchForm);

    document.body.appendChild(control);
}

function initWeatherToday() {
    let weatherToday = document.createElement('section'); // create WeatherToday block
    weatherToday.classList.add('WeatherToday');

    let location = document.createElement('h2');
    location.classList.add('location');
    location.classList.add('weatherToday-location');
    location.innerHTML = 'Minsk, Belarus';
    weatherToday.appendChild(location);

    let dateTime = document.createElement('div');
    location.classList.add('dateTime');
    location.classList.add('weatherToday-dateTime');

    let date = document.createElement('h3');
    date.classList.add('date');
    date.classList.add('weatherToday-date');
    date.innerHTML = 'Mon 28 October';
    dateTime.appendChild(date);

    let time = document.createElement('h3');
    time.classList.add('time');
    time.classList.add('weatherToday-time');
    time.innerHTML = '10:49';
    dateTime.appendChild(time);

    let temp = document.createElement('div');
    temp.classList.add('tempVal');
    temp.classList.add('weatherToday-tempVal');
    temp.innerHTML = '10';

    let weatherOptions = document.createElement('div');
    weatherOptions.classList.add('weatherOptions');
    weatherOptions.classList.add('weatherToday-weatherOptions');
    weatherToday.appendChild(weatherOptions);


    let weatherImage = document.createElement('div');
    weatherImage.classList.add('weatherImage');
    weatherImage.classList.add('weatherToday-weatherImage');
    weatherImage.innerHTML = createIconHTML('cloud_queue');
    weatherOptions.appendChild(weatherImage);

    let weatherChar = document.createElement('div');
    let weatherList = document.createElement('ul');
    let weatherArr = ['overcast', 'Feels like: 7°', 'Wind: 2 m/s', 'Humidity: 83%']
    for (let i = 0; i < weatherArr.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(weatherArr[i]));
        weatherList.appendChild(li);
    }
    weatherChar.appendChild(weatherList);
    weatherOptions.appendChild(weatherChar);
    weatherToday.appendChild(dateTime);
    weatherToday.appendChild(temp);
    document.body.appendChild(weatherToday);
}


initHeader();
initWeatherToday();



