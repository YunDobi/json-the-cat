const request = require("request");
const name = process.argv[2];

const API = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

request(API,(err,response,body) => {
  if (!err) {
    const data = JSON.parse(body);
    if (name !== data[0].name) {
      console.log("No Breed Call: ", name);
    } else {
      console.log(data);
    }
  } else {
    console.log("error: ", err);
  }
});