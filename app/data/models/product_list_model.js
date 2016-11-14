/*
 * ProductListModel contains a collection of ProductModel
 */

angular.module('myApp').factory('ProductListModel', [
  'ProductModel',
  function(ProductModel) {
    function ProductListModel(data) {
      data = data || [];

      /*
       * Get all the products
       * @returns {Array}
       */
      this.products = function() {
        var productList = [];

        data.forEach(function(product) {
          productList.push(new ProductModel(product));
        });

        return productList;
      };
    }

    return ProductListModel;
  }
]);
