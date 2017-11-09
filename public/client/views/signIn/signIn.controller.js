(function() {
    "use strict";
    angular
        .module("VocabHubApp")
        .controller("SignInController",SignInController);


    function SignInController(UserService,$rootScope,$location) {
        var model = this;
        model.login = login;
        model.userDao = [];

        function init() {

        }

        init();

        function login(username,password) {
            UserService.login(username,password)
                .then(function (found) {
                    if (found !== null) {
                        $location.url('/profile');
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }
})();