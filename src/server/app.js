// "use strict";
// const express = require('express');
// const webpackConfig = Object.assign({ mode: 'development' }, require('../../webpack.config.js'));
// const webpack = require('webpack');
// const app = express();
// const middleware = require('webpack-dev-middleware');
// const compiler = webpack(webpackConfig);

// // static files
// app.use(express.static(__dirname + '/../../dist/src/server/www'));
// app.use(express.static(__dirname + '/www'));

// app.use(middleware(compiler, {
// 	publicPath: webpackConfig.output.publicPath
// }));

// app.listen(3000, function () {
// 	console.log('Example app listening on port 3000!');
// });

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = Object.assign({ mode: 'development' }, require('../../webpack.config.js'));
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});