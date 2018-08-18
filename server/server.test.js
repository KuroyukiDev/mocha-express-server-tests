const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('#GET /', () => {
    it('should return Hello World! response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            status: 'Page ran successfully'
          });
        })
        .end(done);
    });
  });


  describe('#GET /users', () => {

      it('should return my user object', (done) => {
        request(app)
          .get('/users')
          .expect(200)
          .expect((res) => {
            expect(res.body.users).toInclude({
              name: 'Mikoto',
              age: 26
            });
          })
          .end(done);
      });

  });

});
