const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const command = process.argv[2];

if (command != undefined) {
    geocode(command, (error, { location, city } = {}) => {
        if (error) {
            return console.log(error);
        }
        console.log(location);
        forecast(city, (error, forecastData) => {
            if (error) {
                return console.log('Error', error); 
            }
            console.log(forecastData);
        });
    });
} else {
    console.log('Provide a valid input');
}
