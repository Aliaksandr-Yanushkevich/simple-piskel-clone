initForecast = function (celsium, dayForecast1, dayForecast2, dayForecast3, timeOptionsShort) {
    const time1 = new Date(dayForecast1.time*1000);
    const time2 = new Date(dayForecast2.time*1000);
    const time3 = new Date(dayForecast3.time*1000);
    const day1 = time1.toLocaleString('en', timeOptionsShort);
    const day2 = time2.toLocaleString('en', timeOptionsShort);
    const day3 = time3.toLocaleString('en', timeOptionsShort);
    let avgTemp1 = (dayForecast1.temperatureHigh + dayForecast1.temperatureLow)/2;
    let avgTemp2 = (dayForecast2.temperatureHigh + dayForecast2.temperatureLow)/2;
    let avgTemp3 = (dayForecast3.temperatureHigh + dayForecast3.temperatureLow)/2;

    if (celsium === 'false') {
        avgTemp1 = (avgTemp1 * 9/5) + 32;
        avgTemp2 = (avgTemp2 * 9/5) + 32;
        avgTemp3 = (avgTemp3 * 9/5) + 32;
    }

    let forecast = document.createElement('div');
    forecast.classList.add('forecast');
    document.getElementsByClassName('weatherWrapper')[0].appendChild(forecast);

    let tommorow = document.createElement('div'); // create tommorow forecast block
    tommorow.classList.add('day');
    tommorow.classList.add('tommorow');
    let tommorowTitle = document.createElement('h3');
    tommorowTitle.innerHTML = `${day1}`;
    let tommorowTemp = document.createElement('div');
    tommorowTemp.classList.add('tommorowTemp');
    tommorowTemp.innerHTML = `${Math.round(avgTemp1)}°`;
    let tommorowImg = document.createElement('div');

    let canvas = document.createElement("CANVAS");
    canvas.id = "icon";
    canvas.width = 64;
    canvas.height = 64;
    tommorowImg.appendChild(canvas);


    tommorow.appendChild(tommorowTitle);
    tommorow.appendChild(tommorowTemp);
    tommorow.appendChild(tommorowImg);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow);

    let tommorow1 = document.createElement('div'); // create tommorow1 forecast block
    tommorow1.classList.add('day');
    tommorow1.classList.add('tommorow1');
    let tommorow1Title = document.createElement('h3');
    tommorow1Title.innerHTML = `${day2}`;
    let tommorow1Temp = document.createElement('div');
    tommorow1Temp.classList.add('tommorow1Temp');
    tommorow1Temp.innerHTML = `${Math.round(avgTemp2)}°`;
    let tommorow1Img = document.createElement('div');
    
    let canvas1 = document.createElement("CANVAS");
    canvas1.id = "icon1";
    canvas1.width = 64;
    canvas1.height = 64;
    tommorow1Img.appendChild(canvas1);

    tommorow1.appendChild(tommorow1Title);
    tommorow1.appendChild(tommorow1Temp);
    tommorow1.appendChild(tommorow1Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow1);

    let tommorow2 = document.createElement('div');
    tommorow2.classList.add('day');
    tommorow2.classList.add('tommorow2');
    let tommorow2Title = document.createElement('h3');
    tommorow2Title.innerHTML = `${day3}`;
    let tommorow2Temp = document.createElement('div');
    tommorow2Temp.classList.add('tommorow2Temp');
    tommorow2Temp.innerHTML = `${Math.round(avgTemp3)}°`;
    let tommorow2Img = document.createElement('div');

    let canvas2 = document.createElement("CANVAS");
    canvas2.id = "icon2";
    canvas2.width = 64;
    canvas2.height = 64;
    tommorow2Img.appendChild(canvas2);

    tommorow2.appendChild(tommorow2Title);
    tommorow2.appendChild(tommorow2Temp);
    tommorow2.appendChild(tommorow2Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow2);
}