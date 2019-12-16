window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    let changeBackground = document.getElementsByClassName('button-changeBackground')[0];
    let searchField =  document.getElementsByClassName('searchField')[0];
    let celsius = document.getElementsByClassName('temp-celsium')[0];
    let fahrenheit = document.getElementsByClassName('temp-fahrenheit')[0];
    let lang = document.getElementsByClassName('language')[0]
    if (transcript.includes('градусы Цельсия') || transcript.includes('градусы Цэльсія') || transcript.includes('degrees celsius')) { // changing of temperature units
        celsius.click();
        searchField.value = '';
    } else if (transcript.includes('градусы Фаренгейта') || transcript.includes('градусы Фарэнгейта') || transcript.includes('degrees Fahrenheit')) {
        fahrenheit.click();
        searchField.value = '';

    } else if (transcript.includes('английский язык') || transcript.includes('английская мова') || transcript.includes('English language')) { //changing lang
        lang.selectedIndex = 0;
        translate();
        searchField.value = '';
    } else if (transcript.includes('белорусский язык') || transcript.includes('беларуская мова') || transcript.includes('Belarusian Language')) {
        lang.selectedIndex = 1;
        translate();
        searchField.value = '';
    } else if (transcript.includes('русский язык') || transcript.includes('русская мова') || transcript.includes('Russian Language')) {
        lang.selectedIndex = 2;
        translate();
        searchField.value = '';

    } else if (transcript.includes('Смени фон') || transcript.includes('Змяні фон') || transcript.includes('change background')) {
        changeBackground.click();
        searchField.value = '';
    }
     else {
        document.getElementsByClassName('searchField')[0].value = transcript;
    }
})
recognition.addEventListener('end', () => {
    document.getElementsByClassName('searchSubmit')[0].click();
})
voiceRecognition = function() {
    let myVoice = document.getElementsByClassName('voice')[0];
    myVoice.addEventListener('click', () => recognition.start());
}
