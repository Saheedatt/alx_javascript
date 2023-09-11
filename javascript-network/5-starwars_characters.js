#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide a Movie ID as the first argument.');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);
    console.log(`Characters in "${movieData.title}":`);

    movieData.characters.forEach(characterUrl => {
      request.get(characterUrl, (characterError, characterResponse, characterBody) => {
        if (characterError) {
          console.error('Error:', characterError.message);
          process.exit(1);
        }

        if (characterResponse.statusCode !== 200) {
          console.error(`Error: Request failed with status code ${characterResponse.statusCode}`);
          process.exit(1);
        }

        const character = JSON.parse(characterBody);
        console.log(character.name);
      });
    });
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message);
    process.exit(1);
  }
});
