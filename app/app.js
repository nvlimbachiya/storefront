'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'ngAnimate'])
.config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/category_page', {
        template: '<category-page></category-page>'
      })
      .otherwise({
        redirectTo: '/category_page'
      });
  }
]);
