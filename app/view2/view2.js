'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: '$ctrl'
  });
}])

.controller('View2Ctrl', [
  'CartAPIService',
  function(CartAPIService) {
    var self = this;
    this.productsInCart = CartAPIService.getProductsInCart();

    CartAPIService.onCartUpdate(function() {
      self.productsInCart = CartAPIService.getProductsInCart();
    });
  }
]);
