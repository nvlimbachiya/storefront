'use strict';

angular.module('myApp').directive('viewTwo', [
  function() {
    return {
      restrict: 'E',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: '$ctrl2'
    }
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
