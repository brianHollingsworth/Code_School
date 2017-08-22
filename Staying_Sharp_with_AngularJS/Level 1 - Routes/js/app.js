// 1.1.) Inside the app.js file, declare an AngularJS module for our
//       NoteWrangler app. For now it will have no dependencies.
// 1.2.) What is the name of the module you need to include to use routes?
//       Update the app.js module declaration to include it.
// 1.3.) Define the module’s config() function and inject $routeProvider.
angular.module('NoteWrangler', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            // 1.7.) Create a route for / that redirects to the /users index page.
            .when('/', {
                redirectTo: '/users',
            })
            // 1.6.) Create a new route which maps /notes/new to the notes edit.html
            //       template.
            .when('/notes/new', {
                templateUrl: 'templates/pages/notes/edit.html',

                // 1.9.) Create a controller function inside this /notes route.
                // 1.11.) Inject the $http service into the controller.
                // 1.12.) Use the $http() function to make an HTTP request to
                //        the /notes URL. Upon success, save the resulting data
                //        to a notes variable on the controller.
                controller: function ($http) {
                    var controller = this;
                    $http({
                        method: 'GET',
                        url: '/notes'
                    }).success(function (data) {
                        controller.notes = data;
                    });
                },

                // 1.10.) Give the newly created controller an alias of notesCtrl
                //        so that we can access it from within the notes index
                //        template.
                controllerAs: 'notesCtrl',
            })
            // 1.4.) Create a simple route for when /notes is in the URL, link to the
            //       index.html template in the templates/pages/notes/ directory.
            .when('/notes', {
                templateUrl: 'templates/pages/notes/index.html',

                // 1.13.) Attach the NotesCreateController to the new notes route.
                controller: 'NotesCreateController',

                // 1.14.) Give the controller an alias we can reference in the template.
                controllerAs: 'newNotesCtrl',


            })
            .when('/users', {
                templateUrl: 'templates/pages/users/index.html'
            })
            // 1.8.) Create a default route that will redirect the user to
            //       notes when an undefined route is used.
            .otherwise({
                redirectTo: '/notes'
            });

    }]);