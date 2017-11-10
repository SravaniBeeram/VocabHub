module.exports = function(app){

    var userModel = require("./models/user/user.model.js")(app);

    require("./services/user.service.server.js")(app,userModel);

};