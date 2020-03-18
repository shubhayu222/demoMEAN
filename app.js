var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var locationRouter = require('./routes/location');

var app = express();
mongoose
  .connect('mongodb://localhost/demoapp')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'X-ExcelFilename');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Content-Disposition');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.connection.setTimeout(30 * 60 * 1000); // timeout 30min 
next();
});

app.use('/alllocation', locationRouter);

module.exports = app;
