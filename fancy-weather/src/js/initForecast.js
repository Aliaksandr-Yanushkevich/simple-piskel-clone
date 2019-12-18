initForecast = function () {
    let forecast = document.createElement('div');
    forecast.classList.add('forecast');
    document.getElementsByClassName('weatherWrapper')[0].appendChild(forecast);

    let tommorow = document.createElement('div'); // create tommorow forecast block
    tommorow.classList.add('day');
    tommorow.classList.add('tommorow');
    let tommorowTitle = document.createElement('h3');
    tommorowTitle.classList.add('tommorow-weekday');
    let tommorowTemp = document.createElement('div');
    tommorowTemp.classList.add('tommorowTemp');
    let tommorowImg = document.createElement('div');

    let canvas = document.createElement("CANVAS");
    canvas.id = "weatherTommorow";
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
    tommorow1Title.classList.add('tommorow1-weekday');
    let tommorow1Temp = document.createElement('div');
    tommorow1Temp.classList.add('tommorow1Temp');
    let tommorow1Img = document.createElement('div');
    
    let canvas1 = document.createElement("CANVAS");
    canvas1.id = "weatherTommorow1";
    canvas1.width = 64;
    canvas1.height = 64;
    tommorow1Img.appendChild(canvas1);

    tommorow1.appendChild(tommorow1Title);
    tommorow1.appendChild(tommorow1Temp);
    tommorow1.appendChild(tommorow1Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow1);

    let tommorow2 = document.createElement('div'); // create tommorow1 forecast block
    tommorow2.classList.add('day');
    tommorow2.classList.add('tommorow2');
    let tommorow2Title = document.createElement('h3');
    tommorow2Title.classList.add('tommorow2-weekday');
    let tommorow2Temp = document.createElement('div');
    tommorow2Temp.classList.add('tommorow2Temp');
    let tommorow2Img = document.createElement('div');

    let canvas2 = document.createElement("CANVAS");
    canvas2.id = "weatherTommorow2";
    canvas2.width = 64;
    canvas2.height = 64;
    tommorow2Img.appendChild(canvas2);

    tommorow2.appendChild(tommorow2Title);
    tommorow2.appendChild(tommorow2Temp);
    tommorow2.appendChild(tommorow2Img);
    document.getElementsByClassName('forecast')[0].appendChild(tommorow2);
}