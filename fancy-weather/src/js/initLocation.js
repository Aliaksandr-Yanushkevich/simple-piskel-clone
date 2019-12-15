initLocation = function () { //create location block
    let locationWrapper = document.createElement('div');
    locationWrapper.classList.add('locationWrapper');

    let map = document.createElement('div');
    map.classList.add('map');
    map.id = 'map';

    let gps = document.createElement('div');
    gps.classList.add('gps');
    let latitude = document.createElement('p');
    latitude.classList.add('latitude');
    let longitude = document.createElement('p');
    longitude.classList.add('longitude');
    gps.appendChild(latitude);
    gps.appendChild(longitude);

    locationWrapper.appendChild(map);
    locationWrapper.appendChild(gps);
    document.getElementsByTagName('main')[0].appendChild(locationWrapper);
}