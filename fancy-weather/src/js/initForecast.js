initForecast = function (dayForecast1, dayForecast2, dayForecast3, timeOptionsShort) {
    const time1 = new Date(dayForecast1.time*1000);
    const time2 = new Date(dayForecast2.time*1000);
    const time3 = new Date(dayForecast3.time*1000);
    const day1 = time1.toLocaleString('en', timeOptionsShort);
    const day2 = time2.toLocaleString('en', timeOptionsShort);
    const day3 = time3.toLocaleString('en', timeOptionsShort);
    console.log(day1);
    let forecast = document.createElement('div');
    forecast.classList.add('forecast');
    document.getElementsByClassName('weatherWrapper')[0].appendChild(forecast);

    let tommorow = document.createElement('div'); // create tommorow forecast block
    tommorow.classList.add('day');
    let tommorowTitle = document.createElement('h3');
    tommorowTitle.innerHTML = `${day1}`;
    let tommorowTemp = document.createElement('div');
    tommorowTemp.innerHTML = '7°';
    let tommorowImg = document.createElement('div');
    tommorowImg.innerHTML = createIconHTML('cloud_queue');
    tommorow.appendChild(tommorowTitle);
    tommorow.appendChild(tommorowTemp);
    tommorow.appendChild(tommorowImg);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow);

    let tommorow1 = document.createElement('div'); // create tommorow1 forecast block
    tommorow1.classList.add('day');
    let tommorow1Title = document.createElement('h3');
    tommorow1Title.innerHTML = `${day2}`;
    let tommorow1Temp = document.createElement('div');
    tommorow1Temp.innerHTML = '6°';
    let tommorow1Img = document.createElement('div');
    tommorow1Img.innerHTML = createIconHTML('cloud_queue');
    tommorow1.appendChild(tommorow1Title);
    tommorow1.appendChild(tommorow1Temp);
    tommorow1.appendChild(tommorow1Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow1);

    let tommorow2 = document.createElement('div');
    tommorow2.classList.add('day');
    let tommorow2Title = document.createElement('h3');
    tommorow2Title.innerHTML = `${day3}`;
    let tommorow2Temp = document.createElement('div');
    tommorow2Temp.innerHTML = '3°';
    let tommorow2Img = document.createElement('div');
    tommorow2Img.innerHTML = createIconHTML('cloud_queue');
    tommorow2.appendChild(tommorow2Title);
    tommorow2.appendChild(tommorow2Temp);
    tommorow2.appendChild(tommorow2Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow2);
}