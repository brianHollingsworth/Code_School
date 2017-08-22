// 3.4.) Inject the Note factory into the controller and use the new all()
//       method instead of calling $http() directly.
// 3.7.) Inject our brand spankin' new Tweetable service into
//       NotesIndexController and then define a new tweetThatNote() function on
//       $scope that we can use to query the remote API from our app.
// 3.8.) Within our tweetThatNote() function, invoke the Tweetable service and
//       console.log() the returned status. To use our new Tweetable service,
//       our tweetThatNote() function should accept an argument, the description
//       from a note, that we then pass into Tweetable().
// 3.21.) Now that our Note factory is using ngResource, we'll need to update
//        how it's used in NotesIndexController. Replace the existing call to
//        Note.all() with the correct call to the Note AngularJS resource.
angular.module('NoteWrangler')
    .controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function ($scope, Note, Tweetable) {
        $scope.notes = Note.query();
        $scope.tweetThatNote = function (noteToTweet) {
            Tweetable(noteToTweet).success(function (status) {
                console.log(status);
            });
        };
    }]);