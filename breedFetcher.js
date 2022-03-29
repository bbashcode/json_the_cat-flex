const request = require('request');

let userInput = process.argv.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput[0];

request((url), (error, response, body) => {

    if (error) {
        console.log(error);
        console.log({
            error
        });
    }
    console.log(response);
    console.log(body);
    console.log(`body: `, body);

    console.log(`type of body`, typeof body);

    console.log('--------------------------------------');
    const data = JSON.parse(body);
    console.log(`data`, data[0].description);
    console.log(`type of data`, typeof data);
});