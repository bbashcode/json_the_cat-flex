const request = require('request');


let apiParam = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = (breedName, callback) => {

  let endPoint = apiParam + breedName;

  request(endPoint, (error, response, body) => {

    const data = JSON.parse(body);

    if (error) {
      return callback(error, null);
    } else {
      if (data.length === 0 || data[0] === 'undefined') {
        return callback(null, 'Sorry, the requested cat cannot be found!');
      } else {
        return callback(null, data[0].description);
      }
    }
  });
};
//Export the function using module
module.exports = {fetchBreedDescription};