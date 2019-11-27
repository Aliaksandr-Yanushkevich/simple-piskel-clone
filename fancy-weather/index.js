let control = document.createElement('section'); // create header
control.className = 'control';


const changeBackground = document.createElement('button'); // create button for random bg
changeBackground.classList.add("button");
control.appendChild(changeBackground);

const lang = document.createElement('select'); // create lang list
const langArr = ['EN', 'BE', 'RUS'];
lang.classList.add("language");

for (let i = 0; i < langArr.length; i++) {
    let option = document.createElement('option');
    option.value = langArr[i];
    option.text = langArr[i];
    lang.appendChild(option);
}
control.appendChild(lang);

const tempVal = ['C', 'F']; // create temperature radio button
for (let i = 0; i < tempVal.length; i++) {
    const temp = document.createElement('input');
    temp.setAttribute('type', 'radio');
    temp.setAttribute('name', 'temp');
    temp.value = tempVal[i];
    temp.text = tempVal[i];
    control.appendChild(temp);
}

const searchForm = document.createElement('form');
const searchField = document.createElement('input');
searchField.setAttribute('type', 'text');
const searchSubmit = document.createElement('input')
searchSubmit.setAttribute('type', 'submit');
searchForm.appendChild(searchField);
searchForm.appendChild(searchSubmit);
control.appendChild(searchForm);




document.body.appendChild(control); 

document.getElementsByClassName('control')[0].style.border = '1px solid #0000FF';
document.getElementsByClassName('control')[0].style.width = '100%';
document.getElementsByClassName('control')[0].style.height = '50px';


