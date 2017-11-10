(function() {
    "use strict";
    angular.module("VocabHubApp")
           .controller("SignInController",SignInController);


    function SignInController(UserService,$rootScope,$location) {
        var vm = this;
        vm.login = login;

        function init() {
        }init();

        function login(user) {

            console.log("user signIn info"+user);

            if (!user) {
                vm.message = "Please enter signIn details";
                return;
            }

            UserService.login(user)
                .then(function (info) {
                    if (info) {
                        $rootScope.currentUser = info;
                        $location.url('/profile');
                    } else {
                        vm.message = "sorry, " + user.username + " not found. please try again!";
                    }
                });
        }
    }
})();