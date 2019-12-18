dayMonth = function() {
    const timeZone = sessionStorage.getItem('timeZone');
    time = new Date();
    let localeStandart = localStorage.getItem('lang');
    if (localeStandart === 'be') {
        const byWeekDay = {
            'Sun': 'Няд',
            'Mon': 'Пнд',
            'Tue': 'Аўт',
            'Wed': 'Сер',
            'Thu': 'Чцв',
            'Fri': 'Пят',
            'Sat': 'Суб',
        };

        const byMonth = {
            'January': 'Студзень',
            'February': 'Люты',
            'March': 'Сакавік',
            'April': 'Красавік',
            'May': 'Травень',
            'June': 'Чэрвень',
            'July': 'Ліпень',
            'August': 'Жнівень',
            'September': 'Верасень',
            'October': 'Кастрычнік',
            'November': 'Лістапад',
            'December': 'Снежань',
        }
        APIMonth = time.toLocaleString('en',{timeZone: timeZone,  month: 'long'});
        APIWeekDay = time.toLocaleString('en',{timeZone: timeZone, weekday: 'short'});
        console.log(byWeekDay[APIWeekDay]);
        console.log(byMonth[APIMonth]);
    document.getElementsByClassName('dayMonth')[0].innerHTML = `${byWeekDay[APIWeekDay]}, ${byMonth[APIMonth]}`;
} else {
    APIMonth = time.toLocaleString(localeStandart,{timeZone: timeZone,  month: 'long'});
    APIWeekDay = time.toLocaleString(localeStandart,{timeZone: timeZone, weekday: 'short'});
document.getElementsByClassName('dayMonth')[0].innerHTML = `${APIWeekDay}, ${APIMonth}`;
}
}