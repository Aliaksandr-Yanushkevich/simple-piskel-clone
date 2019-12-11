initLocation = function (latitude, longitude) { //create location block
    let locationWrapper = document.createElement('div');
    locationWrapper.classList.add('locationWrapper');

    let map = document.createElement('div');
    map.classList.add('map');
    map.id = 'map';

    let gps = document.createElement('div');
    gps.classList.add('gps');
    
    gps.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;

    locationWrapper.appendChild(map);
    locationWrapper.appendChild(gps);
    document.getElementsByTagName('main')[0].appendChild(locationWrapper);
}