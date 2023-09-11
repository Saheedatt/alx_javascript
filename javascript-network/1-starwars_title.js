#!/usr/bin/node
const axios = require('axios');

if (process.argv.length < 3) {
    console.error('Please provide a movie ID as the first argument.');
    process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

axios.get(apiUrl)
  .then((response) => {
    const movieData = response.data;
    console.log(movieData.title);
})
  .catch((error) => {
    if (error.response) {
      console.error(`Error: Request failed with status code ${error.response.status}`);
    } else {
      console.error('Error:', error.message);
    }
    process.exit(1);
});
