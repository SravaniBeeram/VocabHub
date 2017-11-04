(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("HomeController",HomeController);

    function HomeController($scope, $location) {
        $scope.$location = $location;
    }
})();