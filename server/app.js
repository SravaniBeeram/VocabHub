module.exports = function(app){

    var userModel = require("./models/user/user.model.js")(app);
    var wordModel =require("./models/word/word.model.js")(app);

    require("./services/user.service.server.js")(app,userModel);
    require("./services/wordInfo.service.server")(app,wordModel);

};