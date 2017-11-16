(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("HomeController",HomeController);

    function HomeController($rootScope,$scope,$location,WordInfoService,$routeParams) {
        $scope.$location = $location;
        var vm = this;

        vm.lookUp = lookUp;
        vm.showCategories = showCategories;
        vm.addWordToNewCategory = addWordToNewCategory;
        // vm.addWordToCategory = addWordToCategory;

        function init(){
            if($routeParams.searchWord){
                vm.word = $routeParams.searchWord.toLowerCase();
                vm.lookUp(vm.word);
            }
        }init();


        function lookUp(word) {
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

        function showCategories() {
            WordInfoService.getUserCategories($rootScope.currentUser._id)
                .then(function (response) {
                    vm.userCategories = response;
                });
        }

        // function addWordToCategory(wordName,category){
        //     WordInfoService.addWord($rootScope.currentUser._id,word)
        //         .then(function(word){
        //         })
        // }

        function addWordToNewCategory(wordName,categoryName){
            var word = {};
            var category = {};
            word.wordName = wordName;
            console.log("newCategory" +category +word);
            WordInfoService.newWord($rootScope.currentUser._id,word)
                .then(function(word){
                    vm.word = word;
                    category.name = categoryName;
                    category.wordId = word._id;
                    WordInfoService.newCategory($rootScope.currentUser._id,category)
                        .then(function(category){
                            vm.category = category;
                        })
                })
        }
    }
})();