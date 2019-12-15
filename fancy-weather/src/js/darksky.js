darksky = async function() {
    let latitude = sessionStorage.getItem('latitude');
    let longitude = sessionStorage.getItem('longitude');
    const lang = localStorage.getItem('lang').toLowerCase();
    const key = '8c9668e919cbdfe759fda91c7498ad66';
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si` 
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // sessionStorage.setItem('timeZone', data.timezone);
    return data
}