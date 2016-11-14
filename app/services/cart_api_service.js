angular.module('myApp').service('CartAPIService', [
  'CartListModel',
  function(CartListModel) {
    var onCartUpdateCallbacks = [];
    var cartListModel = new CartListModel();

    var addProduct = function (product) {
      cartListModel.addProduct(product);
      onCartUpdateCallbacks.forEach(function(cb) {
        cb();
      });
    };

    var onCartUpdate = function(cb) {
      onCartUpdateCallbacks.push(cb);
    };

    var getProductsInCart = function() {
      return cartListModel.getProductsInCart();
    };

    var getItemsTotal = function() {
      return cartListModel.getItemsTotal();
    };

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
