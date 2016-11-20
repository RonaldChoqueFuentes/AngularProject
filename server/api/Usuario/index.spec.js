'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var UsuarioCtrlStub = {
  index: 'UsuarioCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var UsuarioIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Usuario.controller': UsuarioCtrlStub
});

describe('Usuario API Router:', function() {

  it('should return an express router instance', function() {
    UsuarioIndex.should.equal(routerStub);
  });

  describe('GET /api/Usuarios', function() {

    it('should route to Usuario.controller.index', function() {
      routerStub.get
        .withArgs('/', 'UsuarioCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
