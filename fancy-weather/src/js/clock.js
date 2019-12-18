export function clock() {
    const timeZone = sessionStorage.getItem('timeZone');
    const time = new Date();
    const localeStandart = localStorage.getItem('lang');
    const APIDay = time.toLocaleString(localeStandart, { timeZone, day: 'numeric' });
    const APIHour = time.toLocaleString(localeStandart, { timeZone, hour: 'numeric', hour12: false });
    let APIMinute = time.toLocaleString(localeStandart, { timeZone, minute: 'numeric' });
    if (localeStandart === 'be') {
        const byWeekDay = {
            Sun: 'Няд',
            Mon: 'Пнд',
            Tue: 'Аўт',
            Wed: 'Сер',
            Thu: 'Чцв',
            Fri: 'Пят',
            Sat: 'Суб',
        };

        const byMonth = {
            January: 'Студзень',
            February: 'Люты',
            March: 'Сакавік',
            April: 'Красавік',
            May: 'Травень',
            June: 'Чэрвень',
            July: 'Ліпень',
            August: 'Жнівень',
            September: 'Верасень',
            October: 'Кастрычнік',
            November: 'Лістапад',
            December: 'Снежань',
        };


        if (APIMinute < 10) {
            APIMinute = `0${APIMinute}`;
        }

        document.getElementsByClassName('clock')[0].innerHTML = `${APIDay}, ${APIHour}:${APIMinute}`;
    } else {

        if (APIMinute < 10) {
            APIMinute = `0${APIMinute}`;
        }
        document.getElementsByClassName('clock')[0].innerHTML = `${APIDay}, ${APIHour}:${APIMinute}`;
    }
}

export function MyClock() { // recursive function start https://www.youtube.com/watch?v=puxkpNbCh0w;
    setTimeout(clock, 1000);
}
