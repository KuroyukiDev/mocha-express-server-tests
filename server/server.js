const express = require('express');

var app = express();

app.get('/', (req, res) => {
  console.log('Accessed: /');
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log(`Server Listening on PORT 3000`);
});
module.exports.app = app;
