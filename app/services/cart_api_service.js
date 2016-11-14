/*
 * CartAPIService for Cart management
 */

'use strict';

angular.module('myApp').service('CartAPIService', [
  'CartListModel',
  function(CartListModel) {
    var onCartUpdateCallbacks = [];
    var cartListModel = new CartListModel();

    /*
     * Add Product to Cart and fire all the onCartUpdateCallbacks
     * @param {Object} product
     */
    var addProduct = function (product) {
      cartListModel.addProduct(product);
      onCartUpdateCallbacks.forEach(function(cb) {
        cb();
      });
    };

    /*
     * Register onCartUpdate callbacks
     * @param {Function} cb
     */
    var onCartUpdate = function(cb) {
      onCartUpdateCallbacks.push(cb);
    };

    /*
     * Get Products present in Cart
     * @returns {Array}
     */
    var getProductsInCart = function() {
      return cartListModel.getProductsInCart();
    };

    /*
     * Get total items in Cart
     * @returns {Number}
     */
    var getItemsTotal = function() {
      return cartListModel.getItemsTotal();
    };

    /*
     * Get price of total items in Cart
     * @returns {Number}
     */
    var getTotalPrice = function() {
      return cartListModel.getTotalPrice();
    };

    return {
      addProduct: addProduct,
      getProductsInCart: getProductsInCart,
      getItemsTotal: getItemsTotal,
      getTotalPrice: getTotalPrice,
      onCartUpdate: onCartUpdate
    }
  }
]);
