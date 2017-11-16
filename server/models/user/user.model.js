var mongoose = require ("mongoose");

module.exports = function () {

    var UserSchema = require("./user.schema.server.js")();
    var UserInfo =  mongoose.model("UserInfo", UserSchema);

    var api ={
        createUser : createUser,
        findUserById: findUserById,
        findUserByUserName: findUserByUserName,
        findUserByCredentials: findUserByCredentials,
        updateUser:updateUser
    };

    return api;

    function createUser(user) {
        return UserInfo.create(user);
    }

    function findUserById(userId) {
        return UserInfo.findById({_id: userId});
    }

    function findUserByUserName(name) {
        return UserInfo.findOne({username: name});
    }

    function findUserByCredentials(username, password) {
        return UserInfo.findOne({username: username, password: password});
    }

    function updateUser(userId,userDetails) {
        delete userDetails._id;
        return UserInfo.update({_id:userId}, {$set:userDetails});
    }

};