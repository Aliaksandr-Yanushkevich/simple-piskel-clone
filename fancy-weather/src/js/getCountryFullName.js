getCountryFullName = async function(country) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://country.io/names.json`); // get full name and avoid cors mode with https://cors-anywhere.herokuapp.com/
        const list = await response.json();
        console.log(list[country]);
        return list[country];
}