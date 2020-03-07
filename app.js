const express = require('express');
const app = express();

// Setting up the view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(4800, () => {
  console.log('App now listening for requests on 4800');
});
