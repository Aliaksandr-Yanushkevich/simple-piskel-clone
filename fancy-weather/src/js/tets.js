clock = function(APItimeZone) {
    const clockTimeZone = APItimeZone;
    function myTime() {
        time = new Date();
        APItime = time.toLocaleString('en',{timeZone: clockTimeZone, weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  second: 'numeric', hour12: false});
        APIWeekDay = time.toLocaleString('en',{timeZone: clockTimeZone, weekday: 'short'});
        APIDay = time.toLocaleString('en',{timeZone: clockTimeZone, day: 'numeric'});
        APIMonth = time.toLocaleString('en',{timeZone: clockTimeZone,  month: 'long'});
        APIHour = time.toLocaleString('en',{timeZone: clockTimeZone,  hour: 'numeric', hour12: false});
        APIMinute = time.toLocaleString('en',{timeZone: clockTimeZone,  minute: 'numeric'});
        // console.log(APIDay);
        // console.log(clockTimeZone);
        // h= time.getHours();
        // m=time.getMinutes();
        // s=time.getSeconds();
        // console.log(h + ':' + m + ':' + s);
        document.getElementsByClassName('dateTime')[0].innerHTML = `${APIWeekDay} ${APIDay} ${APIMonth} ${APIHour}:${APIMinute}`
        // dateTime.innerHTML = `${timeAPI.toLocaleString('en', timeOptions)}`;
        setTimeout(myTime, 1000)
    }
    myTime();    
}