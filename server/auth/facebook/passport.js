/**
 * Created by KimJin-young on 2016. 3. 29..
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {

  passport.use(new FacebookStrategy({
      clientID: '237315053287392',
      clientSecret: '23200dfe54e0650cee607e7950c54f95',
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails']
    },
    function(accessToken, refreshToken, profile, done) {

      User.findOne({
        'facebook.id': profile.id
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          user.save(function(err) {
            if (err) {
              return done(err);
            } else {

              done(null, user);
            }
          });
        } else {
          console.log('Existing User' + user.name + ' found and logged in!');
          return done(null, user);
        }
      });
    }
  ));
};
