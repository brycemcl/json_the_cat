const { promisify } = require('util');
const request = promisify(require("request"));

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
    .then(({ body }) => {
      return JSON.parse(body);
    })
    .catch(
      () => {
        callback("Error: There has been a network error.", null);
        return false;
      }
    )
    .then((body) => {
      if (body) {
        callback(null, body[0].description);
      }
    })
    .catch(() => {
      callback("Error: Breed Not found.", null);
    });
};

module.exports = { fetchBreedDescription };