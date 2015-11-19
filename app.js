var express = require('express');
var http = require('http');

var setup = require("./configs/setup");

var app =  new express();
var server = http.createServer(app);

// express
require("./configs/express")(app);
app.use(express.static(process.cwd() + '/public'));

// Rotas
require("./routes/route")(app);

server.listen(setup.port, setup.hostname, function() {
	console.log('Server is running. Host: ' + setup.hostname + ' and Port: ' + setup.port + '.');
});