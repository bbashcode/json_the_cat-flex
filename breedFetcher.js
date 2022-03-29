const request = require("request");
const url = "https://api.thecatapi.com/v1/images/search?q=Siberian";


request(url, (error, response, body)=>{

  if(error){
    console.log("error: ", error);
  }

  console.log("response: ", response, "status code: ", response.statusCode);
  // console.log("data: ", data[0], "type of data: ", typeof data);
  console.log("body: ", body);
  console.log("type of body: ", typeof body);
  const data = JSON.parse(body);
  console.log("data: ", data);
  console.log("type of data: ",typeof data);
  console.log("print the first entry in data: ", data[0]);
});