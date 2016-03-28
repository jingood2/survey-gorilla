/**
 * Created by KimJin-young on 2016. 3. 29..
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {

  passport.use(new FacebookStrategy({
      clientID: '237315053287392',
      clientSecret: '23200dfe54e0650cee607e7950c54f95',
      callbackURL: '/auth/facebook/oauth'
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOne({
        'facebook.id': profile.id
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });
    }
  ));
};
