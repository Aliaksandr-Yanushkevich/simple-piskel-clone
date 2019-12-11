forecast = async function(lat, long) {
    const key = '8c9668e919cbdfe759fda91c7498ad66';
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${long}` 
    let response = await fetch(url);
    let data = await response.json();
    return data
}