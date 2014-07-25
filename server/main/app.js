'use strict';

var express      = require('express'),
	app          = express();

var routers         = {};
var LinkedInRouter  = express.Router();
routers.LinkedInRouter     = LinkedInRouter;

require('./config.js')(app, express,routers);
require('../linkedin/linkedin_routes.js')(LinkedInRouter);


module.exports = exports = app;
