const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.use('/students', express.static(__dirname, { index: '3-read_file_async.js' }));
