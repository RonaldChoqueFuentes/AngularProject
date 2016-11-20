'use strict';

var app = require('../..');
import request from 'supertest';

describe('Product API:', function() {

  describe('GET /api/Products', function() {
    var Products;

    beforeEach(function(done) {
      request(app)
        .get('/api/Products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Products = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Products.should.be.instanceOf(Array);
    });

  });

});
