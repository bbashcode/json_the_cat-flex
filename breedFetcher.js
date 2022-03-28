const request = require("request");
const fs = require("fs");
const url = "https://www.google.com/";

request(url, (error, response, body)=>{
  console.log("error: ", error);
  console.log("response: ", response, "status code: ", response.statusCode);
  console.log("body: ", body);
})