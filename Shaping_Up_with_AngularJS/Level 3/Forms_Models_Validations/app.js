(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (newValue) {
            this.tab = newValue;
        };

        this.isSet = function (tabName) {
            return this.tab === tabName;
        };
    });

    app.controller('GalleryController', function () {
        this.current = 0;
        this.setCurrent = function (newGallery) {
            this.current = newGallery || 0;
        };
    });

    // 3.11.) Create a new controller called ReviewController.
    app.controller('ReviewController', function () {
        // 3.25.) Before the review is pushed onto the array, add to this.review a new property createdOn with a value Date.now().
        this.review.createdOn = Date.now();

        // 3.12.) Set our review variable to an empty object when the ReviewController is created.
        this.review = {};

        // 3.13.) Create an empty function named addReview in your ReviewController.
        // 3.14.) We'll pass in the product we want to review to our addReview function. 
        this.addReview = function (product) {
            // 3.15.) When addReview is called with a product, it should add the 
            //        review from the controller to the passed-in product's reviews array.
            product.reviews.push(this.review);

            // 3.16.) Reset the review to an empty object after it's been added
            //        to product.reviews.
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
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
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
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }]
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
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }];
})();