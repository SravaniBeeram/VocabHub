(function() {
    "use strict";
    angular.module("VocabHubApp")
           .controller("MyWordsController",MyWordsController);

    function MyWordsController($rootScope, WordInfoService) {
        var vm = this;

        function init(){

            if($rootScope.currentUser._id){

                WordInfoService.getUserCategories($rootScope.currentUser._id)
                    .then(function (response) {

                        if(response.length > 0){
                            vm.userCategories = response;

                            WordInfoService.getUserWords($rootScope.currentUser._id)
                                .then(function(res){
                                    vm.userWords = res;

                                })
                        }
                        else
                            vm.message = "No words saved!!";
                    })
            }
            else
                vm.message = "Please sign in to view your saved words";

        }init();

    }
})();