var https = require('https');

module.exports = function(app,wordModel){

    app.get("/api/wordInfo/:word",getWordInfo);
    app.get("/api/userWords/:userId",getUserWords);
    app.get("/api/userCategories/:userId",getUserCategories);



    function getWordInfo(req,res) {
        console.log("word in service server" + req.params.word);

        var options = {
            host :  'od-api.oxforddictionaries.com',
            port : 443,
            path : '/api/v1/entries/en/'+req.params.word,
            method : 'GET',
            headers : {
                "Accept": "application/json",
                "app_id": "89bfc04d",
                "app_key": "5edd2044b0943d25a81c6146290dbd47"
            }
        };

        https.get(options, function(response) {

            if(response.statusCode === 404){
                res.send("No such entry found");
            }else{
                var data = "";
                response.on('data', function(chunk) {
                    data +=  chunk;
                })
                    .on('end',function(){
                        try {
                            result = JSON.parse(data);
                        } catch (exp) {
                            result = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
                        }
                        //cb(null,result);
                        res.json(result);
                    })
                    .on('error',function(err){
                        res.send("error"+err);
                    });}
        });
    }


    function getUserWords(req,res){

        wordModel.getUserWords(req.params.userId)
            .then(function (userWords) {
                    res.json(userWords);
                },
                function (err) {
                    res.status(400).send(err);
                })
    }

    function getUserCategories(req,res){

        console.log("in service categories");
        wordModel.getUserCategories(req.params.userId)
            .then(function (userWords) {
                    res.json(userWords);
                },
                function (err) {
                    res.status(400).send(err);
                })
    }

};