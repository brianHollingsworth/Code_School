// 3.15.) Let's call config() on our NoteWrangler module and provide it an
//        anonymous function.
// 3.16.) Inject TweetableProvider into the config() function.
// 3.17.) Call the setLength() function of TweetableProvider from within the
//        config() function and pass it a value of 40.
// 3.19.) Include ngResource in the NoteWrangler module.
angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
    .config(function (TweetableProvider) {
        TweetableProvider.setLength(40);
    });