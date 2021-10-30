const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=4043c0c9e064bcd81e85163e406bf381&query=texas&units=f`;

const request = http.request(url, (response) => {
    let data = '';
    response.on('data' , (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});
request.on('error', (error) => {
    console.log('error shows', error);
});

request.end();