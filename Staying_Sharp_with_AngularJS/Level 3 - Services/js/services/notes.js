angular.module('NoteWrangler')
    // 3.1.) Create a factory and name it whatever you want.
    // 3.2.) Return an object from the NoteFactory() function that has a method
    //       named all.
    // 3.3.) Move the $http() call from the controller into the all() function
    //       in our Note factory and return the resulting promise.
    // 3.19.) Include ngResource in the NoteWrangler module.
    // 3.20.) Replace the existing object that is returned from the Note factory 
    //        with an AngularJS resource that uses '/notes' as the data source.
    // 3.22.) Add a tweetIt method to the Note resource. Remember, this updates
    //        an existing note, so use the correct HTTP method.
    .factory('Note', ['$resource', function NoteFactory($resource) {
        return $resource('/notes', {}, {
            tweetIt: {
                method: "PUT"
            }
        });
    }]);



// Before 3.20.)
// .factory('Note', ['$http', '$resource', function NoteFactory($http, $resource) {
//     return {
//         all: function() {
//             return $http({ method: 'GET', url: "/notes" });
//         },
//         find: function(id) {
//             return $http({ method: 'GET', url: '/notes/' + id });
//         },
//         create: function(noteObj) {
//             return $http({ method: 'POST', url: '/notes/', data: noteObj });
//         }
//     };
// }]);