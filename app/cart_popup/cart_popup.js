/*
 * cartPopup directive to handle items in popup
 */

'use strict';

angular.module('myApp').directive('cartPopup', [
  function() {
    return {
      restrict: 'E',
      templateUrl: 'cart_popup/cart_popup.html',
      controller: 'CartPopupController',
      controllerAs: 'cartPopupCtrl'
    }
}])
.controller('CartPopupController', [
  'CartAPIService',
  function(CartAPIService) {
    var self = this;
    this.showPopup = false;
    this.productsInCart = CartAPIService.getProductsInCart();
    this.itemsTotal = CartAPIService.getItemsTotal();
    this.totalPrice = CartAPIService.getTotalPrice();

    /*
     * View toggler for cart details
     */
    this.toggleCartPopup = function() {
      this.showPopup = !this.showPopup;
    };

    /*
     * Registering callback that needs to fire everytime Cart is updated with a product
     */
    CartAPIService.onCartUpdate(function() {
      self.productsInCart = CartAPIService.getProductsInCart();
      self.itemsTotal = CartAPIService.getItemsTotal();
      self.totalPrice = CartAPIService.getTotalPrice();
    });
  }
]);
