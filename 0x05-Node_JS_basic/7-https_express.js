const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const path = process.argv.slice(2);
  (async () => {
    await countStudents(path[0]);
    response.send('')
  })();
});

app.listen(1245, () => {});

module.exports = app;
