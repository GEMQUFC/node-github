'use strict';

var Client = require("github");
var OAuth2 = require("oauth").OAuth2;

var github = new Client({
    version: "3.0.0"
});

var clientId = "96e9c9d64379c709f958";
var secret = "989c1ae8f5cbcba01e0c37494dc40f503cb2d9da";
var oauth = new OAuth2(clientId, secret, "https://github.com/", "login/oauth/authorize", "login/oauth/access_token");

var accessToken;

exports.renderIndex = function(req, res){

	if(accessToken == null)
		return res.render("index");
	

	// retorna para pagina home
	github.user.get({}, function(err, user) {
		if (err) 
            return res.status(400).json({
            	err : err
            });

        res.render("index", {
        	user : user
        });
	});
	
};

exports.githubAuth = function(req, res){
	res.writeHead(303, {
        Location: oauth.getAuthorizeUrl({ 
            redirect_uri: 'http://localhost:7878/github-callback',
            scope: "user,repo,gist"
        })
    });
    res.end();
};

exports.githubCallback = function(req, res){
	var code = req.query.code;
	oauth.getOAuthAccessToken(code, {}, function (err, access_token, refresh_token) {
        if (err) 
            return res.status(400).json({
            	err : err
            });
        
        
        accessToken = access_token;
        
        // authenticate github API
        github.authenticate({
            type: "oauth",
            token: accessToken
        });
          
        res.redirect("/");
    });
};

exports.getMe = function(req, res){
	github.user.get({}, function(err, user) {
		if (err) 
            return res.status(400).json({
            	err : err
            });

        res.json(user);
	});
};