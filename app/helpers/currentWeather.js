import Request from 'superagent'

var base = 'http://api.openweathermap.org/data/2.5/'
var key = '&appid=2ad73f24131c7da06a5305c016f4eff6';
var cw = 'weather?q='

function currentWeather (e) {
  var url = `${base}weather?q=${e}${key}`;
  Request.get(url).then((response) => {
    console.log(response.body)
  });
}

module.exports = currentWeather;
