const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

// Letting passport know that we are using the google strategy
passport.use(
  new GoogleStrategy(
    {
      // Options for the strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/redirect'
    },
    () => {
      // passport callback function
    }
  )
);
