'use strict';

angular.module('angularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('deleteCategory', {
        url: '/deleteCategory',
        templateUrl: 'app/categories/deleteCategory/deleteCategory.html',
        controller: 'DeleteCategoryCtrl as vmDeleteCategory'
      });
  });
