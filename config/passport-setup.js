const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Letting passport know that we are using the google strategy
passport.use(
  new GoogleStrategy(
    {
      // Options for the strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in database
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // Don't create new user
          console.log('user is:' + currentUser);
          done(null, currentUser);
        } else {
          // Create user in db
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log('newUser created:' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
