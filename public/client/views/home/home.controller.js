(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("HomeController",HomeController);

    function HomeController($scope, $location,WordInfoService) {
        $scope.$location = $location;
        var vm = this;
        vm.lookUp = lookUp;


        function  lookUp(word) {
            console.log("word in controller"+word.toLowerCase());
            WordInfoService.lookUp(word.toLowerCase())
                .then(function (res) {
                    vm.wordInfo = null;
                    vm.wordInfo = res.data.results;
                    console.log("returned back"+res);
                })

        }
    }
})();