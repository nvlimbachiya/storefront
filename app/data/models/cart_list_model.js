angular.module('myApp').factory('CartListModel', [
  function() {
    function CartListModel() {
      var cartList = [];
      var ADD_PRODUCT = 1;
      var REMOVE_PRODUCT = -1;

      var isProductPresentInCart = function(product) {
        var filteredProduct = cartList.filter(function(prod) {
          return prod.title() === product.title();
        });

        return !!filteredProduct.length;
      };

      this.getProductsInCart = function() {
        return cartList;
      };

      this.addProduct = function(product) {
        if (isProductPresentInCart(product)) {
          product.updateQuantityInCart(ADD_PRODUCT);
        } else {
          product.updateQuantityInCart(ADD_PRODUCT);
          cartList.push(product);
        }
      };

      this.removeProduct = function(product) {
        if (isProductPresentInCart(product)) {
          product.updateQuantityInCart(REMOVE_PRODUCT);
        }
      };

      this.getItemsTotal = function() {
        var total = 0;
        cartList.forEach(function(product) {
          total += product.quantityInCart();
        });

        return total;
      };

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
