const express = require('express');
const app = express();
const webRoutes = require('./routes/web.js');
const pug = require('pug');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.static('client/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/src/views'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var myDB = 'mongodb://localhost/portfolio';
mongoose.connect(myDB, function () {
  if (mongoose.connection.readyState == 1) {
    console.log('connected to mongodb');
    console.log('on ' + myDB);
  } else {
    console.log('problems connecting to mognoDB mongoose connection state is: ' + mongoose.connection.readyState);
  }
})

app.use(webRoutes);

app.listen(process.env.PORT || 3005, () => {
      console.log('This server is running on http://www.localhost:3005/ to stop server press Ctrl + C');
    });
