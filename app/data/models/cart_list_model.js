/*
 * CartListModel contains a collection of ProductModel that are present in a Cart
 */

'use strict';

angular.module('myApp').factory('CartListModel', [
  function() {
    function CartListModel() {
      var cartList = [];
      var ADD_PRODUCT = 1;
      var REMOVE_PRODUCT = -1;

      /*
       * Private method to check if a product already exists in the cart or not
       * @param {Object} product
       * @returns {Boolean}
       */
      var isProductPresentInCart = function(product) {
        var filteredProduct = cartList.filter(function(prod) {
          return prod.title() === product.title();
        });

        return !!filteredProduct.length;
      };

      /*
       * Get list of ProductModel in Cart
       * @returns {Array}
       */
      this.getProductsInCart = function() {
        return cartList;
      };

      /*
       * Add a product to Cart
       * @param {Object} product
       */
      this.addProduct = function(product) {
        if (isProductPresentInCart(product)) {
          product.updateQuantityInCart(ADD_PRODUCT);
        } else {
          product.updateQuantityInCart(ADD_PRODUCT);
          cartList.push(product);
        }
      };

      /*
       * Remove a product from Cart
       * @param {Object} product
       */
      this.removeProduct = function(product) {
        if (isProductPresentInCart(product)) {
          product.updateQuantityInCart(REMOVE_PRODUCT);
        }
      };

      /*
       * Get total number of items in Cart
       * @returns {Number}
       */
      this.getItemsTotal = function() {
        var total = 0;
        cartList.forEach(function(product) {
          total += product.quantityInCart();
        });

        return total;
      };

      /*
       * Get sum of prices of all the products in Cart
       * @returns {Number}
       */
      this.getTotalPrice = function() {
        var total = 0;
        cartList.forEach(function(product) {
          total += (product.price() * product.quantityInCart());
        });

        return total;
      };

    }

    return CartListModel;
  }
]);
