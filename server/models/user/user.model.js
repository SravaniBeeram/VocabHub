var mongoose = require ("mongoose");
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findUserByCredentials = findUserByCredentials;

module.exports = userModel;

    function createUser(user) {
        return userModel.create(user);
    }

    function findUserById(userId) {
        return userModel.findById({_id: userId});
    }

    function findUserByUserName(name) {
        return userModel.findOne({username: name});
    }

    function findUserByCredentials(username, password) {
        return userModel.findOne({username: username, password: password});
    }
