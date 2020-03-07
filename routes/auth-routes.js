const router = require('express').Router();
const passport = require('passport');

// auth login
// renders a login page with a google sign in button
router.get('/login', (req, res) => {
  res.render('login');
});

// auth with google
// The first passport authenticate middleware sends the user to the consent screen

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

//auth logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('loggin out');
});

// callback route to re route to
// the second passport authenticate middleware uses the code returned by google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('reached callback URI');
});

module.exports = router;
