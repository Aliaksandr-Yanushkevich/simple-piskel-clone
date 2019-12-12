   canvasIcon = function(currentlyIcon, dayForecast1, dayForecast2, dayForecast3) {
       const Skycons = require('../../node_modules/skycons/skycons')(window); //  Если работаем с node (локальный сервер и т.п.) то передаем global, а если с браузером то глобальный объект window
      //Эта анонимная функция, вызванная с глобальным объектом, уже возвращает наш класс Skycons
        let icons = new Skycons({"color": "white"});
        icons.add("currentlyWeather", currentlyIcon)
        icons.add("icon", dayForecast1.icon);
        icons.add("icon1", dayForecast2.icon);
        icons.add("icon2", dayForecast3.icon);
        icons.play();
   }