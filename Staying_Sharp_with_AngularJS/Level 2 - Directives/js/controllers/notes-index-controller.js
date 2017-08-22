angular.module('NoteWrangler')
    .controller('NotesIndexController', ['$http', '$scope', function ($http, $scope) {
        var controller = this;

        $http({
            method: 'GET',
            url: '/notes'
        }).success(function (data) {
            // 2.6.) Attach notes to $scope instead of the controller (this).
            $scope.notes = data;
        });
    }]);