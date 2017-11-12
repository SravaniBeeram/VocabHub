(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("HomeController",HomeController);

    function HomeController($scope, $location,WordInfoService,$routeParams) {
        $scope.$location = $location;
        var vm = this;
        vm.lookUp = lookUp;

        function init(){
            if($routeParams.searchWord){
                vm.word = $routeParams.searchWord.toLowerCase();
                vm.lookUp(vm.word);
            }
        }init();


        function  lookUp(word) {
            console.log("word in controller"+word.toLowerCase());
            WordInfoService.lookUp(word.toLowerCase())
                .then(function (res) {
                    vm.message = null;
                    vm.wordInfo = null;
                    vm.wordInfo = res.data.results;
                    if(!vm.wordInfo)
                        vm.message="No data found";
                })

        }
    }
})();