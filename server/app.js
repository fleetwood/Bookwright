var express = require('express');
var path = require('path');
//var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var env = app.get('env').trim().toLowerCase();

//app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

/// error handlers

/**
 * Development Settings
 */
logger('setting environment to ',env);
if (env === 'development') {
	// This will change in production since we'll be using the dist folder
	// This covers serving up the index page
	app.use(express.static(path.join(__dirname, '../client/.tmp')));
	app.use(express.static(path.join(__dirname, '../client/app')));

	// Error Handling
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

/**
 * Production Settings
 */
else if (env === 'production') {

	// changes it to use the optimized version for production
	app.use(express.static(path.join(__dirname, '/dist')));

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}

else {
	logger('Unable to load to environment ',env);
}


module.exports = app;