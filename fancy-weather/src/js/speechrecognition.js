window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.addEventListener('result', e => {
    // console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    console.log(transcript)
    document.getElementsByClassName('searchField')[0].value = transcript;
})
recognition.addEventListener('end', () => {
    document.getElementsByClassName('searchSubmit')[0].click();
    recognition.start();
})
recognition.start();