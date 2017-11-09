(function() {
    angular.module("VocabHubApp")
        .factory("UserService", UserService);


    function UserService($http){

        var model = {
            login:login,
            register:register,
            findUserByUsername: findUserByUsername
        };

        return model;

        function register(user) {
            console.log("user service");
            var url = "/api/signUp/register";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByUsername(username) {
            var url = "/api/signUp/user?username="+username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }

        function login(username, password) {
            var url = "/api/signIn";
            var credentials = {
                username: username,
                password: password
            };

            return $http.post(url, credentials)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
