const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const API = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(API,(err,response,body) => {
    if (!err) {
      const data = JSON.parse(body);
      if (body.length <= 2 || breedName !== data[0].name) {
        callback(breedName);
      } else {
        callback(null,data[0].description);
      }
    } else {
      callback(err);
    }
  });
};
module.exports = {fetchBreedDescription};