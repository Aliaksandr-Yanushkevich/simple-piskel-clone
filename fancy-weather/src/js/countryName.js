countryName = async function(x) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://country.io/names.json`); // get full name and avoid cors mode with https://cors-anywhere.herokuapp.com/
        const list = await response.json();
        return list[x]
}
