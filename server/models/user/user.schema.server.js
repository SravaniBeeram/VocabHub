var mongoose = require("mongoose");

var UserSchema = mongoose.Schema ({
        firstName : String,
        lastName :  String,
        username :  String, //email id
        password :  String,
        dob:Date,// should be in profile
        occupation: String, //should be in profile
        myWords :[{type: mongoose.Schema.Types.ObjectId, ref: "WordSchema"}]
    }, {collection: "UserModel"});

module.exports = UserSchema;
