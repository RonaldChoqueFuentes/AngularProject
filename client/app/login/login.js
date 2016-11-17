'use strict';

angular.module('angularProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
       .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      });
  });
