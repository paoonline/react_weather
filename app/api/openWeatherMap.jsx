var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=74b21f53aa54a43c1a52774aaf06b12d&units=imperial';
//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=74b21f53aa54a43c1a52774aaf06b12d&units=imperial';

module.exports = {
    getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  
      return axios.get(requestUrl).then(function (res) {
        debugger;
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error("No Found city");
      });
    }
  }