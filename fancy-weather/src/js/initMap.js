// import 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.js'
initMap = function(lat, lng) {
    // let mapboxgl = require('./mapbox-gl')
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWtzYW5kci15YW51c2hrZXZpY2giLCJhIjoiY2s0MTk5NzJzMDAwMjNlbzloMDNwcmk0bSJ9.0aw8xpZR_huciqgDbvUgaA';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9 // starting zoom
})
map.addControl(new mapboxgl.NavigationControl());
}