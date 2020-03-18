var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var locationRouter = require('./routes/location');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect('mongodb://localhost/demoapp')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/alllocation', locationRouter);

module.exports = app;
