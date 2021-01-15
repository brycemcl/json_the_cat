const { promisify } = require('util');
const request = promisify(require("request"));
const arg = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`)
  .then(({ body }) => {
    return JSON.parse(body);
  })
  .catch(
    () => {
      console.log("Error: There has been a network error.");
      return false;
    }
  )
  .then((body) => {
    if (body === false) {
      console.log("Error: Breed Not found.");
    } else {
      console.log(body[0].description);
    }
  })
  .catch(
    () => { }
  );