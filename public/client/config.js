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

            .when("/home/:searchWord", {
                templateUrl: "client/views/home/home.view.html",
                controller: "HomeController",
                controllerAs: "model"
            })

            .when("/myWords",{
                templateUrl: "client/views/myWords/myWords.view.html",
                controller: "MyWordsController",
                controllerAs: "model"
            })

            .when("/flashCards",{
                templateUrl: "client/views/flashCards/flashCards.view.html",
                controller: "FlashCardController",
                controllerAs: "model"
            })

            .when("/signIn", {
                templateUrl: "client/views/signIn/signIn.view.html",
                controller: "SignInController",
                controllerAs: "model"
            })
            .when("/signUp", {
                templateUrl: "client/views/signUp/signUp.view.html",
                controller: "SignUpController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "client/views/profile/profile.view.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "home"
             });
    }
})();