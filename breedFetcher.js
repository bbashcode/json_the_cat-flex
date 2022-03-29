const request = require('request');

let userInput = process.argv.slice(2);

// allow the user to specify the breed name using command-line arguments.
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput;

request((url), (error, response, body) => {

  // Handle request errors and print the error details to the screen.
  if (error) {
    console.log('Here is the error: ', error);
  }


  // use JSON.parse to convert the JSON string into an actual object.
  const data = JSON.parse(body);

  // Edge Case: Breed Not Found
  if (data.length === 0 || data[0] === 'undefined') {
    console.log(`Sorry, the requested breed: '${userInput}' cannot be found!`);
  } else { // access the first entry in the data array and print out the description for the user.
    console.log(`Breed Description: `, data[0].description);
    console.log(`Breed Details: `, data[0]);

  }

});