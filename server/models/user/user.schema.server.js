var mongoose = require("mongoose");

module.exports = function () {

    var UserSchema = mongoose.Schema ({
        firstName : String,
        lastName :  String,
        username :  String, //email id
        password :  String,
        dob:Date,// should be in profile
        occupation: String //should be in profile
    }, {collection: "UserInfo"});
    return UserSchema;

};