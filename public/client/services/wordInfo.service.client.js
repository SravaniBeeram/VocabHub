(function() {
    angular.module("VocabHubApp")
        .factory("WordInfoService", WordInfoService);

    function WordInfoService($http) {

        var model = {
            lookUp : lookUp
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
    }

})();