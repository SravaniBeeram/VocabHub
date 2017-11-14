module.exports = function () {

    var mongoose = require("mongoose");

    var CategorySchema = mongoose.Schema ({
        userId : String,
        wordId : String,
        name : String
    }, {collection: "CategoryInfo"});

    return CategorySchema;

}();
