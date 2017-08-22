angular.module('NoteWrangler')
    // 1.17.) Inject the routeParams service into the NotesShowController so
    //        that we get access to the id in the URL.
    // 1.18.) Inject the $http service into the NotesShowController so we can
    //        use it to fetch a note.
    .controller('NotesShowController', ['$http', '$routeParams', function ($http, $routeParams) {
        // 1.19.) Use the $http() function to fetch a note from the /notes/:id
        //        URL. Upon success, save the resulting data to a note variable
        //        on the controller.
        var controller = this;
        $http({
                method: 'GET',
                url: '/notes/' + $routeParams.id
            })
            .success(function (data) {
                controller.note = data;
            });
    }]);