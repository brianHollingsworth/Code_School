// 3.5.) Name our service ''Tweetable'', inject $http and have our factory
//       function return an anonymous function.
// 3.6.) Inside the factory, make a POST request with the $http() function to
//       this endpoint: http://gentle-spire-1153.herokuapp.com/tweet
//       The service function should accept a single argument, potentialTweet,
//       that will be sent to the external API.
// 3.10.) Create a characterLength variable outside of the return statement and
//        set it to an integer representing an alternate number of max characters.
// 3.11.) Pass characterLength in for maxLength along with the description in
//        our Tweetable() POST request.
// 3.12.) Change the factory definition into a provider definition.
// 3.13.) Wrap the existing function returned by our TweetableProvider()
//        function in a call to the $get() function required by providers.
// 3.14.) Create a setLength() function attached to the provider that sets the
//        characterLength variable.
angular.module('NoteWrangler')
    .provider(function TweetableProvider() {
        var characterLength = 140;

        this.setLength = function (maxLength) {
            characterLength = maxLength;
        };

        this.$get = function ($http) {
            return function (potentialTweet) {
                return $http({
                    method: 'POST',
                    url: 'http://gentle-spire-1153.herokuapp.com/tweet',
                    data: {
                        description: potentialTweet,
                        maxLength: characterLength
                    }
                });
            };
        };
    });