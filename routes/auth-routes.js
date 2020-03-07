const router = require('express').Router();

// auth login
// renders a login page with a google sign in button
router.get('/login', (req, res) => {
  res.render('login');
});

// auth with google
router.get('/google', (req, res) => {
  // Handle with passport
  res.send('logging in with google');
});

//auth logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('loggin out');
});

module.exports = router;
