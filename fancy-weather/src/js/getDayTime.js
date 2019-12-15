getDayTime = function() {
    const timeZone = sessionStorage.getItem('timeZone');
    let timesOfDay;
    time = new Date();
    APIHours = Number(time.toLocaleString('en', {timeZone: timeZone, hour: 'numeric', hour12: false}));
    if (APIHours === 0 || APIHours <= 6) {
        timesOfDay = 'night';
    }
    if (APIHours >= 7 && APIHours <= 11) {
        timesOfDay = 'morning';
    }
    if (APIHours >= 12 && APIHours <= 17) {
        timesOfDay = 'day';
    }
    if (APIHours >= 18 && APIHours <= 23) {
        timesOfDay = 'evening';
    }
    return timesOfDay;
}