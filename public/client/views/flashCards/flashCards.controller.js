(function() {
    "use strict";
    angular.module("VocabHubApp")
        .filter("startFrom", startFrom)
        .controller("FlashCardController",FlashCardController);

    function startFrom() {
        return function (input, start) {
            if(input){
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }

    function FlashCardController($rootScope, WordInfoService) {
        var vm = this;
        vm.showMeaning= false;
        vm.currentPage = 0;
        vm.pageSize = 1
        vm.shuffle = shuffle;

        function init(){

            if($rootScope.currentUser._id){
                WordInfoService.getUserWords($rootScope.currentUser._id)
                    .then(function(res){
                        vm.userWords = vm.shuffle(res);
                    })
            }
            else
                vm.message = "Please sign in to view your saved words";

        }init();

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

    }

})();