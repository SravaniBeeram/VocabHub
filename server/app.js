module.exports = function(app,$http){

    var userModel = require("./models/user/user.model.js")(app);

    require("./services/user.service.server.js")(app,userModel);
    require("./services/wordInfo.service.server")(app,$http);

};