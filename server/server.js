const express = require('express');

var app = express();

app.get('/', (req, res) => {
  console.log('Accessed: /');
  res.status(200).send({
    status: 'Page ran successfully',
    name: 'To-do App v1.0'
  });
});

app.get('/users', (req, res) => {
  console.log('Accessed: /users');
  res.status(200).send({
    users: [
      {
        name: 'Mikoto',
        age: 26
      },
      {
        name: 'Ayumi',
        age: 26
      },
      {
        name: 'Akatsuki',
        age: 5
      },
      {
        name: 'Izumi',
        age: 5
      },
      {
        name: 'Mizuki',
        age: 1
      }
    ]
  });
});

app.listen(3000, () => {
  console.log(`Server Listening on PORT 3000`);
});

module.exports.app = app;
