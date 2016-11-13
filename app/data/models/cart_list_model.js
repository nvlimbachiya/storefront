angular.module('myApp').factory('CartListModel', [
  function() {
    function CartListModel() {
      var cartList = [];

      this.getProductsInCart = function() {
        return cartList;
      };

      this.addProduct = function(product) {
        cartList.push(product);
      };
    }

    return CartListModel;
  }
]);
