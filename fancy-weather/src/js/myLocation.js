myLocation = function (city, countryFullName) {
    document.getElementsByClassName('weather-location')[0].innerHTML = `${city}, ${countryFullName}`;
}