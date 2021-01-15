const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});