'use strict';

describe('Service: Usuarios', function () {

  // load the service's module
  beforeEach(module('angularProjectApp'));

  // instantiate service
  var Usuarios;
  beforeEach(inject(function (_Usuarios_) {
    Usuarios = _Usuarios_;
  }));

  it('should do something', function () {
    expect(!!Usuarios).toBe(true);
  });

});
