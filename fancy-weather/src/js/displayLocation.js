displayLocation = function(latitude, longitude) {
    document.getElementsByClassName('latitude')[0].innerHTML = `Latitude: ${latitude}`;
    document.getElementsByClassName('longitude')[0].innerHTML = `Longitude: ${longitude}`;
}

