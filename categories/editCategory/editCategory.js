'use strict';

angular.module('angularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editCategory', {
        url: '/editCategory',
        templateUrl: '../categories/editCategory/editCategory.html',
        controller: 'EditCategoryCtrl'
      });
  });
