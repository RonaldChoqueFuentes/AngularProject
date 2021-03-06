'use strict';

angular.module('angularProjectApp', [
  'angularProjectApp.constants',
  'ngCookies',
  'ngLodash',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngTable',
  'dialogs.main',
  'angular-momentjs',
  'cgBusy'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
