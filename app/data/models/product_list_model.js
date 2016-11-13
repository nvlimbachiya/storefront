angular.module('myApp').factory('ProductListModel', [
  'ProductModel',
  function(ProductModel) {
    function ProductListModel(data) {
      data = data || [];

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
