(function() {
    angular.module("VocabHubApp")
        .factory("UserService", UserService);


    function UserService($http){

        var model = {
            login:login,
            logout:logout,
            register:register,
            findUserByUsername: findUserByUsername,
            updateUser:updateUser
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

        function login(user) {
            return $http.post("/api/signIn",user)
                .then(function (response) {
                      if(response)
                        return response.data;
                      else
                          return null;
                });
        }

        function updateUser(userId,user) {
            return $http.put("/api/updateUser/" +userId ,user);
        }

        function logout() {
            return $http.post("/api/signOut");
        }
    }
})();
