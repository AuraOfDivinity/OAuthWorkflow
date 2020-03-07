const router = require('express').Router();
const passport = require('passport');

// auth login
// renders a login page with a google sign in button
router.get('/login', (req, res) => {
  res.render('login');
});

// auth with google
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
router.get('/google/redirect', (req, res) => {
  res.send('reached callback URI');
});

module.exports = router;
