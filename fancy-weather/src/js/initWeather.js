initWeather = function () {
    if (localStorage.getItem('celsium') === null) {
        localStorage.setItem('celsium', true);
    }

    let main = document.createElement('main');
    let weatherWrapper = document.createElement('div');
    weatherWrapper.classList.add('weatherWrapper');
    let weather = document.createElement('section');
    weather.classList.add('weather');

    let location = document.createElement('h2');
    location.classList.add('location');
    location.classList.add('weather-location');
    weather.appendChild(location);

    let dateTime = document.createElement('h3');
    dateTime.classList.add('dateTime');
    weather.appendChild(dateTime);

    let weatherProp = document.createElement('div');
    weatherProp.classList.add('weatherProp');

    let weatherPropTemp = document.createElement('div');
    weatherPropTemp.classList.add('weatherPropTemp');
    weatherProp.appendChild(weatherPropTemp);

    let weatherPropDetails = document.createElement('div');
    weatherPropDetails.classList.add('weatherPropDetails');
    weatherProp.appendChild(weatherPropDetails);

    let weatherPropDetailsImage = document.createElement('div');
    weatherPropDetailsImage.classList.add('weatherPropDetailsImage');

    let canvas = document.createElement("CANVAS");
    canvas.id = "currentlyWeather";
    canvas.width = 64;
    canvas.height = 64;
    weatherPropDetailsImage.appendChild(canvas);

    weatherPropDetails.appendChild(weatherPropDetailsImage);

    let weatherList = document.createElement('ul');
    weatherList.classList.add('weatherdescription');
    for (let i = 0; i < 4; i++) {
            let li = document.createElement("li");
            li.classList.add('li-item');
            weatherList.appendChild(li);
        }       
    
    weather.appendChild(dateTime);
    weather.appendChild(weatherProp);
    weatherPropDetails.appendChild(weatherList);
    weatherWrapper.appendChild(weather);
    main.appendChild(weatherWrapper);
    document.getElementsByClassName('wrapper')[0].appendChild(main);
}