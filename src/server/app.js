"use strict";
var express = require('express');
var app = express();

// routes
// app.get('/', function (req, res) {
// 	res.send('hello world!');
// });

// static files
app.use(express.static(__dirname + '/../../dist/src/server/www'));
app.use(express.static(__dirname + '/www'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});