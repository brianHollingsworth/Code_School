(function () {
    // 5.1.) Create a new Module named store-directives to encapsulate our store Directives.
    var app = angular.module('store-directives', []);

    // 5.2.) Move the Directive definitions from app.js into products.js.
    app.directive("productDescription", function () {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });

    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function () {
        return {
            restrict: "A",
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productTabs", function () {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    app.directive("productGallery", function () {
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });

})();