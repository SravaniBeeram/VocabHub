var mongoose = require("mongoose");
var wordSchema = require("../schemas/word.schema.server.js");

module.exports = function () {

    var UserSchema = mongoose.Schema ({
        firstName : String,
        lastName :  String,
        username :  String, //email id
        password :  String,
        dob:Date,// should be in profile
        occupation: String, //should be in profile
        myWords : [wordSchema]
    }, {collection: "UserInfo"});

    return UserSchema;
};