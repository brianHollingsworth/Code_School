angular.module('NoteWrangler', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/users'
            })
            .when('/notes', {
                templateUrl: 'templates/pages/notes/index.html',
                controller: 'NotesIndexController'
                // 2.7.) Remove the controllerAs controller alias from routes.js.
                // controllerAs: 'notesCtrl'
            })
            .when('/users', {
                templateUrl: 'templates/pages/users/index.html'
            })
            .when('/notes/new', {
                templateUrl: 'templates/pages/notes/edit.html',
                controller: 'NotesCreateController'
            })
            .when('/notes/:id', {
                templateUrl: 'templates/pages/notes/show.html',
                controller: 'NotesShowController'
            })
            .otherwise({
                redirectTo: '/notes'
            });
    }]);