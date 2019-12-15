getBackground = async function (season, dayTime, currentlyIcon) {
    const myAccessKey = 'afffcf1ba9d09bbf9c8e8cd906017aa648eebfb7c897450305d5060f57c89497'; // developer api key
    const url = `https://api.unsplash.com/photos/random?query=${season},${dayTime},${currentlyIcon}&client_id=${myAccessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const backgroundImage = new Image();
    backgroundImage.crossOrigin = 'Anonymous';
    backgroundImage.src = data.urls.regular;
    backgroundImage.onload = function () {
        document.getElementsByClassName('wrapper')[0].style.background = `#f3f3f3 url(${backgroundImage.src}) no-repeat`;
        document.getElementsByClassName('wrapper')[0].style.backgroundSize = 'cover';    
    }      
}