// 4.19.) Create a link function for the nwSlabText directive.
// 4.20.) Call the slabText() method on directive's element. Refer to the
//        SlabText docs for the method name.
angular.module('NoteWrangler')
    .directive('nwSlabText', function ($timeout) {
        return {
            link: function (scope, element) {
                $timeout(function () {
                    element.slabText();
                });
            }
        };
    });