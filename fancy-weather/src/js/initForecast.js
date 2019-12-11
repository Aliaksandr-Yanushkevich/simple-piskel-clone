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