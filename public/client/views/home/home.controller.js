(function() {
    "use strict";
    angular.module("VocabHubApp")
        .controller("HomeController",HomeController);

    function HomeController($rootScope,$scope,$location,WordInfoService,$routeParams) {
        $scope.$location = $location;
        var vm = this;

        vm.lookUp = lookUp;
        vm.saveWord = saveWord;
        vm.showMessage = showMessage;
        vm.catStatus = true;
        vm.catName ='';

        function init(){
            if($routeParams.searchWord){
                vm.word = $routeParams.searchWord.toLowerCase();
                vm.lookUp(vm.word);
            }

            if($rootScope.currentUser){
                WordInfoService.getUserCategories($rootScope.currentUser._id)
                    .then(function (response) {
                        vm.userCategories = response;
                    });
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


        function showMessage() {
            if(!$rootScope.currentUser)
                vm.message = "Please sign in or sign up to save a word";
        }

        function saveWord() {

            console.log("in save word");

            if(vm.catName){

                var meaning = vm.wordInfo[0].lexicalEntries[0].entries[0].senses[0].definitions;
                console.log("meaning"+meaning);
                var newWord = {
                    userId :$rootScope.currentUser._id ,
                    wordName : vm.wordInfo[0].word,
                    wordDetails: meaning
                };

                WordInfoService.saveWord(newWord)
                    .then(function (result) {
                        console.log(result);

                        var catDetails = {
                            userId : $rootScope.currentUser._id ,
                            wordId : result._id,
                            name : vm.catName
                        };

                        WordInfoService.newCategory(catDetails)
                            .then(function(result){
                                vm.catName = null;
                                vm.catStatus = true;
                            });
                    })
            }
            else{
                vm.message = "Please enter a name for category";
            }
        }
    }
})();