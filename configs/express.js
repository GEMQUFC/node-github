'use strict';

var ejs = require("ejs");

module.exports = function(app){
	app.set('view engine', 'html');
	app.set('views', './views');
	app.engine('html', ejs.renderFile);
};