'use strict';

var express      = require('express'),
	app          = express(),
	passport     = require('passport');

var routers         = {};
var LinkedInRouter  = express.Router();
routers.LinkedInRouter     = LinkedInRouter;

require('./config.js')(app, express,passport,routers);
require('../linkedin/linkedin_routes.js')(LinkedInRouter,passport);


module.exports = exports = app;
