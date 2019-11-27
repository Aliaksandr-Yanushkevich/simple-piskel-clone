function init() {
    let control = document.createElement('section'); // create header
    control.classList.add('control');

    let buttBlock = document.createElement('div');
    buttBlock.className = 'buttBlock';
    control.appendChild(buttBlock);

    const createIconHTML = function (icon_name) { // create icon for button
        return `<i class="material-icons">${icon_name}</i>`;
    };

    const changeBackground = document.createElement('button'); // create button for random bg
    changeBackground.classList.add("button");
    changeBackground.classList.add("button-changeBackground");
    changeBackground.innerHTML = createIconHTML('autorenew');
    
    buttBlock.appendChild(changeBackground);

    const lang = document.createElement('select'); // create lang list
    const langArr = ['EN', 'BE', 'RUS'];
    lang.classList.add("language");

    for (let i = 0; i < langArr.length; i++) {
        let option = document.createElement('option');
        option.value = langArr[i];
        option.text = langArr[i];
        lang.appendChild(option);
    }
    buttBlock.appendChild(lang);

    const tempVal = ['C', 'F']; // create temperature buttons

    const tempCels = document.createElement('button');
    tempCels.innerText = '℃';
    tempCels.classList.add('temp');
    buttBlock.appendChild(tempCels);

    const tempFar = document.createElement('button');
    tempFar.innerText = '℉';
    tempFar.classList.add('temp');
    buttBlock.appendChild(tempFar);


    const searchForm = document.createElement('form'); // create search form
    searchForm.classList.add('searchForm');
    const searchField = document.createElement('input');
    searchField.setAttribute('type', 'text');
    searchField.classList.add('searchField');
    searchField.placeholder = "Search city or ZIP";
    const searchSubmit = document.createElement('input')
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.classList.add('searchSubmit');
    searchSubmit.value = "SEARCH";
    searchForm.appendChild(searchField);
    searchForm.appendChild(searchSubmit);
    control.appendChild(searchForm);

    document.body.appendChild(control);

    // document.getElementsByClassName('control')[0].style.border = '1px solid #0000FF';
    // document.getElementsByClassName('control')[0].style.width = '100%';
    // document.getElementsByClassName('control')[0].style.height = '50px';
}

init();



