'use strict';

var app = require('../..');
import request from 'supertest';

describe('Usuario API:', function() {

  describe('GET /api/Usuarios', function() {
    var Usuarios;

    beforeEach(function(done) {
      request(app)
        .get('/api/Usuarios')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Usuarios = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Usuarios.should.be.instanceOf(Array);
    });

  });

});
