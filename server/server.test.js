const request = require('supertest');

var app = require('./server').app;

it('should return Hello World! response', (done) => {
  request(app)
    .get('/')
    .expect('Hello World!')
    .end(done);
});
