// 4.1.) Create a default activeNav variable on nwNav's $scope and make it
//       default to 'Notes'.
// 4.2.) Create a function called getActiveNav in the controller of the nw-nav
//       directive that returns the value of $scope.activeNav variable.
// 4.3.) Create a function called setActiveNav on the controller of the nw-nav
//       directive that sets the value of $scope.activeNav variable.
angular.module('NoteWrangler')
    .directive('nwNav', function () {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.activeNav = "Notes";
                this.getActiveNav = function () {
                    return $scope.activeNav;
                };
                this.setActiveNav = function (value) {
                    $scope.activeNav = value;
                };
                return this;
            }
        };
    });