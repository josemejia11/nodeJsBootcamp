const fs = require('fs');
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday'
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);
// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
console.log(dataJson);
const data = JSON.parse(dataJson);

data.name = 'Jose';
data.age = 23;
console.log(data);
const dataString = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataString);

