/*
 * categoryPage directive to show products in that category
 */

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

    /*
     * Makes a fake API call to get collection of Products
     */
    ProductDataService.getProducts().then(function(data) {
      self.products = data.products();
    });

    /*
     * Add a product to Cart
     * @param {Object} product
     */
    this.addToCart = function(product) {
      CartAPIService.addProduct(product);
    };
  }
]);
