'use strict';

describe('Service: Productos', function () {

  // load the service's module
  beforeEach(module('angularProjectApp'));

  // instantiate service
  var Productos;
  beforeEach(inject(function (_Productos_) {
    Productos = _Productos_;
  }));

  it('should do something', function () {
    expect(!!Productos).toBe(true);
  });

});
