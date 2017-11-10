module.exports = function(app,userModel) {

    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var bcrypt = require("bcrypt-nodejs");

    var auth = authorized;
    app.post('/api/signIn', passport.authenticate('local'), login);
    app.post('/api/signOut', logout);
    app.get('/api/loggedIn', loggedIn);
    app.get('/api/signUp/user', findUserByUserName);
    // app.get('/api/signUp/user?username);
    app.post('/api/signUp/register', register);


    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);


    function localStrategy(username, password, done) {
        userModel
            .findUserByUserName(username)
            .then(
                function (user) {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function serializeUser(user, done) {
        delete user.password;
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findById(user._id)
            .then(
                function (user) {
                    delete user.password;
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            );
    }

    function authorized(req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

    function register(req, res) {
        var userObj = req.body;
        userObj.password = bcrypt.hashSync(userObj.password);
        userModel
            .createUser(userObj)
            .then(function (user) {
                req
                    .login(user, function (status) {
                        res.send(status);
                    });
            });
    }

    function login(req, res) {
        res.json(req.user);
    }

    function loggedIn(req, res) {
        //console.log(req.isAuthenticated() ? req.user : '0');
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function findUserByUserName(req, res) {
        var username = req.query.username;
        if (username) {
            userModel
                .findUserByUserName(username)
                .then(function (user) {
                    if (user) {
                        res.json(user);
                    } else {
                        res.sendStatus(404);
                    }
                });
        }
    }
};