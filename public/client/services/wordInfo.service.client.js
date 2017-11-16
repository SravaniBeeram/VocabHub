(function() {
    angular.module("VocabHubApp")
        .factory("WordInfoService", WordInfoService);

    function WordInfoService($http) {

        var model = {
            lookUp : lookUp,
            getUserWords : getUserWords,
            getUserCategories:getUserCategories,
            saveWord:saveWord,
            newCategory: newCategory
        };

        return model;

        function lookUp(word) {
            //console.log("word in service client"+word);
            return $http.get("/api/wordInfo/"+word)
                .then(function (res) {
                    console.log("response client"+res);
                    return res;
                });
        }

        function getUserWords(userId){
            return $http.get("/api/userWords/"+userId)
                .then(function (response) {
                    return response.data;
                })
        }

        function getUserCategories(userId){
            console.log("in client service");
            return $http.get("/api/userCategories/"+userId)
                .then(function (response) {
                    return response.data;
                })
        }

        function saveWord(word){
            console.log(word);
            return $http.post("/api/saveWord/",word)
                .then(function (response) {
                    return response.data;
                })
        }

        // function addWord(userId,word){
        //     return $http.post("app/user/" +userId, word)
        //         .then(function(response){
        //             return response.data;
        //         })
        // }

        function newCategory(catDetails){
            console.log();
            return $http.post("/api/newCat/",catDetails)
                .then(function (response) {
                    return response.data;
                })
        }

    }

})();