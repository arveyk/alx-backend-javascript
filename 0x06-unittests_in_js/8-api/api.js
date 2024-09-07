const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
