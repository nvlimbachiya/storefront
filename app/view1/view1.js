'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: '$ctrl'
  });
}])

.controller('View1Ctrl', [
  'ProductDataService',
  'CartAPIService',
  function(ProductDataService, CartAPIService) {
    var self = this;
    this.products = [];

    ProductDataService.getProducts().then(function(data) {
      self.products = data.products();
    });

    this.addToCart = function(product) {
      CartAPIService.addProduct(product);
    };
  }
]);
