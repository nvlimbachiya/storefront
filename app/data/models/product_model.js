angular.module('myApp').factory('ProductModel', [
  function() {
    function ProductModel(data) {
      data = data || {};

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
    }

    return ProductModel;
  }
]);
