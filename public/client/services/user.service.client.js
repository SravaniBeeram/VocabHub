(function() {
    angular.module("VocabHubApp")
        .factory("UserService", UserService);


    function UserService($http){

        var model = {
            login:login,
            register:register
        };

        return model;

        function login(user) {
            console.log("client server signIn",user);
            return $http.post("/api/signIn",user);
        }


    }
})();
