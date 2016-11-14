'use strict';

describe('cartPopup directive', function() {
  var cartAPIService;
  var $controller;
  var $httpBackend;
  var $rootScope;
  var onCartUpdateCallback;
  var productInCartMock = [];

  beforeEach(module('myApp'));

  beforeEach(inject(function($injector, CartAPIService, ProductModel) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    cartAPIService = CartAPIService;
    productInCartMock.push(new ProductModel({
      "title": "Hand Painted Blue Flat Dish",
      "brand": "Kiriko",
      "price": 28,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      "image": "hand-painted-blue-flat-dish.jpg"
    }));

    spyOn(cartAPIService, 'getProductsInCart').and.returnValue(productInCartMock);
    spyOn(cartAPIService, 'getItemsTotal').and.returnValue(2);
    spyOn(cartAPIService, 'getTotalPrice').and.returnValue(28);
    spyOn(cartAPIService, 'onCartUpdate').and.callFake(function() {
      onCartUpdateCallback = arguments[0];
    });

    $controller = $controller('CartPopupController');
  }));

  it('calls the right methods', inject(function($controller) {
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
  }));

  it('sets initial values correctly', inject(function($controller) {
    expect($controller.showPopup).toEqual(false);
    expect($controller.productsInCart.length).toEqual(1);
    expect($controller.itemsTotal).toEqual(2);
    expect($controller.totalPrice).toEqual(28);
  }));

  it('calls all the methods onCartUpdate', function() {
    onCartUpdateCallback();
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
    expect(cartAPIService.getProductsInCart).toHaveBeenCalled();
  });

  describe('#toggleCartPopup', function() {
    it('returns toggled showPopup flag', function() {
      expect($controller.showPopup).toEqual(false);
      $controller.toggleCartPopup();
      expect($controller.showPopup).toEqual(true);
    });
  });
});
