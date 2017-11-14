var mongoose = require ("mongoose");

module.exports = function () {

    var WordSchema = require("./word.schema.server.js");
    var WordInfo =  mongoose.model("WordInfo", WordSchema);

    var CategorySchema = require("./category.schema.server.js");
    var CategoryInfo =  mongoose.model("CategoryInfo", CategorySchema);


    var api ={
        getUserWords : getUserWords,
        getUserCategories:getUserCategories
    };

    return api;

    function getUserWords(id) {
        return WordInfo.find({userId:id});
    }

    function getUserCategories(id){
        console.log("in model categories");
        return CategoryInfo.find({userId:id});
    }



};