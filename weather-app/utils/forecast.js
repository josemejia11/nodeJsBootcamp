const request = require("request");

const forecast = (location, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4043c0c9e064bcd81e85163e406bf381&query=${encodeURIComponent(location)}&units=f`;
    request({ url, json: true}, ( error, { body } ) => {
        if (error) {
            callback('unable to connecto to the api', undefined);
        } else if (body.error) {
            console.log(body.error.info);
        } else {
            console.log(body.current.weather_descriptions[0] + ' it is currently ' + body.current.temperature 
        + ' degrees and it feels like ' + body.current.feelslike
        + ' degrees out. ');
        }
    });
}

module.exports = forecast;