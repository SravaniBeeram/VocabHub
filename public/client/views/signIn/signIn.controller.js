(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("SignInController",SignInController);


    function SignInController(UserService,$rootScope,$location) {
        var vm = this;
        vm.login = login;
        vm.createUsers = createUsers;
        vm.userDao = [];

        function init(){

        }init();

        function login(user) {

            console.log("user signIn info"+user);

            if (!user) {
                vm.message = "Please enter signIn details";
                return;
            }

            UserService.login(user)
                .then(function (response) {
                        $rootScope.currentUser = response.data;
                        console.log(response);
                    },
                    function (err) {
                        vm.message = "username or password not found";
                    });
        }

    }
})();