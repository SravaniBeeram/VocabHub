(function() {
    "use strict";
    angular.module("VocabHubApp")
        .config(Configure);


    function Configure($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider

            .when("/home", {
                templateUrl: "client/views/home/home.view.html",
                controller: "HomeController",
                controllerAs: "model"
            })

            .otherwise({
                redirectTo: "home"
            });
    }

})();