/**
 * Created by maheshkumar on 11/8/17.
 */
(function() {
    "use strict";
    angular
        .module("VocabHubApp")
        .controller("SignUpController", SignUpController);


    function SignUpController(UserService, $rootScope, $location) {
        var model = this;
        model.register = register;

        function init() {

        }

        init();

        function register(username, password, password2) {
            console.log("signup");
            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if(password === null || password === '' || typeof password === 'undefined') {
                model.error = 'password is required';
                return;
            }

            if(password2 === null || password2 === '' || typeof password2 === 'undefined') {
                model.error = ' verify password is required';
                return;
            }

            if(password !== password2 || password === null || typeof password === 'undefined') {
                model.error = "passwords must match";
                return;
            }

            UserService
                .findUserByUsername(username)
                .then(
                    function () {
                        model.error = "Email address already registered";
                    },
                    function () {
                        var newUser = {
                            username: username,
                            password: password
                        };
                        return UserService
                            .register(newUser);
                    }
                )
                .then(function (user) {
                    $rootScope.currentUser = user;
                    $location.url('/profile');
                });
        }
    }
})();