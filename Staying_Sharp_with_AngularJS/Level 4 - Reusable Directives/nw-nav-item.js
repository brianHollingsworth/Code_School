// 4.4.) Within the nwNavItem directive, use the require option to gain access
//       to the controller from the parent nwNav directive.
// 4.5.) Give the nwNavItem directive a link function. Make sure to fill in all
//       the arguments so that we have access to the controller required from
//       the previous task.
// 4.6.) First, we need a name for the nav item to work. Create a new isolate
//       scope on the nwNavItem directive and allow it to accept an attribute
//       (@) value called name.
// 4.7.) Within the isActive() function, call the getActiveNav() function from
//       the required controller to get the current active nav value. Compare
//       the return value from the controller with the scope.name value and
//       return the result from the isActive function.
// 4.8.) We need a way to set the active nav value when a nav item is clicked.
//       In our activate() function, call the setActiveNav() function on the
//       require'd controller and pass the scope.name as an argument.
angular.module('NoteWrangler')
    .directive('nwNavItem', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/directives/nw-nav-item.html',
            require: '^nwNav',
            link: function (scope, element, attrs, nwNav) {
                scope.isActive = function () {
                    return nwNavCtrl.getActiveNav() == scope.name;
                };

                scope.activate = function () {
                    nwNavCtrl.setActiveNav(scope.name);
                };
            },
            scope: {
                name: "@"
            }
        };
    });