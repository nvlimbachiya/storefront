'use strict';

angular.module('myApp').directive('categoryPage', [
  function() {
    return {
      restrict: 'E',
      templateUrl: 'category_page/category_page.html',
      controller: 'CategoryPageController',
      controllerAs: '$ctrl'
    }
}])
.controller('CategoryPageController', [
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
