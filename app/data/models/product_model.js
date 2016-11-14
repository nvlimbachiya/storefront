/*
 * ProductModel to make getters available for all the properties
 *
 * IMPROVEMENTS: Ideally in a large production system it would be great to create
 *  a PropertyModelMixin which would turn these properties into getters & setters
 */

'use strict';

angular.module('myApp').factory('ProductModel', [
  function() {
    function ProductModel(data) {
      data = data || {};
      data.quantityInCart = 0;

      /*
       * Get product title
       * @returns {String}
       */
      this.title = function() {
        return data.title || '';
      };

      /*
       * Get product brand
       * @returns {String}
       */
      this.brand = function() {
        return data.brand || '';
      };

      /*
       * Get product price
       * @returns {Number}
       */
      this.price = function() {
        return data.price || 0;
      };

      /*
       * Get product description
       * @returns {String}
       */
      this.description = function() {
        return data.description || '';
      };

      /*
       * Get product image name
       * @returns {String}
       */
      this.image = function() {
        return data.image || '';
      };

      /*
       * Get product's quantity in Cart
       * @returns {Number}
       */
      this.quantityInCart = function() {
        return data.quantityInCart;
      };

      /*
       * Update product's quantity in Cart
       * @param {Number} quantity
       * @returns {Number}
       */
      this.updateQuantityInCart = function(quantity) {
        if (typeof(quantity) === 'undefined') {
          return;
        } else if (!data.quantityInCart && quantity < 0) {
          return;
        } else {
          return data.quantityInCart += quantity;
        }
      };
    }

    return ProductModel;
  }
]);
