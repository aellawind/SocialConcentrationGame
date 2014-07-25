'use strict';

var passport       = require('passport'),
    bodyParser     = require('body-parser'),
    cookieParser   = require('cookie-parser'),
    middle         = require('./middleware'),
    morgan         = require('morgan'),
    methodOverride = require('method-override'),
    session        = require('express-session'),
    mysql          = require('mysql');

var dbConnection = mysql.createConnection({
  user:     'root',
  password: '',
  database: 'linkedingame'
});

dbConnection.connect();

module.exports = exports = function (app, express,routers) {
  app.set('port', process.env.PORT || 3000);
  app.set('base url', process.env.URL || 'http://127.0.0.1');
  app.use(cookieParser());
  app.use(morgan('dev'));
  app.use(bodyParser());
  app.use(bodyParser.urlencoded());
  app.use(session({secret: process.env.SECRET || '19900712', maxAge: 360*5}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(middle.logError);
  app.use(middle.handleError);
  app.use(methodOverride());

};