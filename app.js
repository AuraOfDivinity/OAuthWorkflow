const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

// Setting up the view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

// Setting up routes middleware
app.use('/auth', authRoutes);

app.listen(4800, () => {
  console.log('App now listening for requests on 4800');
});
