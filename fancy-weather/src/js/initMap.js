initMap = function(latitude, longitude) {
    document.getElementById('map').innerHTML = ''; // delete prev map 
    let mapboxgl = require('../../node_modules/mapbox-gl/dist/mapbox-gl')
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWtzYW5kci15YW51c2hrZXZpY2giLCJhIjoiY2s0MTk5NzJzMDAwMjNlbzloMDNwcmk0bSJ9.0aw8xpZR_huciqgDbvUgaA';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [longitude, latitude], // starting position [lng, lat]
    zoom: 9 // starting zoom
    })
    map.addControl(new mapboxgl.NavigationControl());
}