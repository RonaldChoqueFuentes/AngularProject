'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ProductCtrlStub = {
  index: 'ProductCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var ProductIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Product.controller': ProductCtrlStub
});

describe('Product API Router:', function() {

  it('should return an express router instance', function() {
    ProductIndex.should.equal(routerStub);
  });

  describe('GET /api/Products', function() {

    it('should route to Product.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ProductCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
