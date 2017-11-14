module.exports = function () {

    var mongoose = require("mongoose");

    var WordSchema = mongoose.Schema ({
        userId : String,
        wordName : String,
        wordDetails: String
    }, {collection: "WordInfo"});

    return WordSchema;

}();
