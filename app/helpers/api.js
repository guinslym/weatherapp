import Request from 'superagent'

var base = 'http://api.openweathermap.org/data/2.5/'
var key = '&appid=2ad73f24131c7da06a5305c016f4eff6';
var forecast = 'forecast/daily?q='
var weather = 'weather?q='

function getCall (e) {
  return Request.get(e).then((response) => {
    return response.body
  });
}

function pullForecast (e) {
  var url = `${base}${forecast}${e}${key}&cnt=5`;
  return getCall(url);
}

function pullWeather (e) {
  var url = `${base}${weather}${e}${key}`;
  return getCall(url);
}

module.exports = {
  pullForecast: pullForecast,
  pullWeather: pullWeather
};
