(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller("TabController", function () {
        this.tab = 1;

        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function (setTab) {
            this.tab = setTab;
        };
    });

    // 4.18.) Now remove the image gallery div from index.html and the GalleryController from app.js.
    // app.controller('GalleryController', function () {
    //     this.current = 0;

    //     this.setCurrent = function (imageNumber) {
    //         this.current = imageNumber || 0;
    //     };
    // });

    app.controller("ReviewController", function () {

        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    // 4.3.) Create an Element Directive for our Description div that includes
    //       the product-description.html.
    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    // 4.6.) Create a new attribute directive for our specs tag called productSpecs.
    //       Have it use our new product-specs.html template.
    app.directive("productSpecs", function () {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    // 4.8.) Create an element directive called productTabs.
    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            // 4.9.) Tell your new directive to use the product-tabs.html
            //       template with the templateUrl attribute.
            templateUrl: 'product-tabs.html',
            // 4.10.) Give our productTabs directive all the tab functionality
            //        that is currently inside our TabController. 
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (setTab) {
                    this.tab = setTab;
                };
            },
            // 4.11.) Add the controllerAs attribute to your directive setting
            //        it to tab so the directive knows what all the references
            //        to tab in product-tabs.html are.
            controllerAs: 'tab'
        };
    });

    // 4.13.) Create an element directive called productGallery.
    app.directive('productGallery', function () {
        return {
            restrict: "E",
            // 4.14.) Tell your new directive to use the product-gallery.html
            //        template with the templateUrl attribute.
            templateUrl: "product-gallery.html",
            // 4.15.) Give our productGallery directive all the gallery
            //        functionality that is currently inside our GalleryController. 
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            // 4.16.) Add the controllerAs attribute to your directive setting
            //        it to gallery so the directive knows what all the
            //        references to gallery in product-gallery.html are.
            controllerAs: "gallery"
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
            author: "joe@example.org"
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org"
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
            "images/gem-04.gif"
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org"
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org"
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
            author: "turtleguyy@example.org"
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org"
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org"
        }]
    }];

})();