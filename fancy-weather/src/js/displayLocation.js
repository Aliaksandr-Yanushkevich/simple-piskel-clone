displayLocation = function() {
    const latitude = Number(sessionStorage.getItem('latitude'));
    const longitude = Number(sessionStorage.getItem('longitude'));
    const latitudeDegree = Math.trunc(latitude);
    const longitudeDegree = Math.trunc(longitude);
    const latitudeMinutes = Math.trunc((latitude - latitudeDegree)*60);
    const longitudeMinutes = Math.trunc((longitude - longitudeDegree)*60);
    let latitudeSeconds = Math.round(((latitude - latitudeDegree)*60-latitudeMinutes)*60);
    let longitudeSeconds = Math.round(((longitude - longitudeDegree)*60-longitudeMinutes)*60);
    if (latitudeSeconds < 10) {
        latitudeSeconds = `0${latitudeSeconds}`
    }
    if (longitudeSeconds < 10) {
        longitudeSeconds = `0${longitudeSeconds}`
    }
    if (localStorage.getItem('lang')==='en'){
        document.getElementsByClassName('latitude')[0].innerHTML = `Latitude: ${latitudeDegree}°${latitudeMinutes}'${latitudeSeconds}"`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Longitude: ${longitudeDegree}°${longitudeMinutes}'${longitudeSeconds}"`;
    }
    if (localStorage.getItem('lang')==='ru'){
        document.getElementsByClassName('latitude')[0].innerHTML = `Широта: ${latitudeDegree}°${latitudeMinutes}'${latitudeSeconds}"`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Долгота: ${longitudeDegree}°${longitudeMinutes}'${longitudeSeconds}"`;
    }
    if (localStorage.getItem('lang')==='be'){
        document.getElementsByClassName('latitude')[0].innerHTML = `Шырата: ${latitudeDegree}°${latitudeMinutes}'${latitudeSeconds}"`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Даўгата: ${longitudeDegree}°${longitudeMinutes}'${longitudeSeconds}"`;
    }
   
}

