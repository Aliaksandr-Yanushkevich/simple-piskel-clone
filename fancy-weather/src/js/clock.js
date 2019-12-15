
clock = function() {
        const timeZone = sessionStorage.getItem('timeZone');
        time = new Date();
        let localeStandart = localStorage.getItem('lang').toLowerCase();
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
            APIWeekDay = time.toLocaleString(localeStandart,{timeZone: timeZone, weekday: 'short'});
            APIMonth = time.toLocaleString(localeStandart,{timeZone: timeZone,  month: 'long'});
            APIDay = time.toLocaleString(localeStandart,{timeZone: timeZone, day: 'numeric'});
            APIHour = time.toLocaleString(localeStandart,{timeZone: timeZone,  hour: 'numeric', hour12: false});
            APIMinute = time.toLocaleString(localeStandart,{timeZone: timeZone,  minute: 'numeric'});
            if (APIMinute < 10) {
                APIMinute = '0' + APIMinute;
            };
            document.getElementsByClassName('dateTime')[0].innerHTML = `${byWeekDay[APIWeekDay]} ${APIDay} ${byMonth[APIMonth]} ${APIHour}:${APIMinute}`;
        } else {
            APIWeekDay = time.toLocaleString(localeStandart,{timeZone: timeZone, weekday: 'short'});
            APIDay = time.toLocaleString(localeStandart,{timeZone: timeZone, day: 'numeric'});
            APIMonth = time.toLocaleString(localeStandart,{timeZone: timeZone,  month: 'long'});
            APIHour = time.toLocaleString(localeStandart,{timeZone: timeZone,  hour: 'numeric', hour12: false});
            APIMinute = time.toLocaleString(localeStandart,{timeZone: timeZone,  minute: 'numeric'});
    
            if (APIMinute < 10) {
                APIMinute = '0' + APIMinute;
            };
            document.getElementsByClassName('dateTime')[0].innerHTML = `${APIWeekDay} ${APIDay} ${APIMonth} ${APIHour}:${APIMinute}`;
        }
        MyClock = setTimeout(clock, 1000); // recursive function start https://www.youtube.com/watch?v=puxkpNbCh0w;
}