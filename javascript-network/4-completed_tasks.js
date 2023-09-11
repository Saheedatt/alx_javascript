#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

const apiUrl = process.argv[2];

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
    const todos = JSON.parse(body);

    const completedTasksByUser = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message);
    process.exit(1);
  }
});
