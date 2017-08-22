// 4.22.) Inside a $timeout(), make a Bootstrap popover, to replace the default
//        tooltip on hover, by passing the popover() method { trigger: 'hover' }.
// 4.24.) Using the attributes argument of the function returned by our new
//        popover directive, make note attributes available to our popover by
//        providing them as content in the options object passed to popover().
// 4.25.) Clean up after our popover directive when $destroy is fired on scope.
angular.module('NoteWrangler')
    .directive('popover', function ($timeout) {
        return function (scope, element, attrs) {
            $timeout(function () {
                element.popover({
                    trigger: 'hover',
                    content: attrs.popover
                });

                scope.$on('$destroy', function () {
                    $(element).popover('destroy');
                });
            });
        };
    });