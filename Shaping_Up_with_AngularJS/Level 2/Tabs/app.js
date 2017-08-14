(function () {
    var app = angular.module('gemStore', []);

    // 2.15.) Let's start with a Controller, just like last time. Call it GalleryController.
    app.controller('GalleryController', function () {
        // 2.16.) Initialize a current property of GalleryController with a value of 0.
        this.current = 0;

        // 2.17.) Add a method to GalleryController called setCurrent that
        //        accepts a value and assigns it to current. If no value is
        //        passed in, set current to 0.
        this.setCurrent = function (currentValue) {
            this.current = currentValue || 0;
        };
    });

    app.controller('StoreController', function () {
        this.products = gems;
    });

    // 2.5.) Create a controller named TabController.
    app.controller('TabController', function () {
        // 2.6.) Initialize the tab property.
        this.tab = 1;

        // 2.7.) In order to set the current tab, we'll need a setTab method to
        //       use in our HTML. It should set the tab property of 
        //       TabController to a value passed in.
        this.setTab = function (tabValue) {
            this.tab = tabValue;
        };

        // 2.8.) We've got a setTab method. Now we need an isSet method that
        //       accepts a value and returns whether that value matches this.tab.
        this.isSet = function (tabValue) {
            return this.tab === tabValue;
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
        },
        {
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
        },
        {
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
                "images/gem-09.gif"
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
        }
    ];
})();