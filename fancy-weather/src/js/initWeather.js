initWeather = function (fullname, city) {
    let main = document.createElement('main');
    let weatherWrapper = document.createElement('div');
    weatherWrapper.classList.add('weatherWrapper');
    let weather = document.createElement('section');
    weather.classList.add('weather');

    let location = document.createElement('h2');
    location.classList.add('location');
    location.classList.add('weather-location');
    location.insertAdjacentHTML('afterbegin', city);
    location.insertAdjacentHTML('beforeend', `, ${fullname}`);
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