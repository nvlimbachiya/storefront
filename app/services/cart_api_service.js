angular.module('myApp').service('CartAPIService', [
  'CartListModel',
  function(CartListModel) {
    var onCartUpdateCallbacks = [];
    var cartListModel = new CartListModel();

    var addProduct = function (product) {
      console.log(product.title());
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

    return {
      addProduct: addProduct,
      getProductsInCart: getProductsInCart,
      onCartUpdate: onCartUpdate
    }
  }
]);
