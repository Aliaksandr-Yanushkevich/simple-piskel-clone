displayLocation = function() {
    let latitude = sessionStorage.getItem('latitude');
    let longitude = sessionStorage.getItem('longitude');
    document.getElementsByClassName('latitude')[0].innerHTML = `Latitude: ${latitude}`;
    document.getElementsByClassName('longitude')[0].innerHTML = `Longitude: ${longitude}`;
}

