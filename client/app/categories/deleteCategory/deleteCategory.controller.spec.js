'use strict';

describe('Controller: DeleteCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('angularProjectApp'));

  var DeleteCategoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteCategoryCtrl = $controller('DeleteCategoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
