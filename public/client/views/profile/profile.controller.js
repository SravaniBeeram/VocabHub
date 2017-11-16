(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService,$rootScope) {
        var vm = this;
        vm.update = update;
        var loggedUser = $rootScope.currentUser;
        vm.username= loggedUser.username;
        vm.password= loggedUser.password;
        vm.firstName = loggedUser.firstName;
        vm.lastName = loggedUser.lastName;
        vm.dob = loggedUser.dob;
        vm.occupation = loggedUser.occupation;

        function init(){

        }init();

        function update(username,password,firstName,lastName,dob,occupation) {
            vm.message = null;
            var id = loggedUser._id;
            var userDetails ={
                "username":username,
                "password":password,
                "firstName":firstName,
                "lastName":lastName,
                "dob":dob,
                "occupation":occupation
            };

            UserService.updateUser(id,userDetails)
                .then(function(user){
                        $rootScope.currentUser.userName = userDetails.username;
                        $rootScope.currentUser.firstName= userDetails.firstName;
                        $rootScope.currentUser.lastName = userDetails.lastName;
                        $rootScope.currentUser.dob = userDetails.dob;
                        $rootScope.currentUser.occupation=userDetails.occupation;
                        vm.message = "Your Profile has been updated!";
                    },
                    function(err){
                        vm.message ="Your Profile has not been updated";
                    }
                );
        }

    }
})();