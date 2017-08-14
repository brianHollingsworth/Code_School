(function () {
  var app = angular.module('gemStore', []);

  // 1.1.) Add a controller named StoreController to our gemStore application.
  app.controller('StoreController', function () {
    // 1.3.) Assign gem to the product property of StoreController so we can use them in the page. *1.8 changes gem to a gems array.
    // this.product = gem;
    this.products = gems;
  });

  var gems = [{
      name: 'Azurite',
      price: 2.95
    },
    {
      name: 'Bloodstone',
      price: 5.95
    },
    {
      name: 'Zircon',
      price: 3.95
    }
  ];
  // *1.8 changes gem to a gems array.
  // var gem = {
  //   name: 'Azurite',
  //   price: 110.50,
  //   canPurchase: false,
  //   soldOut: true
  // };
})();