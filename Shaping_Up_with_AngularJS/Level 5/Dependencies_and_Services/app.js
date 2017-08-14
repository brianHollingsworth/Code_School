(function () {
    // 5.3.) Give gemStore Module access to the directives by adding a dependency to gemStore's definition.
    var app = angular.module('gemStore', ['store-directives']);

    // 5.4.) Inject the $http service into our StoreController.
    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];

        // 5.5.) get the store-products.json using the $http Service.
        // 5.6.) Attach a success to our get call.
        // 5.7.) Name the first parameter of the success function data.
        $http.get('/store-products.json').success(function (data) {
            // 5.8.) Give our StoreController access to the products by setting
            //       products equal to the data given to us with the http
            //       service's success promise.
            store.products = data;
        });
    }]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });

    var gems = [{
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        reviews: []
    }, {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
            "images/gem-01.gif",
            "images/gem-03.gif",
            "images/gem-04.gif",
        ],
        reviews: []
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
            "images/gem-06.gif",
            "images/gem-07.gif",
            "images/gem-08.gif"
        ],
        reviews: []
    }];
})();