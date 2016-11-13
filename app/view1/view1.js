'use strict';

angular.module('myApp').directive('viewOne', [
  function() {
    return {
      restrict: 'E',
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      controllerAs: '$ctrl'
    }
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
