const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Setting up the view engine
app.set('view engine', 'ejs');

// connecting to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('Connected to mongoDB');
});

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

// Setting up routes middleware
app.use('/auth', authRoutes);

app.listen(4800, () => {
  console.log('App now listening for requests on 4800');
});
