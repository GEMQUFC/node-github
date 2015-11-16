'use strict';

var controller = require("../controllers/controller");

module.exports = function(app){

	app.get("/", controller.renderIndex);
	app.get("/github/auth", controller.githubAuth);
	app.get("/github-callback", controller.githubCallback);
	app.get("/auth/me", controller.getMe);
	app.get("/logout", controller.logout);

};