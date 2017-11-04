module.exports = function () {

    var mongoose = require("mongoose");

    var WordSchema = mongoose.Schema ({
        userId : String,
        wordName : String,
        wordDetails: String,
        categories : [String]
    }, {collection: "WordInfo"});

    return WordSchema;

}();
