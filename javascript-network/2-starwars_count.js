#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

function getMovies (url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error(`Error: Request failed with status code ${response.statusCode}`);
      process.exit(1);
    }

    try {
      const filmData = JSON.parse(body);
      const moviesWithWedgeAntilles = filmData.results.filter(movie => {
        return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
      });

      if (filmData.next) {
        getMovies(filmData.next);
      } else {
        console.log(moviesWithWedgeAntilles.length);
      }
    } catch (parseError) {
      console.error('Error parsing API response:', parseError.message);
      process.exit(1);
    }
  });
}

getMovies(apiUrl);
