angular.module('myApp').factory('ProductModel', [
  function() {
    function ProductModel(data) {
      data = data || {};
      data.quantityInCart = 0;

      this.title = function() {
        return data.title || '';
      };

      this.brand = function() {
        return data.brand || '';
      };

      this.price = function() {
        return data.price || 0;
      };

      this.description = function() {
        return data.description || '';
      };

      this.image = function() {
        return data.image || '';
      };

      this.quantityInCart = function() {
        return data.quantityInCart;
      };

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
