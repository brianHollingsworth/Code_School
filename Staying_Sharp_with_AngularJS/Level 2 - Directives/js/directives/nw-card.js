angular.module('NoteWrangler').directive('nwCard', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/nw-card.html',
        // 2.9.) Give the nw-card directive an isolate scope, and enable it to
        //       accept a header and description attribute with two-way bindings.
        scope: {
            header: "=",
            description: "="
        },
        // 2.13.) Create a link function in the directive and include the
        //        parameters we will need to grab element.
        link: function (scope, element) {
            // 2.14.) Add a class of tweeted to the nw-card element for any card
            //        that has a tweeted property on its scope.
            if (scope.tweeted) {
                element.addClass('tweeted');
            }
        },

        // 2.1.) Inject the $scope service into the controller.
        controller: function ($scope) {
            // 2.3.) Set the header property on the controller's $scope instead
            //       of this. Note: We do not want to modify the string.
            $scope.header = 'Note Title';

            // 2.4.) Set description property on the controller's $scope instead
            //       of this. 
            $scope.description = 'A lovely note description.';
        },
        // 2.2.) Delete the unnecessary alias for our controller.
        // controllerAs: 'card'
    };
}]);