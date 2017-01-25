const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', (req, res) => {
  res.send('Posts!');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
