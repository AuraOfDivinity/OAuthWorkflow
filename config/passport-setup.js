const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// Letting passport know that we are using the google strategy
passport.use(
  new GoogleStrategy({
    // options for the strategy
  }),
  () => {
    // passport callback function
  }
);
